//replace những thuộc tính tại vị trí xác định
$(document).ready(function(){
    
  var img = localStorage.getItem("img")
  var price = localStorage.getItem("price")
  var title = localStorage.getItem("title")
  var description_title = localStorage.getItem("descriptiontitle")
  var description = localStorage.getItem("description")
  var el = document.getElementById("item-product");
  el.innerHTML = "<img src='"+ img+"'>";
  el = document.getElementById("price")
  el.innerText = price;
  el = document.getElementById("name-detail")
  el.innerText = title
  el = document.getElementById("descriptiontitle")
  el.innerText = description_title
  el = document.getElementById("description")
  el.innerText = description
  el =  document.getElementById("productname")
  el.innerText = title
})

