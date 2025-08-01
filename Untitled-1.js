console.log("JavaScript is initializing....")
async function singleProduct() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    console.log(data);
    //  console.log(data.products[0].images);
    let productsWithThreeImages = data.products.filter(function (product) {
        return product.images.length === 3;
    });
    console.log(productsWithThreeImages);
    let randomProductIndex = Math.floor(Math.random() * productsWithThreeImages.length);
    let randomProduct = productsWithThreeImages[randomProductIndex];
    let randomImageIndex = Math.floor(Math.random() * randomProduct.images.length);
    let randomImage = randomProduct.images[randomImageIndex];
    console.log(randomImage)
    // document.querySelector(".section2").style.backgroundImage= `url(${randomImage})`
    // Display all 3 images in sequence after 2 seconds, changing every 1 second

    const images = randomProduct.images;
    const section2 = document.querySelector(".section2");
    let currentIndex = 0;

    // Set initial image
    section2.style.backgroundImage = `url(${images[currentIndex]})`;

    // Set product title in h3
    const productTitle = randomProduct.title;
    const productDescription = randomProduct.description;
    const section2Title = document.querySelector(".section2-left .box h3");
    if (section2Title) {
        section2Title.textContent = productTitle;
    }
    // Set product description in .box-bottom p, truncated to one line (about 80 chars)
    const section2Desc = document.querySelector(".section2-left .box-bottom p");
    if (section2Desc) {
        // Truncate to 80 characters and add ellipsis if needed
        let truncated = productDescription;
        if (truncated.length > 80) {
            truncated = truncated.slice(0, 70) + "...";
        }
        section2Desc.textContent = truncated;
    }



    
    // Change image every 1.5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        section2.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 1500);
    function smallBox1(){
        let currentIndex = 1;
        let smallBox1 = document.querySelector(".section2-right .box1");
        // Show only .box1, hide .box2
        if (smallBox1) {
            smallBox1.style.backgroundImage = `url(${images[currentIndex]})`;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                smallBox1.style.backgroundImage = `url(${images[currentIndex]})`;
            }, 1500);
        }
    } 
    smallBox1();
    function smallBox2(){
        let currentIndex = 2;
        let smallBox2 = document.querySelector(".section2-right .box2");
        // Show only .box1, hide .box2
        if (smallBox2) {
            smallBox2.style.backgroundImage = `url(${images[currentIndex]})`;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                smallBox2.style.backgroundImage = `url(${images[currentIndex]})`;
            }, 1500);
        }
    } 
    smallBox2();




}


singleProduct();






// cards show method
async function reviews(params) {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data);
    let swiper_wrapper = document.querySelector(".section5-bottom").querySelector(".swiper-wrapper");
    for (let i = 0; i < data.products.length; i++) {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = "Hello";
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        swiper_wrapper.append(slide);
        document.querySelectorAll(".section5-bottom .swiper-slide").forEach(swiperSlide => swiperSlide.append(div));
        let cardTop = document.createElement("div");
        cardTop.classList.add("cardTop");
        let reviewDetail = document.createElement("div");
        reviewDetail.classList.add("reviewDetail");
        document.querySelectorAll(".cardTop").forEach(cardTop => cardTop.prepend(reviewDetail));
        let reviewDetail_left = document.createElement("div");
        reviewDetail_left.classList.add("reviewDetail-left");
        let reviewerName = document.createElement("div");
        reviewerName.classList.add("reviewerName");
        let reviewerComment = document.createElement("div");
        reviewerComment.classList.add("reviewerComment");
        document.querySelectorAll(".reviewDetail-left").forEach(reviewDetailLeft => reviewDetailLeft.append(reviewerName, reviewerComment));
        let reviewDetail_right = document.createElement("div");
        reviewDetail_right.classList.add("reviewDetail_right");
        let user_icon = document.createElement("div");
        user_icon.classList.add("user-icon");
        user_icon.innerHTML = "👤";
        reviewDetail_right.appendChild(user_icon);
        document.querySelectorAll(".reviewDetail").forEach(reviewDetail => reviewDetail.prepend(reviewDetail_left, reviewDetail_right));
        let card_bottom = document.createElement("div");
        card_bottom.classList.add("card-bottom");
        document.querySelectorAll(".card").forEach(card => card.prepend(cardTop, card_bottom));
        let reviewStar = document.createElement("div");
        reviewStar.innerHTML = "⭐⭐⭐";
        reviewStar.innerHTML += ` <span></span>`;
        document.querySelectorAll(".cardTop").forEach(cardtop => cardtop.prepend(reviewStar));

    }


}
reviews()