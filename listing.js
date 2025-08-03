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
    else {
        ul.style.display = "none";
        img.src = "asserts/svg/Vector (4).svg"
    }
})
async function generateCard(params) {
    let card = document.createElement("div");
    card.classList.add("boxes");
    document.querySelector(".product-bottom-right").append(card);
    for (let i = 0; i < 9; i++) {
        let box = document.createElement("div");
        box.classList.add("box", "box1");
        card.appendChild(box);
    }
    document.querySelectorAll(".box").forEach(box => {
        let ul = document.createElement("ul");
        ul.classList.add("unorderList")
        box.appendChild(ul);
    })
    document.querySelectorAll(".unorderList").forEach(ul => {
        // INSERT_YOUR_CODE
        for (let i = 1; i <= 3; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            // INSERT_YOUR_CODE
            li.classList.add(`list${i}`);
        }
    })

    let data;
    try {
        let response = await fetch('https://dummyjson.com/products');
        data = await response.json();
        console.log("products length:" + data.products.length)
        // let index=0;
        document.querySelectorAll(".list1").forEach(list => {
            let randomProductIndex = Math.floor(Math.random() * data.products.length);
            let randomProduct = data.products[randomProductIndex];
            let randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
            let randomImage = randomProduct.images[randomImageIndex];
            list.style.backgroundImage = `url(${randomImage})`;
        });

    } catch (error) {
        console.log(error);
    }
    try {
        document.querySelector('.product-bottotm-left-top ul .list1').addEventListener('click', function () {
            document.querySelectorAll(".box .list1").forEach(list => {
                let randomProductIndex = Math.floor(Math.random() * data.products.length);
                let randomProduct = data.products[randomProductIndex];
                let randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
                let randomImage = randomProduct.images[randomImageIndex];
                list.style.backgroundImage = `url(${randomImage})`;
                // INSERT_YOUR_CODE
                let checkbox = this.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
            });
        });
    } catch (error) {
        console.log(error)
    }
}
generateCard();