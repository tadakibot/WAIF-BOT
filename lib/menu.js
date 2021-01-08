exports.menu = (id, Botname,corohelp,tampilTanggal, tampilWaktu,ig,kapanboton)=>{
	return `🤖[*DAFTAR MENU ${Botname}*]🤖
	
hai ngab, ${id.split("@s.whatsapp.net")[0]} 
Berikut adalah daftar commands

=====command======
1.>say
2.>nulis
3.>tts2
4.>ytmp5
5.>yt
6.>bitly
=====command 2======
1.>harinasional
2.>cooltext
3.>nekoanime
4.>otakudesu
5.>spamcall
6.>bucin
======command 3=======
1.>spamsms
2.>waifu
3.>pokemon
4.>ping
5.>ytmp4
======command inti=======
1.>help
2.>donate
3.>info
=======random=======
*${tampilTanggal}*
*${tampilWaktu}*

INFORMASI COVID-19 TERBARU!

POSITIF: *${corohelp.confirmed.value}*
SEMBUH: *${corohelp.recovered.value}*
MENINGGAL: *${corohelp.deaths.value}*
UPDATE: *${corohelp.lastUpdate}*

 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
 kapan bot aktif = ${kapanbotaktif} 
 
 🤖[ *POWERED BY ${BotName}* ]🤖`
}