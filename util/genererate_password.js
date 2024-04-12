const bcrypt = require('bcrypt');

async function encryptPassword(username, login, password){
    
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(password, salt)
    
    console.log(`(UUID(), '${username}', '${login}', '${hash}', '${salt}'),`)
}

encryptPassword("Everton Barbosa", "everton@corp.com.br", "admin123")
encryptPassword("Fabrício Portela", "fabricio@corp.com.br", "admin123")
encryptPassword("Gustavo Peixoto", "gustavo@corp.com.br", "admin123")
encryptPassword("Igor Lopes", "igor@corp.com.br", "admin123")
encryptPassword("João Vitor Wolfart", "joao@corp.com.br", "admin123")
encryptPassword("Marcelo Mesquita", "marcelo@corp.com.br", "admin123")
encryptPassword("Raphael", "raphael@corp.com.br", "admin123")
encryptPassword("Leidy Olinto", "leidy@corp.com.br", "admin123")