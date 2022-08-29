//Coinlerin contrat adresleri ve decimal değerleri.


const Token_ARNM ='3Dy8KFyvpUJ8nfRCbvk4HLWjNRRzxiVhTeE9PQF9RARD';         //Decimal 6
const Token_HAWK ='BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE';         //Decimal 6
const Token_SLCL ='SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV';         //Decimal 9
const Token_RACEFI = "AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU"; //Decimal 6
const Token_PLD = "2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur"; //Decimal 6
setInterval(function () {
    //(contart1,contrat2,giriş değeri,giriş değeri kopya,giriş decimal,cıkışdecimal,satır indeksi);
    JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_Hubble, 500, 500, 6, 6, 0);
  JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_ARNM, 1000, 1000, 6, 6, 1);
  JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_HAWK, 1000, 1000, 6, 6, 2);
  JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_SLCL, 1000, 1000, 6, 9, 3);
  JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_RACEFI, 1000, 1000, 6, 6, 4);
  JupiterUSDTOCOİNKC(api7,Tether_Usdt, Token_PLD, 1000, 1000, 6, 6, 5);
  }, 5000);
  function JupiterUSDTOCOİNKC(
    url,
    inputMint,
    outputMint,
    inAmount,
    mount,
    inDecimal,
    outDecimal,
    row
  ) {
    var mercurBuy = 0;
    var mercurBuyVolume = 0;
  
    //Giriş değeri coin decimal değeri üzerinden hesaplanma formulü.
    //Apiye hesaplanmış hali girilir.
    //Giriş değer = giriş değeri * 10 üzeri Coin decimal.
  
    inAmount = inAmount * Math.pow(10, inDecimal);
    //Http istek atılan apinin linki
    let encodeurl="https://quote-api.jup.ag/v1/quote?inputMint=" +
    inputMint +
    "&outputMint=" +
    outputMint +
    "&amount=" +
    inAmount +
    "&slippage=0.5&feeBps=4";
    fetch(
    url+encodeurl
    )
      .then((response) => response.json()) //parse json data
      .then(function (data) {
        var dataa = data.data[0].outAmount;
  
        //giriş çıkış decimal değerleri farklı olduğu için birbirlerine eşitlenmesi gerekir.
  
        //örneğin usdt decimal 6 sonar watch 9 giriş değeri usdt üzerinden hesaplanıp çıkan sonucu
        //(Büyük Decimal - Kücük Decimal) 9-6 = 3  (Sonuc = Sonuc * Decimal Fark ) Sonuc = Sonuc * 3;
        if (inDecimal < outDecimal) {
          inAmount = inAmount * Math.pow(10, outDecimal - inDecimal);
  
          mercurBuy = (inAmount / dataa).toFixed(5);
          mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
        }
  
        if (inDecimal == outDecimal) {
          mercurBuy = (inAmount / dataa).toFixed(5);
          mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
        }
  
        if (inDecimal > outDecimal) {
          inAmount = inAmount / Math.pow(10, inDecimal - outDecimal);
          mercurBuy = (inAmount / dataa).toFixed(5);
          mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
        }
  
        document.getElementsByClassName("mercurBuykc")[row].innerHTML = mercurBuy;
        document.getElementsByClassName("mercurbuyVolumekc")[row].innerHTML =
          mercurBuyVolume;
        mercusellvolume = mercurBuyVolume;
        JupiterCOİNTOUSDTKC(
          url,
          outputMint,
          inputMint,
          inDecimal,
          outDecimal,
          row,
          mercurBuyVolume
        );
      })
      .catch((error) => {
       
      });
  }
  
  function JupiterCOİNTOUSDTKC(
    url,
    outputMint,
    inputMint,
    inDecimal,
    outDecimal,
    row,
    outAmount
  ) {
    // Adet değerleri girilen dolar değerine karşılık gelen adetleri giriş adeti olarak aldık.
    // Outamoun = inputAmout;
  
    var mercurSell = 0;
    var mercurSellVolume = outAmount;
  
    if (outAmount > 1) {
      outAmount = outAmount * Math.pow(10, outDecimal);
  let encodeurll=    "https://quote-api.jup.ag/v1/quote?inputMint=" +
  outputMint +
  "&outputMint=" +
  inputMint +
  "&amount=" +
  outAmount +
  "&slippage=0.5&feeBps=4";
      fetch(url+encodeurll)
        .then((response) => response.json()) //parse json data
        .then(function (data) {
          var dataa = data.data[0].outAmount;
  
          if (outDecimal < inDecimal) {
            outAmount = outAmount * Math.pow(10, inDecimal - outDecimal);
            mercurSell = (dataa / outAmount).toFixed(5);
          }
  
          if (outDecimal == inDecimal) {
            mercurSell = (dataa / outAmount).toFixed(5);
          }
  
          if (outDecimal > inDecimal) {
            outAmount = outAmount / Math.pow(10, outDecimal - inDecimal);
            mercurSell = (dataa / outAmount).toFixed(5);
          }
  
          document.getElementsByClassName("mercurSellkc")[row].innerHTML =
            mercurSell;
          document.getElementsByClassName("mercursellVolumekc")[row].innerHTML =
            mercurSellVolume;
        })
        .catch((error) => {});
    }
  }
  