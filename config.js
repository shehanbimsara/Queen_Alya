//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURlUkVmdGdTM09FS3JlOE95OGdMejlZQ0JQVFhBNitVV1hsV28yb0xVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmNNM01pSWJFZ0Q5b0cvblg4aXhtMHdmNE5BNGM2eVdvZWxDZXdDWFczVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSkdSWldaRFgxc2ZTcUI0R3RPcTFpQytabUV4akhQUERObDBUNjlEZEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiN2doVmVvS0V1dVpEMXZka0IvZ1U5OVdqQUY0ZlNzcC8vM0ptai9GSVZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MSWdRSkJQUDYraVp1MGp6TVMrRHpSbDg0OUVIazRFYzA4Y01FSHg5MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1dDhzenpVaTRQTG80RElsY3VQeFRyajdqUzRzaVNKQzE1UWRia2FYVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BOOVZiVi9WdG9RK2ZXM2xOMnNnWGR6NXdGTXd1cHhZb3A5dkRsZDgzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEozVTZXVEQrNGVuMElWMUREQWhCUVhwdGFKYU5SMEZRL09BM2FJVURGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIWmZNSVgycEM3WmVBL2JzV3VZbUdXMmVvTVJzdnBuOVB2Mmo2d0psb09FMVVkeXphNzAzbXU4LzV2alRmYitvL3k3VGhqa0VabndKV0xrS2ZKMEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6Ill3bG0xcVVoS0dHd1lSRUs0T2ppVkQrQktiSlB4ZWt5Wm4xOEVNbVdGbk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFITV9aejI4VEppXzF2Z2VkZHI0LVEiLCJwaG9uZUlkIjoiZGQ5ZWY5NDEtZjQ5Ni00ZmE3LTgxMmMtYTE1MzNhZGU2MTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEL2g3V3lxMFNXKzdMVFJnR2tiWlJGendQcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCM3ZTd3BteTRUa2cxMnNUanBVTmRldW1YS0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEZQWEJHWFQiLCJtZSI6eyJpZCI6Ijk0NzIwNTcxMzAyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTk9UWSBTSEVIQU4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1Snc4SUVFUENKZ3JZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgrU3U5aURJcXk4Nk9SK3hvRnRPaG9IdWgxV2d3QlVkT3laTVlWQ1laQWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN2S1ZDbHEwdC91QlhIODBQUlNwM1h6L0tHcjJKbHRHMHdzaTd5REtOM2YwQVhpdVowMlg1dHdpcVcvelhtRHdGU3E4OXNjRndIUm0rZ3ZZNGsyb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrTHdzN2w1U1pTb3poWmhiekJWY2ZCdjd0ZXBRV2VNMUgyUUFwa1FlSjNnNWhJSDdURWthUEpwaG00NW9FQnRYVTZQa0FzMmQxcktXKzl5eXZ2RDlBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNTcxMzAyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWZrcnZZZ3lLc3ZPamtmc2FCYlRvYUI3b2RWb01BVkhUc21UR0ZRbUdRSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzg5Mjk4OX0=
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURlUkVmdGdTM09FS3JlOE95OGdMejlZQ0JQVFhBNitVV1hsV28yb0xVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmNNM01pSWJFZ0Q5b0cvblg4aXhtMHdmNE5BNGM2eVdvZWxDZXdDWFczVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSkdSWldaRFgxc2ZTcUI0R3RPcTFpQytabUV4akhQUERObDBUNjlEZEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiN2doVmVvS0V1dVpEMXZka0IvZ1U5OVdqQUY0ZlNzcC8vM0ptai9GSVZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MSWdRSkJQUDYraVp1MGp6TVMrRHpSbDg0OUVIazRFYzA4Y01FSHg5MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1dDhzenpVaTRQTG80RElsY3VQeFRyajdqUzRzaVNKQzE1UWRia2FYVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BOOVZiVi9WdG9RK2ZXM2xOMnNnWGR6NXdGTXd1cHhZb3A5dkRsZDgzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEozVTZXVEQrNGVuMElWMUREQWhCUVhwdGFKYU5SMEZRL09BM2FJVURGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIWmZNSVgycEM3WmVBL2JzV3VZbUdXMmVvTVJzdnBuOVB2Mmo2d0psb09FMVVkeXphNzAzbXU4LzV2alRmYitvL3k3VGhqa0VabndKV0xrS2ZKMEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6Ill3bG0xcVVoS0dHd1lSRUs0T2ppVkQrQktiSlB4ZWt5Wm4xOEVNbVdGbk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFITV9aejI4VEppXzF2Z2VkZHI0LVEiLCJwaG9uZUlkIjoiZGQ5ZWY5NDEtZjQ5Ni00ZmE3LTgxMmMtYTE1MzNhZGU2MTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEL2g3V3lxMFNXKzdMVFJnR2tiWlJGendQcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCM3ZTd3BteTRUa2cxMnNUanBVTmRldW1YS0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEZQWEJHWFQiLCJtZSI6eyJpZCI6Ijk0NzIwNTcxMzAyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTk9UWSBTSEVIQU4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1Snc4SUVFUENKZ3JZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgrU3U5aURJcXk4Nk9SK3hvRnRPaG9IdWgxV2d3QlVkT3laTVlWQ1laQWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN2S1ZDbHEwdC91QlhIODBQUlNwM1h6L0tHcjJKbHRHMHdzaTd5REtOM2YwQVhpdVowMlg1dHdpcVcvelhtRHdGU3E4OXNjRndIUm0rZ3ZZNGsyb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrTHdzN2w1U1pTb3poWmhiekJWY2ZCdjd0ZXBRV2VNMUgyUUFwa1FlSjNnNWhJSDdURWthUEpwaG00NW9FQnRYVTZQa0FzMmQxcktXKzl5eXZ2RDlBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNTcxMzAyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWZrcnZZZ3lLc3ZPamtmc2FCYlRvYUI3b2RWb01BVkhUc21UR0ZRbUdRSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzg5Mjk4OX0=|
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
