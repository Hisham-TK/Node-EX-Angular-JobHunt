const
    path = require('path')
    express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname,'..','public', 'index.html'))
});

module.exports = router;
