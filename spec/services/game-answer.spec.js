import '../spec-helper';
import {expect} from 'chai';
import request from 'supertest';
import {fixtureGame} from '../fixtures';
import {Game} from '../../server/models';
import {app} from '../..';


describe('game-answer', function() {
  describe('given the user has already initialized the game', function() {
    let currentGame;
    beforeEach(async function() {
      currentGame = await Game.create(fixtureGame({
        username: 'maxcnunes'
      }));
    });

    describe('on performing a post to the /game/:id/answer route', function() {
      describe('given the answer is correct', function() {
        beforeEach(function(done) {
          request(app)
            .post(`/api/game/${currentGame._id}/answer`)
            .expect(200)
            .send({ answer: 1 })
            .end(done);
        });

        it('should get 10 points', function() {
          return Game.findById(currentGame._id).exec().then(function(game) {
            expect(game).to.have.property('points', 10);
          });
        });
      });

      describe('given the answer is incorrect', function() {
        beforeEach(function(done) {
          request(app)
            .post(`/api/game/${currentGame._id}/answer`)
            .expect(200)
            .send({ answer: 2 })
            .end(done);
        });

        it('should get 0 points', function() {
          return Game.findById(currentGame._id).exec().then(function(game) {
            expect(game).to.have.property('points', 0);
          });
        });
      });
    });
  });
});
