#include <SFML/Graphics.hpp>
#include <SFML/System.hpp>
#include <SFML/Window.hpp>

#include <Windows.h>
#include <Psapi.h>
#include <Pdh.h>
#include <PdhMsg.h>
#pragma comment(lib, "pdh.lib")

#include <vector>
#include <deque>

// Khởi tạo cửa sổ 
const int WINDOW_WIDTH = 1308;
const int WINDOW_HEIGHT = 720;
sf::RenderWindow window(sf::VideoMode(WINDOW_WIDTH, WINDOW_HEIGHT), "Task Manager");

// Cấu trúc Student
struct Student {
    std::string code;
    std::string name;
    std::string className;
};

// Danh sách thành viên nhóm
std::vector<Student> studentList = {
    { "A42724", "Dinh Thanh Hoai", "TT34H4" },
    { "A00000", "Do Minh Duc", "TT33H0" },
    { "A00000", "Duong Ngoc Thang", "TT34H0" },
    { "A00000", "Le Duc Hung", "TT32H0" },
    { "A00000", "Nguyen The Huy", "TT33H0" }
};

// Các trạng thái của ứng dụng
enum class ScreenState {
	Menu,
	Processes,
	Performance,
    AboutUs
};

// Cấu trúc lưu trữ thông tin của một tiến trình
struct ProcessInfo {
	DWORD processID;
	std::wstring processName;
	float cpuUtilization;
	float ramUsage;
};

// Hàm lấy danh sách ID tiến trình
std::vector<DWORD> GetProcessIDs()
{
    std::vector<DWORD> processIDs;

    DWORD processes[1024];
    DWORD cbNeeded;
    // sử dụng hàm EnumProcesses() trong thu vien psapi.h
    if (EnumProcesses(processes, sizeof(processes), &cbNeeded))
    {
        DWORD processCount = cbNeeded / sizeof(DWORD);
        for (DWORD i = 0; i < processCount; i++)
        {
            processIDs.push_back(processes[i]);
        }
    }

    return processIDs;
}

// Hàm lấy tên tiến trình
std::wstring GetProcessName(DWORD processID)
{
    std::wstring processName;
    HANDLE processHandle = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ, FALSE, processID);
    if (processHandle != nullptr)
    {
        wchar_t buffer[MAX_PATH];
        // Su dung ham GetModuleBaseNameW() de lay ten tien trinh
        if (GetModuleBaseNameW(processHandle, nullptr, buffer, MAX_PATH) > 0)
        {
            processName = buffer;
        }
        CloseHandle(processHandle);
    }
    return processName;
}

// Hàm lấy thông tin CPU Utilization của một tiến trình 
double GetProcessCpuUtilization(DWORD processID)
{
    PDH_HQUERY query;
    PDH_HCOUNTER counter;
    // Su dung thu vien Pdh.h
    PdhOpenQuery(nullptr, 0, &query);
    std::wstring counterPath = L"\\Process(" + std::to_wstring(processID) + L")\\% Processor Time";
    PdhAddEnglishCounterW(query, counterPath.c_str(), 0, &counter);
    PdhCollectQueryData(query);
    PDH_FMT_COUNTERVALUE counterValue;
    PdhGetFormattedCounterValue(counter, PDH_FMT_DOUBLE, nullptr, &counterValue);
    PdhCloseQuery(query);
    return counterValue.doubleValue;
}

// Hàm lấy thông tin RAM Usage của một tiến trình 
double GetProcessRamUsage(DWORD processID)
{
    HANDLE processHandle = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ, FALSE, processID);
    if (processHandle != nullptr)
    {
        PROCESS_MEMORY_COUNTERS_EX pmc;
        // GetProcessMemoryInfor()
        if (GetProcessMemoryInfo(processHandle, reinterpret_cast<PROCESS_MEMORY_COUNTERS*>(&pmc), sizeof(pmc)))
        {
            return static_cast<double>(pmc.PrivateUsage) / (1024.0 * 1024.0);
        }
        CloseHandle(processHandle);
    }
    return 0.0;
}

