setInterval(function () {
  Gate(api1,"SHILL", 0);
  Gate(api1,"SOLR", 1);
  Gate(api1,"CSTR", 2);
  Gate(api1,"SCY", 3);
  Gate(api1,"BLOCK", 4);
  Gate(api1,"XTAG", 5);
  Gate(api1,"CWAR", 6);
  Gate(api1,"SBR", 7);
  Gate(api1,"CHICKS", 8);
  Gate(api1,"SLC", 9);
  Gate(api1,"DEFILAND", 10);
  Gate(api1,"MEAN", 11);
  Gate(api2,"ORCA", 12);
  Gate(api2,"SUNNY", 13);
  Gate(api2,"UNQ", 14);
  Gate(api2,"TTT", 15);
  Gate(api2,"AART", 16);
  Gate(api2,"SLND", 17);
  Gate(api2,"WAG", 18);
  Gate(api2,"SLIM", 19);
  Gate(api2,"LIQ", 20);
  Gate(api2,"CYS", 21);
  Gate(api2,"CRP", 22);
  Gate(api2,"PSY", 23);
  Gate(api3,"POLIS", 24);
  Gate(api3,"ATLAS", 25);
  Gate(api3,"GARI", 26);
  Gate(api3,"NOS", 27);
  Gate(api3,"SVT", 28);
  Gate(api3,"FCON", 29);
  Gate(api3,"PRISM", 30);
  Gate(api3,"GOFX", 31);
  Gate(api3,"PORT", 32);
  Gate(api3,"SLRS", 33);
  Gate(api3,"PRT", 34);
  Gate(api3,"DIO", 35);
  Gate(api4,"ATS", 36);
  Gate(api4,"MDF", 37);
  Gate(api4,"MBS", 38);
  Gate(api4,"STEP", 39);
  Gate(api4,"SAMO", 40);
  Gate(api4,"SONAR", 41);
  Gate(api4,"SNY", 42);
  Gate(api4,"LARIX", 43);
  Gate(api4,"RIN", 44);
  Gate(api4,"APT", 45);
  Gate(api4,"SAO", 46);
  Gate(api4,"ZBC", 47);
  Gate(api5,"RATIO", 48);
  Gate(api5,"DELFI", 49);
  Gate(api5,"WNZ", 50);
  Gate(api5,"LIKE", 51);
  Gate(api5,"FIDA", 52);
  Gate(api5,"TULIP", 53);
  Gate(api5,"OXY", 54);
  Gate(api5,"MNGO", 55);
  Gate(api5,"MER", 56);
  Gate(api5,"ELU", 57);
  Gate(api5,"MAPS", 58);
  Gate(api6,"GST", 59);
  Gate(api6,"GMT", 60);
}, 4000);



function Gate(url,coins, row) {
  fetch(
    url+"https://api.gateio.ws/api/v4/spot/order_book?currency_pair=" +
      coins +
      "_USDT&limit=6",
  )
    .then((response) => response.json()) //parse json data
    .then(function (data) {
      var dataa = data.data;
      var priceBuy =
      // Aslında api'den 5 veri çekiliyor ancak sistemde yalnızca 4 sayı üzernden hesap yapılıyor
      // sayıyı artırıp daha orta bir değer bulmak mümkün
        (Number(data.asks[0][0]) +
          Number(data.asks[1][0]) +
          Number(data.asks[2][0]) +
          Number(data.asks[3][0])) /
        4;
      var priceBuyVolume =
        Number(data.asks[0][1]) +
        Number(data.asks[1][1]) +
        Number(data.asks[2][1]) +
        Number(data.asks[3][1]);
      var priceSell =
        (Number(data.bids[0][0]) +
          Number(data.bids[1][0]) +
          Number(data.bids[2][0]) +
          Number(data.bids[3][0])) /
        4;
      var priceSellVolume =
        Number(data.bids[0][1]) +
        Number(data.bids[1][1]) +
        Number(data.bids[2][1]) +
        Number(data.bids[3][1]);
      //console.log(coins+" "+data.data.bids);
      document.getElementsByClassName("gateBuy")[row].innerHTML =
        priceBuy.toFixed(5);
      document.getElementsByClassName("gatebuyVolume")[row].innerHTML =
        priceBuyVolume.toFixed(0);
      document.getElementsByClassName("gateSell")[row].innerHTML =
        priceSell.toFixed(5);
      document.getElementsByClassName("gatesellVolume")[row].innerHTML =
        priceSellVolume.toFixed(0);
    })
    .catch((error) => {});
}

/* Aslında çekilmek istenen token için link şuna benziyor;
https://api.gateio.ws/api/v4/spot/order_book?currency_pair=PORT_USDT&limit=5
*/