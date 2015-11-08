import '../spec-helper';
import {expect} from 'chai';
import request from 'supertest';
import { createGame } from '../fixtures';

import {app} from '../..';


describe('leaderboard-list', function() {
  describe('given there are 5 games', function() {
    beforeEach(async function() {
      await createGame({ username: 'user01', points: 10, status: 'finished' });
      await createGame({ username: 'user02', points: 40, status: 'finished' });
      await createGame({ username: 'user01', points: 5, status: 'finished' });
      await createGame({ username: 'user03', points: 15, status: 'finished' });
      await createGame({ username: 'user01', points: 5, status: 'finished' });
    });

    describe('on performing a post to the /leaderboard route', function() {
      let resultData = null;
      beforeEach(function(done) {
        request(app)
          .get('/api/leaderboard')
          .expect(200)
          .end(function(err, res) {
            if (err) { return done(err); }
            resultData = res.body;
            done();
          });
      });

      it('should return a new game', function() {
        expect(resultData).to.have.property('list');
        expect(resultData).to.have.deep.property('list.length', 3);
        expect(resultData).to.have.deep.property('list[0].username', 'user02');
        expect(resultData).to.have.deep.property('list[0].points', 40);
        expect(resultData).to.have.deep.property('list[1].username', 'user01');
        expect(resultData).to.have.deep.property('list[1].points', 20);
        expect(resultData).to.have.deep.property('list[2].username', 'user03');
        expect(resultData).to.have.deep.property('list[2].points', 15);
      });
    });
  });
});