// Hàm lấy các tiến trình đang hoạt động (bỏ qua các tiến trình không tên)
std::vector<ProcessInfo> GetRunningProcesses()
{
    std::vector<ProcessInfo> processes;

    std::vector<DWORD> processIDs = GetProcessIDs();
    for (const auto& processID : processIDs)
    {
        ProcessInfo process;
        process.processID = processID;
        process.processName = GetProcessName(processID);
        process.cpuUtilization = GetProcessCpuUtilization(processID);
        process.ramUsage = GetProcessRamUsage(processID);

        // Bỏ qua các tiến trình không có tên
        if (!process.processName.empty())
        {
            processes.push_back(process);
        }
    }

    return processes;
}
 
const int MENU_BUTTON_WIDTH = 500;
const int MENU_BUTTON_HEIGHT = 60;

// Hàm vẽ màn hình Menu
void drawMenu(sf::RenderWindow& window) {
    sf::Font font;
    if (!font.loadFromFile("C:\\Windows\\Fonts\\arial.ttf")) {
        return;
    }

    // Title
    sf::Text titleText("MENU", font, 40);
    titleText.setPosition(WINDOW_WIDTH / 2 - titleText.getGlobalBounds().width / 2, 50);
    titleText.setFillColor(sf::Color::Black);
    window.draw(titleText);

    // Processes button
    sf::RectangleShape processesButton(sf::Vector2f(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT));
    processesButton.setPosition(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 200);
    processesButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(processesButton);

    sf::Text processesButtonText("Processes", font, 24);
    processesButtonText.setPosition(processesButton.getPosition().x + MENU_BUTTON_WIDTH / 2 - processesButtonText.getGlobalBounds().width / 2,
                                    processesButton.getPosition().y + MENU_BUTTON_HEIGHT / 2 - processesButtonText.getGlobalBounds().height / 2);
    processesButtonText.setFillColor(sf::Color::Black);
    window.draw(processesButtonText);

    // Performance button
    sf::RectangleShape performanceButton(sf::Vector2f(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT));
    performanceButton.setPosition(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 300);
    performanceButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(performanceButton);

    sf::Text performanceButtonText("Performance", font, 24);
    performanceButtonText.setPosition(performanceButton.getPosition().x + MENU_BUTTON_WIDTH / 2 - performanceButtonText.getGlobalBounds().width / 2,
                                      performanceButton.getPosition().y + MENU_BUTTON_HEIGHT / 2 - performanceButtonText.getGlobalBounds().height / 2);
    performanceButtonText.setFillColor(sf::Color::Black);
    window.draw(performanceButtonText);

    // About button 
    sf::RectangleShape aboutUsButton(sf::Vector2f(MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT));
    aboutUsButton.setPosition(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 400);
    aboutUsButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(aboutUsButton);

    sf::Text aboutUsButtonText("About us", font, 24);
    aboutUsButtonText.setPosition(aboutUsButton.getPosition().x + MENU_BUTTON_WIDTH / 2 - aboutUsButtonText.getGlobalBounds().width / 2,
                                  aboutUsButton.getPosition().y + MENU_BUTTON_HEIGHT / 2 - aboutUsButtonText.getGlobalBounds().height / 2);
    aboutUsButtonText.setFillColor(sf::Color::Black);
    window.draw(aboutUsButtonText);
}

// Hàm xử lý sự kiện trong màn Menu
void handleMenuEvents(sf::Event event, ScreenState& currentState) {
    if (event.type == sf::Event::MouseButtonPressed) {
        if (event.mouseButton.button == sf::Mouse::Left) {
            // Lấy vị trí con trỏ chuột
            sf::Vector2i mousePosition(event.mouseButton.x, event.mouseButton.y);

            // "Diện tích" nút Processes
            sf::FloatRect processesButtonBounds(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 200, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT);
            // nếu click vào nút Processes
            if (processesButtonBounds.contains(mousePosition.x, mousePosition.y)) {
                currentState = ScreenState::Processes;
                return;
            }

            // performance
            sf::FloatRect performanceButtonBounds(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 300, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT);
            if (performanceButtonBounds.contains(mousePosition.x, mousePosition.y)) {
                currentState = ScreenState::Performance;
                return;
            }

            // about us
            sf::FloatRect aboutUsButtonBounds(WINDOW_WIDTH / 2 - MENU_BUTTON_WIDTH / 2, 400, MENU_BUTTON_WIDTH, MENU_BUTTON_HEIGHT);
            if (aboutUsButtonBounds.contains(mousePosition.x, mousePosition.y)) {
                currentState = ScreenState::AboutUs;
                return;
            }
        }
    }
}

