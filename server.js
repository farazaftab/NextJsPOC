const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const nextApp = next({})
const handle = nextApp.getRequestHandler()


nextApp.prepare().then(() => {
    // express code here
    const app = express()
    //app.use(express.static('biz'))
    //app.get('/biz', express.static('/biz', { maxAge: '1y' }));
    app.use('/biz', express.static(path.join(__dirname, 'biz')))
   // app.use(express.static(__dirname + '/biz'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/biz/*', function (req, res) {
      var currentPath = process.cwd();
      res.status(404).send('Not found');
    });
   // app.use('/api/photos', require('./routes/index')) 
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})