const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
chai.use(chaiHTTP);

describe('Users Server Routes Test', () => {
    before()
    after()
    describe('[POST] /register', () => {
        it('Should add a new user to the DB', () => {
            const User = {
                "email": "test2@test2.com",
                "password": "asdf",
                "aboutme": "I do funny stuff to code"
            };
            chai.request(server)
                .post('/api/register')
                .send(user)
                .end((e, res)) => {
                if (e) {
                    console.log(e);
                    done();
                }
                expect(res.status).to.equal(200);
                expect(typeof res.body.id).to.be.a('number');

            })
    })
})