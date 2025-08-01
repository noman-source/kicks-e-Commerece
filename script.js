console.log("script.js loaded");
async function loadNavbar() {
    let response = await fetch('navbar.html');
    let data = await response.text();
    document.querySelector(".nav").innerHTML = data;
}
loadNavbar();
async function multipleImage() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    console.log(data)
    let productsWithThreeImages = data.products.filter(function (product) {
        return product.images.length === 3;
    })
    let randomProductIndex = Math.floor(Math.random() * productsWithThreeImages.length);
    let randomProduct = productsWithThreeImages[randomProductIndex];
    let randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
    let randomImage = randomProduct.images[randomImageIndex];
    console.log(productsWithThreeImages);
    console.log(randomImage);
    let images = randomProduct.images;
    let initialindex = 0;
    document.querySelector(".section2").style.backgroundImage = `url(${images[initialindex]})`;
    setInterval(() => {
        initialindex = (initialindex + 1) % images.length;
        document.querySelector(".section2").style.backgroundImage = `url(${images[initialindex]})`;
    }, 1500);

    function box1() {
        let mainIndex = 1;
        setInterval(() => {
            mainIndex = (mainIndex + 1) % images.length;
            document.querySelector(".section2-right .box1").style.backgroundImage = `url(${images[mainIndex]})`;
        }, 1500);
    }
    box1();
    function box2() {
        let mainIndex = 2;
        setInterval(() => {
            mainIndex = (mainIndex + 1) % images.length;
            document.querySelector(".section2-right .box2").style.backgroundImage = `url(${images[mainIndex]})`;
        }, 1500);
    }
    box2();
    let title = randomProduct.title;
    let description = randomProduct.description;
    description = description.slice(0, 70) + "...";
    document.querySelector(".section2-left h3").textContent = title;
    document.querySelector(".section2-left p").textContent = description;
}
try {
    document.querySelector(".section3-top .btn").addEventListener("click", function () {
        window.open('listing.html', '_self');
    });
} catch (error) {
    console.log("shop new drops button error");
}
async function singleImage(params) {
    await multipleImage();
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let beautyImg1 = data.products[0].images;
    let beautyTitle1 = data.products[0].title;
    let beautyPrice1 = data.products[0].price;
    document.querySelector(".section3-bottom .box1 .list1").style.backgroundImage = `url(${beautyImg1})`;
    document.querySelector(".section3-bottom .box1 .list2").textContent = `${beautyTitle1}`;
    document.querySelector(".section3-bottom .box1 .list3 .price").textContent = `${beautyPrice1}`;
    let beautyImg2 = data.products[1].images;
    let beautyTitle2 = data.products[1].title;
    let beautyPrice2 = data.products[1].price;
    document.querySelector(".section3-bottom .box2 .list1").style.backgroundImage = `url(${beautyImg2})`;
    document.querySelector(".section3-bottom .box2 .list2").textContent = `${beautyTitle2}`;
    document.querySelector(".section3-bottom .box2 .list3 .price").textContent = `${beautyPrice2}`;
    let beautyImg3 = data.products[2].images;
    let beautyTitle3 = data.products[2].title;
    let beautyPrice3 = data.products[2].price;
    document.querySelector(".section3-bottom .box3 .list1").style.backgroundImage = `url(${beautyImg3})`;
    document.querySelector(".section3-bottom .box3 .list2").textContent = `${beautyTitle3}`;
    document.querySelector(".section3-bottom .box3 .list3 .price").textContent = `${beautyPrice3}`;
    let beautyImg4 = data.products[3].images;
    let beautyTitle4 = data.products[3].title;
    let beautyPrice4 = data.products[3].price;
    document.querySelector(".section3-bottom .box4 .list1").style.backgroundImage = `url(${beautyImg4})`;
    document.querySelector(".section3-bottom .box4 .list2").textContent = `${beautyTitle4}`;
    document.querySelector(".section3-bottom .box4 .list3 .price").textContent = `${beautyPrice4}`;
}

