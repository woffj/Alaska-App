var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


// Request API access: http://www.yelp.com/developers/getting_started/api_access

var yelp = require("yelp").createClient({
  consumer_key: "2OW1g6TcgK5IfcupBYN3Mw",
  consumer_secret: "BSd7GmCrYt4fQX4ffiH8r0AcXUU",
  token: "myQNfnbdIWkCKDB_JkvATvyKBah-KTsR",
  token_secret: "7-Ka_3xIQ8mk1JEGK3jJvIlnVnA"
});

// ENDPOINT Restaurant


app.get('/search/:yelpTerm', function (req, res) {
  console.log('param: ' + req.params.yelpTerm);
	yelp.search({term: req.params.yelpTerm, location: "Ketchikan"}, function(error, data) {
    // console.log(error);
    // console.log(data);
    res.send(data);

	});

}); // end app.get




app.listen(3000);

// See http://www.yelp.com/developers/documentation/v2/business
// yelp.business("yelp-ketchikan-ak-us", function(error, data) {
//   console.log(error);
//   console.log(data);
// });
