// models/userModel.js

const connection = require('../config/db');

class User {
  
  register(user) {
    const { login, password, salt } = user
    const query = `
      INSERT INTO users 
        (id, login, password, salt, isCandidate)
      VALUES 
        (UUID(), '${login}', '${password}', '${salt}', FALSE)
      RETURNING id;
    `
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        console.log("errors: ", error)
        console.log("results: ", results)
        if (error) return reject(error)
        return resolve(results[0].id)
      })
    })
  }

  updateById(id, changes){
    
    let updateFields = [];
    
    for(let key in changes){
      let value = changes[key]
      updateFields.push(`${key}='${value}'`)
    }
    
    let query = `
      UPDATE users 
      SET 
        ${updateFields.join(', ')}
      WHERE id='${id}';
    `
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        
        if(error) return reject(error)
        
        if(results.changedRows == 0) return reject("Nenhuma linha modificada")
        
        if(results.changedRows > 1) return reject("Mais de uma linha modificada")
        
        return resolve("Sucesso")
      })
    })
  }

  getAllUsers(){
    const query = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) return reject(error)
        return resolve(results)
      })
    })
  }

  getUserByLogin(login){
    const query = `SELECT * FROM users WHERE login='${login}'`
    return new Promise((resolve, reject)=>{
      connection.query(query, (error, results) => {
        if(error) throw new Error('Database error')
        resolve(results.rows[0])
      })
    })
  }

  getUserById(id){
    const query = `SELECT * FROM users WHERE id=${id}`
    return new Promise((resolve, reject)=>{
      connection.query(query, (error, results) => {
        if(error) return reject(error)
        resolve(results)
      })
    })
  }

  removeUserById(id){
    const deleteQuery = `DELETE FROM users WHERE id=${id}`
    return new Promise((resolve, reject)=>{
      connection.query(query, (error, results) => {
        if(error) return reject(error)
        resolve(results)
      })
    })
  }

}

module.exports = User