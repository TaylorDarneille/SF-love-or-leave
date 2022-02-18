const express = require('express')
const app = express()
// import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
// tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// HOME
app.get('/', (req, res)=>{
    res.render('index.ejs')
})
// FAVORITE ANIMALS route
app.get('/animals', (req, res)=>{
    const bestAnimals = ['giraffe', 'sea cucumber', 'corn snake']
    res.render('animals.ejs', {animals: bestAnimals})
})
// FAVORITE FOODS route
app.get('/foods', (req, res)=>{
    const bestFoods = ['tacos', 'land cucumbers', 'blackberries']
    res.render('foods.ejs', {foods: bestFoods})
})
// WORST MOVIES route
app.get('/movies', (req, res)=>{
    const worstMovies = ['Battlefield Earth', 'Titanic', 'Mega Shark vs Giant Octupus']
    res.render('movies.ejs', {movies: worstMovies})
})

// WORST PRODUCTS route
app.get('/products', (req, res)=>{
    const worstProducts = ['bump-it', 'mystery color ketchup', 'cheetos lip balm']
    res.render('products.ejs', {products: worstProducts})
})

app.listen(8000, ()=>{
    console.log('Nodemon out here running through my final brain cells 🧠')
})