import { Component, OnInit } from '@angular/core';

declare var device: any;
declare var navigator : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  ngOnInit() {
    document.addEventListener("deviceready", this.handleCommonAlert ,false);
    // document.addEventListener("backbutton",this.handleCommonConfirm, false);
  }


  username : any;
  password : any;

  title = 'Toyota Financial Services';

  login_json = {
    "username":"",
    "password":"","deviceprint":"version%3D1%26pm%5Ffpua%3Dmozilla%2F5%2E0%20%28linux%3B%20android%208%2E0%2E0%3B%20nexus%205x%20build%2Fopr4%2E170623%2E006%29%20applewebkit%2F537%2E36%20%28khtml%2C%20like%20gecko%29%20chrome%2F71%2E0%2E3578%2E98%20mobile%20safari%2F537%2E36%7C5%2E0%20%28Linux%3B%20Android%208%2E0%2E0%3B%20Nexus%205X%20Build%2FOPR4%2E170623%2E006%29%20AppleWebKit%2F537%2E36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F71%2E0%2E3578%2E98%20Mobile%20Safari%2F537%2E36%7CWin32%26pm%5Ffpsc%3D24%7C412%7C732%7C732%26pm%5Ffpsw%3D%26pm%5Ffptz%3D5%2E5%26pm%5Ffpln%3Dlang%3Den%2DIN%7Csyslang%3D%7Cuserlang%3D%26pm%5Ffpjv%3D0%26pm%5Ffpco%3D1",
    "brand":"TOYOTA",
    "channel":"WEB",
    "smagentname":"mfa-login-agent"
  };

    logMe () {
      this.login_json.username = this.username;
      this.login_json.password = this.password;
      console.log(this.login_json);
    }

    handleCommonAlert() {
      var message = "Device Manufacturer : " + device.manufacturer + "\nDevice Model : " + device.model + "\nDevice Platform : " + device.platform;
      var title = "Please Note";
      var buttonName = "OK";
      navigator.notification.alert(message, this.alertCallback, title, buttonName);
    }

    alertCallback () {
      alert("Ok");
    }

    handleCommonConfirm () {
      var cMessage = "Do you want to exit the application";
      var ctitle = "";
      navigator.notification.confirm(
        cMessage, 
        this.onConfirm,
        ctitle,         
        ['Yes','No']
    );
    }
    
    onConfirm(buttonIndex:any) {
      console.log("Button Index that was pressed : "+buttonIndex);
    }   
}
