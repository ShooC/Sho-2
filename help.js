
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ Slime Bot ❳━━━
┏━━━━━━━━━━━━━
┣━( 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 )
┃▤ ID : @${sender.split('@')[0]}
┃▤ Nama : ${namenya}
┃▤ Premium : ${premnya}
┣━━━━━━━━━━━━━━
┣━( 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 )
┃▤ Library : Baileys-MD
┃▤ Time : ${jam} WIB
┃▤ Date : ${tanggal}
┃▤ Terdaftar : ${usernya}
┃▤ Room Chat : ${romnya}
┣━━━━━━━━━━━━━
┣━❲ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}menu
┃୨୧︩︪˖ׄ  ${prefix}iklan
┃୨୧︩︪˖ׄ  ${prefix}rules
┃୨୧︩︪˖ׄ  ${prefix}owner
┃୨୧︩︪˖ׄ  ${prefix}infobot
┃୨୧︩︪˖ׄ  ${prefix}donasi
┃୨୧︩︪˖ׄ  ${prefix}donate
┃୨୧︩︪˖ׄ  ${prefix}sewabot
┃୨୧︩︪˖ׄ  ${prefix}groupbot
┃୨୧︩︪˖ׄ  ${prefix}ownerinfo
┃୨୧︩︪˖ׄ  ${prefix}infoowner
┣━━━━━━━━━━━━━━
┣━❲ 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}verify
┃୨୧︩︪˖ׄ  ${prefix}report
┃୨୧︩︪˖ׄ  ${prefix}request
┃୨୧︩︪˖ׄ  ${prefix}transfer
┃୨୧︩︪˖ׄ  ${prefix}menfess
┃୨୧︩︪˖ׄ  ${prefix}buatroom
┃୨୧︩︪˖ׄ  ${prefix}secretchat
┃୨୧︩︪˖ׄ  ${prefix}cekprem
┃୨୧︩︪˖ׄ  ${prefix}daftarprem
┃୨୧︩︪˖ׄ  ${prefix}changename
┣━━━━━━━━━━━━━━
┣━❲ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}error
┃୨୧︩︪˖ׄ  ${prefix}clearerr
┃୨୧︩︪˖ׄ  ${prefix}siaran
┃୨୧︩︪˖ׄ  ${prefix}session
┃୨୧︩︪˖ׄ  ${prefix}resetdb
┃୨୧︩︪˖ׄ  ${prefix}runtime
┃୨୧︩︪˖ׄ  ${prefix}setexif
┃୨୧︩︪˖ׄ  ${prefix}setwm
┃୨୧︩︪˖ׄ  ${prefix}setfooter
┃୨୧︩︪˖ׄ  ${prefix}setapikey
┃୨୧︩︪˖ׄ  ${prefix}setppbot
┃୨୧︩︪˖ׄ  ${prefix}addprem
┃୨୧︩︪˖ׄ  ${prefix}delprem
┃୨୧︩︪˖ׄ  ${prefix}bc
┃୨୧︩︪˖ׄ  ${prefix}bctext
┃୨୧︩︪˖ׄ  ${prefix}bcvideo
┃୨୧︩︪˖ׄ  ${prefix}bcaudio
┃୨୧︩︪˖ׄ  ${prefix}bcimage
┃୨୧︩︪˖ׄ  ${prefix}broadcast
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}kali 1 2
┃୨୧︩︪˖ׄ  ${prefix}bagi 1 2
┃୨୧︩︪˖ׄ  ${prefix}kurang 1 2
┃୨୧︩︪˖ׄ  ${prefix}tambah 1 2
┃୨୧︩︪˖ׄ  ${prefix}dellist key
┃୨୧︩︪˖ׄ  ${prefix}addlist key@response
┃୨୧︩︪˖ׄ  ${prefix}update key@response
┃୨୧︩︪˖ׄ  ${prefix}done <reply orderan>
┃୨୧︩︪˖ׄ  ${prefix}proses <reply orderan>
┃୨୧︩︪˖ׄ  ${prefix}list <only group>
┃୨୧︩︪˖ׄ  ${prefix}shop <only group>
┣━━━━━━━━━━━━━━
┣━❲ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}fitnah
┃୨୧︩︪˖ׄ  ${prefix}delete
┃୨୧︩︪˖ׄ  ${prefix}revoke
┃୨୧︩︪˖ׄ  ${prefix}tagall
┃୨୧︩︪˖ׄ  ${prefix}hidetag
┃୨୧︩︪˖ׄ  ${prefix}setdesc
┃୨୧︩︪˖ׄ  ${prefix}linkgrup
┃୨୧︩︪˖ׄ  ${prefix}infogroup
┃୨୧︩︪˖ׄ  ${prefix}setppgrup
┃୨୧︩︪˖ׄ  ${prefix}setnamegrup
┃୨୧︩︪˖ׄ  ${prefix}group open
┃୨୧︩︪˖ׄ  ${prefix}group close
┃୨୧︩︪˖ׄ  ${prefix}antilink on
┃୨୧︩︪˖ׄ  ${prefix}antilink off
┃୨୧︩︪˖ׄ  ${prefix}welcome on
┃୨୧︩︪˖ׄ  ${prefix}welcome off
┃୨୧︩︪˖ׄ  ${prefix}tiktokauto on
┃୨୧︩︪˖ׄ  ${prefix}tiktokauto off
┃୨୧︩︪˖ׄ  ${prefix}kick @tag
┃୨୧︩︪˖ׄ  ${prefix}demote @tag
┃୨୧︩︪˖ׄ  ${prefix}promote @tag
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}sadcat
┃୨୧︩︪˖ׄ  ${prefix}translate
┃୨୧︩︪˖ׄ  ${prefix}stalkff
┃୨୧︩︪˖ׄ  ${prefix}stalknpm
┃୨୧︩︪˖ׄ  ${prefix}stalkgithub
┃୨୧︩︪˖ׄ  ${prefix}balikhuruf
┃୨୧︩︪˖ׄ  ${prefix}balikangka
┃୨୧︩︪˖ׄ  ${prefix}besarkecil
┃୨୧︩︪˖ׄ  ${prefix}bilangangka
┣━━━━━━━━━━━━━━
┣━❲ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}tiktok
┃୨୧︩︪˖ׄ  ${prefix}ytmp3
┃୨୧︩︪˖ׄ  ${prefix}ytmp4
┃୨୧︩︪˖ׄ  ${prefix}pinterest
┃୨୧︩︪˖ׄ  ${prefix}playmp3
┃୨୧︩︪˖ׄ  ${prefix}playmp4
┃୨୧︩︪˖ׄ  ${prefix}gitclone
┃୨୧︩︪˖ׄ  ${prefix}mediafire
┃୨୧︩︪˖ׄ  ${prefix}wikimedia
┃୨୧︩︪˖ׄ  ${prefix}soundcloud
┃୨୧︩︪˖ׄ  ${prefix}infogempa
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}tts
┃୨୧︩︪˖ׄ  ${prefix}ttp
┃୨୧︩︪˖ׄ  ${prefix}ttp2
┃୨୧︩︪˖ׄ  ${prefix}attp
┃୨୧︩︪˖ׄ  ${prefix}attp2
┃୨୧︩︪˖ׄ  ${prefix}tourl
┃୨୧︩︪˖ׄ  ${prefix}upload
┃୨୧︩︪˖ׄ  ${prefix}toimg
┃୨୧︩︪˖ׄ  ${prefix}toimage
┃୨୧︩︪˖ׄ  ${prefix}tomp3
┃୨୧︩︪˖ׄ  ${prefix}toaudio
┃୨୧︩︪˖ׄ  ${prefix}tomp4
┃୨୧︩︪˖ׄ  ${prefix}tovideo
┃୨୧︩︪˖ׄ  ${prefix}emojimix
┃୨୧︩︪˖ׄ  ${prefix}emojmix
┃୨୧︩︪˖ׄ  ${prefix}emojinua
┃୨୧︩︪˖ׄ  ${prefix}mixemoji
┃୨୧︩︪˖ׄ  ${prefix}stiker
┃୨୧︩︪˖ׄ  ${prefix}sticker
┃୨୧︩︪˖ׄ  ${prefix}sgif
┃୨୧︩︪˖ׄ  ${prefix}stikergif
┃୨୧︩︪˖ׄ  ${prefix}stickergif
┃୨୧︩︪˖ׄ  ${prefix}swm
┃୨୧︩︪˖ׄ  ${prefix}stikerwm
┃୨୧︩︪˖ׄ  ${prefix}stickerwm
┃୨୧︩︪˖ׄ  ${prefix}smeme
┃୨୧︩︪˖ׄ  ${prefix}memestiker
┃୨୧︩︪˖ׄ  ${prefix}stikermeme
┃୨୧︩︪˖ׄ  ${prefix}stickermeme
┃୨୧︩︪˖ׄ  ${prefix}takesticker
┃୨୧︩︪˖ׄ  ${prefix}emojinua2
┃୨୧︩︪˖ׄ  ${prefix}mixemoji2
┃୨୧︩︪˖ׄ  ${prefix}emojmix2
┃୨୧︩︪˖ׄ  ${prefix}emojimix2
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}spamcall
┃୨୧︩︪˖ׄ  ${prefix}translate
┃୨୧︩︪˖ׄ  ${prefix}ssweb-pc
┃୨୧︩︪˖ׄ  ${prefix}ssweb-hp
┃୨୧︩︪˖ׄ  ${prefix}bitly_short
┃୨୧︩︪˖ׄ  ${prefix}cuttly_short
┃୨୧︩︪˖ׄ  ${prefix}tinyurl_short
┃୨୧︩︪˖ׄ  ${prefix}base32
┃୨୧︩︪˖ׄ  ${prefix}base64
┃୨୧︩︪˖ׄ  ${prefix}debase32
┃୨୧︩︪˖ׄ  ${prefix}debase64
┣━━━━━━━━━━━━━━
┣━❲ 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}sendbug 628xxx
┃୨୧︩︪˖ׄ  ${prefix}philips 628xxx
┃୨୧︩︪˖ׄ  ${prefix}philips2 628xxx
┃୨୧︩︪˖ׄ  ${prefix}philips3 628xxx
┃୨୧︩︪˖ׄ  ${prefix}santet @tag
┃୨୧︩︪˖ׄ  ${prefix}santet2 @tag
┃୨୧︩︪˖ׄ  ${prefix}santet3 @tag
┃୨୧︩︪˖ׄ  ${prefix}virtex 628xxx
┃୨୧︩︪˖ׄ  ${prefix}virtex2 628xxx
┃୨୧︩︪˖ׄ  ${prefix}virtex3 628xxx
┃୨୧︩︪˖ׄ  ${prefix}bug1 628xxx
┃୨୧︩︪˖ׄ  ${prefix}bug2 628xxx
┃୨୧︩︪˖ׄ  ${prefix}bug3 628xxx
┃୨୧︩︪˖ׄ  ${prefix}bug4 628xxx
┃୨୧︩︪˖ׄ  ${prefix}bug5 628xxx
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝘾𝙀𝙆 ❳
┃୨୧︩︪˖ׄ  ${prefix}cekjelek
┃୨୧︩︪˖ׄ  ${prefix}cekcantik
┃୨୧︩︪˖ׄ  ${prefix}cekganteng
┃୨୧︩︪˖ׄ  ${prefix}ceksad
┃୨୧︩︪˖ׄ  ${prefix}cekharam
┃୨୧︩︪˖ׄ  ${prefix}cekhalal
┃୨୧︩︪˖ׄ  ${prefix}cekbego
┃୨୧︩︪˖ׄ  ${prefix}cekanjing
┃୨୧︩︪˖ׄ  ${prefix}cekbiadab
┃୨୧︩︪˖ׄ  ${prefix}cekramah
┃୨୧︩︪˖ׄ  ${prefix}ceksatir
┃୨୧︩︪˖ׄ  ${prefix}cekmanis
┃୨୧︩︪˖ׄ  ${prefix}cekpahit
┃୨୧︩︪˖ׄ  ${prefix}cekhitam
┃୨୧︩︪˖ׄ  ${prefix}cekrasis
┃୨୧︩︪˖ׄ  ${prefix}cekbaik
┃୨୧︩︪˖ׄ  ${prefix}cekjahat
┃୨୧︩︪˖ׄ  ${prefix}cekkaya
┃୨୧︩︪˖ׄ  ${prefix}cekmiskin
┃୨୧︩︪˖ׄ  ${prefix}cekpintar
┃୨୧︩︪˖ׄ  ${prefix}cekbodoh
┃୨୧︩︪˖ׄ  ${prefix}cekimut
┃୨୧︩︪˖ׄ  ${prefix}cekkocak
┃୨୧︩︪˖ׄ  ${prefix}cekkadang
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙀𝙍𝙏𝙄𝙁𝙄𝙆𝘼𝙏 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}toloserti <nama>
┃୨୧︩︪˖ׄ  ${prefix}badgirlserti <nama>
┃୨୧︩︪˖ׄ  ${prefix}goodgirlserti <nama>
┃୨୧︩︪˖ׄ  ${prefix}fuckgirlserti <nama>
┃୨୧︩︪˖ׄ  ${prefix}bucinserti <nama>
┣━━━━━━━━━━━━━━
┣━❲ 𝙇𝙊𝙂𝙊 𝙈𝘼𝙆𝙀𝙍 ❳
┃୨୧︩︪˖ׄ  ${prefix}joker
┃୨୧︩︪˖ׄ  ${prefix}digital
┃୨୧︩︪˖ׄ  ${prefix}nulis
┃୨୧︩︪˖ׄ  ${prefix}nulis2
┃୨୧︩︪˖ׄ  ${prefix}quoteser
┃୨୧︩︪˖ׄ  ${prefix}quobucin
┃୨୧︩︪˖ׄ  ${prefix}rem
┃୨୧︩︪˖ׄ  ${prefix}girlneko
┃୨୧︩︪˖ׄ  ${prefix}sadboy
┃୨୧︩︪˖ׄ  ${prefix}kaneki
┃୨୧︩︪˖ׄ  ${prefix}lolimaker
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}buatroom 628xxx
┃୨୧︩︪˖ׄ  ${prefix}room <only owner>
┃୨୧︩︪˖ׄ  ${prefix}stopchat <only room>
┃୨୧︩︪˖ׄ  ${prefix}menfess 628xx|bot|hai
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 ❳
┃୨୧︩︪˖ׄ  ${prefix}pricelist <layanan>
┃୨୧︩︪˖ׄ  ${prefix}order <cara order>
┃୨୧︩︪˖ׄ  ${prefix}like jumlah|target
┃୨୧︩︪˖ׄ  ${prefix}view jumlah|target
┃୨୧︩︪˖ׄ  ${prefix}follower jumlah|username
┃୨୧︩︪˖ׄ  ${prefix}cekstatus <idtrx>
┃୨୧︩︪˖ׄ  ${prefix}komisi <owner only>
┃୨୧︩︪˖ׄ  ${prefix}tarikkomisi <owner only>
┣━━━━━━━━━━━━━━
┣━❲ 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}hilih <text>
┃୨୧︩︪˖ׄ  ${prefix}halah <text>
┃୨୧︩︪˖ׄ  ${prefix}huluh <text>
┃୨୧︩︪˖ׄ  ${prefix}heleh <text>
┃୨୧︩︪˖ׄ  ${prefix}holoh <text>
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}cecan
┃୨୧︩︪˖ׄ  ${prefix}cogan
┃୨୧︩︪˖ׄ  ${prefix}mobil
┃୨୧︩︪˖ׄ  ${prefix}islamic
┃୨୧︩︪˖ׄ  ${prefix}darkjokes
┃୨୧︩︪˖ׄ  ${prefix}boneka
┃୨୧︩︪˖ׄ  ${prefix}wallhp
┃୨୧︩︪˖ׄ  ${prefix}tatasurya
┃୨୧︩︪˖ׄ  ${prefix}programing
┣━━━━━━━━━━━━━━
┣━❲ 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}ramaljodoh
┃୨୧︩︪˖ׄ  ${prefix}ramalanjodoh
┃୨୧︩︪˖ׄ  ${prefix}nomorhoki
┃୨୧︩︪˖ׄ  ${prefix}artimimpi
┃୨୧︩︪˖ׄ  ${prefix}artinama
┃୨୧︩︪˖ׄ  ${prefix}sifatusaha
┃୨୧︩︪˖ׄ  ${prefix}tafsirmimpi
┃୨୧︩︪˖ׄ  ${prefix}pasangan
┃୨୧︩︪˖ׄ  ${prefix}suamiistri
┃୨୧︩︪˖ׄ  ${prefix}ramalcinta
┃୨୧︩︪˖ׄ  ${prefix}ramalancinta
┃୨୧︩︪˖ׄ  ${prefix}ramaljodohbali
┃୨୧︩︪˖ׄ  ${prefix}ramalanjodohbali
┃୨୧︩︪˖ׄ  ${prefix}cocoknama
┃୨୧︩︪˖ׄ  ${prefix}kecocokannama
┃୨୧︩︪˖ׄ  ${prefix}cocokpasangan
┃୨୧︩︪˖ׄ  ${prefix}kecocokanpasangan
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙎𝙐𝙋𝘼𝙉 𝙂𝘼𝘾𝙃𝘼 ❳
┃୨୧︩︪˖ׄ  ${prefix}rika
┃୨୧︩︪˖ׄ  ${prefix}bocil
┃୨୧︩︪˖ׄ  ${prefix}ukhty
┃୨୧︩︪˖ׄ  ${prefix}santuy
┃୨୧︩︪˖ׄ  ${prefix}hijaber
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 ❳
┃୨୧︩︪˖ׄ  ${prefix}fat
┃୨୧︩︪˖ׄ  ${prefix}fast
┃୨୧︩︪˖ׄ  ${prefix}slow
┃୨୧︩︪˖ׄ  ${prefix}bass
┃୨୧︩︪˖ׄ  ${prefix}deep
┃୨୧︩︪˖ׄ  ${prefix}tupai
┃୨୧︩︪˖ׄ  ${prefix}robot
┃୨୧︩︪˖ׄ  ${prefix}blown
┃୨୧︩︪˖ׄ  ${prefix}smooth
┃୨୧︩︪˖ׄ  ${prefix}earrape
┃୨୧︩︪˖ׄ  ${prefix}reverse
┃୨୧︩︪˖ׄ  ${prefix}nightcore
┣━━━━━━━━━━━━━━
┣━❲ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}gempa
┃୨୧︩︪˖ׄ  ${prefix}jadwaltv
┃୨୧︩︪˖ׄ  ${prefix}gempanow
┃୨୧︩︪˖ׄ  ${prefix}bioskopnow
┃୨୧︩︪˖ׄ  ${prefix}latintoaksara
┃୨୧︩︪˖ׄ  ${prefix}aksaratolatin
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ❳
┃୨୧︩︪˖ׄ  ${prefix}dadu
┃୨୧︩︪˖ׄ  ${prefix}anjing
┃୨୧︩︪˖ׄ  ${prefix}patrick
┃୨୧︩︪˖ׄ  ${prefix}bucinstick
┃୨୧︩︪˖ׄ  ${prefix}gawrgura
┃୨୧︩︪˖ׄ  ${prefix}amongus
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┃୨୧︩︪˖ׄ  ${prefix}audio${ad++}
┣━━━━━━━━━━━━━━
┣━❲ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}goblokcek 
┃୨୧︩︪˖ׄ  ${prefix}jelekcek 
┃୨୧︩︪˖ׄ  ${prefix}gaycek
┃୨୧︩︪˖ׄ  ${prefix}lesbicek
┃୨୧︩︪˖ׄ  ${prefix}gantengcek 
┃୨୧︩︪˖ׄ  ${prefix}cantikcek
┃୨୧︩︪˖ׄ  ${prefix}begocek 
┃୨୧︩︪˖ׄ  ${prefix}suhucek
┃୨୧︩︪˖ׄ  ${prefix}pintercek
┃୨୧︩︪˖ׄ  ${prefix}jagocek
┃୨୧︩︪˖ׄ  ${prefix}nolepcek
┃୨୧︩︪˖ׄ  ${prefix}babicek
┃୨୧︩︪˖ׄ  ${prefix}bebancek
┃୨୧︩︪˖ׄ  ${prefix}baikcek
┃୨୧︩︪˖ׄ  ${prefix}jahatcek
┃୨୧︩︪˖ׄ  ${prefix}anjingcek
┃୨୧︩︪˖ׄ  ${prefix}haramcek
┃୨୧︩︪˖ׄ  ${prefix}pakboycek
┃୨୧︩︪˖ׄ  ${prefix}pakgirlcek
┃୨୧︩︪˖ׄ  ${prefix}sangecek 
┃୨୧︩︪˖ׄ  ${prefix}bapercek
┃୨୧︩︪˖ׄ  ${prefix}fakboycek
┃୨୧︩︪˖ׄ  ${prefix}alimcek
┃୨୧︩︪˖ׄ  ${prefix}suhucek
┃୨୧︩︪˖ׄ  ${prefix}fakgirlcek
┃୨୧︩︪˖ׄ  ${prefix}kerencek
┃୨୧︩︪˖ׄ  ${prefix}wibucek
┣━━━━━━━━━━━━━━
┣━❲ 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}milf
┃୨୧︩︪˖ׄ  ${prefix}loli
┃୨୧︩︪˖ׄ  ${prefix}wallml
┃୨୧︩︪˖ׄ  ${prefix}waifu
┃୨୧︩︪˖ׄ  ${prefix}husbu
┃୨୧︩︪˖ׄ  ${prefix}cosplay
┃୨୧︩︪˖ׄ  ${prefix}ppcouple
┃୨୧︩︪˖ׄ  ${prefix}wallpaperislami
┃୨୧︩︪˖ׄ  ${prefix}wallpaperinori
┃୨୧︩︪˖ׄ  ${prefix}wallpaperanime
┃୨୧︩︪˖ׄ  ${prefix}wallpapergamer
┃୨୧︩︪˖ׄ  ${prefix}wallpapermeme
┃୨୧︩︪˖ׄ  ${prefix}wallpaperprogamer
┃୨୧︩︪˖ׄ  ${prefix}wallpaperteknologi
┃୨୧︩︪˖ׄ  ${prefix}wallpapercyber
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}cry
┃୨୧︩︪˖ׄ  ${prefix}hug
┃୨୧︩︪˖ׄ  ${prefix}pat
┃୨୧︩︪˖ׄ  ${prefix}bully
┃୨୧︩︪˖ׄ  ${prefix}lick
┃୨୧︩︪˖ׄ  ${prefix}kiss
┃୨୧︩︪˖ׄ  ${prefix}awoo
┃୨୧︩︪˖ׄ  ${prefix}waifu
┃୨୧︩︪˖ׄ  ${prefix}shinobu
┃୨୧︩︪˖ׄ  ${prefix}cuddle
┃୨୧︩︪˖ׄ  ${prefix}megumin
┃୨୧︩︪˖ׄ  ${prefix}slap
┃୨୧︩︪˖ׄ  ${prefix}neko
┃୨୧︩︪˖ׄ  ${prefix}wink
┃୨୧︩︪˖ׄ  ${prefix}dance
┃୨୧︩︪˖ׄ  ${prefix}poke
┃୨୧︩︪˖ׄ  ${prefix}glomp
┃୨୧︩︪˖ׄ  ${prefix}bite
┃୨୧︩︪˖ׄ  ${prefix}nom
┃୨୧︩︪˖ׄ  ${prefix}handhold
┃୨୧︩︪˖ׄ  ${prefix}highfive
┃୨୧︩︪˖ׄ  ${prefix}wave
┃୨୧︩︪˖ׄ  ${prefix}smug
┃୨୧︩︪˖ׄ  ${prefix}smile
┃୨୧︩︪˖ׄ  ${prefix}bonk
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}cerpen-sejarah
┃୨୧︩︪˖ׄ  ${prefix}cerpen-sedih
┃୨୧︩︪˖ׄ  ${prefix}cerpen-sastra
┃୨୧︩︪˖ׄ  ${prefix}cerpen-romantis
┃୨୧︩︪˖ׄ  ${prefix}cerpen-rohani
┃୨୧︩︪˖ׄ  ${prefix}cerpen-rindu
┃୨୧︩︪˖ׄ  ${prefix}cerpen-remaja
┃୨୧︩︪˖ׄ  ${prefix}cerpen-ramadhan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-petualangan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-persahabatan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-perpisahan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-perjuangan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-penyesalan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-pengorbanan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-pengalaman
┃୨୧︩︪˖ׄ  ${prefix}cerpen-pendidikan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-penantian
┃୨୧︩︪˖ׄ  ${prefix}cerpen-patahhati
┃୨୧︩︪˖ׄ  ${prefix}cerpen-olahraga
┃୨୧︩︪˖ׄ  ${prefix}cerpen-nasionalisme
┃୨୧︩︪˖ׄ  ${prefix}cerpen-nasihat
┃୨୧︩︪˖ׄ  ${prefix}cerpen-motivasi
┃୨୧︩︪˖ׄ  ${prefix}cerpen-misteri
┃୨୧︩︪˖ׄ  ${prefix}cerpen-mengharukan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-malaysia
┃୨୧︩︪˖ׄ  ${prefix}cerpen-liburan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-kristen
┃୨୧︩︪˖ׄ  ${prefix}cerpen-korea
┃୨୧︩︪˖ׄ  ${prefix}cerpen-kisahnyata
┃୨୧︩︪˖ׄ  ${prefix}cerpen-keluarga
┃୨୧︩︪˖ׄ  ${prefix}cerpen-kehidupan
┃୨୧︩︪˖ׄ  ${prefix}cerpen-jepang
┃୨୧︩︪˖ׄ  ${prefix}cerpen-inspiratif
┃୨୧︩︪˖ׄ  ${prefix}cerpen-gokil
┃୨୧︩︪˖ׄ  ${prefix}cerpen-galau
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintasejati
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintasegitiga
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintasedih
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintaromantis
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintapertama
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cintaislami
┃୨୧︩︪˖ׄ  ${prefix}cerpen-cinta
┃୨୧︩︪˖ׄ  ${prefix}cerpen-budaya
┃୨୧︩︪˖ׄ  ${prefix}cerpen-bahasasunda
┃୨୧︩︪˖ׄ  ${prefix}cerpen-bahasajawa
┃୨୧︩︪˖ׄ  ${prefix}cerpen-bahasainggris
┃୨୧︩︪˖ׄ  ${prefix}cerpen-bahasadaerah
┃୨୧︩︪˖ׄ  ${prefix}cerpen-anak
┣━━━━━━━━━━━━━━
┣━❲ 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}yuri
┃୨୧︩︪˖ׄ  ${prefix}ero
┃୨୧︩︪˖ׄ  ${prefix}foot
┃୨୧︩︪˖ׄ  ${prefix}ass
┃୨୧︩︪˖ׄ  ${prefix}cuckold
┃୨୧︩︪˖ׄ  ${prefix}cum
┃୨୧︩︪˖ׄ  ${prefix}hentai
┃୨୧︩︪˖ׄ  ${prefix}gangbang
┃୨୧︩︪˖ׄ  ${prefix}femdom
┃୨୧︩︪˖ׄ  ${prefix}ahegao
┃୨୧︩︪˖ׄ  ${prefix}glasses
┃୨୧︩︪˖ׄ  ${prefix}jahy
┃୨୧︩︪˖ׄ  ${prefix}orgy
┃୨୧︩︪˖ׄ  ${prefix}pussy
┃୨୧︩︪˖ׄ  ${prefix}thighs
┃୨୧︩︪˖ׄ  ${prefix}panties
┃୨୧︩︪˖ׄ  ${prefix}thighs
┃୨୧︩︪˖ׄ  ${prefix}masturbation
┃୨୧︩︪˖ׄ  ${prefix}chiisaihentai
┃୨୧︩︪˖ׄ  ${prefix}trap
┃୨୧︩︪˖ׄ  ${prefix}blowjob
┃୨୧︩︪˖ׄ  ${prefix}yaoi
┃୨୧︩︪˖ׄ  ${prefix}ecchi
┃୨୧︩︪˖ׄ  ${prefix}hentai
┃୨୧︩︪˖ׄ  ${prefix}ahegao
┃୨୧︩︪˖ׄ  ${prefix}hololewd
┃୨୧︩︪˖ׄ  ${prefix}sideoppai
┃୨୧︩︪˖ׄ  ${prefix}animefeets
┃୨୧︩︪˖ׄ  ${prefix}animebooty
┃୨୧︩︪˖ׄ  ${prefix}animethighss
┃୨୧︩︪˖ׄ  ${prefix}hentaiparadise
┃୨୧︩︪˖ׄ  ${prefix}animearmpits
┃୨୧︩︪˖ׄ  ${prefix}hentaifemdom
┃୨୧︩︪˖ׄ  ${prefix}lewdanimegirls
┃୨୧︩︪˖ׄ  ${prefix}biganimetiddies
┃୨୧︩︪˖ׄ  ${prefix}animebellybutton
┃୨୧︩︪˖ׄ  ${prefix}hentai4everyone
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}sound1
┃୨୧︩︪˖ׄ  ${prefix}sound2
┃୨୧︩︪˖ׄ  ${prefix}sound3
┃୨୧︩︪˖ׄ  ${prefix}sound4
┃୨୧︩︪˖ׄ  ${prefix}sound5
┃୨୧︩︪˖ׄ  ${prefix}sound6
┃୨୧︩︪˖ׄ  ${prefix}sound7
┃୨୧︩︪˖ׄ  ${prefix}sound8
┃୨୧︩︪˖ׄ  ${prefix}sound9
┃୨୧︩︪˖ׄ  ${prefix}sound10
┃୨୧︩︪˖ׄ  ${prefix}sound11
┃୨୧︩︪˖ׄ  ${prefix}sound12
┃୨୧︩︪˖ׄ  ${prefix}sound13
┃୨୧︩︪˖ׄ  ${prefix}sound14
┃୨୧︩︪˖ׄ  ${prefix}sound15
┃୨୧︩︪˖ׄ  ${prefix}sound16
┃୨୧︩︪˖ׄ  ${prefix}sound17
┃୨୧︩︪˖ׄ  ${prefix}sound18
┃୨୧︩︪˖ׄ  ${prefix}sound19
┃୨୧︩︪˖ׄ  ${prefix}sound20
┃୨୧︩︪˖ׄ  ${prefix}sound21
┃୨୧︩︪˖ׄ  ${prefix}sound22
┃୨୧︩︪˖ׄ  ${prefix}sound23
┃୨୧︩︪˖ׄ  ${prefix}sound24
┃୨୧︩︪˖ׄ  ${prefix}sound25
┃୨୧︩︪˖ׄ  ${prefix}sound26
┃୨୧︩︪˖ׄ  ${prefix}sound27
┃୨୧︩︪˖ׄ  ${prefix}sound28
┃୨୧︩︪˖ׄ  ${prefix}sound29
┃୨୧︩︪˖ׄ  ${prefix}sound30
┃୨୧︩︪˖ׄ  ${prefix}sound31
┃୨୧︩︪˖ׄ  ${prefix}sound32
┃୨୧︩︪˖ׄ  ${prefix}sound33
┃୨୧︩︪˖ׄ  ${prefix}sound34
┃୨୧︩︪˖ׄ  ${prefix}sound35
┃୨୧︩︪˖ׄ  ${prefix}sound36
┃୨୧︩︪˖ׄ  ${prefix}sound37
┃୨୧︩︪˖ׄ  ${prefix}sound38
┃୨୧︩︪˖ׄ  ${prefix}sound39
┃୨୧︩︪˖ׄ  ${prefix}sound40
┃୨୧︩︪˖ׄ  ${prefix}sound41
┃୨୧︩︪˖ׄ  ${prefix}sound42
┃୨୧︩︪˖ׄ  ${prefix}sound43
┃୨୧︩︪˖ׄ  ${prefix}sound44
┃୨୧︩︪˖ׄ  ${prefix}sound45
┃୨୧︩︪˖ׄ  ${prefix}sound46
┃୨୧︩︪˖ׄ  ${prefix}sound47
┃୨୧︩︪˖ׄ  ${prefix}sound48
┃୨୧︩︪˖ׄ  ${prefix}sound49
┃୨୧︩︪˖ׄ  ${prefix}sound50
┃୨୧︩︪˖ׄ  ${prefix}sound51
┃୨୧︩︪˖ׄ  ${prefix}sound52
┃୨୧︩︪˖ׄ  ${prefix}sound53
┃୨୧︩︪˖ׄ  ${prefix}sound54
┃୨୧︩︪˖ׄ  ${prefix}sound55
┃୨୧︩︪˖ׄ  ${prefix}sound56
┃୨୧︩︪˖ׄ  ${prefix}sound57
┃୨୧︩︪˖ׄ  ${prefix}sound58
┃୨୧︩︪˖ׄ  ${prefix}sound59
┃୨୧︩︪˖ׄ  ${prefix}sound60
┃୨୧︩︪˖ׄ  ${prefix}sound61
┃୨୧︩︪˖ׄ  ${prefix}sound62
┃୨୧︩︪˖ׄ  ${prefix}sound63
┃୨୧︩︪˖ׄ  ${prefix}sound64
┃୨୧︩︪˖ׄ  ${prefix}sound65
┃୨୧︩︪˖ׄ  ${prefix}sound66
┃୨୧︩︪˖ׄ  ${prefix}sound67
┃୨୧︩︪˖ׄ  ${prefix}sound68
┃୨୧︩︪˖ׄ  ${prefix}sound69
┃୨୧︩︪˖ׄ  ${prefix}sound70
┃୨୧︩︪˖ׄ  ${prefix}sound71
┃୨୧︩︪˖ׄ  ${prefix}sound72
┃୨୧︩︪˖ׄ  ${prefix}sound73
┃୨୧︩︪˖ׄ  ${prefix}sound74
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}metallic text
┃୨୧︩︪˖ׄ  ${prefix}naruto text
┃୨୧︩︪˖ׄ  ${prefix}butterfly text
┃୨୧︩︪˖ׄ  ${prefix}flaming text
┃୨୧︩︪˖ׄ  ${prefix}shadow text
┃୨୧︩︪˖ׄ  ${prefix}cup text
┃୨୧︩︪˖ׄ  ${prefix}cup1 text
┃୨୧︩︪˖ׄ  ${prefix}romance text
┃୨୧︩︪˖ׄ  ${prefix}smoke text
┃୨୧︩︪˖ׄ  ${prefix}burnpaper text
┃୨୧︩︪˖ׄ  ${prefix}lovemessage text
┃୨୧︩︪˖ׄ  ${prefix}undergrass text
┃୨୧︩︪˖ׄ  ${prefix}love text
┃୨୧︩︪˖ׄ  ${prefix}coffe text
┃୨୧︩︪˖ׄ  ${prefix}woodheart text
┃୨୧︩︪˖ׄ  ${prefix}woodenboard text
┃୨୧︩︪˖ׄ  ${prefix}summer3d text
┃୨୧︩︪˖ׄ  ${prefix}wolfmetal text
┃୨୧︩︪˖ׄ  ${prefix}nature3d text
┃୨୧︩︪˖ׄ  ${prefix}underwater text
┃୨୧︩︪˖ׄ  ${prefix}goldenrose text
┃୨୧︩︪˖ׄ  ${prefix}summernature text
┃୨୧︩︪˖ׄ  ${prefix}letterleaves text
┃୨୧︩︪˖ׄ  ${prefix}glowingneon text
┃୨୧︩︪˖ׄ  ${prefix}fallleaves text
┃୨୧︩︪˖ׄ  ${prefix}flamming text
┃୨୧︩︪˖ׄ  ${prefix}harrypotter text
┃୨୧︩︪˖ׄ  ${prefix}carvedwood text
┃୨୧︩︪˖ׄ  ${prefix}tiktok text1 text2
┃୨୧︩︪˖ׄ  ${prefix}arcade8bit text1 text2
┃୨୧︩︪˖ׄ  ${prefix}battlefield4 text1 text2
┃୨୧︩︪˖ׄ  ${prefix}pubg text1 text2
┣━━━━━━━━━━━━━━
┣━❲ 𝙀𝙋𝙃𝙊𝙏𝙊 𝙈𝙀𝙉𝙐 ❳
┃୨୧︩︪˖ׄ  ${prefix}wetglass text
┃୨୧︩︪˖ׄ  ${prefix}multicolor3d text
┃୨୧︩︪˖ׄ  ${prefix}watercolor text
┃୨୧︩︪˖ׄ  ${prefix}luxurygold text
┃୨୧︩︪˖ׄ  ${prefix}galaxywallpaper text
┃୨୧︩︪˖ׄ  ${prefix}lighttext text
┃୨୧︩︪˖ׄ  ${prefix}beautifulflower text
┃୨୧︩︪˖ׄ  ${prefix}puppycute text
┃୨୧︩︪˖ׄ  ${prefix}royaltext text
┃୨୧︩︪˖ׄ  ${prefix}heartshaped text
┃୨୧︩︪˖ׄ  ${prefix}birthdaycake text
┃୨୧︩︪˖ׄ  ${prefix}galaxystyle text
┃୨୧︩︪˖ׄ  ${prefix}hologram3d text
┃୨୧︩︪˖ׄ  ${prefix}greenneon text
┃୨୧︩︪˖ׄ  ${prefix}glossychrome text
┃୨୧︩︪˖ׄ  ${prefix}greenbush text
┃୨୧︩︪˖ׄ  ${prefix}metallogo text
┃୨୧︩︪˖ׄ  ${prefix}noeltext text
┃୨୧︩︪˖ׄ  ${prefix}glittergold text
┃୨୧︩︪˖ׄ  ${prefix}textcake text
┃୨୧︩︪˖ׄ  ${prefix}starsnight text
┃୨୧︩︪˖ׄ  ${prefix}wooden3d text
┃୨୧︩︪˖ׄ  ${prefix}textbyname text
┃୨୧︩︪˖ׄ  ${prefix}writegalacy text
┃୨୧︩︪˖ׄ  ${prefix}galaxybat text
┃୨୧︩︪˖ׄ  ${prefix}snow3d text
┃୨୧︩︪˖ׄ  ${prefix}birthdayday text
┃୨୧︩︪˖ׄ  ${prefix}goldplaybutton text
┃୨୧︩︪˖ׄ  ${prefix}silverplaybutton text
┃୨୧︩︪˖ׄ  ${prefix}freefire text
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀 ❳
┃୨୧︩︪˖ׄ  ${prefix}bj
┃୨୧︩︪˖ׄ  ${prefix}ero
┃୨୧︩︪˖ׄ  ${prefix}ppcp
┃୨୧︩︪˖ׄ  ${prefix}cum
┃୨୧︩︪˖ׄ  ${prefix}feet
┃୨୧︩︪˖ׄ  ${prefix}yuri
┃୨୧︩︪˖ׄ  ${prefix}trap
┃୨୧︩︪˖ׄ  ${prefix}lewd
┃୨୧︩︪˖ׄ  ${prefix}feed
┃୨୧︩︪˖ׄ  ${prefix}eron
┃୨୧︩︪˖ׄ  ${prefix}solo
┃୨୧︩︪˖ׄ  ${prefix}gasm
┃୨୧︩︪˖ׄ  ${prefix}poke
┃୨୧︩︪˖ׄ  ${prefix}anal
┃୨୧︩︪˖ׄ  ${prefix}holo
┃୨୧︩︪˖ׄ  ${prefix}tits
┃୨୧︩︪˖ׄ  ${prefix}kuni
┃୨୧︩︪˖ׄ  ${prefix}kiss
┃୨୧︩︪˖ׄ  ${prefix}erok
┃୨୧︩︪˖ׄ  ${prefix}smug
┃୨୧︩︪˖ׄ  ${prefix}baka
┃୨୧︩︪˖ׄ  ${prefix}solog
┃୨୧︩︪˖ׄ  ${prefix}feetg
┃୨୧︩︪˖ׄ  ${prefix}lewdk
┃୨୧︩︪˖ׄ  ${prefix}waifu
┃୨୧︩︪˖ׄ  ${prefix}pussy
┃୨୧︩︪˖ׄ  ${prefix}femdom
┃୨୧︩︪˖ׄ  ${prefix}cuddle
┃୨୧︩︪˖ׄ  ${prefix}hentai
┃୨୧︩︪˖ׄ  ${prefix}eroyuri
┃୨୧︩︪˖ׄ  ${prefix}cum_jpg
┃୨୧︩︪˖ׄ  ${prefix}blowjob
┃୨୧︩︪˖ׄ  ${prefix}erofeet
┃୨୧︩︪˖ׄ  ${prefix}holoero
┃୨୧︩︪˖ׄ  ${prefix}classic
┃୨୧︩︪˖ׄ  ${prefix}erokemo
┃୨୧︩︪˖ׄ  ${prefix}fox_girl
┃୨୧︩︪˖ׄ  ${prefix}futanari
┃୨୧︩︪˖ׄ  ${prefix}lewdkemo
┃୨୧︩︪˖ׄ  ${prefix}wallpaper
┃୨୧︩︪˖ׄ  ${prefix}pussy_jpg
┃୨୧︩︪˖ׄ  ${prefix}kemonomimi
┃୨୧︩︪˖ׄ  ${prefix}nsfw_avatar
┗━━━━━━━━━━━━`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *Menu Donasi* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 085607831412
A/N: Sho

*Payment Dana dan gopay*
Number: 085607831412
A/N: Sho

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini${monoSpace}

──「 *Thank You* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

           NO      INFO
 `
}
