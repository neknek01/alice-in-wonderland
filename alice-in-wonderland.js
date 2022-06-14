function start(){
    document.getElementById("first").style.display = "none";
    var img = document.createElement("img");
    img.src = "media/aliceinwonderlandalice.png" ;
    img.id="alice";
    document.body.appendChild(img);
    var img1 = document.createElement("img");
    img1.src = "media/bottle.png" ;
    img1.id="bottle";
    img1.setAttribute('onclick', 'smaller()')
    document.body.appendChild(img1);
    var img2 = document.createElement("img");
    img2.src = "media/cookie.png" ;
    img2.id="cookie";
    img2.setAttribute('onclick', 'bigger()')
    document.body.appendChild(img2);
    setTimeout(function() {alert("press the cookie to make Alice bigger and press the bottle to make Alice smaller until she is small enough to go through the door")}, 500);
}

function smaller(image,width){
        var image = document.getElementById("alice");
        var width = image.clientWidth;
        // var bottom = document.getElementById('alice').style.bottom;
        if (width == 110){
            alert("Alice is now small enough to go through the door")
        }
        else{
            image.style.width = (width - 100) + "px";
            // image.style.bottom = (bottom + 300) + "px";
    }
}

function bigger(image,width){
    var image = document.getElementById("alice");
    var width = image.clientWidth;
    if (width == 510){
        alert("you cannot make Alice bigger")
    }
    else{
        image.style.width = (width + 100) + "px";
    }
}