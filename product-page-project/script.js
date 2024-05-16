let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");
console.log(btn);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    productImg.src = `./image${i+1}.png`;
  };
}

// btn[0].onclick = function () {
//   productImg.src = "./image1.png";
//   console.log(productImg.src);
// };
// btn[1].onclick = function () {
//   productImg.src = "./image2.png";
//   console.log(productImg.src);
// };

// btn[2].onclick = function () {
//   productImg.src = "./image3.png";
// };
// console.log(btn[1].onclick);
