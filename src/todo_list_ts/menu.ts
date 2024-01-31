const icon = document.getElementById("menu-hamburger") as HTMLElement;
const iconClose = document.getElementById("close") as HTMLElement;
let menu = document.getElementById("mobile-menu") as HTMLElement;

icon.addEventListener("click", () => {

  menu.classList.remove("anim-r");
  menu.classList.add("anim");
  menu.classList.remove("hidden");

});

iconClose.addEventListener("click", () => {

  menu.classList.remove("anim");
  menu.classList.add("anim-r");

  setTimeout(() => {
      menu.classList.add("hidden");
  }, 300);

});

