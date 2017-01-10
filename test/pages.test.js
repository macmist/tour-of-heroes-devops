var expect = require('Chai').expect;
var request = require('request');

it('should return 200', function (done) {
  request.get('http://localhost:3000', function (err, res, body){
    expect(res.statusCode).to.equal(200);
    done();
  });
});

it('should return 404', function (done) {
  request.get('http://localhost:3000/somethingnotexisting', function (err, res, body){
    expect(res.statusCode).to.equal(404);
    done();
  });
});
