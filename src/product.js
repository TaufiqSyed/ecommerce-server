const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  id: String,
  title: String,
  price: String,
  category: String,
  description: String,
  image: String,
})

module.exports = mongoose.model('products', ProductSchema)