// Hàm xử lý sự kiện Back
void handleBackEvents(sf::Event event, ScreenState& currentState) {
    if (event.type == sf::Event::MouseButtonPressed) {
        if (event.mouseButton.button == sf::Mouse::Left) {
            sf::Vector2i mousePosition(event.mouseButton.x, event.mouseButton.y);

            if (currentState != ScreenState::Menu) {
                // Check if the Back button is clicked
                sf::FloatRect backButtonBounds(20, 20, 100, 40);
                if (backButtonBounds.contains(mousePosition.x, mousePosition.y)) {
                    currentState = ScreenState::Menu;
                    return;
                }
            }
        }
    }
}

const int PROCESS_LIST_WIDTH = 600;
const int PROCESS_LIST_HEIGHT = 400;
const int PROCESS_LIST_ITEM_HEIGHT = 30;
// ve man hinh Processes
void drawProcessesWindow(sf::RenderWindow& window) {
    window.clear(sf::Color::White);
    sf::Font font;
    font.loadFromFile("C:\\Windows\\Fonts\\arial.ttf");

    sf::Text titleText("PROCESSES", font, 40);
    titleText.setPosition(WINDOW_WIDTH / 2 - titleText.getGlobalBounds().width / 2, 50);
    titleText.setFillColor(sf::Color::Black);
    window.draw(titleText);

    // draw Back button
    sf::RectangleShape backButton(sf::Vector2f(100, 40));
    backButton.setPosition(20, 20);
    backButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(backButton);

    sf::Text backButtonText("Back", font, 20);
    backButtonText.setPosition(40, 28);
    backButtonText.setFillColor(sf::Color::Black);
    window.draw(backButtonText);

    // draw header
    sf::Text headerText("Process ID", font, 24);
    headerText.setPosition(20, 120);
    headerText.setFillColor(sf::Color::Black);
    window.draw(headerText);

    headerText.setString("Process Name");
    headerText.setPosition(220, 120);
    window.draw(headerText);

    headerText.setString("CPU Utilization");
    headerText.setPosition(700, 120);
    window.draw(headerText);

    headerText.setString("RAM Usage");
    headerText.setPosition(900, 120);
    window.draw(headerText);

    std::vector<ProcessInfo> processList = GetRunningProcesses();
    sf::Text cellText("", font, 20);
    cellText.setFillColor(sf::Color::Black);


    // Vẽ các phần tử danh sách hiển thị
    for (int i = 0; i < processList.size(); ++i)
    {
        cellText.setString(std::to_string(processList[i].processID));
        cellText.setPosition(20.f, headerText.getGlobalBounds().height + 120.f + 30.f * (i + 1));
        window.draw(cellText);

        cellText.setString(processList[i].processName);
        cellText.setPosition(220.f, headerText.getGlobalBounds().height + 120.f + 30.f * (i + 1));
        window.draw(cellText);

        cellText.setString(std::to_string(processList[i].cpuUtilization) + "%");
        cellText.setPosition(700.f, headerText.getGlobalBounds().height + 120.f + 30.f * (i + 1));
        window.draw(cellText);

        cellText.setString(std::to_string(processList[i].ramUsage) + " MB");
        cellText.setPosition(900.f, headerText.getGlobalBounds().height + 120.f + 30.f * (i + 1));
        window.draw(cellText);
    }
    window.display();
}


