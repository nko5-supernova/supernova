import {Movie} from '../../server/models';


const GAMES = [
  { imdbId: 'tt0241527', soundtrack: 'https://soundcloud.com/tfrady/harry-potter-soundtrack-hedwigs-theme' },
  { imdbId: 'tt0068646', soundtrack: 'https://soundcloud.com/alexpfeffer/the-godfather-love-theme-feat' },
  { imdbId: 'tt3472226', soundtrack: 'https://soundcloud.com/championdnb/true-survivor-champion' },
  { imdbId: 'tt2294629', soundtrack: 'https://soundcloud.com/hollywoodrecpromo/idina-menzel-let-it-go-from' },
  { imdbId: 'tt0172495', soundtrack: 'https://soundcloud.com/tarek-alaa-1/gladiator-soundtrack-elysium' },
  { imdbId: 'tt0468569', soundtrack: 'https://soundcloud.com/antovolk/the-dark-knight-batman-theme' },
  { imdbId: 'tt1375666', soundtrack: 'https://soundcloud.com/mohamed-shibo/inception-soundtrack-the-dream' },
  { imdbId: 'tt0110357', soundtrack: 'https://soundcloud.com/hz-houghton/the-lion-king-circle-of-life-hz-houghton-remix'},
  { imdbId: 'tt0114709', soundtrack: 'https://soundcloud.com/felipe-sgarbosa/youve-got-a-friend-in-me-toy' },
  { imdbId: 'tt0325980', soundtrack: 'https://soundcloud.com/martjanssen/pirates-of-the-caribean-mix-2' },
  { imdbId: 'tt1049413', soundtrack: 'https://soundcloud.com/sany-indra-putra/pixars-up-soundtrack-theme' },
  { imdbId: 'tt0109830', soundtrack: 'https://soundcloud.com/ertan-hac-bekta-o-lu/forest-gump-soundtrack-alan' },
  { imdbId: 'tt0076666', soundtrack: 'https://soundcloud.com/esmix/bee-gees-night-fever-saturday' },
  { imdbId: 'tt0060196', soundtrack: 'https://soundcloud.com/niksologi/the-good-the-bad-and-the-ugly' },
  { imdbId: 'tt0062622', soundtrack: 'https://soundcloud.com/micheleescoring/2001-space-odyssey' },
  { imdbId: 'tt0064276', soundtrack: 'https://soundcloud.com/chipmunkcheeks228/steppenwolf-born-to-be-wild' },
  { imdbId: 'tt0075148', soundtrack: 'https://soundcloud.com/usn_audioproduction/rocky-theme-song' },
  { imdbId: 'tt0110912', soundtrack: 'https://soundcloud.com/kupukupuku/pulp-fiction-opening-theme' },
  { imdbId: 'tt0097576', soundtrack: 'https://soundcloud.com/ethanmessier/indiana-jones-and-the-raiders' },
  { imdbId: 'tt0076759', soundtrack: 'https://soundcloud.com/christophe-catherine/star-wars-imperial-march-full' }
];

/*
  Execute movie seed data
 */
(async function () {
  return Promise.all(GAMES.map(async movieSeed => {
    const movie = await Movie.findOne({ imdbId: movieSeed.imdbId }).exec();
    console.info(`${movie ? 'updating' : 'creating'} movie ${movieSeed.imdbId}`);
    if (!movie) {
      return Movie.create(movieSeed);
    }

    movie.soundtrack = movieSeed.soundtrack;
    return movie.save();
  })).then(function() {
    console.info('Finished seeding data');
    process.exit();
  }, function(error) {
    console.error(error);
    process.exit(1);
  });
})();
