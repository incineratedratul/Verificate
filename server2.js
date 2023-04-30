const express = require('express');
const session = require('express-session');

// Create instances of express app
const homeApp = express();
const applicantApp = express();
const adminApp = express();
const companyApp = express();
const universityApp = express();

// Middleware to serve static files
homeApp.use(express.static(__dirname + '/public'));
applicantApp.use(express.static(__dirname + '/Applicant'));
adminApp.use(express.static(__dirname + '/Admin'));
companyApp.use(express.static(__dirname + '/Company'));
universityApp.use(express.static(__dirname + '/University'));

// Middleware to handle form data
homeApp.use(express.urlencoded({ extended: true }));
applicantApp.use(express.urlencoded({ extended: true }));
adminApp.use(express.urlencoded({ extended: true }));
companyApp.use(express.urlencoded({ extended: true }));
universityApp.use(express.urlencoded({ extended: true }));

// Middleware for session management
homeApp.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
applicantApp.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
adminApp.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
companyApp.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
universityApp.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

// Set views folder and view engine for each app instance
homeApp.set('views', __dirname + '/Views/Home');
homeApp.set('view engine', 'ejs');

applicantApp.set('views', __dirname + '/Views/Applicant');
applicantApp.set('view engine', 'ejs');

adminApp.set('views', __dirname + '/Views/Admin');
adminApp.set('view engine', 'ejs');

companyApp.set('views', __dirname + '/Views/Company');
companyApp.set('view engine', 'ejs');

universityApp.set('views', __dirname + '/Views/University');
universityApp.set('view engine', 'ejs');

// Routes for each app instance
homeApp.get('/', (req, res) => {
    res.render('homepage');
});

homeApp.get('/login', (req, res) => {
    res.render('login');
});

homeApp.get('/registration', (req, res) => {
    res.render('registration');
});

homeApp.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
});

applicantApp.get('/applicant/applicant', (req, res) => {
    res.render('applicant');
});

applicantApp.get('/applicant/applicantcertificates', (req, res) => {
    res.render('applicantcertificates');
});


applicantApp.get('/applicant/applicantnotification', (req, res) => {
        res.render('applicantnotification');
      });

applicantApp.get('/applicant/applicantprofile', (req, res) => {
        res.render('applicantprofile');
      });

applicantApp.get('/applicant/applicantupload', (req, res) => {
        res.render('applicantuplaod');
      });
applicantApp.get('/applicant/applicantupload', (req, res) => {
        res.render('applicantuplaod');
      });





adminApp.get('/admin/admin', (req, res) => {
    res.render('admin');
  }); 
adminApp.get('/admin/adminipfs', (req, res) => {
    res.render('adminipfs');
  });
adminApp.get('/admin/adminnotification', (req, res) => {
    res.render('adminnotification');
  });
adminApp.get('/admin/adminpushtoblockchain', (req, res) => {
    res.render('adminpushtoblockchain');
  });
adminApp.get('/admin/adminrequests', (req, res) => {
    res.render('adminrequests');
  });
adminApp.get('/admin/adminverify', (req, res) => {
    res.render('adminverify');
  });



companyApp.get('/company/company', (req, res) => {
    res.render('company');
  });
  
  companyApp.get('/company/companycertificate', (req, res) => {
    res.render('companycertificate');
  });
  companyApp.get('/company/companynotification', (req, res) => {
    res.render('companynotification');
  });
  companyApp.get('/company/companyprofile', (req, res) => {
    res.render('companyprofile');
  });
  companyApp.get('/company/companysearchcertificate', (req, res) => {
    res.render('companysearchcertificate');
  });
  companyApp.get('/company/companysearchuser', (req, res) => {
    res.render('companysearchuser');
  });


  universityApp.get('/university/university', (req, res) => {
    res.render('university');
  });
  universityApp.get('/university/universityacceptedrequest', (req, res) => {
    res.render('universityacceptedrequest');
  });
  universityApp.get('/university/universitynotifications', (req, res) => {
    res.render('universitynotifications');
  });
  universityApp.get('/university/universityrequests', (req, res) => {
    res.render('universityrequests');
  });
  universityApp.get('/university/universityupload', (req, res) => {
    res.render('universityupload');
  });


// Start the server
homeApp.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  applicantApp.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  adminApp.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  companyApp.listen(3000, () => {
    console.log('Server started on port 3000');
  });

  universityApp.listen(3000, () => {
    console.log('Server started on port 3000');
  });