const int MAX_RECTANGLES = 750/5;  // Số lượng tối đa hình chữ nhật (kich thuoc queue)
const float RECTANGLE_WIDTH = 5.0f;  // Chiều rộng của mỗi hình chữ nhật
const float GRAPH_HEIGHT = 250.0f;  // Chiều cao của đồ thị
const float GRAPH_WIDTH = MAX_RECTANGLES * RECTANGLE_WIDTH;  // Chiều rộng của đồ thị

// Hàm trừ hai FILETIME và trả về kết quả dưới dạng ULONGLONG
ULONGLONG SubtractTimes(const FILETIME& ftA, const FILETIME& ftB)
{
    ULARGE_INTEGER a, b;
    a.LowPart = ftA.dwLowDateTime;
    a.HighPart = ftA.dwHighDateTime;

    b.LowPart = ftB.dwLowDateTime;
    b.HighPart = ftB.dwHighDateTime;

    return a.QuadPart - b.QuadPart;
}

// Hàm lấy tổng mức chiếm dụng của toàn bộ ứng dụng (%)
float GetCPUUtilization()
{
    FILETIME idleTime, kernelTime, userTime;
    GetSystemTimes(&idleTime, &kernelTime, &userTime);

    static FILETIME prevIdleTime = idleTime;
    static FILETIME prevKernelTime = kernelTime;
    static FILETIME prevUserTime = userTime;

    ULONGLONG idleDiff = SubtractTimes(idleTime, prevIdleTime);
    ULONGLONG kernelDiff = SubtractTimes(kernelTime, prevKernelTime);
    ULONGLONG userDiff = SubtractTimes(userTime, prevUserTime);

    ULONGLONG total = kernelDiff + userDiff;
    ULONGLONG idle = idleDiff;

    prevIdleTime = idleTime;
    prevKernelTime = kernelTime;
    prevUserTime = userTime;

    return (1.0f - static_cast<float>(idle) / total) * 100.0f;
}

// Hàm lấy thông tin mức sử dụng RAM
double GetRAMUsage()
{
    MEMORYSTATUSEX memoryStatus;
    memoryStatus.dwLength = sizeof(memoryStatus);
    GlobalMemoryStatusEx(&memoryStatus);

    DWORDLONG totalPhysicalMemory = memoryStatus.ullTotalPhys;
    DWORDLONG availablePhysicalMemory = memoryStatus.ullAvailPhys;
    DWORDLONG usedPhysicalMemory = totalPhysicalMemory - availablePhysicalMemory;

    double ramUsagePercentage = (static_cast<double>(usedPhysicalMemory) / totalPhysicalMemory) * 100.0;

    return ramUsagePercentage;
}


std::deque<float> cpuUtilization;  // Queue chứa thông tin về mức chiếm dụng CPU
sf::RectangleShape rectangle1;  // Đối tượng hình chữ nhật
std::deque<double> ramUsage;
sf::RectangleShape rectangle2;

