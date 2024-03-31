
const {Router} = require('express')

const router = Router();

const greetingList = [{ person1: 'hello' }, { person2: 'hi' }]

router.get('/', (req, res) => {
    console.log("request")
    res.send("hello world")
})

router.get('/hello', (req, res, next) => {
    console.log(`Request method ${req.method}:${req.url}`);
    next()
}, (req, res) => {
    res.send(greetingList)
})

router.post('/hello', (req, res) => {
    console.log("body ", req.body);
    greetingList.push(req.body);
    res.sendStatus(201);
})

module.exports = router