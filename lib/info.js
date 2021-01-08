exports.info = (id, Botname, corohelp, tampilTanggal, tampilWaktu, ig, kapanboton) => {
	return `🤖[ *MENU ${Botname}* ]🤖
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 
Berikut adalah info pada bot ini,tak banyak info :)

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

 INFO BOT! :

=> *AUTHOR*: Anggery
=> *YOUTUBE*: Gamerz wibu official ™️

📺 *Iklan* :

yang mau follow sialakan
 Follow akun instagram admin ${ig}

⚠️ INFORMASI COVID-19 TERBARU!

POSITIF: *${corohelp.confirmed.value}*
SEMBUH: *${corohelp.recovered.value}*
MENINGGAL: *${corohelp.deaths.value}*
UPDATE: *${corohelp.lastUpdate}*

 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

Mau pasang iklan di *${Botname} ?*
WA : *${whatsapplu}*
  
Gunakan dengan bijak ‼️
Bot ini berjalan ${kapanboton} ‼️

  
🤖[ *POWERED BY ${Botname}* ]🤖`
}