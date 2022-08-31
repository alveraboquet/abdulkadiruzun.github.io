$(document).ready(function ()
{
  setInterval(function ()
  {
    var getalarmSoundValue        = localStorage.getItem("alarmSoundValue");
    var getSoundAlarm             = localStorage.getItem("alarmSound");
    var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
    var getNotificationAlarm      = localStorage.getItem("alarmNotification");

    for (var i = 0; i < 61; i++)
    {
      var coins= document.getElementsByClassName("coins")[i].innerText;
      var mercurbuyfloat = parseFloat(document.getElementsByClassName("mercurBuy")[i].innerText); // mercurden alış
      var gatesellfloat = parseFloat(document.getElementsByClassName("gateSell")[i].innerText); // gate de satış
      var mercurbuyVolume = parseFloat(document.getElementsByClassName("mercurbuyVolume")[i].innerText); //mercurden alınan hacım
      var gatesellVolume = parseFloat(document.getElementsByClassName("gatesellVolume")[i].innerText); // gateden satılabilen hacım

      var kaarTers = (document.getElementsByClassName("profitableTers")[i].innerHTML = ((gatesellfloat - mercurbuyfloat) * mercurbuyVolume).toFixed(5));

      /*-------------------------------------------------------------------------------------------------------------------------------------*/

      var gatebuyfloat = parseFloat(document.getElementsByClassName("gateBuy")[i].innerText);
      var mercursellfloat = parseFloat(document.getElementsByClassName("mercurSell")[i].innerText);
      var gateBuyVolume = parseFloat(document.getElementsByClassName("gatebuyVolume")[i].innerText);
      var mercursellVolume = parseFloat(document.getElementsByClassName("mercursellVolume")[i].innerText);

      var kaarDüz = (document.getElementsByClassName("profitableDüz")[i].innerHTML = ((mercursellfloat - gatebuyfloat) * mercurbuyVolume).toFixed(5));
     
      if (getSoundAlarm == "AÇIK")
      {
        if(document.getElementsByClassName("checkg")[i].checked==false)
        {
          if (kaarDüz > parseInt(getalarmSoundValue) && gatebuyfloat > 0 && mercursellfloat>0)
          {
            localStorage.setItem("alarmSound", "KAPALI");
            var getSoundAlarm = localStorage.getItem("alarmSound");
            document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;
            document.getElementById("alarmSoundStatus").innerHTML = "ÇALIYOR";
            var audio = document.getElementById("alarm");
            audio.play();
          }

          if (kaarTers > parseInt(getalarmSoundValue) && mercurbuyfloat > 0 && gatesellfloat>0)
          {
            localStorage.setItem("alarmSound", "KAPALI");
            var getSoundAlarm = localStorage.getItem("alarmSound");
            document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;
  
            document.getElementById("alarmSoundStatus").innerHTML = "ÇALIYOR";
            var audio = document.getElementById("alarm");
            audio.play();
          } 
        }
      }

      if (getNotificationAlarm == "AÇIK")
      {

        if(document.getElementsByClassName("checkg")[i].checked==false)
        {
          if (kaarDüz > parseInt(getalarmNotificationValue) && gatebuyfloat > 0 && mercursellfloat>0)
          {
            localStorage.setItem("alarmNotification", "KAPALI");
            var getNotificationAlarm = localStorage.getItem("alarmNotification");
            document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
            document.getElementById("alarmNotificationStatus").innerHTML = "ÇALIYOR";
            var notification = new Notification('FIRSAT!',
            {
              icon: 'https://i.pinimg.com/736x/be/7c/c0/be7cc05eed1cf7652422b39fdbd30585.jpg',
              body: "COİN : "+coins+"\n"+"KAAR MİKTAR : "+kaarDüz,
            });
          }

          if (kaarTers > parseInt(getalarmNotificationValue) && mercurbuyfloat > 0 && gatesellfloat>0)
          {
            localStorage.setItem("alarmNotification", "KAPALI");
            var getNotificationAlarm = localStorage.getItem("alarmNotification");
            document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
  
            document.getElementById("alarmNotificationStatus").innerHTML = "ÇALIYOR";
            var notification = new Notification('FIRSAT!',
            {
              icon: 'https://i.pinimg.com/736x/be/7c/c0/be7cc05eed1cf7652422b39fdbd30585.jpg',
              body: "COİN : "+coins+"\n"+"KAAR MİKTAR : "+kaarTers,
            });
          }
        }
      }

      if (kaarDüz > 0)
      {
        document.getElementsByClassName("profitableDüz")[i].style.color = "#0cb056";
        document.getElementsByClassName("profitableDüz")[i].style.fontSize = "large";
      }
      else
      {
        document.getElementsByClassName("profitableDüz")[i].style.color = "#ba041c";
        document.getElementsByClassName("profitableDüz")[i].style.fontSize = "large";
      }

      if (kaarTers > 0)
      {
        document.getElementsByClassName("profitableTers")[i].style.color = "#0cb056";
        document.getElementsByClassName("profitableTers")[i].style.fontSize = "large";
      }
      else
      {
        document.getElementsByClassName("profitableTers")[i].style.color = "#ba041c";
        document.getElementsByClassName("profitableTers")[i].style.fontSize = "large";
      }
    }
  }, 900);
});