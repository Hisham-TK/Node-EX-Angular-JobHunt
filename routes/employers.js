const mongoose = require("mongoose"),
    path = require("path"),
    express = require('express'),
    emploeyerRouter = express.Router(),
     jwt = require('jsonwebtoken'),
   multer = require("multer"),
    fs = require("fs");


multerMW = multer({
    dest: path.join(__dirname, "..", "public", "images", "users"),
});


function verfiyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request')
    }

    let token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (token === 'null') {
        console.log("3");
        return res.status(401).send('Unauthorized Request')
    }
    try {
        let payload = jwt.verify(token, 'secret');
        //console.log(payload.subject);
        req.userData = {accountId: payload.subject.accountId, userType: payload.subject.userType }
       // console.log(req.userData);
    }
    catch(err) {
        return res.status(401).send('Unauthorized Request')
    }
    let payload = jwt.verify(token, 'secret');
    if (!payload) {
        console.log("4");
        return res.status(401).send('Unauthorized Request')
    }
    // req.userId = payload.subject
    next();
}


require("../models/employer");
const employerSchema = mongoose.model("employers");

emploeyerRouter.post('/add', (req, res) => {
    let employerData = req.body;
    let employer = new employerSchema(employerData);
    // res.send("Doneeeeeeeeeeeeeeeee")
    employer.save((error) => {
        if (error) {
            console.log("error is ...." + error)
        } else {
            res.send("Doneeeeeeeeeee Inside")
        }
    })
});
emploeyerRouter.get("/all", (req, res) => {
    employerSchema.find({}, (error, result) => {
        if (error) {
            res.send("Error to get data " + error)
        } else {
            res.send(result);
        }
    });
});
// get specific Employer

emploeyerRouter.get("/getSpecficEmployer/:id",verfiyToken,(req, res ) => {


    employerSchema.findOne({
        accountId: req.userData.accountId
    }, (error, employerResult) => {
        if (error) {
            console.log("Error is : " + error)
        } else {
            res.send(employerResult)
        }
    })
    // res.send("id of employer is : "+req.params.id)

});
emploeyerRouter.get("/profile/:id",(req, res ) => {
    employerSchema.findOne({
        accountId: req.params.id
    }, (error, employerResult) => {
        if (error) {
            console.log("Error is : " + error)
        } else {
            res.send(employerResult)
        }
    })
    // res.send("id of employer is : "+req.params.id)

});


/// update data
emploeyerRouter.post("/edit/:id", (req, res) => {
    console.log("in updated");
    // fs.rename(req.file.path,path.join(req.file.destination,req.file.originalname),()=>{});
    // console.log("fs : " + req.file)

    employerSchema.update({
        employerId: req.params.id
    }, {
        "$set": {
            hr:req.body.hr,
            employer: req.body.employer,
            manager: req.body.manager,
            description: req.body.description,

        }
    }, (error) => {
        if (!error) {
            employerSchema.findOne({
                employerId: req.params.id
            }, (err, result) => {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
            // response.redirect("/students/list");
        } else {
            res.send(error)
        }
    })
});

////
let store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../publics/images/users');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.' + file.originalname);
    }
});
let upload = multer({
    storage: store
}).single('file');



emploeyerRouter.post('/upload',  (req, res, next) => {
    console.log("in upload");

    upload(req, res, (err) => {
        if (err) {
            return res.status(501).json({
                error: err
            });
        }
        res.json({
            originalname: req.file.originalname,
            uploadname: req.file.fieldname
        })
    })
});


module.exports = emploeyerRouter;
