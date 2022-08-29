//Coinlerin contrat adresleri ve decimal değerleri.

const Token_JET = "JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz"; //Decimal 9
const Token_REAL = "AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb"; //Decimal 9
const Token_StarLaunch = "HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW"; //Decimal 6
const Token_C98 = "C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9"; //Decimal 6
const Token_MEDIA = "ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs"; //Decimal 6
const Token_GENE = "GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz"; //Decimal 9
const Token_COPE = "8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh"; //Decimal 6
setInterval(function () {
  //(contart1,contrat2,giriş değeri,giriş değeri kopya,giriş decimal,cıkışdecimal,satır indeksi);
   JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_JET,1500,1500,6,9,0);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_REAL,1500,1500,6,9,1);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_StarLaunch,1500,1500,6,6,2);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_C98,1500,1500,6,6,3);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_MEDIA,1500,1500,6,6,4);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_GENE,1500,1500,6,9,5);
  JupiterUSDTOCOİNF(api6,Tether_Usdt,Token_COPE,1500,1500,6,6,6);

}, 5000);
function JupiterUSDTOCOİNF(
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

      document.getElementsByClassName("mercurBuyf")[row].innerHTML = mercurBuy;
      document.getElementsByClassName("mercurbuyVolumef")[row].innerHTML =
        mercurBuyVolume;
      mercusellvolume = mercurBuyVolume;
      JupiterCOİNTOUSDTF(
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

function JupiterCOİNTOUSDTF(
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

        document.getElementsByClassName("mercurSellf")[row].innerHTML =
          mercurSell;
        document.getElementsByClassName("mercursellVolumef")[row].innerHTML =
          mercurSellVolume;
      })
      .catch((error) => {});
  }
}
