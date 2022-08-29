$(document).ready(function () {
    setInterval(function () {
      var getalarmSoundValue = localStorage.getItem("alarmSoundValue");
      var getSoundAlarm = localStorage.getItem("alarmSound");
      var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
      var getNotificationAlarm = localStorage.getItem("alarmNotification");
      for (var i = 0; i < 11; i++) {
        /*Mercurden gate kaar*/
        var coins= document.getElementsByClassName("coinsh")[i].innerText
        var mercurbuyfloat = parseFloat(
          document.getElementsByClassName("mercurBuyhb")[i].innerText
        ); // mercurden alış
        var gatesellfloat = parseFloat(
          document.getElementsByClassName("hbSell")[i].innerText
        ); // gate de satış
  
        var mercurbuyVolume = parseFloat(
          document.getElementsByClassName("mercurbuyVolumehb")[i].innerText
        ); //mercurden alınan hacım
        var gatesellVolume = parseFloat(
          document.getElementsByClassName("hbsellVolume")[i].innerText
        ); // gateden satılabilen hacım
  
        //Kaarı adetle çarpıyoruz.
        var kaarTers = (document.getElementsByClassName("profitableTershb")[
          i
        ].innerHTML = (
          (gatesellfloat - mercurbuyfloat) *
          mercurbuyVolume
        ).toFixed(5));
  
        /*-------------------------------------------------------------------------------------------------------------------------------------*/
        /*Gate den mercure kaar */
        var gatebuyfloat = parseFloat(
          document.getElementsByClassName("hbBuy")[i].innerText
        );
        var mercursellfloat = parseFloat(
          document.getElementsByClassName("mercurSellhb")[i].innerText
        );
  
        var gateBuyVolume = parseFloat(
          document.getElementsByClassName("hbbuyVolume")[i].innerText
        );
        var mercursellVolume = parseFloat(
          document.getElementsByClassName("mercursellVolumehb")[i].innerText
        );
  
        //Kaarı adetle çarpıyoruz
        var kaarDüz = (document.getElementsByClassName("profitableDüzhb")[
          i
        ].innerHTML = (
          (mercursellfloat - gatebuyfloat) *
          mercurbuyVolume
        ).toFixed(5));
  
       
        if (getSoundAlarm == "AÇIK") {
  
          if(document.getElementsByClassName("checkh")[i].checked==false){
            if (
              kaarDüz > parseInt(getalarmSoundValue) &&
              gatebuyfloat > 0 && mercursellfloat>0
            ) {
              localStorage.setItem("alarmSound", "KAPALI");
              var getSoundAlarm = localStorage.getItem("alarmSound");
              document.getElementById("alarmSoundKontrol").innerHTML =
                getSoundAlarm;
    
              document.getElementById("alarmSoundStatus").innerHTML = "ÇALIYOR";
              console.log(document.getElementsByClassName("coins")[i].innerText);
              var audio = document.getElementById("alarm");
              audio.play();
            }
            if (
              kaarTers > parseInt(getalarmSoundValue) &&
              mercurbuyfloat > 0 && gatesellfloat>0
             
            ) {
              localStorage.setItem("alarmSound", "KAPALI");
              var getSoundAlarm = localStorage.getItem("alarmSound");
              document.getElementById("alarmSoundKontrol").innerHTML =
                getSoundAlarm;
    
              document.getElementById("alarmSoundStatus").innerHTML = "ÇALIYOR";
              console.log(document.getElementsByClassName("coins")[i].innerText);
              var audio = document.getElementById("alarm");
              audio.play();
            }
          }
      
        }

        if (getNotificationAlarm == "AÇIK") {

          if(document.getElementsByClassName("checkh")[i].checked==false){
            if (
              kaarDüz > parseInt(getalarmNotificationValue) &&
              gatebuyfloat > 0 && mercursellfloat>0
            ) {
              localStorage.setItem("alarmNotification", "KAPALI");
              var getNotificationAlarm = localStorage.getItem("alarmNotification");
              document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
              document.getElementById("alarmNotificationStatus").innerHTML = "ÇALIYOR";
              var notification = new Notification('FIRSAT!', {
                icon: 'https://i.pinimg.com/736x/be/7c/c0/be7cc05eed1cf7652422b39fdbd30585.jpg',
                body: "COİN : "+coins+"\n"+"KAAR MİKTAR : "+kaarDüz,
            });
            }
            if (
              kaarTers > parseInt(getalarmNotificationValue) &&
              mercurbuyfloat > 0 && gatesellfloat>0
             
            ) {
              localStorage.setItem("alarmNotification", "KAPALI");
              var getNotificationAlarm = localStorage.getItem("alarmNotification");
              document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
    
              document.getElementById("alarmNotificationStatus").innerHTML = "ÇALIYOR";
              var notification = new Notification('FIRSAT!', {
                icon: 'https://i.pinimg.com/736x/be/7c/c0/be7cc05eed1cf7652422b39fdbd30585.jpg',
                body: "COİN : "+coins+"\n"+"KAAR MİKTAR : "+kaarTers,
            });
            }
            
          }
      
        }
  
        if (kaarDüz > 0) {
          document.getElementsByClassName("profitableDüzhb")[i].style.color =
            "#0cb056";
          document.getElementsByClassName("profitableDüzhb")[i].style.fontSize =
            "large";
        } else {
          document.getElementsByClassName("profitableDüzhb")[i].style.color =
            "#ba041c";
          document.getElementsByClassName("profitableDüzhb")[i].style.fontSize =
            "large";
        }
  
        if (kaarTers > 0) {
          document.getElementsByClassName("profitableTershb")[i].style.color =
            "#0cb056";
          document.getElementsByClassName("profitableTershb")[i].style.fontSize =
            "large";
        } else {
          document.getElementsByClassName("profitableTershb")[i].style.color =
            "#ba041c";
          document.getElementsByClassName("profitableTershb")[i].style.fontSize =
            "large";
        }
      }
   
  
    }, 1000);
  });
  