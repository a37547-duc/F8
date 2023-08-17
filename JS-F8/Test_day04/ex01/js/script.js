var keyword = "lorem";

var content = `<span>Lorem</span> ipsum, dolor sit amet consectetur adipisicing elit. Eaque ab nisi
quibusdam quae rem nesciunt et quos, accusantium quo ipsa id, quia velit
illum dolore at ullam iure fugiat impedit labore est! Incidunt voluptatem
sunt tempora. Aperiam rerum deserunt dolorem, assumenda corporis natus.
Consequuntur mollitia iure adipisci in necessitatibus animi.`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
var count = 0;
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}

result = result + content;
var title = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`;

var bottom = `<p>Đã tìm thấy <b>${count}</b> kết quả với từ khóa <b>${keyword}</b></p>`;

document.write(title + result + bottom);
