function demowhatApp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        window.alert("WhatApp pressed");
    }
  };

  var url = "https://devapi.engati.com/bot-api/v1.0/customer/4660/bot/6bc26c50902b4838/flow/27055FA465AE4076BD2D41403A62B1B7?user.user_name=Salman&attrTest=TESTING&user.language=en&icecream=banana";
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Authorizaton", "Basic 27c8678b-1348-462e-a2f6-d68c4e8e0742-Fm3xC6O");
//   xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
  xhttp.send();
    
}


function demoLiveChat() {
    window.alert("LiveChat pressed");
}