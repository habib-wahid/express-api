const { Router, response } = require('express')
const router = Router();
const User = require('../schemas/User');


router.get("/user", async(req, res) => {
    const users = await User.find({});
    res.send(users);
})

router.get("/user/:id", async(req, res) => {
    const {id} = req.params;
    const user = await User.findById(id).exec();
    res.send(user);
})

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const userDB = await User.findOne({ $or: [{ username }, { email }] });
    if (userDB) {
        res.send({ msg: 'User already exist' });
    } else {
        const newUser = await User.create({ username, password, email });
        res.send(newUser)
    }
})

router.put('/user/:id', async(req, res) => {
    const {id} = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, {username: 'hb', password: 'hb@1234'}, {returnDocument: 'after'});
    res.send(updatedUser);
})

router.delete('/user/:id', async(req, res) => {
    const {id} = req.params;
    await User.deleteOne({_id: id})
    res.sendStatus(200);
})
module.exports = router;