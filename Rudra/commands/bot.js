const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Kya Tu ELvish Bhai Ke Aage Bolega🙄" , "Cameraman Jaldi Focus Kro 📸" , "Lagdi Lahore di aa🙈" , "Chay pe Chaloge" , "Mere liye Chay Bana Kar LA ,Pura din Dekho Bot BoT🙄" , "Din vicho tere Layi Teym Kadd ke, Kardi me Promise     Milan aungi" ,  "Yee bat Delhi tak jayegi" , "Je koi shaq ni , Kari check ni" , "ME HERAAN HU KI TUM BINA DIMAG KESE REH LETE HO☹️" , "sheHar me Hai rukka baeje Rao Saab ka🙄" , "Bewafa Nikali re tu🙂🤨", "Systemmmmmmm😴" , "Leja Leja tenu 7 samundra paar🙈🙈", "Laado puche manne kyu tera rang kala" , "Moye moye moye moye🙆🏻‍♀🙆🏻‍♀" , "Ye dukh kahe nahi khatm hota 🙁" , "Tum to dokebaz ho" , "you just looking like a wow😶" , "Mera aasmaan dhunde teri zamin" , "Kal ana abhi lunch time hai" , "Jab dekho B0T B0T b0T😒😒", "Chhodo na koi dekh lega🤭", "Kab ayega mere banjaare" , "Tum wahi ho na ,jisko.me.nahi janti 🙂" , "Ye I love you kya hota hai" , "Sunai deta hai mujhe behri nahi hu me   😒" , "so elegent, so beautiful , just looking like a wow🤭" , "began🙂" , "Aayein🤔" , "I Love you baby , mera recharge khtm hone wala h" , "paani paani uncle ji" , "apne Labhar ko dhoka do , daling hme bhi moka do🙈" , "Arry Bas Kar🤣😛" , "Me ni To Kon Be" , "naam adiya kumar 7vi kaksha me padhte hai favret subject begon😘" , "Mera Dimag Mat Khaya kro😒😒" , "Chuppp Saatvi Fail😒" , "Saste Nashe Kab Band kroge" , "Mai Jaanu Ke sath Busy hu yar, mujhe mat balao" , "Haye Jaanu Mujhe Yaad Kiya🙈" , "Hayee ese mt bulaya kro, mujhe sharm aati h" , "System pe system betha rahi chhori bot ki" , "Naach meri Bulbul tujhe pesa milega" , "me idhar se hu aap kidhar se ho" , "Khelega Free Fire🙈🙈" , "aye haye oye hoye aye haye oye hoye😍 bado badi bado badi😘" , "e halo bhai darr rha hai kya" , "akh ladi bado badi" , "haaye garmi😕" , "Ao kabhi haweli pe😍" , "Khelega Free Fire🥴" , "Hallo bai tu darr raha hai kya" , "janu bula raha h mujhe" , "I cant live without you babu😘" , "haa meri jaan" , "Agye Phirse Bot Bot Krne🙄" , "konse color ki jacket pehne ho umm btao na😚" , "dhann khachh booyaah"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }







if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Hass hass ke danT dikhana band kr, toothpaste ka ad lagta tu 😂🪥", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Pagal laugh kr rha jese light ka bill tu bharta ho 😂💡", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Pasina nikal rha ya chori pakri gai? 😅🤣", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("Hans hans ke lungi gili kr di be 😂👙", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("Rona band kr, warna log samjhein gey mehngaai ka asar hai 🥲💸", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("Aankh maarna chor de flirtu, yahan sab tere jese expert hain 😏💃", threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("Aeeyy hoye kissi na dia 😘, zara repeat to kr k dikha mujhe bhi do 😜", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍")) {
     return api.sendMessage("Itna pyar mujhe koi ex bhi nhi krta tha 🥰🔥", threadID);
   };

   if ((event.body.toLowerCase() == "🥳")) {
     return api.sendMessage("Party warti lag rhi ha, mujhe bhi bula lo na biryani khani ha 😋🎉", threadID);
   };

   if ((event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("Seedha muh leke ao, ulta banda sirf TikTok pe acha lagta hai 😝📱", threadID);
   };

   if ((event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("Yeh wali smile dekh k lagta ha chappal andar chhupa rakhi hai 👡🙂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("Itni masoomiyat! Mujhe toh apne gunah yaad aa gaye 🥺🫶", threadID);
   };

   if ((event.body.toLowerCase() == "😑")) {
     return api.sendMessage("Yeh muh dekh k lagta ha roti banai aur jal gai 😂🍞", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🫣")) {
     return api.sendMessage("Chup rehna chahty ho ya kiss chhupa rahe ho 😏🫢", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("Yeh wala muh bana k mummy se chappal zarur khai ho gi 😒🩴", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("Itna gussa? Lagta hai chai mein cheeni kam thi ☕😤", threadID);
   };

   if ((event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "☹️")) {
     return api.sendMessage("Udaas na ho meri jaan, warna teri smile ban karwa dun ga 😘🥀", threadID);
   };

   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("Confused mat ho, dil de do sab saaf ho jaye ga 🫶😂", threadID);
   };

   if ((event.body.toLowerCase() == "👻")) {
     return api.sendMessage("Bhoooot bhi tujhe dekh k darr jaaye 😂👻", threadID);
   };

   if ((event.body.toLowerCase() == "😎")) {
     return api.sendMessage("Style maar raha? Tera yeh swag to sabzi mandi mein bhi nhi bikta 😎🧅", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sharam ati ha? Ab to screenshot le ke sabko dikhaonga 😹📸", threadID);
   };

   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("Itna pyar? Shadi ki date bhi fix kr lo ab 😘💍", threadID);
   };

   if ((event.body.toLowerCase() == "👀")) {
     return api.sendMessage("Aankhein phaad k kya dekh raha? Muh pe kuch laga ha kya? 👀😝", threadID);
   };

   if ((event.body.toLowerCase() == "👋")) {
     return api.sendMessage("Bye bolne se pehle kiss to do 😘👋", threadID);
   };

   if ((event.body.toLowerCase() == "🧸")) {
     return api.sendMessage("Teddy mujhe dedo warna rona aa jaye ga 🧸🥺", threadID);
   };
