setInterval(function()
{
  JupiterUSDTOCOİNH(api6, Tether_Usdt, Token_Hubble,  1500, 1500, 6, 6, 0);
  JupiterUSDTOCOİNH(api6, Tether_Usdt, Token_SNS,     1500, 1500, 6, 9, 1);
}, 3500);

function JupiterUSDTOCOİNH(url,inputMint,outputMint,inAmount,mount,inDecimal,outDecimal,row)
{
  var mercurBuy = 0;
  var mercurBuyVolume = 0;
  inAmount = inAmount * Math.pow(10, inDecimal);

  fetch(url +"https://quote-api.jup.ag/v1/quote?inputMint=" +inputMint +"&outputMint=" +outputMint +"&amount=" +inAmount +"&slippage=0.5&feeBps=4")
    .then((response) => response.json()) //parse json data
    .then(function (data)
    {
      var dataa = data.data[0].outAmount;

      if (inDecimal < outDecimal)
      {
        inAmount = inAmount * Math.pow(10, outDecimal - inDecimal);
        mercurBuy = (inAmount / dataa).toFixed(5);
        mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
      }

      if (inDecimal == outDecimal)
      {
        mercurBuy = (inAmount / dataa).toFixed(5);
        mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
      }

      if (inDecimal > outDecimal)
      {
        inAmount = inAmount / Math.pow(10, inDecimal - outDecimal);
        mercurBuy = (inAmount / dataa).toFixed(5);
        mercurBuyVolume = (mount / (inAmount / dataa)).toFixed(0);
      }

      document.getElementsByClassName("mercurBuyhb")      [row].innerHTML = mercurBuy;
      document.getElementsByClassName("mercurbuyVolumehb")[row].innerHTML = mercurBuyVolume;
      mercusellvolume = mercurBuyVolume;
      JupiterCOİNTOUSDTH(url,outputMint,inputMint,inDecimal,outDecimal,row,mercurBuyVolume);
    })
    .catch((error) => {});
}

function JupiterCOİNTOUSDTH(url,outputMint,inputMint,inDecimal,outDecimal,row,outAmount)
{
  var mercurSell = 0;
  var mercurSellVolume = outAmount;
  if (outAmount > 1)
  {
    outAmount = outAmount * Math.pow(10, outDecimal);
    fetch(url +"https://quote-api.jup.ag/v1/quote?inputMint=" +outputMint +"&outputMint=" +inputMint +"&amount=" +outAmount +"&slippage=0.5&feeBps=4")
      .then((response) => response.json())
      .then(function (data)
      {
        var dataa = data.data[0].outAmount;

        if (outDecimal < inDecimal)
        {
          outAmount = outAmount * Math.pow(10, inDecimal - outDecimal);
          mercurSell = (dataa / outAmount).toFixed(5);
        }

        if (outDecimal == inDecimal)
        {
          mercurSell = (dataa / outAmount).toFixed(5);
        }

        if (outDecimal > inDecimal)
        {
          outAmount = outAmount / Math.pow(10, outDecimal - inDecimal);
          mercurSell = (dataa / outAmount).toFixed(5);
        }

        document.getElementsByClassName("mercurSellhb")       [row].innerHTML = mercurSell;
        document.getElementsByClassName("mercursellVolumehb") [row].innerHTML = mercurSellVolume;
      })
      .catch((error) => {});
  }
}
