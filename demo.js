function demowhatApp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        window.alert("WhatApp pressed");
    }
  };

  var url = "http://localhost:8010/proxy/v1.0/customer/117/bot/a341f07cdfc2405b/flow/F2C8D803729C47459CA5D7A2549A54C4?user.user_name=Arnav&attrTest=Banana&user.language=fr&user.email=ananya.sharma@engati.com&user.phone_number=9407523393";
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Authorization", "Basic 04bdfc51-43e8-4ee9-8666-0033751e016a-FnGi8Et");
//   xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
  xhttp.send();
    
}


function demoLiveChat() {

  var userName = document.getElementById('customerName').value.split(" ")[0];
  var lastName = userName.split(" ")[1];
  var userEmail = document.getElementById('customerEmail').value;
  var userPhone = document.getElementById('customerPhone').value;
  var userCountry = document.getElementById('customerCountry').value;
  var userCompany = document.getElementById('customerCompany').value;

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        window.alert("WhatApp pressed");
    }
  };

  var url = "http://localhost:8010/proxy/v1.0/customer/4660/bot/6bc26c50902b4838/flow/26861AAD8AA74064A1B8C8059F7D6363?user.first_name="+userName+"&country="+userCountry+"&user.last_name="+lastName+"&user.email="+userEmail+"&user.phone_number="+userPhone+"&apiType=lead"+"&company="+userCompany;
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Authorization", "Basic 27c8678b-1348-462e-a2f6-d68c4e8e0742-Fm3xC6O");
  xhttp.send();
}