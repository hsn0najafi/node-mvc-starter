import request from 'supertest';

import app from '../src/app';

describe('Status', () => {
  it('GET  -> /status', (done) => {
    request(app)
      .get('/status')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        return done();
      });
  });

  it('HEAD -> /status', (done) => {
    request(app)
      .head('/status')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        }
        return done();
      });
  });
});

// ...
