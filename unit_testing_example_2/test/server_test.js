const {app, server} = require("../server");

const chai = require("chai");
const {expect} = require("chai").expect;
const chaiHttp = require("chai-http");


chai.use(chaiHttp);


describe("Server", function() {

  after(function() {
    server.close();
  })


  it("should receive a valid response from /testing", function() {

    chai
      .request(app)
      .get("/testing")
      .then(function(res) {
        console.log(res);
        expect(res.status).to.equal(200)

      });


  })

});

