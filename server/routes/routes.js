var express = require('express');
var crypto = require('crypto')
var router = express.Router();
var User = require('../models/User');
var Contacts = require('../models/Contacts');
var Product = require('../models/Product');
var categoryCtrl = require('../controllers/categoryCtrl');
var productCtrl = require('../controllers/productCtrl');
var articleCtrl = require('../controllers/articleCtrl');
var actionCtrl = require('../controllers/actionCtrl');
var contactsCtrl = require('../controllers/contactsCtrl');
const multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'frontend/assets/img/products')
  },
  filename: function (req, file, cb) {
  	var arr = file.originalname.split('.')
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + arr[arr.length-1]);
    });
  }
});
var upload = multer({ storage: storage });

router.get('/api/users',function (req,res) {
    User.find({}).exes(function (err,users) {
        if(err) return err;
        res.send(users);
    });
});

//  CATEGORY
router.post('/api/category',categoryCtrl.create);

router.get('/api/category/parents',categoryCtrl.getParents);

router.get('/api/category/all',categoryCtrl.getAll);

router.delete('/api/category/:id',categoryCtrl.remove);

router.put('/api/category/:id',categoryCtrl.update);

// PRODUCT
router.get('/api/product',productCtrl.getAll);

router.post('/api/product',upload.any(),productCtrl.create);

router.get('/api/product/getByCategory/:category_id',productCtrl.getByCategory);

router.get('/api/product/:_id',productCtrl.getOne);

router.delete('/api/product/:_id',productCtrl.delete);

router.delete('/api/product/:_id/img/:name',productCtrl.deleteImg);

router.post('/api/product/:_id',upload.any(),productCtrl.update);

router.post('/api/zakaz',productCtrl.zakaz);

// ARTICLE
router.post('/api/article',articleCtrl.create);

router.get('/api/article',articleCtrl.getAll);

router.get('/api/article/:_id',articleCtrl.getOne);

router.delete('/api/article/:_id',articleCtrl.delete);

router.put('/api/article/:_id',articleCtrl.update);

// CONTACTS
router.get('/api/contacts',contactsCtrl.getAll);

router.put('/api/contacts',contactsCtrl.update);

// ACTION
router.get('/api/action',actionCtrl.getAll);

router.put('/api/action',actionCtrl.update);




module.exports = router;
