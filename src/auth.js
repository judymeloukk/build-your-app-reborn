const { findUser } = require("./users");

function login(username, password) {
  
  // Task 1: Ensure inputs are strings and are not empty/whitespace
  if (
    typeof username !== 'string' || 
    typeof password !== 'string' || 
    username.trim() === "" || 
    password.trim() === ""
  ) {
    return { success: false, message: "Invalid credentials" }; // Task 2: Unified message
  }
  
  // Task 3: Ensure password is at least 8 characters
  if (password.length < 8) {
    return { success: false, message: "Invalid credentials" }; // Task 2: Unified message
  }

  const user = findUser(username);
  
  // Task 2: Unified message if user is not found or password doesn't match
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
