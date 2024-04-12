const bcrypt = require('bcrypt');

async function encryptPassword(username, login, password){
    
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(password, salt)
    
    console.log(`(UUID(), '${username}', '${login}', '${hash}', '${salt}'),`)
}