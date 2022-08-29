
setInterval(function () {
  for (let i = 0; i < 15; i++) {
    for(let k =0;k<61;k++){
     if (
       document.getElementsByClassName("coinsk")[i].innerHTML ==
       document.getElementsByClassName("coins")[k].innerHTML
     ) {
         document.getElementsByClassName("mercurBuykc")[i].innerHTML =
         document.getElementsByClassName("mercurBuy")[k].innerHTML;
         document.getElementsByClassName("mercurbuyVolumekc")[i].innerHTML =
         document.getElementsByClassName("mercurbuyVolume")[k].innerHTML;
         document.getElementsByClassName("mercurSellkc")[i].innerHTML =
         document.getElementsByClassName("mercurSell")[k].innerHTML;
         document.getElementsByClassName("mercursellVolumekc")[i].innerHTML =
         document.getElementsByClassName("mercursellVolume")[k].innerHTML;
     }
    }
   }
 }, 1000);


setInterval(function () {
    KuCoin(api8,"HBB", 0);
    KuCoin(api8,"ARNM", 1);
    KuCoin(api8,"HAWK", 2);
    KuCoin(api8,"SLCL", 3);
    KuCoin(api8,"RACEFI", 4);
    KuCoin(api8,"PLD", 5);
    KuCoin(api8,"SHILL", 6);
    KuCoin(api8,"SOLR", 7);
    KuCoin(api8,"XTAG", 8);
    KuCoin(api8,"CWAR", 9);
    KuCoin(api8,"GARI", 10);
    KuCoin(api8,"ZBC", 11);
    KuCoin(api8,"LIKE", 12);
    KuCoin(api8,"GST", 13);
    KuCoin(api8,"GMT", 14);
  }, 5000);
  function KuCoin(url,coins, row) {
    fetch(
     url+ "https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol="+coins+"-USDT"
    )
      .then((response) => response.json()) //parse json data
      .then(function (data) {
        document.getElementsByClassName('kcBuy')[row].innerHTML=data.data.asks[0][0];
        document.getElementsByClassName('kcbuyVolume')[row].innerHTML=parseInt(data.data.asks[0][1]+data.data.asks[1][1]).toFixed(0);
        document.getElementsByClassName('kcSell')[row].innerHTML=data.data.bids[0][0];
        document.getElementsByClassName('kcsellVolume')[row].innerHTML=parseInt(data.data.bids[0][1]+data.data.bids[1][1]).toFixed(0);
      })
      .catch((error) => {});
  }
  