// Vẽ màn hình Performance
void drawPerformanceWindow(sf::RenderWindow& window) {
    window.clear(sf::Color::White);
    sf::Font font;
    font.loadFromFile("C:\\Windows\\Fonts\\arial.ttf");

    sf::Text titleText("PERFORMANCE", font, 40);
    titleText.setPosition(WINDOW_WIDTH / 2 - titleText.getGlobalBounds().width / 2, 50);
    titleText.setFillColor(sf::Color::Black);
    window.draw(titleText);

    sf::RectangleShape backButton(sf::Vector2f(100, 40));
    backButton.setPosition(20, 20);
    backButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(backButton);

    sf::Text backButtonText("Back", font, 20);
    backButtonText.setPosition(40, 28);
    backButtonText.setFillColor(sf::Color::Black);
    window.draw(backButtonText);

    // Vẽ đồ thị CPU Utilization
    std::vector<DWORD> processIDs = GetProcessIDs();
    sf::RectangleShape cpuGraph(sf::Vector2f(GRAPH_WIDTH, GRAPH_HEIGHT));
    cpuGraph.setPosition(20, 140);
    cpuGraph.setFillColor(sf::Color(240, 240, 240));
    window.draw(cpuGraph);

    sf::Text cpuTitleText("CPU Utilization", font, 24);
    cpuTitleText.setPosition(20, 110);
    cpuTitleText.setFillColor(sf::Color::Black);
    window.draw(cpuTitleText);
    
    // Định dạng hình chữ nhật (1 điểm dữ liệu)
    rectangle1.setSize(sf::Vector2f(RECTANGLE_WIDTH, 0.0f));
    rectangle1.setFillColor(sf::Color::Green);

    // Lấy mức chiếm dụng CPU và thêm vào queue
    float utilization = GetCPUUtilization();
    cpuUtilization.push_back(utilization);

    // Xóa các hình chữ nhật ở bên trái để giới hạn số lượng hình chữ nhật
    if (cpuUtilization.size() > MAX_RECTANGLES) cpuUtilization.pop_front();

    // Vẽ đồ thị
    float xCPU = 20.0f;
    for (const float& util : cpuUtilization)
    {
        float height1 = util / 100.0f * GRAPH_HEIGHT;
        rectangle1.setSize(sf::Vector2f(RECTANGLE_WIDTH, height1));
        rectangle1.setPosition(xCPU, GRAPH_HEIGHT - height1 + 140);
        window.draw(rectangle1);
        xCPU += RECTANGLE_WIDTH;
    }


    // Vẽ đồ thị RAM Usage
    sf::RectangleShape ramGraph(sf::Vector2f(GRAPH_WIDTH, GRAPH_HEIGHT));
    ramGraph.setPosition(20, 180 + GRAPH_HEIGHT);
    ramGraph.setFillColor(sf::Color(240, 240, 240));
    window.draw(ramGraph);

    sf::Text ramTitleText("RAM Usage", font, 24);
    ramTitleText.setPosition(20, 140 + GRAPH_HEIGHT);
    ramTitleText.setFillColor(sf::Color::Black);
    window.draw(ramTitleText);
    
    // Định dạng hình chữ nhật (điểm dữ liệu)
    rectangle2.setSize(sf::Vector2f(RECTANGLE_WIDTH, 0.0f));
    rectangle2.setFillColor(sf::Color::Blue);
    // Lấy mức sử dụng RAM và đưa vào queue
    double usage = GetRAMUsage();
    ramUsage.push_back(usage);
    // Xóa điểm dữ liệu bên trái nếu đạt giới hạn
    if (ramUsage.size() > MAX_RECTANGLES) ramUsage.pop_front();
    // Vẽ các điểm dữ liệu
    float xRAM = 20.0f;
    for (const double& usag : ramUsage)
    {
        double height2 = usag / 100 * GRAPH_HEIGHT;
        rectangle2.setSize(sf::Vector2f(RECTANGLE_WIDTH, height2));
        rectangle2.setPosition(xRAM, 680 - height2);
        window.draw(rectangle2);
        xRAM += RECTANGLE_WIDTH;
    }

    // draw info
    // CPU
    SYSTEM_INFO systemInfo;
    GetSystemInfo(&systemInfo);

    sf::Text cpuText("", font, 24);
    cpuText.setFillColor(sf::Color::Black);
    cpuText.setPosition(800, 200);
    std::string cpuInfo = "CPU Information:\n";
    cpuInfo += "Architecture: ";
    switch (systemInfo.wProcessorArchitecture)
    {
    case PROCESSOR_ARCHITECTURE_INTEL:
        cpuInfo += "x86 (Intel)\n";
        break;
    case PROCESSOR_ARCHITECTURE_AMD64:
        cpuInfo += "x64 (AMD or Intel)\n";
        break;
    case PROCESSOR_ARCHITECTURE_ARM:
        cpuInfo += "ARM\n";
        break;
    case PROCESSOR_ARCHITECTURE_ARM64:
        cpuInfo += "ARM64\n";
        break;
    default:
        cpuInfo += "Unknown\n";
        break;
    }

    cpuInfo += "Number of Processors: " + std::to_string(systemInfo.dwNumberOfProcessors) + "\n";
    cpuInfo += "Page Size: " + std::to_string(systemInfo.dwPageSize) + " bytes\n";

    float cpuUtilization = GetCPUUtilization();
    cpuInfo += "CPU Utilization: " + std::to_string(cpuUtilization) + "%\n";

    cpuText.setString(cpuInfo);
    window.draw(cpuText);

    // RAM
    MEMORYSTATUSEX memoryStatus;
    memoryStatus.dwLength = sizeof(memoryStatus);
    GlobalMemoryStatusEx(&memoryStatus);

    sf::Text ramText;
    ramText.setFont(font);
    ramText.setCharacterSize(24);
    ramText.setFillColor(sf::Color::Black);
    ramText.setPosition(800, 500);

    std::string ramInfo = "RAM Information:\n";
    ramInfo += "Total Physical Memory: " + std::to_string(memoryStatus.ullTotalPhys / (1024 * 1024)) + " MB\n";
    ramInfo += "Available Physical Memory: " + std::to_string(memoryStatus.ullAvailPhys / (1024 * 1024)) + " MB\n";
    
    double ramUsage = GetRAMUsage();
    ramInfo += "RAM Usage: " + std::to_string(ramUsage) + "%\n";

    ramText.setString(ramInfo);
    window.draw(ramText);

    window.display();

    sf::sleep(sf::seconds(0.2f)); 
}

