require('dotenv').config()

let titulo = document.getElementById('titulo')
titulo.innerHTML = `Api Key = ${process.env.API_KEY}`
console.log(`Api Key = ${process.env.API_KEY}`)