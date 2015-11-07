import '../spec-helper';
import {expect} from 'chai';
import request from 'supertest';
import {Game} from '../../server/models';
import {app} from '../..';


describe('game-create', function() {
  describe('on performing a post to the /game route', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/game')
        .expect(200)
        .send({ username: 'maxcnunes' })
        .end(done);
    });

    it('should create a game', function() {
      return Game.findOne().exec().then(function(game) {
        expect(game).to.have.property('_id');
        expect(game).to.have.property('username', 'maxcnunes');
        expect(game).to.have.property('points', 0);
      });
    });
  });
});
