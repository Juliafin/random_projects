const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const {expect} = chai;
chai.use(chaiHttp);


describe('Server Routes', () => {


  describe('/heartbeat', async() => {
    
    let requester = await chai.request(server).keepOpen();

    after(async() => {
      requester.close();
    })


    it('should return a 200 status', async() => {
        await requester.get('/heartbeat')
        .then((response) => {
          console.log('Response', response.status)
          expect(response.status).to.equal(200);
        })
        .catch((err) => {
        })
    })

    it('should return the correct body', async() => {
      await requester.get('/heartbeat')
      .then((response) => {
        const expectedBody =  {
          message: 'Success',
          ok: true
        }
        console.log('Response body', response.body)

        expect(response.body).to.be.a('object');
        expect(response.body).to.have.keys(['message', 'ok']);
        expect(response.body).to.eql(expectedBody);
      })
      .catch((err) => {
      })
    });

  });


  describe('/getToken', async() => {
    let requester = await chai.request(server).keepOpen();

    after(async() => {
      requester.close();
    })

    it('should return a token given a userName and password', async() => {
      await requester
        .get('/auth/getToken')
        .send({
          userName: 'Victor',
          password: '1234'
        })
        .then((response) => {
          expect(response.status).to.be(200);
          expect(response.body).to.be.a('object');
          expect(response.body).to.have.key('token');
          expect(response.body.token).to.be.a('string');
          console.log(response.body, 'response body')
        })
        .catch((err) => {
        })
    });

  });

  describe('/login', async() => {

    let user = {
      userName: 'Rebecca',
      password: '5321'
    }

    let token;
    let requester;

    before(async() => {
      requester = await chai.request(server).keepOpen();
    })

    beforeEach(async() => {
      let tokenResponse = await requester
        .get('/auth/getToken')
        .send(user);
      
      token = tokenResponse.body.token;

    })
  
    after(async() => {
      requester.close();
    })
    
    it('should allow a user to login successfully', () => {
      requester
        .get('/auth/login')
        .set('Authorization', `Bearer ${token}`)
        .then((response) => {
          console.log(response.body, 'response body from login!')

          expect(response.body).to.be.a('object');
          expect(response.body).to.have.key('user');
          expect(response.body.user).to.have.keys(['userName', 'password', 'iat']);
          expect(response.body.user.userName).to.eq(user.userName);
          expect(response.body.user.password).to.eq(user.password);

        })
        .catch((err) => {
          console.log('Error from login request', err);
        })
    });
  });

});


