function func() {
    var name = document.getElementById('name_input').value;
    var email = document.getElementById('email_input').value;
    var sample = document.getElementById('sample_input').value; 
    var phone = document.getElementById('phone_input').value; 

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        window.alert("WhatApp pressed");
    }
    };

    var url = "http://localhost:8010/proxy/v1.0/customer/4660/bot/6bc26c50902b4838/flow/26861AAD8AA74064A1B8C8059F7D6363?user.email="+email+"&user.user_name="+name+"&attrTest="+sample+"&apiType=register"+"&user.phone_number="+phone;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Authorization", "Basic 27c8678b-1348-462e-a2f6-d68c4e8e0742-Fm3xC6O");
    xhttp.send();
}