singleImage()

async function categories() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let beautyImg1 = data.products[0].images;
    let beautyCategory1 = data.products[0].category;
    document.querySelector(".section4-bottom .box1").style.backgroundImage = `url(${beautyImg1})`;
    document.querySelector(".section4-bottom .box1 .about").getElementsByTagName("h3")[0].textContent = `${beautyCategory1}`;
    let fragnanceImg1 = data.products[5].images[0];
    let fragnanceCategory1 = data.products[5].category;
    document.querySelector(".section4-bottom .box2").style.backgroundImage = `url(${fragnanceImg1})`;
    document.querySelector(".section4-bottom .box2 .about").getElementsByTagName("h3")[0].textContent = `${fragnanceCategory1}`;

}
categories();

async function generateCards() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    // console.log(data)
    // console.log(randomProduct)
    document.querySelectorAll(".swiper-slide").forEach(swiper => {
        let card = document.createElement("div");
        card.classList.add("card");
        swiper.prepend(card);
    });
    document.querySelectorAll(".card").forEach(card => {
        let cardTop = document.createElement("div");
        cardTop.classList.add("cardTop");
        let card_bottom = document.createElement("div");
        card_bottom.classList.add("card-bottom");
        card.prepend(cardTop, card_bottom)
    });
    document.querySelectorAll(".cardTop").forEach(cardTop => {
        let randomProductIndex = Math.floor(Math.random() * data.products.length);
        let randomProduct = data.products[randomProductIndex];
        let randomReviewIndex = Math.floor(Math.random() * randomProduct.reviews.length);
        let randomReview = randomProduct.reviews[randomReviewIndex];
        let reviewDetail = document.createElement("div");
        reviewDetail.classList.add("reviewDetail");
        let reviewStar = document.createElement("div");
        reviewStar.classList.add("reviewStar");
        reviewStar.innerHTML = "⭐".repeat(Math.round(randomReview.rating));
        reviewStar.innerHTML += ` <span>${randomReview.rating + ".0"}</span>`;
        cardTop.prepend(reviewDetail, reviewStar)
    });
    document.querySelectorAll(".reviewDetail").forEach(reviewDetail => {
        let reviewDetail_left = document.createElement("div");
        reviewDetail_left.classList.add("reviewDetail-left");
        let reviewDetail_right = document.createElement("div");
        reviewDetail_right.classList.add("reviewDetail-right");
        let user_icon = document.createElement("div");
        user_icon.classList.add("user-icon");
        user_icon.innerHTML = "👤";
        reviewDetail_right.appendChild(user_icon);
        reviewDetail.prepend(reviewDetail_left, reviewDetail_right)
    });
    document.querySelectorAll(".reviewDetail-left").forEach(reviewDetailLeft => {
        let randomProductIndex = Math.floor(Math.random() * data.products.length);
        let randomProduct = data.products[randomProductIndex];
        let randomReviewIndex = Math.floor(Math.random() * randomProduct.reviews.length);
        let randomReview = randomProduct.reviews[randomReviewIndex];
        // console.log(randomReview);
        let reviewerName = document.createElement("div");
        reviewerName.classList.add("reviewerName");
        reviewerName.textContent = `${randomReview.reviewerName}`;
        let reviewerComment = document.createElement("div");
        reviewerComment.classList.add("reviewerComment");
        reviewerComment.textContent = `${randomReview.comment}`;
        reviewDetailLeft.append(reviewerName, reviewerComment)
    });
    document.querySelectorAll(".card-bottom").forEach(card_bottom => {
        let randomProductIndex = Math.floor(Math.random() * data.products.length);
        let randomProduct = data.products[randomProductIndex];
        let randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
        let randomImage = randomProduct.images[randomImageIndex];
        // console.log(randomImage)
        card_bottom.style.backgroundImage = `url(${randomImage})`;
        // randomProductIndex=randomProductIndex+1;

    })
}
generateCards();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});
console.log(swiper)


