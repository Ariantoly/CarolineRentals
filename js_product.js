let btnLogin = document.querySelector("#btnLogin");
let btnRegister = document.querySelector("#btnRegister");
let btnNav = document.querySelectorAll(".btnNav");
let dropdown = document.querySelector(".dropdown");
let dropdownContent = document.querySelectorAll(".dropdownContent");
let flag = "";

// btnLogin

btnLogin.addEventListener("click", function(){
    window.location.href = "login.html"
});

// btnRegister

btnRegister.addEventListener("click", function(){
    window.location.href = "register.html"
});

// btnNav

btnNav.forEach(function(e){
    e.addEventListener("click", function(){
        if(e.id == "btnHome") window.location.href = "home.html"
        else window.location.href = "contact.html"
    });

    e.addEventListener("mouseover", function(){
        e.style.backgroundColor = "red"
    })

    e.addEventListener("mouseout", function(){
        if(e.value == 1) e.style.backgroundColor = "blue"
        else e.style.backgroundColor = "black"
    })

});

dropdown.addEventListener("click", function(){
    dropdown.style.backgroundColor = "blue"
})

dropdown.addEventListener("mouseover", function(){
    dropdown.style.backgroundColor = "red"
})

dropdown.addEventListener("mouseout", function(){
    if(dropdown.value == 1) dropdown.style.backgroundColor = "blue"
    else dropdown.style.backgroundColor = "black"
})

document.getElementById('family').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('familyContent').style.display = "block";
    document.getElementById('commercialContent').style.display = "none";
    document.getElementById('luxuryContent').style.display = "none";
    flag = "family"
    localStorage.setItem("localStorage", flag)
})

document.getElementById('commercial').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('familyContent').style.display = "none";
    document.getElementById('commercialContent').style.display = "block";
    document.getElementById('luxuryContent').style.display = "none";
    flag = "commercial"
    localStorage.setItem("localStorage", flag)
})

document.getElementById('luxury').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('familyContent').style.display = "none";
    document.getElementById('commercialContent').style.display = "none";
    document.getElementById('luxuryContent').style.display = "block";
    flag = "luxury"
    localStorage.setItem("localStorage", flag)
})

flag = localStorage.getItem("localStorage")

if(flag == "family"){
    document.getElementById('familyContent').style.display = "block";
    document.getElementById('commercialContent').style.display = "none";
    document.getElementById('luxuryContent').style.display = "none";
}
else if(flag == "commercial"){
    document.getElementById('familyContent').style.display = "none";
    document.getElementById('commercialContent').style.display = "block";
    document.getElementById('luxuryContent').style.display = "none";
}
else{
    document.getElementById('familyContent').style.display = "none";
    document.getElementById('commercialContent').style.display = "none";
    document.getElementById('luxuryContent').style.display = "block";
}