// ve man hinh About Us
void drawAboutUsWindow(sf::RenderWindow& window) {
    window.clear(sf::Color::White);
    sf::Font font;
    font.loadFromFile("C:\\Windows\\Fonts\\arial.ttf");

    sf::Text titleText("ABOUT US", font, 40);
    titleText.setPosition(WINDOW_WIDTH / 2 - titleText.getGlobalBounds().width / 2, 50);
    titleText.setFillColor(sf::Color::Black);
    window.draw(titleText);

    const int columnWidth = 200;
    const int rowHeight = 50;
    const int tableX = (WINDOW_WIDTH - columnWidth * 3) / 2;
    const int tableY = 150;


    sf::Text headerText("Student Code", font, 20);
    headerText.setPosition(tableX, tableY);
    headerText.setFillColor(sf::Color::Black);
    window.draw(headerText);

    headerText.setString("Student Name");
    headerText.setPosition(tableX + columnWidth, tableY);
    window.draw(headerText);

    headerText.setString("Class");
    headerText.setPosition(tableX + columnWidth * 2, tableY);
    window.draw(headerText);

    sf::Text cellText("", font, 20);
    cellText.setFillColor(sf::Color::Black);

    for (size_t i = 0; i < studentList.size(); ++i) {
        int rowY = tableY + rowHeight * (i + 1);

        cellText.setString(studentList[i].code);
        cellText.setPosition(tableX, rowY);
        window.draw(cellText);

        cellText.setString(studentList[i].name);
        cellText.setPosition(tableX + columnWidth, rowY);
        window.draw(cellText);

        cellText.setString(studentList[i].className);
        cellText.setPosition(tableX + columnWidth * 2, rowY);
        window.draw(cellText);
    }

    // Back button
    sf::RectangleShape backButton(sf::Vector2f(100, 40));
    backButton.setPosition(20, 20);
    backButton.setFillColor(sf::Color(240, 240, 240));
    window.draw(backButton);

    sf::Text backButtonText("Back", font, 20);
    backButtonText.setPosition(40, 28);
    backButtonText.setFillColor(sf::Color::Black);
    window.draw(backButtonText);

    window.display();
}

int main()
{
    ScreenState currentState = ScreenState::Menu;

    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
                window.close();

            // Handle events based on the current state
            if (currentState == ScreenState::Menu) {
                handleMenuEvents(event, currentState);
            }
        }

        switch (currentState) {
            case ScreenState::Processes: {
                drawProcessesWindow(window);
                handleBackEvents(event, currentState);
                break;
            }
            case ScreenState::Performance: {
                drawPerformanceWindow(window);
                handleBackEvents(event, currentState);
                break;
            }
            case ScreenState::AboutUs: {
                drawAboutUsWindow(window);
                handleBackEvents(event, currentState);
                break;
            }
            default: {
                window.clear(sf::Color::White);
                drawMenu(window);
                window.display();
            }
        }
    }

    return 0;
}
