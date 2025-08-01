async function loadNavbar() {
    let response = await fetch('navbar.html');
    let data = await response.text();
    document.querySelector(".nav").innerHTML = data;
}
loadNavbar();
document.querySelector(".product-right").querySelector(".dropdown").addEventListener("click", function () {
    // document.querySelector(".dropdown .drop").style.display = "block";
    // document.querySelector(".dropdown").getElementsByTagName("img")[0].src = "asserts/svg/Vector (5).svg";
    // Toggle dropdown on each click (vice versa)
    let ul = document.querySelector(".dropdown .drop");
    let img = document.querySelector(".dropdown").getElementsByTagName("img")[0];
    if (ul.style.display === "none") {
        ul.style.display = "block";
        img.src = "asserts/svg/Vector (5).svg"
    }
    else{
        ul.style.display = "none";
        img.src = "asserts/svg/Vector (4).svg"
    }
})