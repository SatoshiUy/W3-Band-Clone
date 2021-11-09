const butBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modal_close = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
//hàm hiện modal
function showbuytickets() {
  modal.classList.add("open");
}
//hàm ẩn modal
function hidebuytickets() {
  modal.classList.remove("open");
}

//nghe từng button
for (const butBtn of butBtns) {
  butBtn.addEventListener("click", showbuytickets);
}

//nghe khi nhấn nút close
modal_close.addEventListener("click", hidebuytickets);
modal.addEventListener("click", hidebuytickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  // console.log(header.clientHeight);

  // dong mo menu mobile
  var isClose = header.clientHeight;
  if (isClose === headerHeight) {
    header.style.height = "auto";
    header.style.overflow = null;
  } else {
    header.style.height = null;
    header.style.overflow = "hidden";
  }
};
// tu dong dong khi bam menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  //console.log(isParent);
  menuItem.onclick = function (event) {
    // console.log(this);
    var isParent =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (!isParent) {
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  };
}
