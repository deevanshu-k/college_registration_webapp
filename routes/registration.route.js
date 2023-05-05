const { Router } = require('express');
const Student = require('../models/studentData');
const multer = require('multer');
const router = Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const { originalname } = file;
        const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
        let id = req.headers.uniqueid;
        cb(null, `${id}${fileExtension}`);
    }
});
var upload = multer({ storage: storage });

router.get('', async (req, res) => {
    try {
        res.status(200).render('main.ejs',)
    } catch (error) {
        res.status(200).render('main.ejs')
    }
});

router.post('/uploadImage', upload.single('file'), (req, res) => {
    console.log(req.body);
    res.status(200).send();
});

router.post('', async (req, res) => {
    try {
        let data = req.body;
        let rf = await Student.findOne({ where: { 'ScholarNo': data.ScholarNo },raw:true })
        console.log('data :' + rf);
        if (rf) {
            throw new Error({code:'ALE'}) ;
        }
        Student.create(data).then((d) => {
            res.status(200).json({
                msg : "Form Submited Successfully!"
            });
        }).catch((error) => {
            console.log(error);
            if(error.code == 'ALE'){
                res.status(501).json({
                    message:"Scholar already exist!"
                })
            }
            else {
                res.status(500).json({
                    message:"Server error !"
                })
            } 
        })

    } catch (error) {
        res.status(501).json({
            data: error,
            status: 0,
            error: {
                message: 'SERVER_ERR'
            }
        })
    }
});


module.exports = router;