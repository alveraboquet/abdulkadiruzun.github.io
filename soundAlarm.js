$(document).ready(function()
{
  var getalarmSoundValue = localStorage.getItem("alarmSoundValue");
  var getSoundAlarm = localStorage.getItem("alarmSound");

  document.getElementById("getSoundAlarm").innerHTML = getalarmSoundValue;
  document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;

  $("#alarmSoundOn").click(function()
  {
    var alarmSoundİnput = document.getElementById("alarmSoundValue").value;

    localStorage.setItem("alarmSoundValue", alarmSoundİnput);
    localStorage.setItem("alarmSound", "AÇIK");

    var getalarmSoundValue = localStorage.getItem("alarmSoundValue");
    var getSoundAlarm = localStorage.getItem("alarmSound");

    document.getElementById("getSoundAlarm").innerHTML = getalarmSoundValue;
    document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;
  });

  $("#alarmSoundOff").click(function()
  {
    var alarmSoundİnput = document.getElementById("alarmSoundValue").value;

    localStorage.setItem("alarmSoundValue", 0);
    localStorage.setItem("alarmSound", "KAPALI");

    var getalarmSoundValue = localStorage.getItem("alarmSoundValue");
    var getSoundAlarm = localStorage.getItem("alarmSound");

    document.getElementById("getSoundAlarm").innerHTML = getalarmSoundValue;
    document.getElementById("alarmSoundKontrol").innerHTML = getSoundAlarm;
    document.getElementById("alarmSoundStatus").innerHTML = "ÇALMIYOR";

    var audio = document.getElementById("alarm");
    audio.pause();
  });


  var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
  var getNotificationAlarm = localStorage.getItem("alarmNotification");

  document.getElementById("getNotificationAlarm").innerHTML = getalarmNotificationValue;
  document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;

  $("#alarmNotificationOn").click(function()
  {
    var alarmNotificationİnput = document.getElementById("alarmNotificationValue").value;

    localStorage.setItem("alarmNotificationValue", alarmNotificationİnput);
    localStorage.setItem("alarmNotification", "AÇIK");

    var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
    var getNotificationAlarm = localStorage.getItem("alarmNotification");

    document.getElementById("getNotificationAlarm").innerHTML = getalarmNotificationValue;
    document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
  });

  $("#alarmNotificationOff").click(function()
  {
    var alarmNotificationİnput = document.getElementById("alarmNotificationValue").value;

    localStorage.setItem("alarmNotificationValue", 0);
    localStorage.setItem("alarmNotification", "KAPALI");

    var getalarmNotificationValue = localStorage.getItem("alarmNotificationValue");
    var getNotificationAlarm = localStorage.getItem("alarmNotification");

    document.getElementById("getNotificationAlarm").innerHTML = getalarmNotificationValue;
    document.getElementById("alarmNotificationKontrol").innerHTML = getNotificationAlarm;
    document.getElementById("alarmNotificationStatus").innerHTML = "ÇALMIYOR";
  });
});