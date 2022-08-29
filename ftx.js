setInterval(function () {
  for (let i = 0; i < 24; i++) {
   for(let k =0;k<61;k++){
    if (
      document.getElementsByClassName("coinsf")[i].innerHTML ==
      document.getElementsByClassName("coins")[k].innerHTML
    ) {

        document.getElementsByClassName("mercurBuyf")[i].innerHTML =
        document.getElementsByClassName("mercurBuy")[k].innerHTML;
        document.getElementsByClassName("mercurbuyVolumef")[i].innerHTML =
        document.getElementsByClassName("mercurbuyVolume")[k].innerHTML;

        document.getElementsByClassName("mercurSellf")[i].innerHTML =
        document.getElementsByClassName("mercurSell")[k].innerHTML;
        document.getElementsByClassName("mercursellVolumef")[i].innerHTML =
        document.getElementsByClassName("mercursellVolume")[k].innerHTML;
    }
   }
  }
}, 1000);

setInterval(function () {
  FTX(api6,"JET_USD",0);
  FTX(api6,"REAL_USD",1);
  FTX(api6,"STARS_USD",2);
  FTX(api6,"C98_USD",3);
  FTX(api6,"MEDIA_USD",4);
  FTX(api6,"GENE_USD",5)
  FTX(api6,"COPE_USD",6);
  FTX(api7,"MAPS_USDT",7);
  FTX(api7,"FIDA_USDT",8);
  FTX(api7,"OXY_USDT",9)
  FTX(api7,"MNGO_USD",10);
  FTX(api7,"STEP_USD",11)
  FTX(api7,"SLRS_USD",12);
  FTX(api7,"SNY_USD",13)
  FTX(api7,"ATLAS_USD",14);
  FTX(api7,"POLIS_USD",15)
  FTX(api7,"PRISM_USD",16);
  FTX(api7,"DFL_USD",17)
  FTX(api7,"SLND_USD",18);
  FTX(api8,"PORT_USD",19);
  FTX(api8,"MBS_USD",20)
  FTX(api8,"PSY_USD",21)
  FTX(api8,"GST_USD",22)
  FTX(api8,"GMT_USD",23)

}, 5000);



function FTX(url,coins, row) {
  fetch( url+"https://ftx.com/api/markets/"+coins+"/orderbook?depth=10")
    .then((response) => response.json()) //parse json data
    .then(function (data) {
      document.getElementsByClassName('ftxBuy')[row].innerHTML=data.result.asks[0][0];
      document.getElementsByClassName('ftxbuyVolume')[row].innerHTML=(data.result.asks[0][1]+data.result.asks[1][1]+data.result.asks[2][1]+data.result.asks[3][1]).toFixed(0);
      document.getElementsByClassName('ftxSell')[row].innerHTML=data.result.bids[0][0];
      document.getElementsByClassName('ftxsellVolume')[row].innerHTML=(data.result.bids[0][1]+data.result.bids[1][1]+data.result.bids[2][1]+data.result.bids[3][1]).toFixed(0);
    })
    .catch((error) => {});
}
