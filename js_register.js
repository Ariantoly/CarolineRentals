let btnLogin = document.querySelector("#btnLogin");
let btnRegister = document.querySelector("#btnRegister");
let btnNav = document.querySelectorAll(".btnNav");
let dropdown = document.querySelector(".dropdown");
let btnFormRegister = document.querySelector("#btnRegister1");
let rbGender = document.querySelectorAll(".rbGender");
let flag = ""

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

dropdown.addEventListener("mouseover", function(){
    dropdown.style.backgroundColor = "red"
})

dropdown.addEventListener("mouseout", function(){
    if(dropdown.value == 1) dropdown.style.backgroundColor = "blue"
    else dropdown.style.backgroundColor = "black"
})

btnFormRegister.addEventListener("click", function(a){
    if(document.getElementById('txtName').value.length == 0 || 
        document.getElementById('txtEmail').value.length == 0 || 
        document.getElementById('txaAddress').value.length == 0){
            alert("Please fill in all the blanks");
            a.preventDefault()
            return;
    }
    let rbFlag = 0, cityFlag = 0;
        
    rbGender.forEach(function(e){
        if(e.checked) rbFlag = 1;
    })

    if(rbFlag == 0){
        alert("Please fill in all the blanks");
        a.preventDefault()
        return;
    }

    if(!document.getElementById('txaAddress').value.includes("Street") && !document.getElementById('txaAddress').value.includes("street")) {
        alert("Address must contains 'Street'");
        a.preventDefault()
    }
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