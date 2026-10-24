// Educational authentication example. No hardcoded passwords.
const users = new Map();
function register(username, password) {
  if (!username || !password || password.length < 8) return { ok: false, message: 'Invalid registration' };
  users.set(username, password); // Demo only: production requires password hashing and persistent storage.
  return { ok: true };
}
function login(username, password) {
  return { ok: users.has(username) && users.get(username) === password };
}
module.exports = { register, login };
