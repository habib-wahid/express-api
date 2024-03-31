const express = require('express')
const app = express();
const greetingRoute = require('./routes/greeting.js');
const marketRoute = require('./routes/market.js');
const authRoute = require('./routes/auth.js');
require('./database/index.js')


const port = 3000;




const mw = require('./middlewares.js');
app.use(mw({option1: 1}))
app.use(express.json())

app.use(greetingRoute);
app.use('/api/v1/market', marketRoute);
app.use('/api/v1', authRoute);

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})
