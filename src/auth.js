const { findUser } = require("./users");

function login(username, password) {
  const genericError = "Invalid credentials";

  // Basic validation & Task: Reject if password < 8 characters
  if (
    typeof username !== 'string' || 
    typeof password !== 'string' || 
    username.trim() === "" || 
    password.length < 8
  ) {
    logFailure(username);
    return { success: false, message: genericError };
  }

  const user = findUser(username);
  
  // Task: Unified message for "not found" or "wrong password"
  if (!user || user.password !== password) {
    logFailure(username);
    return { success: false, message: genericError };
  }

  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

// Logging mechanism for failed attempts
function logFailure(username) {
  const timestamp = new Date().toISOString();
  // If username is undefined or empty, log as 'Unknown'
  const targetUser = username || "Unknown User"; 
  console.log(`[${timestamp}] FAILED LOGIN ATTEMPT: ${targetUser}`);
}

module.exports = { login };
