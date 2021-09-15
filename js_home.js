let btnLogin = document.querySelector("#btnLogin");
let btnRegister = document.querySelector("#btnRegister");
let btnNav = document.querySelectorAll(".btnNav");
let dropdown = document.querySelector(".dropdown");
let btnBook = document.querySelector("#btnBook");

let flag = "";

// btnLogin

btnLogin.addEventListener("click", function(){
    window.location.href = "login.html"
});

// btnRegister

btnRegister.addEventListener("click", function(){
    window.location.href = "register.html"
});

btnNav.forEach(function(e){
    e.addEventListener("click", function(a){
        if(e.id == "btnHome") window.location.href = "home.html"
        else window.location.href = "contact.html"
        a.preventDefault();
    });

    e.addEventListener("mouseover", function(){
        e.style.backgroundColor = "red"
    })

    e.addEventListener("mouseout", function(){
        if(e.value == 1) e.style.backgroundColor = "blue"
        else e.style.backgroundColor = "black"
    })

});

dropdown.addEventListener("mouseover", function(){
    dropdown.style.backgroundColor = "red"
})

dropdown.addEventListener("mouseout", function(){
    if(dropdown.value == 1) dropdown.style.backgroundColor = "blue"
    else dropdown.style.backgroundColor = "black"
})

btnBook.addEventListener("click", function(){
    flag = "family"
    localStorage.setItem("localStorage", flag)
    window.location.href = "product.html"
})

document.getElementById('family').addEventListener('click', function(){
    flag = "family"
    localStorage.setItem("localStorage", flag)
})

document.getElementById('commercial').addEventListener('click', function(){
    flag = "commercial"
    localStorage.setItem("localStorage", flag)
})

document.getElementById('luxury').addEventListener('click', function(){
    flag = "luxury"
    localStorage.setItem("localStorage", flag)
})
