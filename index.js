const option = [
  {
    id: 0,
    image: "image/surprise.jpg",
    title: "This Blue Clock",
    price: 120,
  },
  {
    id: 1,
    image: "image/watch.jpg",
    title: "This close Clock",
    price: 200,
  },
  {
    id: 2,
    image: "image/surprise.jpg",
    title: "This elegant Clock",
    price: 160,
  },
  {
    id: 3,
    image: "image/watch.jpg",
    title: "This surprise Clock",
    price: 170,
  },
  {
    id: 0,
    image: "image/surprise.jpg",
    title: "This Blue Clock",
    price: 120,
  },
  {
    id: 1,
    image: "image/watch.jpg",
    title: "This close Clock",
    price: 120,
  },
  {
    id: 2,
    image: "image/surprise.jpg",
    title: "This elegant Clock",
    price: 120,
  },
  {
    id: 3,
    image: "image/watch.jpg",
    title: "This surprise Clock",
    price: 120,
  },
];
// array object and data
// sidebar========================================
const order = document.querySelector(".order");
const sidebar = document.querySelector(".sidebar");
const closebar = document.querySelector(".closebar");

order.addEventListener("click", () => {
  sidebar.style.right = "0";
});

closebar.addEventListener("click", () => {
  sidebar.style.right = "-250px";
});

// sidebar=====================================
const data = option.map((item) => item);

let count = 0;
document.getElementById("root").innerHTML = data
  .map((items) => {
    let { title, price, image } = items;

    return (
      `
  <div class="box">
       <div calss="image-box">
         <img class="images" src="${image}" alt="" >
       </div>
         <h4>${title}</h4>
         <p>Price:${price}.00$</p>
         ` +
      " <button class='btn' onclick='add(" +
      count++ +
      ")'>order</button> " +
      `
         
  </div>

  `
    );
  })
  .join("");

let cart = [];

function add(a) {
  cart.push({ ...data[a] });
  orderItem();
}

//order item add
//order function
function orderItem() {
  let item = 0;
  let total = 0;
  let order = document.querySelector(".order");
  let sideitem = document.getElementById("root-sidebar");
  sideitem.style.textAlign = "center";
  order.innerHTML = cart.length;
  let pay = document.getElementById("pay");
  if (cart.length == 0) {
    pay.style.display = "none";
    order.style.visibility = "hidden";
    sideitem.innerHTML = "Please Order Now";
    document.getElementById("total").innerHTML = "$" + "00" + ".00";
  } else {
    pay.style.display = "block";
    order.style.visibility = "visible";
    sideitem.innerHTML = cart
      .map((items) => {
        var { title, price, image } = items;
        total += price;

        document.getElementById("total").innerHTML = "$" + total + ".00";

        return (
          `
       <div class="side-box">
       <div class="imag-box">
       <img class="imag-side" src="${image}"/>
       </div>

       <div class="title-box">
       <h4>${title}</h4>
       <span class="price">         
       <span>Price:${price}.00$ </span>` +
          '<span onclick="deletItem(' +
          item++ +
          ')" class="delet"><i class="fa-regular fa-trash-can"></i></span>' +
          `
       </span>
       </div>
       </div>
        `
        );
      })
      .join("");
  }
}
function deletItem(remove) {
  cart.splice(remove, 1);
  orderItem();
}
// order function
