let titulo = document.getElementById('titulo')
titulo.innerHTML = `Api Key = ${process.env.API_KEY}`
require('dotenv').config()
console.log(`Api Key = ${process.env.API_KEY}`)