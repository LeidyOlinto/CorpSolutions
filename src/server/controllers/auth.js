const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

class AuthController {

    async register(req, res) {
        const { login, password } = req.body
        
        const hash = await bcrypt.hash(password, 10)

        try {
            const userModel = new UserModel();
            const result = await userModel.register(login, hash)
            
            res.status(201).json({id: result })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async login(req, res) {
        const { login, password } = req.body
        const userModel = new UserModel()
        
        try {            
            const foundUser = await userModel.getUserByLogin(login)       

            const isMatch = await bcrypt.compare(password, foundUser.password)
            
            if(!isMatch) return res.status(403).send("Usuário ou senha incorreta")
            
            return res.status(200).send("Autenticado")
            
        } catch(e){
            res.status(500).send("Erro interno do servidor")
        }
        
        /*
        const accessToken =
            jwt.sign(
                { id: result.rows[0].id },
                process.env.PRIVATE_KEY,
                { expiresIn: process.env.EXPIRES_IN }
            );
        
        res
            .cookie("access_token", accessToken, { httpOnly: true, secure: false })
            .cookie("user_id", result.rows[0].id, { httpOnly: true, secure: false })
            .status(200)
            .json({ message: "Usuário conectado com Sucesso" });
        */
    }
    /*
    async logout(req, res) {
        if(!req.cookies.access_token){
            res
            .status(200)
            .json({ message: "Usuário ja está desconectado" });
        }

        res
        .clearCookie("access_token")
        .clearCookie("user_id")
        .status(200)
        .json({ message: "Usuário desconectado com Sucesso" });
    }
    */


}

module.exports = AuthController