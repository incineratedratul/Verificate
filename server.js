const express = require('express');
const session = require('express-session');
const app = express();

// Middleware to serve static files
app.use(express.static(__dirname + '/public'));


// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Middleware for session management
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// Middleware and settings for Home folder
const homeViews = __dirname + '/views/Home';
const applicantViews = __dirname + '/views/Applicant';
const universityViews = __dirname + '/views/University';
const companyViews = __dirname + '/views/Company';
const adminViews = __dirname + '/views/Admin';
app.set('views', [homeViews, applicantViews, universityViews, companyViews, adminViews]);
app.set('view engine', 'ejs');

// Routes for Home folder
app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/forgetpassword', (req, res) => {
  res.render('forgetpassword');
});

app.get('/registration', (req, res) => {
  res.render('registration');
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

// Routes for Applicant folder
app.use('/applicant', express.static(__dirname + '/Applicant'));

app.get('/applicant/applicant', (req, res) => {
    res.render('applicant');
});

app.get('/applicantcertificates', (req, res) => {
    res.render('applicantcertificates');
});

app.get('/applicantnotification', (req, res) => {
    res.render('applicantnotification');
});

app.get('/applicantprofile', (req, res) => {
    res.render('applicantprofile');
});

app.get('/applicantupload', (req, res) => {
    res.render('applicantupload');
});


// Routes for Applicant folder
app.use('/admin', express.static(__dirname + '/Admin'));

app.get('/admin/admin', (req, res) => {
    res.render('admin');
});

app.get('/adminverify', (req, res) => {
    res.render('adminverify');
});

app.get('/adminipfs', (req, res) => {
    res.render('adminipfs');
});

app.get('/adminrequests', (req, res) => {
    res.render('adminrequests');
});

app.get('/adminnotification', (req, res) => {
    res.render('adminnotification');
});
app.get('/adminpushtoblockchain', (req, res) => {
  res.render('adminpushtoblockchain');
});



// Routes for Company folder
app.use('/company', express.static(__dirname + '/Company'));

app.get('/company/company', (req, res) => {
    res.render('company');
});

app.get('/companycertificate', (req, res) => {
    res.render('companycertificate');
});

app.get('/companynotification', (req, res) => {
    res.render('companynotification');
});

app.get('/companyprofile', (req, res) => {
    res.render('companyprofile');
});

app.get('/companysearchcertificate', (req, res) => {
    res.render('companysearchcertificate');
});
app.get('/companysearchuser', (req, res) => {
  res.render('companysearchuser');
});




// Routes for University folder
app.use('/university', express.static(__dirname + '/University'));

app.get('/university/university', (req, res) => {
    res.render('university');
});

app.get('/universityacceptedrequest', (req, res) => {
    res.render('universityacceptedrequest');
});

app.get('/universitynotifications', (req, res) => {
    res.render('universitynotifications');
});

app.get('/universityrequests', (req, res) => {
    res.render('universityrequests');
});

app.get('/universityupload', (req, res) => {
    res.render('universityupload');
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
