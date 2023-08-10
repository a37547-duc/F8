# Ngôn ngữ tiền xử lý CSS

- Ngôn ngữ lập trình
- Tái sử dụng code dễ dàng hơn
- Quản lý code dễ dàng hơn
- Không bị nhàm chán

=> Biên dịch sang CSS

- Trình duyệt không đọc được nó
- ĐÊr đọc được phải biên dịch

=> Ngôn ngữ tiền xử lý thường gặp

- Less
- Sass/ Scss

* Scss là Sass nhưng là 3.0

# Scss

## Trình biên dịch

npm i sass -g

- sass scss:css

* sass là tên gói
* scss tên thư mục chứa file css
* css là tên thư mục

## Biên dịch cả folder

sass tenfolderscss:tenfoldercss

# chế độ watch mode

sass tenfolderscss:tenfoldercss --watch

## Biên dịch 1 file

sass duong-dan-file-scss duong-dan-file-css

# Nén file CSS(.moin)

sass duong-dan-file-scss duong-dan-file-css --style compressed
