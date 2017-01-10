var exp = require('Chai').expect;
var request = require('request');
it('should return 400', function (done) {
    request.get('http://localhost:3000', function (err, res, body) {
        exp(res.statusCode).to.equal(200);
        done();
    });
});
//# sourceMappingURL=pages.test.js.js.map