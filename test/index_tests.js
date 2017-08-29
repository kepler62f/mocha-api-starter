const request = require('supertest')
//var request = require('request')
const expect  = require('chai').expect
var app = require ('../index')

describe('GET /', function () {
	it('should response 200', function (done) {
		request(app)
		.get('/')
		.expect(200, done)
	})
})

describe('/about', function () {
	it('should respond 404', function (done) {
		request(app)
		.get('/about')
		.expect(404, done)
	})
})

describe ('CRUD taco test', function () {
	describe ('GET /tacos', function () {
		it('should respond 200', function (done) {
			request(app)
			.get('/tacos')
			.end(function (err, response) {
				console.log('response body', response.body)
				expect(response.body).to.be.an('array')

			if (response.body.length) {
				expect(response.body[0]).to.have.property('calory')
			}
			})
		})
	})
})