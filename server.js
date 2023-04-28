require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const homeRouter = require('./routes/home')
const notfoundRouter = require('./utils/notFound')
const corsOptions = require('./config/allowCors')
app.use(cors(corsOptions))

app.use('/',express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use(cookieParser())


app.all('*', notfoundRouter);
app.listen(PORT, () => console.log(`App is listening to server ${PORT}`));