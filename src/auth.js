const { findUser } = require("./users");

function login(username, password) {
  
  // Task 1: تأكدي إن المدخلات نصوص ومش فاضية
  if (typeof username !== 'string' || typeof password !== 'string' || username.trim() === "") {
    return { success: false, message: "Invalid credentials" }; // Task 2: توحيد الرسالة
  }
  
  // Task 3: التأكد إن الباسورد مش أقل من 8 حروف
  if (password.length < 8) {
    return { success: false, message: "Invalid credentials" }; // Task 2: توحيد الرسالة
  }

  const user = findUser(username);
  
  // Task 2: توحيد رسالة الخطأ لو اليوزر مش موجود أو الباسورد غلط
  if (!user || user.password !== password) {
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

module.exports = { login };
