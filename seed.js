const db = require("./models")

const Vegetable = db.model("vegetable")
const Gardener = db.model("gardener")
const Plot = db.model("plot")

db.sync({ force: true }).then(() => {
    console.log("Database synced")
    return Promise.all([
        Vegetable.create({ name: "Carrot", color: "Orange" }),
        Vegetable.create({ name: "Tomato", color: "Red" }),
        Vegetable.create({ name: "Cucumber", color: "Green" }),
        Vegetable.create({ name: "Pepper", color: "Yellow" }),
        Vegetable.create({ name: "Pepper", color: "Red" }),
    ])
})
    .then(() => {
        return Promise.all([
            Gardener.create({ name: "Victor", age: "23" , favoriteVegetableId: '1'}),
            Gardener.create({ name: "Steve", age: "25" , favoriteVegetableId: '2' }),
            Gardener.create({ name: "Kevin", age: "19"  , favoriteVegetableId: '3'}),
            Gardener.create({ name: "George", age: "20"  , favoriteVegetableId: '4'}),
            Gardener.create({ name: "Emma", age: "21"  , favoriteVegetableId: '5'})
        ])
})
.then(() => {
    return Promise.all([
        Plot.create({ size: "23" , shaded: true, gardenerId:1}),
        Plot.create({ size: "25" , shaded: false, gardenerId:2}),
        Plot.create({ size: "19"  , shaded: true, gardenerId:3}),
        Plot.create({ size: "20"  , shaded: false, gardenerId:4}),
        Plot.create({ size: "21"  , shaded: true, gardenerId:5})
    ])
}).then(() => db.close())
    .catch(err => {
        console.log("Error, note connected to the database")
        console.log(err)

        db.close()


    })

