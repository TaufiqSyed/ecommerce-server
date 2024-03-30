const express = require('express')
const cors = require('cors')
const Product = require('./product')
// import sqlite3 from 'sqlite3'
const mongoose = require('mongoose')

;(async () => {
  await mongoose.connect(
    'mongodb+srv://elephanteyelid:passpasspass123@cluster0.e2rvhmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
})()

// this is a top-level await
// ;(async () => {
//   // open the database
//   db = await open({
//     filename: ':memory',
//     driver: sqlite3.Database,
//   })
//   db.exec(
//     'CREATE TABLE products (id TEXT, title TEXT, price TEXT, category TEXT, description TEXT, image TEXT'
//   )
// })()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/products', async function (req, res) {
  console.log(req.body)
  const id = req.body.id
  const title = req.body.title
  const price = req.body.price
  const category = req.body.category
  const description = req.body.description
  const image = req.body.image
  try {
    await Product.insertMany({
      id: id,
      title: title,
      price: price,
      category: category,
      description: description,
      image: image,
    })
    res.status(200).send()
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
})

app.get('/products', async function (req, res) {
  try {
    res.json(await Product.find())
    res.status(200).send()
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
})

app.get('/products/:id', async function (req, res) {
  try {
    res.json(await Product.findOne({ id: req.params.id }))
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
