setInterval(function () {
  for (let i = 0; i < 11; i++) {
    for(let k =0;k<61;k++){
     if (
       document.getElementsByClassName("coinsh")[i].innerHTML ==
       document.getElementsByClassName("coins")[k].innerHTML
     ) {
         document.getElementsByClassName("mercurBuyhb")[i].innerHTML =
         document.getElementsByClassName("mercurBuy")[k].innerHTML;
         document.getElementsByClassName("mercurbuyVolumehb")[i].innerHTML =
         document.getElementsByClassName("mercurbuyVolume")[k].innerHTML;
         document.getElementsByClassName("mercurSellhb")[i].innerHTML =
         document.getElementsByClassName("mercurSell")[k].innerHTML;
         document.getElementsByClassName("mercursellVolumehb")[i].innerHTML =
         document.getElementsByClassName("mercursellVolume")[k].innerHTML;
     }
    }
   }
 }, 1000);

setInterval(function () {
  Huobi("hbb", 0);
  Huobi("sns", 1);
  Huobi("ats", 2);
  Huobi("slc", 3);
  Huobi("gari", 4);
  Huobi("sao", 5);
  Huobi("dio", 6);
  Huobi("zbc", 7);
  Huobi("like", 8);
  Huobi("gst", 9);
  Huobi("gmt", 10);


}, 5000);


   function Huobi (coins,row){
  
    fetch("https://api.huobi.pro/market/depth?symbol="+coins+"usdt&type=step0")
    .then((response) => response.json()) //parse json data
    .then(function (data) {
   // console.log("HBB PROTOCOKOL "+data.tick.bids[0]);
    document.getElementsByClassName('hbBuy')[row].innerHTML=data.tick.asks[0][0];
    document.getElementsByClassName('hbbuyVolume')[row].innerHTML=(data.tick.asks[0][1]+data.tick.asks[1][1]+data.tick.asks[2][1]+data.tick.asks[3][1]).toFixed(0);
    document.getElementsByClassName('hbSell')[row].innerHTML=data.tick.bids[0][0];
    document.getElementsByClassName('hbsellVolume')[row].innerHTML=(data.tick.bids[0][1]+data.tick.bids[1][1]+data.tick.bids[2][1]+data.tick.bids[3][1]).toFixed(0);
    }).catch((error) => {
    
  
    });
   }