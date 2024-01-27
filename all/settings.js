const fs = require('fs')
const chalk = require('chalk')

global.owner = "6282192773770"
global.namabot = "ShinzuuMD"
global.namaCreator = "Hardzsenpaii`"
global.autoJoin = false
global.antilink = false
global.versisc = 'V9'
global.namasc = 'SC NO SCAN V9 '
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.merchant = 'M220510ACSX4641HS'
global.apitokendo = 'dop_v1_9a0906d0b316369de5ba2eec0ef74a045e8e2f22567eff00876bd2194132def1'
global.secret = 'b1d9e744f099744007c225a6fdd33578406aabfdb8f1ff6aabca6b400a8c4445'
global.domain = 'https://rioprivate.diimzhostt.xyz' // Isi Domain Lu
global.apikeyy = 'ptla_TRHsC3EuDAgywDPt57GxXK8mkncVc7EIjSCslCwU3fu' // Isi Apikeyy Plta Lu
global.apikeyotp = '' /// Isi Apikey Otp Lu
global.domainotp = '' /// Isi Domain Otp Lu
global.capikeyy = 'ptlc_vLJ2yQZSpNCyTQSupOCbIQ4eOkqbizXZnq2FDpFuXwT' // Isi Apikeyy Pltc Lu
global.signature = '2a180d152ceac6b2a5e7b8053a4e1b02'
//MAU PEDIA
global.api_key = "iTn0HbFfeqHVgSEVVFGfRd6z26QuDntcqh0gWnExriecgS2F2PzHojNrgOySz85S"//@zallDev
global.api_id = "s0IJboQFZHznkYQ0"//@zallDev
global.keyopenai = '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'
// SOSMED
global.youtubeOwner1 = 'https://youtube.com/@HardzBanxv' // Youtube Lu
global.telegramOwner1 = 'https://t.me/HardzModsOfc' // Tele Lu
global.grupOwner1 = 'https://chat.whatsapp.com/ DyUFyZz6ZQeGY16v3nYBzm' // Group Lu
global.instagramOwner2 = 'htts://www.instagram.com/@yanz_official2' // Ig Lu
global.youtubeOwner2 = 'https://youtube.com/@YANZOFFICIAL-18' // Youtube Lu
global.telegramOwner2 = 'https://t.me/Yanzofficial' // Tele Lu
global.grupOwner2 = 'https://chat.whatsapp.com' // Group Lu
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By ShinzuuMD"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})