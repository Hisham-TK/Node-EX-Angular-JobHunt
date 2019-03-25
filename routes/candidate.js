const
    // <======= my functions =======>
    l = console.log,

    // required modules
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'}),

    candidateSchema = require('../models/candidate');

module.exports = router;

// Get all candidates
router.get('/all', (q, s) => candidateSchema.find({'options.allowedInSearch': true}, (e, d) => s.send(e ? e : d)));

/*   ----------   One   ----------   */
// Add new candidate
router.post('/one', (q, s) => candidateSchema(q.body).save((e, d) => s.send(e ? e : d)));

// Get candidate by object id
router.get('/one/:_id', (q, s) => candidateSchema.findOne({'_id': q.params['_id']}, (e, d) => s.send(e ? e : d)));
router.get('/one/:_id', (q, s) => candidateSchema.findOne({'_id': q.params['_id']}, (e, d) => s.send(e ? e : d)));

// Edit candidate by object id
router.patch('/one/:_id', (q, s) => candidateSchema.updateOne({'_id': q.params['_id']}, {$set: q.body}, (e, d) => s.send(e ? e : d)));
// : candidateSchema.findOne({'_id': q.params._id}, (e, d) => s.send(d))

// Delete candidate by object id
router.delete('/one/:_id', (q, s) => candidateSchema.deleteOne({'_id': q.params['_id']}, e => s.send(e ? e : 'deleted')));

// Upload file
router.post('/upload/:_id', upload.single('profilePicture'), (q, s) => l(q['files'], q['file'], q.body, q.body.profilePicture));

// Test for candidate router that is work
router.get('/', (q, s) => s.send('Hi there from candidate'));

