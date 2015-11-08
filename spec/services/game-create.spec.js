import '../spec-helper';
import {expect} from 'chai';
import request from 'supertest';
import {Game, Movie} from '../../server/models';
import {app} from '../..';


describe('game-create', function() {
  describe('given there are 5 movies', function() {
    beforeEach(async function() {
      await Movie.create({ imdbId: 'tt0241527', soundtrack: 'https://soundcloud.com/tfrady/harry-potter-soundtrack-hedwigs-theme' });
      await Movie.create({ imdbId: 'tt0068646', soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat' });
      await Movie.create({ imdbId: 'tt3472226', soundtrack: 'https://soundcloud.com/championdnb/true-survivor-champion' });
      await Movie.create({ imdbId: 'tt2294629', soundtrack: 'https://soundcloud.com/hollywoodrecpromo/idina-menzel-let-it-go-from' });
      await Movie.create({ imdbId: 'tt0114709', soundtrack: 'https://soundcloud.com/felipe-sgarbosa/youve-got-a-friend-in-me-toy' });
    });

    describe('on performing a post to the /game route', function() {
      let resultData = null;
      beforeEach(function(done) {
        request(app)
          .post('/api/game')
          .expect(200)
          .send({ username: 'maxcnunes' })
          .end(function(err, res) {
            if (err) { return done(err); }
            resultData = res.body;
            done();
          });
      });

      it('should return a new game', function() {
        expect(resultData).to.have.property('_id');
        expect(resultData).to.have.property('createdAt');
        expect(resultData).to.not.have.property('finishedAt');
        expect(resultData).to.have.property('username', 'maxcnunes');
        expect(resultData).to.have.property('points', 0);
        expect(resultData).to.have.property('questions');
        expect(resultData).to.have.deep.property('questions.length', 5);
        expect(resultData).to.have.deep.property('questions[0].soundtrack');
        expect(resultData).to.not.have.deep.property('questions[0].answered');
        expect(resultData).to.not.have.deep.property('questions[0].correctAnswer');
        expect(resultData).to.have.deep.property('questions[0].options');
        expect(resultData).to.have.deep.property('questions[0].options.length', 4);
        expect(resultData).to.have.deep.property('questions[0].options[0].cover');
        expect(resultData).to.have.deep.property('questions[0].options[0].title');
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
});
