$(document).ready(function () {
    setInterval(function () {
      var getalarmSoundValue = localStorage.getItem("alarmSoundValue");
      var getSoundAlarm = localStorage.getItem("alarmSound");
      var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
      var getNotificationAlarm = localStorage.getItem("alarmNotification");
      for (var i = 0; i < 15; i++) {
        /*Mercurden gate kaar*/
        var coins= document.getElementsByClassName("coinsk")[i].innerText
        var mercurbuyfloat = parseFloat(
          document.getElementsByClassName("mercurBuykc")[i].innerText
        ); // mercurden alış
        var gatesellfloat = parseFloat(
          document.getElementsByClassName("kcSell")[i].innerText
        ); // gate de satış
        var mercurbuyVolume = parseFloat(
          document.getElementsByClassName("mercurbuyVolumekc")[i].innerText
        ); //mercurden alınan hacım
        var gatesellVolume = parseFloat(
          document.getElementsByClassName("kcsellVolume")[i].innerText
        ); // gateden satılabilen hacım
        //Kaarı adetle çarpıyoruz.
        var kaarTers = (document.getElementsByClassName("profitableTerskc")[
          i
        ].innerHTML = (
          (gatesellfloat - mercurbuyfloat) *
          mercurbuyVolume
        ).toFixed(5));
  
        /*-------------------------------------------------------------------------------------------------------------------------------------*/
        /*Gate den mercure kaar */
        var gatebuyfloat = parseFloat(
          document.getElementsByClassName("kcBuy")[i].innerText
        );
        var mercursellfloat = parseFloat(
          document.getElementsByClassName("mercurSellkc")[i].innerText
        );
        var gateBuyVolume = parseFloat(
          document.getElementsByClassName("kcbuyVolume")[i].innerText
        );
        var mercursellVolume = parseFloat(
          document.getElementsByClassName("mercursellVolumekc")[i].innerText
        );
        //Kaarı adetle çarpıyoruz
        var kaarDüz = (document.getElementsByClassName("profitableDüzkc")[
          i
        ].innerHTML = (
          (mercursellfloat - gatebuyfloat) *
          mercurbuyVolume
        ).toFixed(5));
        if (getSoundAlarm == "AÇIK") {
          if(document.getElementsByClassName("checkk")[i].checked==false){
            if (
              kaarDüz > parseInt(getalarmSoundValue) &&
              gatebuyfloat > 0 && mercursellfloat>0
            ) {
              localStorage.setItem("alarmSound", "KAPALI");
              var getSoundAlarm = localStorage.getItem("alarmSound");
              document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;
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
              document.getElementById("alarmSoundKontrol").innerHTML =getSoundAlarm;
              document.getElementById("alarmSoundStatus").innerHTML = "ÇALIYOR";
              console.log(document.getElementsByClassName("coins")[i].innerText);
              var audio = document.getElementById("alarm");
              audio.play();
            }
          }
        }
        if (getNotificationAlarm == "AÇIK") {
          if(document.getElementsByClassName("checkk")[i].checked==false){
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
          document.getElementsByClassName("profitableDüzkc")[i].style.color =
            "#0cb056";
          document.getElementsByClassName("profitableDüzkc")[i].style.fontSize =
            "large";
        } else {
          document.getElementsByClassName("profitableDüzkc")[i].style.color =
            "#ba041c";
          document.getElementsByClassName("profitableDüzkc")[i].style.fontSize =
            "large";
        }
  
        if (kaarTers > 0) {
          document.getElementsByClassName("profitableTerskc")[i].style.color =
            "#0cb056";
          document.getElementsByClassName("profitableTerskc")[i].style.fontSize =
            "large";
        } else {
          document.getElementsByClassName("profitableTerskc")[i].style.color =
            "#ba041c";
          document.getElementsByClassName("profitableTerskc")[i].style.fontSize =
            "large";
        }
      }
   
  
    }, 1000);
  });
  