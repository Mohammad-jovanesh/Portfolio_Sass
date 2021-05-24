const Btn_Burger = document.querySelector(".Btn_Burger");
const nav_Menu = document.querySelector(".nav_list");
const nav_Item = nav_Menu.querySelectorAll(".nav_item");

Btn_Burger.addEventListener("click", () => {
    console.log("hello");
    nav_Menu.classList.toggle("open")
})

nav_Item.forEach(elm => {
    elm.addEventListener("click", (e) => {
        nav_Item.forEach(item => {
            item.classList.remove("active");
        });
        let parentElm = e.target.parentElement;
        parentElm.classList.add("active");
        nav_Menu.classList.remove("open");
    })
})