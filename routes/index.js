const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('accueil.ejs', { title: 'Express' });
});
router.get('/form', function (req, res, next) {
  res.render('contact.ejs', { title: 'Express' });
});

const urlencodedParser = express.urlencoded({ extended: false })
router.post('/ferari', urlencodedParser, function (req, res, next) {
  let thename = req.body.nom;
  let theprenom = req.body.prenom;
  let thevlle = req.body.ville;
  let theemail = req.body.email;
  let themessage = req.body.message

  res.render('afficher.ejs', {
    title: 'Form reçu', nom: thename, message: themessage, prenom: theprenom,
    ville: thevlle, email: theemail
  })
})

module.exports = router;
