// Export

/*
    1. Export default => Trong 1 file chỉ có 1
    2. Export named => Trong 1 file có thể có nhiều
*/

function getUser() {
  return [
    {
      id: 1,
      name: "Đức",
    },
    {
      id: 2,
      name: "Trung",
    },
    {
      id: 3,
      name: "Nguyên",
    },
  ];
}

export function getProduct() {
  return "Sản phẩm";
}

export const posts = ["Post 1", "Post 2", "Post 3"];
export default getUser;
// export { getProduct, posts };
