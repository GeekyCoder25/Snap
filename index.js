function nav1() {
    var x = document.getElementById('nav1')
    var y = document.getElementById('down')
    if (x.style.display == "block") {
        x.style.display = "none";
        y.src = "./images/icon-arrow-down.svg";
    }

    else {x.style.display = "block";
    y.src = "./images/icon-arrow-up.svg";
    }
}
function nav2() {
    var x = document.getElementById('nav2')
    var y = document.getElementById('down2')

    if (x.style.display === "block") {
        x.style.display = "none";
        y.src = "./images/icon-arrow-down.svg";
    }

    else {x.style.display = "block";
    y.src = "./images/icon-arrow-up.svg";
    
    }
}

function pressMenu() {
    var x = document.getElementById('sidebar');
    x.style.display = "block";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    console.log ('Open side menu and update background')
}
function pressClose() {
    var x = document.getElementById('sidebar')
    x.style.display = "none"
    document.body.style.backgroundColor = "#fff";
}
function mobile() {
    var x = document.getElementById('nav1-mobile');
    var y = document.getElementById('down-mobile')
    if (x.style.display == "block") {
        x.style.display = "none";
        y.src = "./images/icon-arrow-down.svg"
    }
    else {
        x.style.display = "block";
        y.src = "./images/icon-arrow-up.svg"
    }
}
function mobile2() {
    var x = document.getElementById('nav2-mobile')
    var y = document.getElementById('down2-mobile')
    if (x.style.display == "block") {
        x.style.display = "none";
        y.src = "./images/icon-arrow-down.svg"
    }
    else {
        x.style.display = "block";
        y.src = "./images/icon-arrow-up.svg"
    }
}