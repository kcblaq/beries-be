const path = require('path');

const notfoundRoute = (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '..','views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({
            message: 'Sorry, Resource does not exist'
        })
    } else {
        res.type('txt').send('File not found');
    }
}

module.exports = notfoundRoute;