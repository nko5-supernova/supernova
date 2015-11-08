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
  { imdbId: 'tt1104001', soundtrack: 'https://soundcloud.com/disney-music-group-emea/derezzed-by-daft-punk-tron' },
  { imdbId: 'tt0147800', soundtrack: 'https://soundcloud.com/reham-eissa-1/10-things-i-hate-about-you-cant-take-my-eyes-off-you-heath-ledger' },
  { imdbId: 'tt2322441', soundtrack: 'https://soundcloud.com/kiana/love-me-like-you-do-from-fifty-shades-of-grey-ellie-goulding-cover' },
  { imdbId: 'tt2582846', soundtrack: 'https://soundcloud.com/garima_22/charli-xcx-boom-clap-ost-the-fault-in-our-stars' },
  { imdbId: 'tt0055928', soundtrack: 'https://soundcloud.com/imro69/james-bond-theme' },
  { imdbId: 'tt0092890', soundtrack: 'https://soundcloud.com/hollywoodpantages/ive-had-the-time-of-my-life-dirty-dancing' },
  { imdbId: 'tt0099487', soundtrack: 'https://soundcloud.com/lucas-king-piano-music/edward-scissorhands-ice-dance' },
  { imdbId: 'tt0265086', soundtrack: 'https://soundcloud.com/koramar/black-hawk-down-2001-ashes-to-ashes-soundtrack-ost' },
  { imdbId: 'tt0780504', soundtrack: 'https://soundcloud.com/5471m/a-real-hero-drive-soundtrack' },
  { imdbId: 'tt0133093', soundtrack: 'https://soundcloud.com/martin-bazalgette/m-s-d-o-claire-matrix' },
  { imdbId: 'tt1010048', soundtrack: 'https://soundcloud.com/l-made-semdi/sets/slumdog-milionaire-ost-jai-ho' },
  { imdbId: 'tt0266697', soundtrack: 'https://soundcloud.com/reem-3aziz/kill-bill-soundtrack-the' },
  { imdbId: 'tt0107290', soundtrack: 'https://soundcloud.com/revanth-prasad/jurassic-park-theme-song' },
  { imdbId: 'tt0087332', soundtrack: 'https://soundcloud.com/fororchestra/ghostbusters-theme-song-for' },
  { imdbId: 'tt0120338', soundtrack: 'https://soundcloud.com/suja-1/titanic-song-with-lyrics' },
  { imdbId: 'tt0463985', soundtrack: 'https://soundcloud.com/mohamad-da-1/fast-and-furious-3-tokyo-drift' },
  { imdbId: 'tt0211915', soundtrack: 'https://soundcloud.com/giorgio-iannelli/yann_tiersen-amelie_piano_version' },
  { imdbId: 'tt1951265', soundtrack: 'https://soundcloud.com/starwarspunk/the-hanging-tree-from-the-hunger-games-mockingjay-piano-cover-by-dani' },
  { imdbId: 'tt0137523', soundtrack: 'https://soundcloud.com/whitewives/where-is-my-mind-the-pixies' },
  { imdbId: 'tt0118971', soundtrack: 'https://soundcloud.com/slymnoncul/rolling-stones-paint-it-black' },
  { imdbId: 'tt0365830', soundtrack: 'https://soundcloud.com/kemeron-oliveira/tenacious-d-kickapoo-hq' },
  { imdbId: 'tt0120737', soundtrack: 'https://soundcloud.com/jorge-soares-8/lord-of-the-rings-medley' },
  { imdbId: 'tt1170358', soundtrack: 'https://soundcloud.com/edsheeran/i-see-fire' },
  { imdbId: 'tt0082158', soundtrack: 'https://soundcloud.com/kliktyklik/vangelis-chariots-of-fire-1' },
  { imdbId: 'tt0078346', soundtrack: 'https://soundcloud.com/vituccio-1/superman-theme' },
  { imdbId: 'tt0088763', soundtrack: 'https://soundcloud.com/bstrgg/back-to-the-future-theme-song' },
  { imdbId: 'tt0073195', soundtrack: 'https://soundcloud.com/aamandacarp/jaws-theme-song' },
  { imdbId: 'tt0083866', soundtrack: 'https://soundcloud.com/boston-pops/flying-theme' }
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
