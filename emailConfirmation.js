var nodemailer = require('nodemailer');

var moment = require('moment');

var tomorrow = moment().add(1, "days").format('YYYY MMM Do');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'QQex',
    auth: {
	user: '', //email address
	pass: '' //password
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"China Greece Times" <info@cgw.gr>', // sender address
    to: 'ctpnews@irisprinting.gr', // list of receivers ctpnews@irisprinting.gr
    subject: 'China Greece Times '+ tomorrow, // Subject line
    html: '<p>We inform you about our leaflet called :</p><p>CHINA GREECE TIMES</p><p>We inform you that:</p><p>1. We have audited the low-resolution representations of our pages you sent us as to its content and layout.</p><p>2. We read the results of audits of our pages from your system (Pre-flight reports).</p><p>3. Where there is a text that should be only in black and is overprint scanned. Where this is not the case in our knowledge.</p><p>Please proceed to printing.</p>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
