// Veri isimlerinde, isimlerin bütün tablolarda aynı olması şart aksi halde eksik veri çeker

let gate = ["SHILL(1000$)", "SOLR(500$)", "CSTR(200$)","SCY (1000$)", "BLOCK (2000$)","XTAG(500$)","CWAR(2000$)","SBR (1000$)","CHICKS (3000$)","SLC (2000$)","Dfl (1000$)", "MEAN (3000$)","Orca (1000$)", "SUNNY(1000$)","UNQ(500$)", "TTT(3000$)","AART (1000$)","Solend (1000$)","WAG(250$)","SLIM(3000$)","LIQ(250$)","CYS(250$)", "CRP(800$)","PSY(1500$)", "Polis(2000$)","Star Atlas(2000$)","GARI(1000$)","NOSA(1000$)","SVT(1000$)","FCON(3000$)","PRİSM(3000$)","GOFX(1000$)","PORT(500$)","SOLRİSE(200$)","PRT(1500$)","DECİMATED(1000$)","ATLASDEX(1000$)","MDF(150$)","MBS(2000$)","STEP(1000$)","SAMOYED(3000$)","SONAR(500$)","SNY(100$)","LARİX (1000$)","ALDRİN (500$)","APT(2000$)","Sator(400$)","ZEBEC(3000$)","RATIO (500$)","DELFI(200$)","Winerz(1500$)","LIKE(1500$)","FIDA(250$)","TULIP(750$)","OXY(500$)","MNGO(1500$)","MER(1500$)","Elumia (1500$)","MAPS (500$)","GST(1500$)","GMT(1500$)"];
      
for (let i = 0; i < gate.length; i++) {
  let satir ="<tr><td><input type='checkbox' class='checkg'></td></td><td class='coins'><b>" + gate[i] + "</b></td><td class='gateBuy'>" + 
      0+"</td> <td class='mercurSell'>"+
      0+"</td><td class='gatebuyVolume'>"+
      0+"</td><td class='mercursellVolume'>"+
      0+"</td><td class='profitableDüz'>"+
      0+"</td><td class='mercurBuy'>"+
      0+"</td><td class='gateSell'>"+
      0+"</td><td class='mercurbuyVolume'>"+
      0+"</td><td class='gatesellVolume'>"
      +0+"</td><td class='profitableTers'>"+0+"</td></tr>";

  $("#gate").append(satir);
}
let ftx = ["JET (1500$)","REAL (1500$)", "STARS (1500$)","C98 (1500$)","MEDIA (1500$)","GENE (1500$)","COPE (1500$)","MAPS (500$)","FIDA(250$)","OXY(500$)","MNGO(1500$)","STEP(1000$)","SOLRİSE(200$)","SNY(100$)","Star Atlas(2000$)","Polis(2000$)", "PRİSM(3000$)","Dfl (1000$)","Solend (1000$)","PORT(500$)","MBS(2000$)","PSY(1500$)" ,"GST(1500$)","GMT(1500$)"];
for (let i = 0; i < ftx.length; i++) {
  let satir ="<tr><td><input type='checkbox' class='checkf'></td></td><td class='coinsf'><b>" + ftx[i] 
      + "</b></td><td class='ftxBuy'>" + 
      0+"</td> <td class='mercurSellf'>"+
      0+"</td><td class='ftxbuyVolume'>"+
      0+"</td><td class='mercursellVolumef'>"+
      0+"</td><td class='profitableDüzf'>"+
      0+"</td><td class='mercurBuyf'>"+
      0+"</td><td class='ftxSell'>"+
      0+"</td><td class='mercurbuyVolumef'>"+
      0+"</td><td class='ftxsellVolume'>"
      +0+"</td><td class='profitableTersf'>"+0+"</td></tr>";

  $("#ftx").append(satir);
}

let huobi= ["HBB (1500$)","SNS (1500$)","ATLASDEX(1000$)","SLC (2000$)","GARI(1000$)","Sator(400$)","DECİMATED(1000$)","ZEBEC(3000$)","LIKE(1500$)","GST(1500$)","GMT(1500$)"];
for (let i = 0; i < huobi.length; i++) {
  let satir ="<tr><td><input type='checkbox' class='checkh'></td></td><td class='coinsh'><b>" + huobi[i] 
  + "</b></td><td class='hbBuy'>" + 
      0+"</td> <td class='mercurSellhb'>"+
      0+"</td><td class='hbbuyVolume'>"+
      0+"</td><td class='mercursellVolumehb'>"+
      0+"</td><td class='profitableDüzhb'>"+
      0+"</td><td class='mercurBuyhb'>"+
      0+"</td><td class='hbSell'>"+
      0+"</td><td class='mercurbuyVolumehb'>"+
      0+"</td><td class='hbsellVolume'>"
      +0+"</td><td class='profitableTershb'>"+0+"</td></tr>";

  $("#huobi").append(satir);
}


let kucoin = ["HBB (500$)","ARNM (1000$)","HAWK (1000$)","SLCL (1000$)","RACEFI (1000$)","PLD (1000$)","SHILL(1000$)","SOLR(500$)","XTAG(500$)","CWAR(2000$)","GARI(1000$)","ZEBEC(3000$)","LIKE(1500$)","GST(1500$)","GMT(1500$)"];
for (let i = 0; i < kucoin.length; i++) {
  let satir ="<tr><td><input type='checkbox' class='checkk'></td></td><td class='coinsk'><b>" + kucoin[i]
   + "</b></td><td class='kcBuy'>" + 
      0+"</td> <td class='mercurSellkc'>"+
      0+"</td><td class='kcbuyVolume'>"+
      0+"</td><td class='mercursellVolumekc'>"+
      0+"</td><td class='profitableDüzkc'>"+
      0+"</td><td class='mercurBuykc'>"+
      0+"</td><td class='kcSell'>"+
      0+"</td><td class='mercurbuyVolumekc'>"+
      0+"</td><td class='kcsellVolume'>"
      +0+"</td><td class='profitableTerskc'>"+0+"</td></tr>";

  $("#kucoin").append(satir);
}