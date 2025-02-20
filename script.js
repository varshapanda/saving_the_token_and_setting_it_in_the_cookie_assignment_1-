const jwt = require('jsonwebtoken');
const SECRET_KEY ="ybgdnteg3528#$r3bdj";

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, SECRET_KEY, {expiresIn:'1h'});
  
}

const decrypt = (token) => {
  // return decoded payload
  try{
    return jwt.verify(token, SECRET_KEY);
  }
  catch(err){
    console.log('Invalid token');
    return null;
  }
}

const token = encrypt({user:"SomeRandomDoe", role:"admin"});
console.log('Encrypted Token:', token);

const data = decrypt(token);
console.log("Decrypted data:", data);

if (data) {
  console.log("Success");
} else {
  console.log("Decryption failed. Invalid token.");
}

module.exports = {
  encrypt,
  decrypt
}
