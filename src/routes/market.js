
const {Router} = require('express');

const router = Router();

const superMarkets = [
    {
        id: 1,
        name: 'Ginius',
        distance: .6
    },
    {
        id: 2,
        name: 'Sopno',
        distance: 1
    },
    {
        id: 3,
        name: 'Badhundhara',
        distance: 2
    }
]

router.get('/', (req, res) => {
    console.log("query param ", req.query)
    const {distance} = req.query;
    console.log("distance ", distance);
    if(!isNaN(distance)){
        res.send(superMarkets.filter((market) => market.distance <= distance));
    }
    res.send(superMarkets);
})

module.exports = router;