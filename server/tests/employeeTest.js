/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '..';
import {
  newEmployee, wrongNewEmployee, employee, wrongEmployee, requiredPass, token, emp, id
} from './data';

describe('Employee tests', () => {
  it('Should be able to sign up', (done) => {
    request(app)
      .post('/api/auth/signup')
      .send(newEmployee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Manager Should be able to create an employee', (done) => {
    request(app)
      .post('/api/employees')
      .send(emp)
      .set('token', token)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Manager Should be able to delete an employee', (done) => {
    request(app)
      .delete(`/api/employees/${id}`)
      .send(emp)
      .set('token', token)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Should not be able to sign up when the data are invalid', (done) => {
    request(app)
      .post('/api/auth/signup')
      .send(wrongNewEmployee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Should be able to signin', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(employee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Should not be able to signin when data are invalid', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(wrongEmployee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(401);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('Should not be able to signin when data are invalid', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(requiredPass)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.be.equal(400);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
