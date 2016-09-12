// The require statement brings in the JSON data located in the 'data' folder
var amendments = require('../../data/amendments.json');
module.exports = function(app, express) {

  // start basicRouter------------------------------------------------------
  // get an instance for basicRouter
  var basicRouter = express.Router();

  // basic route to the index.jade file
  basicRouter.get('/', function (req, res, next) {

    // The important thing here is amendments: amendments which brings in the data
    // from the require statement above and puts it into a variable called
    // amendments. This correlates to the jade template index.jade.
    res.render('index', {title: 'Know The Damn Amendments', amendments: amendments });
  })

  // apply basicRouter to application
  return basicRouter;
  // end basicRouter------------------------------------------------------
}
