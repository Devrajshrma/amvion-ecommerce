"use strict"
//=========================== Main Contant Products===========================//

let arr = [
    { heading: "Portable budds <br> Only at ₹1800", image: "https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/MayBAU/Fan_DT_CC_379x304._SY304_CB558601697_.jpg", button: "Add To Cart" },
    { heading: "Portable table <br> Only at 5000", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_19/PC_CC_379x304-1._SY304_CB558452919_.jpg", button: "Add To Cart" },
    { heading: "Indoor plants <br> Only at ₹1000", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/01-379_X_304-min._SY304_CB556163815_.jpg", button: "Add To Cart" },
    { heading: "Beauty steals <br> Only at ₹600", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg", button: "Add To Cart" },
    { heading: "Smart Watch <br> Only at ₹18000", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg", button: "Add To Cart" },
    { heading: "Gym Home Set<br> Only at ₹25000", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg", button: "Add To Cart" },
    { heading: "Nike Es6 Series<br> Only at ₹10000", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Fatherday-24/Fuji_Fathers_Day_Dashboard_card_1x_EN._SY304_CB557908564_.jpg", button: "Add To Cart" },
    { heading: "Jamnapaar <br> Streaming Now", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SiddMiniTV/DeskCC-379x304_V1._SY304_CB555943778_.jpg", button: "Add To Watch " },
]


//=========================== Famous Products===========================//
let product = [
    {image:"https://m.media-amazon.com/images/I/414FMWNS6jL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/41nclnxOSLL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/61okssN3Y6L._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/61egMfcDWlL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/71LTc2cd3GL._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/61MxiSMwg+L._AC_SY200_.jpg"},
    {image:"https://m.media-amazon.com/images/I/81tioCUVf4L._AC_SY200_.jpg"}
]


//=========================== Add To CART Products===========================//
let cart = []

function showTheProduct() {
    let dev = "";
    arr.forEach(function (product, index) {
        dev += ` <div class="box1 box">
        <div class="mb">
            <div class="contant">${product.heading}</div>
            <div class="img"><img
                    src="${product.image}"
                    alt=""></div>
            <button data-index="${index}" class="btn">${product.button}</button>
        </div>
    </div>`

        document.querySelector("main").innerHTML = dev;
    });
}

showTheProduct()
    
function addToCart(){
    document.querySelector("main").addEventListener("click",function(details){
     if(details.target.classList.contains('btn')){
        cart.push(arr[details.target.dataset.index])
        console.log(cart);
     }
    })
}

addToCart()     

function showTheCart() {
    document.querySelector(".cart").addEventListener("click",function(){
        document.querySelector(".hid-nav").style.display="block"
        console.log(cart);

        let dev = "";
        cart.forEach(function (product, index) {
            dev += `<div class="hnc">
            <div class="img">
                <img src="${product.image}"
                    alt="" width="60px">
            </div>
            <div class="hed">
                <span>${product.heading}</span>
            </div>
        </div>`
    
            document.querySelector(".hid-nav").innerHTML = dev;
            console.log(dev);
            
        });
        
    })
}

showTheCart()

function showFamousProducts(){
    var clutter = ""
    product.forEach(function(value){
        clutter += `<img src="${value.image}" alt="">`
    });

    document.querySelector(".products").innerHTML= clutter;
}

showFamousProducts()

function showNavbar(){
    document.querySelector(".toggle").addEventListener("click", function(){
        document.querySelector(".sidbar").style.display="block"
        document.querySelector(".dark").style.display="block"
        document.querySelector("body").style.position="fixed"
    })

    document.querySelector(".toggle2").addEventListener("click", function(){
        document.querySelector(".sidbar").style.display="block"
        document.querySelector(".dark").style.display="block"
        document.querySelector("body").style.position="fixed"
    })
}

showNavbar()

function hidNavbar(){
    document.querySelector(".cross").addEventListener("click", function(){
        document.querySelector(".sidbar").style.display="none"
        document.querySelector(".dark").style.display="none"
        document.querySelector("body").style.position="relative"
    })
}

hidNavbar()