import {Movie} from '../../server/models';


const MOVIES = [
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
  { imdbId: 'tt0082971', soundtrack: 'https://soundcloud.com/ethanmessier/indiana-jones-and-the-raiders' },
  { imdbId: 'tt0080684', soundtrack: 'https://soundcloud.com/christophe-catherine/star-wars-imperial-march-full' },
  { imdbId: 'tt1104001', soundtrack: 'https://soundcloud.com/robotaki/tron-legacy-daft-punk-derezzed' },
  { imdbId: 'tt0147800', soundtrack: 'https://soundcloud.com/reham-eissa-1/10-things-i-hate-about-you-cant-take-my-eyes-off-you-heath-ledger' },
  { imdbId: 'tt2322441', soundtrack: 'https://soundcloud.com/kiana/love-me-like-you-do-from-fifty-shades-of-grey-ellie-goulding-cover' },
  { imdbId: 'tt2582846', soundtrack: 'https://soundcloud.com/garima_22/charli-xcx-boom-clap-ost-the-fault-in-our-stars' },
  { imdbId: 'tt0055928', soundtrack: 'https://soundcloud.com/tomschlueter/james-bond-theme' },
  { imdbId: 'tt0107290', soundtrack: 'https://soundcloud.com/revanth-prasad/jurassic-park-theme-song' },
  { imdbId: 'tt0087332', soundtrack: 'https://soundcloud.com/fororchestra/ghostbusters-theme-song-for' },
  { imdbId: 'tt0120338', soundtrack: 'https://soundcloud.com/suja-1/titanic-song-with-lyrics' },
  { imdbId: 'tt0463985', soundtrack: 'https://soundcloud.com/mohamad-da-1/fast-and-furious-3-tokyo-drift' },
  { imdbId: 'tt0211915', soundtrack: 'https://soundcloud.com/giorgio-iannelli/yann_tiersen-amelie_piano_version' },
  { imdbId: 'tt1951265', soundtrack: 'https://soundcloud.com/starwarspunk/the-hanging-tree-from-the-hunger-games-mockingjay-piano-cover-by-dani' }
];

/*
  Execute movie seed data
 */
(async function () {
  return Promise.all(MOVIES.map(async movieSeed => {
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
