// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const nav = require('./nav')
const scroll = require('./scroll')
const blog = require('./blog')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/nav', nav)
router.use('/scroll', scroll)
router.use('/blog', blog)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
