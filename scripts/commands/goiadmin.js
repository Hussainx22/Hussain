module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100071009500533") {
    var aid = ["100071009500533"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _নয়ন বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- Dont mention my boss🫂💔", "Mention dis na bolod boss ekon sumu babir inbox a😌😘","Boss busy amake bolo🫦😘"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","Abar mention dile sumu babi re bole demu😎😤","HUSSAIN বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া একটা গফ দে 😒😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স🐸🫦","মেনশন দিসনা পারলে একটা গফ দে🤭🫶","Mantion_দিস না বাঁলপাঁক্না HUSSAI প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
