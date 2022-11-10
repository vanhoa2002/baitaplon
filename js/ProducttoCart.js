// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
}
// thay đổi số lượng
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// Thêm vào giỏ
var add_cart = document.querySelectorAll(".add-cart");
add_cart.forEach(function(button){
    button.addEventListener("click",function(event){
    var  btnItem = event.target;
    var productG = btnItem.parentElement;
    var img = productG.querySelector("img").src;
    var title = productG.querySelector("H4").innerText;
    var price = productG.querySelector("B").innerText;
    addItemToCart(title, price, img)
    // modal.style.display = "block";
    
    updatecart()
  })
})

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  var check = true;
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      check = false;
      return;
    }
   
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
  
}

// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var count = 0;
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)
    var quantity = quantity_item.value
    //count item in cart
    count = parseInt(count) + parseInt(quantity)
      total = total + (price * quantity)
      document.getElementById("clicks").innerHTML = count;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + ' USD'
}
//lưu các thuộc tính của sản phẩm mà khách hàng click vào 
//để replace vào trang detail
var add_cart = document.querySelectorAll(".img-to-detail");
add_cart.forEach(function(button){
    button.addEventListener("click",function(event){
    var  btnItem = event.target;
    var productG = button.parentElement.parentElement;
    console.log(productG)
    var img = productG.querySelector("img").src;
    var title = productG.querySelector("H4").innerText;
    var price = productG.querySelector("B").innerText;
    var description_title = productG.querySelector(".description-title").innerText;
    var description = productG.querySelector(".description").innerText;
    localStorage.setItem("img",img)
    localStorage.setItem("title",title)
    localStorage.setItem("price",price)
    localStorage.setItem("descriptiontitle",description_title)
    localStorage.setItem("description",description)
  })
})