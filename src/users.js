// بنستدعي ملف البيانات باستخدام require
// السهمين والشرطة (../) معناهم "اخرج بره فولدر src وبعدين ادخل فولدر data"
const users = require("../data/users.json");

function findUser(username) {
  // بنعمل search جوه ملف الـ JSON اللي قريناه
  return users.find(u => u.username === username);
}

module.exports = { findUser };
