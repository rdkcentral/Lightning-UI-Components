/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Browse, Video } from '../pages';

export default {
  root: 'browse',
  routes: [
    {
      path: 'browse',
      component: Browse,
      widgets: ['ThemeSwitcher'],
      async on(page) {
        try {
          // Mock API Response
          const data = [
            {
              title: 'Popular Movies',
              data: {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: '/r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
                    genre_ids: [16, 28, 12, 35, 10751, 14],
                    id: 315162,
                    original_language: 'en',
                    original_title: 'Puss in Boots: The Last Wish',
                    overview:
                      'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
                    popularity: 10011.23,
                    poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
                    release_date: '2022-12-07',
                    title: 'Puss in Boots: The Last Wish',
                    video: false,
                    vote_average: 8.6,
                    vote_count: 2366
                  },
                  {
                    adult: false,
                    backdrop_path: '/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg',
                    genre_ids: [878, 27, 35],
                    id: 536554,
                    original_language: 'en',
                    original_title: 'M3GAN',
                    overview:
                      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
                    popularity: 7352.073,
                    poster_path: '/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg',
                    release_date: '2022-12-28',
                    title: 'M3GAN',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 399
                  },
                  {
                    adult: false,
                    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
                    genre_ids: [878, 12, 28],
                    id: 76600,
                    original_language: 'en',
                    original_title: 'Avatar: The Way of Water',
                    overview:
                      'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
                    popularity: 3491.433,
                    poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
                    release_date: '2022-12-14',
                    title: 'Avatar: The Way of Water',
                    video: false,
                    vote_average: 7.7,
                    vote_count: 4489
                  },
                  {
                    adult: false,
                    backdrop_path: '/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg',
                    genre_ids: [10752, 36, 18],
                    id: 653851,
                    original_language: 'en',
                    original_title: 'Devotion',
                    overview:
                      "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
                    popularity: 3016.586,
                    poster_path: '/26yQPXymbWeCLKwcmyL8dRjAzth.jpg',
                    release_date: '2022-11-23',
                    title: 'Devotion',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 88
                  },
                  {
                    adult: false,
                    backdrop_path: '/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg',
                    genre_ids: [28, 53, 18],
                    id: 846433,
                    original_language: 'en',
                    original_title: 'The Enforcer',
                    overview:
                      'A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.',
                    popularity: 2939.557,
                    poster_path: '/72V1r1G8S87ELagVxjqAUdChMCt.jpg',
                    release_date: '2022-09-22',
                    title: 'The Enforcer',
                    video: false,
                    vote_average: 6.7,
                    vote_count: 68
                  },
                  {
                    adult: false,
                    backdrop_path: '/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg',
                    genre_ids: [28, 35, 80, 53],
                    id: 899112,
                    original_language: 'en',
                    original_title: 'Violent Night',
                    overview:
                      'When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.',
                    popularity: 2097.799,
                    poster_path: '/1XSYOP0JjjyMz1irihvWywro82r.jpg',
                    release_date: '2022-11-30',
                    title: 'Violent Night',
                    video: false,
                    vote_average: 7.7,
                    vote_count: 987
                  },
                  {
                    adult: false,
                    backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
                    genre_ids: [14, 28, 878],
                    id: 436270,
                    original_language: 'en',
                    original_title: 'Black Adam',
                    overview:
                      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
                    popularity: 1900.553,
                    poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
                    release_date: '2022-10-21',
                    title: 'Black Adam',
                    video: false,
                    vote_average: 7.2,
                    vote_count: 3823
                  },
                  {
                    adult: false,
                    backdrop_path: '/8I37NtDffNV7AZlDa7uDvvqhovU.jpg',
                    genre_ids: [28, 12, 14, 878],
                    id: 19995,
                    original_language: 'en',
                    original_title: 'Avatar',
                    overview:
                      'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
                    popularity: 1830.085,
                    poster_path: '/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
                    release_date: '2009-12-15',
                    title: 'Avatar',
                    video: false,
                    vote_average: 7.6,
                    vote_count: 27935
                  },
                  {
                    adult: false,
                    backdrop_path: '/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg',
                    genre_ids: [35, 80, 9648],
                    id: 661374,
                    original_language: 'en',
                    original_title: 'Glass Onion: A Knives Out Mystery',
                    overview:
                      'World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.',
                    popularity: 1634.14,
                    poster_path: '/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg',
                    release_date: '2022-11-23',
                    title: 'Glass Onion: A Knives Out Mystery',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 2880
                  },
                  {
                    adult: false,
                    backdrop_path: '/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
                    genre_ids: [14, 28, 12, 53],
                    id: 736526,
                    original_language: 'no',
                    original_title: 'Troll',
                    overview:
                      'Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?',
                    popularity: 1677.618,
                    poster_path: '/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
                    release_date: '2022-12-01',
                    title: 'Troll',
                    video: false,
                    vote_average: 6.7,
                    vote_count: 1043
                  },
                  {
                    adult: false,
                    backdrop_path: '/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg',
                    genre_ids: [28, 18, 36],
                    id: 724495,
                    original_language: 'en',
                    original_title: 'The Woman King',
                    overview:
                      'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
                    popularity: 1336.853,
                    poster_path: '/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
                    release_date: '2022-09-16',
                    title: 'The Woman King',
                    video: false,
                    vote_average: 7.9,
                    vote_count: 1090
                  },
                  {
                    adult: false,
                    backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
                    genre_ids: [28, 12, 878],
                    id: 505642,
                    original_language: 'en',
                    original_title: 'Black Panther: Wakanda Forever',
                    overview:
                      'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
                    popularity: 1562.127,
                    poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
                    release_date: '2022-11-09',
                    title: 'Black Panther: Wakanda Forever',
                    video: false,
                    vote_average: 7.5,
                    vote_count: 1668
                  },
                  {
                    adult: false,
                    backdrop_path: '/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg',
                    genre_ids: [10402],
                    id: 1041513,
                    original_language: 'en',
                    original_title: 'Encanto at the Hollywood Bowl',
                    overview:
                      'A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!',
                    popularity: 1448.178,
                    poster_path: '/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg',
                    release_date: '2022-12-28',
                    title: 'Encanto at the Hollywood Bowl',
                    video: false,
                    vote_average: 6.8,
                    vote_count: 23
                  },
                  {
                    adult: false,
                    backdrop_path: '/7GmQKKAB3q3xkpxt1VFt2DrfviW.jpg',
                    genre_ids: [53, 80],
                    id: 934287,
                    original_language: 'da',
                    original_title: 'Klienten',
                    overview:
                      'Renowned psychologist Susanne (Signe Egholm Olsen) is caught in a living nightmare when her new client (Anton Hjejle) turns out to be a wanted serial killer.',
                    popularity: 1576.217,
                    poster_path: '/Agx1zaPXWiiG0wyKhuUJfinaRGJ.jpg',
                    release_date: '2022-06-20',
                    title: 'The Last Client',
                    video: false,
                    vote_average: 7.6,
                    vote_count: 27
                  },
                  {
                    adult: false,
                    backdrop_path: '/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg',
                    genre_ids: [10751, 35, 14],
                    id: 668482,
                    original_language: 'en',
                    original_title: "Roald Dahl's Matilda the Musical",
                    overview:
                      "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
                    popularity: 1376.663,
                    poster_path: '/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg',
                    release_date: '2022-11-25',
                    title: "Roald Dahl's Matilda the Musical",
                    video: false,
                    vote_average: 6.9,
                    vote_count: 382
                  },
                  {
                    adult: false,
                    backdrop_path: '/7dm64SW5L5CCg47kAEAcdCGaq5i.jpg',
                    genre_ids: [27, 53],
                    id: 676547,
                    original_language: 'en',
                    original_title: 'Prey for the Devil',
                    overview:
                      'In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.',
                    popularity: 1387.229,
                    poster_path: '/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg',
                    release_date: '2022-10-23',
                    title: 'Prey for the Devil',
                    video: false,
                    vote_average: 7.2,
                    vote_count: 407
                  },
                  {
                    adult: false,
                    backdrop_path: '/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg',
                    genre_ids: [12, 10751, 14],
                    id: 411,
                    original_language: 'en',
                    original_title:
                      'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
                    overview:
                      "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
                    popularity: 1099.187,
                    poster_path: '/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg',
                    release_date: '2005-12-07',
                    title:
                      'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 9189
                  },
                  {
                    adult: false,
                    backdrop_path: '/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg',
                    genre_ids: [28, 53, 80, 18],
                    id: 740952,
                    original_language: 'en',
                    original_title: 'Savage Salvation',
                    overview:
                      "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
                    popularity: 1260.421,
                    poster_path: '/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg',
                    release_date: '2022-12-02',
                    title: 'Savage Salvation',
                    video: false,
                    vote_average: 5.6,
                    vote_count: 41
                  },
                  {
                    adult: false,
                    backdrop_path: '/1Re7Q0qUgTWLBGP547yc8zKK5Sd.jpg',
                    genre_ids: [53, 27],
                    id: 985335,
                    original_language: 'en',
                    original_title: 'Girl at the Window',
                    overview:
                      'A troubled teenage girl who’s struggling to cope with the accidental death of her father suspects that the mysterious killer stalking her hometown is not only her neighbour but her mother’s new romantic interest.',
                    popularity: 1204.407,
                    poster_path: '/y8PhaJDd4YcYX7DVKJxoDwBUCZO.jpg',
                    release_date: '2022-08-18',
                    title: 'Girl at the Window',
                    video: false,
                    vote_average: 5,
                    vote_count: 15
                  },
                  {
                    adult: false,
                    backdrop_path: '/b08BDQPq42AoLMfhi7DtTOoYqVu.jpg',
                    genre_ids: [9648, 80, 27],
                    id: 800815,
                    original_language: 'en',
                    original_title: 'The Pale Blue Eye',
                    overview:
                      'West Point, New York, 1830. When a cadet at the burgeoning military academy is found hanged with his heart cut out, the top brass summons former New York City constable Augustus Landor to investigate. While attempting to solve this grisly mystery, the reluctant detective engages the help of one of the cadets: a strange but brilliant young fellow by the name of Edgar Allan Poe',
                    popularity: 1197.57,
                    poster_path: '/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg',
                    release_date: '2022-12-22',
                    title: 'The Pale Blue Eye',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 798
                  }
                ],
                total_pages: 36770,
                total_results: 735398
              }
            },
            {
              title: 'Top Rated Movies',
              data: {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
                    genre_ids: [18, 80],
                    id: 238,
                    original_language: 'en',
                    original_title: 'The Godfather',
                    overview:
                      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                    popularity: 103.242,
                    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                    release_date: '1972-03-14',
                    title: 'The Godfather',
                    video: false,
                    vote_average: 8.7,
                    vote_count: 17342
                  },
                  {
                    adult: false,
                    backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
                    genre_ids: [18, 80],
                    id: 278,
                    original_language: 'en',
                    original_title: 'The Shawshank Redemption',
                    overview:
                      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
                    popularity: 94.813,
                    poster_path: '/hBcY0fE9pfXzvVaY4GKarweriG2.jpg',
                    release_date: '1994-09-23',
                    title: 'The Shawshank Redemption',
                    video: false,
                    vote_average: 8.7,
                    vote_count: 23133
                  },
                  {
                    adult: false,
                    backdrop_path: '/r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
                    genre_ids: [16, 28, 12, 35, 10751, 14],
                    id: 315162,
                    original_language: 'en',
                    original_title: 'Puss in Boots: The Last Wish',
                    overview:
                      'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
                    popularity: 10011.23,
                    poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
                    release_date: '2022-12-07',
                    title: 'Puss in Boots: The Last Wish',
                    video: false,
                    vote_average: 8.6,
                    vote_count: 2366
                  },
                  {
                    adult: false,
                    backdrop_path: '/kGzFbGhp99zva6oZODW5atUtnqi.jpg',
                    genre_ids: [18, 80],
                    id: 240,
                    original_language: 'en',
                    original_title: 'The Godfather Part II',
                    overview:
                      'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
                    popularity: 71.251,
                    poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
                    release_date: '1974-12-20',
                    title: 'The Godfather Part II',
                    video: false,
                    vote_average: 8.6,
                    vote_count: 10499
                  },
                  {
                    adult: false,
                    backdrop_path: '/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
                    genre_ids: [18, 36, 10752],
                    id: 424,
                    original_language: 'en',
                    original_title: "Schindler's List",
                    overview:
                      'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
                    popularity: 61.419,
                    poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
                    release_date: '1993-12-15',
                    title: "Schindler's List",
                    video: false,
                    vote_average: 8.6,
                    vote_count: 13681
                  },
                  {
                    adult: false,
                    backdrop_path: '/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg',
                    genre_ids: [35, 18, 10749],
                    id: 19404,
                    original_language: 'hi',
                    original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
                    overview:
                      'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
                    popularity: 30.227,
                    poster_path: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
                    release_date: '1995-10-19',
                    title: 'Dilwale Dulhania Le Jayenge',
                    video: false,
                    vote_average: 8.6,
                    vote_count: 4028
                  },
                  {
                    adult: false,
                    backdrop_path: '/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg',
                    genre_ids: [16, 10751, 14],
                    id: 129,
                    original_language: 'ja',
                    original_title: '千と千尋の神隠し',
                    overview:
                      'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
                    popularity: 87.382,
                    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
                    release_date: '2002-09-20',
                    title: 'Spirited Away',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 13841
                  },
                  {
                    adult: false,
                    backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
                    genre_ids: [18],
                    id: 389,
                    original_language: 'en',
                    original_title: '12 Angry Men',
                    overview:
                      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
                    popularity: 36.025,
                    poster_path: '/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
                    release_date: '1957-04-10',
                    title: '12 Angry Men',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 6973
                  },
                  {
                    adult: false,
                    backdrop_path: '/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
                    genre_ids: [10749, 16, 18],
                    id: 372058,
                    original_language: 'ja',
                    original_title: '君の名は。',
                    overview:
                      'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
                    popularity: 112.84,
                    poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
                    release_date: '2016-08-26',
                    title: 'Your Name.',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 9424
                  },
                  {
                    adult: false,
                    backdrop_path: '/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
                    genre_ids: [35, 53, 18],
                    id: 496243,
                    original_language: 'ko',
                    original_title: '기생충',
                    overview:
                      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
                    popularity: 78.816,
                    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
                    release_date: '2019-05-30',
                    title: 'Parasite',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 15107
                  },
                  {
                    adult: false,
                    backdrop_path: '/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
                    genre_ids: [14, 18, 80],
                    id: 497,
                    original_language: 'en',
                    original_title: 'The Green Mile',
                    overview:
                      "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
                    popularity: 114.824,
                    poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
                    release_date: '1999-12-10',
                    title: 'The Green Mile',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 14916
                  },
                  {
                    adult: false,
                    backdrop_path: '/pbEkjhdfP7yuDcMB78YEZwgD4IN.jpg',
                    genre_ids: [18, 28, 80, 53],
                    id: 155,
                    original_language: 'en',
                    original_title: 'The Dark Knight',
                    overview:
                      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
                    popularity: 91.679,
                    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                    release_date: '2008-07-14',
                    title: 'The Dark Knight',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 29024
                  },
                  {
                    adult: false,
                    backdrop_path: '/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg',
                    genre_ids: [10749, 16],
                    id: 372754,
                    original_language: 'ja',
                    original_title: '同級生',
                    overview:
                      'Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.',
                    popularity: 14.622,
                    poster_path: '/cIfRCA5wEvj9tApca4UDUagQEiM.jpg',
                    release_date: '2016-02-20',
                    title: 'Dou kyu sei – Classmates',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 288
                  },
                  {
                    adult: false,
                    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
                    genre_ids: [53, 80],
                    id: 680,
                    original_language: 'en',
                    original_title: 'Pulp Fiction',
                    overview:
                      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                    popularity: 81.925,
                    poster_path: '/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
                    release_date: '1994-09-10',
                    title: 'Pulp Fiction',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 24502
                  },
                  {
                    adult: false,
                    backdrop_path: '/eoCSp75lxatmIa6aGqfnzwtbttd.jpg',
                    genre_ids: [37],
                    id: 429,
                    original_language: 'it',
                    original_title: 'Il buono, il brutto, il cattivo',
                    overview:
                      'While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.',
                    popularity: 64.048,
                    poster_path: '/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
                    release_date: '1966-12-23',
                    title: 'The Good, the Bad and the Ugly',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 7146
                  },
                  {
                    adult: false,
                    backdrop_path: '/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg',
                    genre_ids: [35, 18, 10749],
                    id: 13,
                    original_language: 'en',
                    original_title: 'Forrest Gump',
                    overview:
                      'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
                    popularity: 67.15,
                    poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
                    release_date: '1994-06-23',
                    title: 'Forrest Gump',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 24013
                  },
                  {
                    adult: false,
                    backdrop_path: '/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg',
                    genre_ids: [10749],
                    id: 696374,
                    original_language: 'en',
                    original_title: "Gabriel's Inferno",
                    overview:
                      "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
                    popularity: 14.657,
                    poster_path: '/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg',
                    release_date: '2020-05-29',
                    title: "Gabriel's Inferno",
                    video: false,
                    vote_average: 8.5,
                    vote_count: 2321
                  },
                  {
                    adult: false,
                    backdrop_path: '/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg',
                    genre_ids: [12, 14, 28],
                    id: 122,
                    original_language: 'en',
                    original_title:
                      'The Lord of the Rings: The Return of the King',
                    overview:
                      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
                    popularity: 98.777,
                    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
                    release_date: '2003-12-01',
                    title: 'The Lord of the Rings: The Return of the King',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 20970
                  },
                  {
                    adult: false,
                    backdrop_path: '/sw7mordbZxgITU877yTpZCud90M.jpg',
                    genre_ids: [18, 80],
                    id: 769,
                    original_language: 'en',
                    original_title: 'GoodFellas',
                    overview:
                      'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
                    popularity: 53.705,
                    poster_path: '/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
                    release_date: '1990-09-12',
                    title: 'GoodFellas',
                    video: false,
                    vote_average: 8.5,
                    vote_count: 10907
                  },
                  {
                    adult: false,
                    backdrop_path: '/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg',
                    genre_ids: [10749],
                    id: 724089,
                    original_language: 'en',
                    original_title: "Gabriel's Inferno: Part II",
                    overview:
                      "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
                    popularity: 19.28,
                    poster_path: '/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
                    release_date: '2020-07-31',
                    title: "Gabriel's Inferno: Part II",
                    video: false,
                    vote_average: 8.5,
                    vote_count: 1458
                  }
                ],
                total_pages: 537,
                total_results: 10732
              }
            },
            {
              title: 'Jaws',
              theme: {
                color: {
                  material: ['#ff0000', 100],
                  fillNeutral: 'theme.color.blue'
                },
                componentConfig: {
                  ProgressBar: {
                    style: {
                      progressColor: 0xfffff0000
                    }
                  }
                }
              },
              data: {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: '/3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg',
                    genre_ids: [27, 53, 12],
                    id: 578,
                    original_language: 'en',
                    original_title: 'Jaws',
                    overview:
                      'When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.',
                    popularity: 56.274,
                    poster_path: '/lxM6kqilAdpdhqUl2biYp5frUxE.jpg',
                    release_date: '1975-06-20',
                    title: 'Jaws',
                    video: false,
                    vote_average: 7.7,
                    vote_count: 8920
                  },
                  {
                    adult: false,
                    backdrop_path: '/mkTHOurFPTI0tobrregK7NpaLzy.jpg',
                    genre_ids: [53, 27],
                    id: 17692,
                    original_language: 'en',
                    original_title: 'Jaws 3-D',
                    overview:
                      "This third film in the series follows a group of marine biologists attempting to capture a young great white shark that has wandered into Florida's Sea World Park. However, later it is discovered that the shark's 35-foot mother is also a guest at Sea World. What follows is the shark wreaking havoc on the visitors in the park.",
                    popularity: 33.247,
                    poster_path: '/kqDXj53F9paqVGJLGfHtz7giJ3s.jpg',
                    release_date: '1983-07-22',
                    title: 'Jaws 3-D',
                    video: false,
                    vote_average: 4.4,
                    vote_count: 1059
                  },
                  {
                    adult: false,
                    backdrop_path: '/qNsLlAE9Sp34AYkaMw5083Xa660.jpg',
                    genre_ids: [27, 53],
                    id: 579,
                    original_language: 'en',
                    original_title: 'Jaws 2',
                    overview:
                      'Police chief Brody must protect the citizens of Amity after a second monstrous shark begins terrorizing the waters.',
                    popularity: 27.006,
                    poster_path: '/cN3ijEwsn4kBaRuHfcJpAQJbeWe.jpg',
                    release_date: '1978-06-16',
                    title: 'Jaws 2',
                    video: false,
                    vote_average: 5.9,
                    vote_count: 1588
                  },
                  {
                    adult: false,
                    backdrop_path: '/cJyQfwSEa5IjOdeNTuiWjciVbou.jpg',
                    genre_ids: [12, 53, 27],
                    id: 580,
                    original_language: 'en',
                    original_title: 'Jaws: The Revenge',
                    overview:
                      "After another deadly shark attack, Ellen Brody decides she has had enough of New England's Amity Island and moves to the Caribbean to join her son, Michael, and his family. But a great white shark has followed her there, hungry for more lives.",
                    popularity: 25.591,
                    poster_path: '/kGiaOztahZV2x7bil7sbk7fb6ob.jpg',
                    release_date: '1987-07-17',
                    title: 'Jaws: The Revenge',
                    video: false,
                    vote_average: 4.1,
                    vote_count: 848
                  },
                  {
                    adult: false,
                    backdrop_path: '/vCQRs9QMADZEbGiS4hJkjAzis36.jpg',
                    genre_ids: [28, 12, 35, 27, 53],
                    id: 84060,
                    original_language: 'en',
                    original_title: 'Cruel Jaws',
                    overview:
                      'A tiger shark bred by the Navy as a killing machine is wreaking havoc in the sleepy tourist town of Hampton Bay.',
                    popularity: 9.783,
                    poster_path: '/3aLabIgttFYtHaN7eVQAA9nGdHz.jpg',
                    release_date: '1995-05-05',
                    title: 'Cruel Jaws',
                    video: false,
                    vote_average: 4.3,
                    vote_count: 65
                  },
                  {
                    adult: false,
                    backdrop_path: '/7RbfFVlKp4hXghyC8cLd0prpiXr.jpg',
                    genre_ids: [28, 14, 27],
                    id: 542476,
                    original_language: 'en',
                    original_title: 'Santa Jaws',
                    overview:
                      'Trying to survive the family Christmas, Cody makes a wish to be alone, which ends up backfiring when a shark manifests and kills his entire family.',
                    popularity: 3.032,
                    poster_path: '/Aa83AOi5XnyR2gPmb1CRJbtZw1y.jpg',
                    release_date: '2018-08-15',
                    title: 'Santa Jaws',
                    video: false,
                    vote_average: 4.7,
                    vote_count: 18
                  },
                  {
                    adult: false,
                    backdrop_path: '/iZkXyDAbxahR2OjLA0ZwoS4nLqM.jpg',
                    genre_ids: [27, 9648, 53],
                    id: 85512,
                    original_language: 'en',
                    original_title: 'Jaws of Satan',
                    overview:
                      'A preacher whose ancestors were Druids battles Satan, who has taken the form of a huge snake.',
                    popularity: 4.247,
                    poster_path: '/rMr9cwQAJst3dKZmxdA8rFS13aZ.jpg',
                    release_date: '1981-07-24',
                    title: 'Jaws of Satan',
                    video: false,
                    vote_average: 5,
                    vote_count: 26
                  },
                  {
                    adult: false,
                    backdrop_path: '/wr62igjmKi2odCcaWv2dTs90mPB.jpg',
                    genre_ids: [99, 10770],
                    id: 988365,
                    original_language: 'en',
                    original_title: 'Jaws Invasion',
                    overview:
                      'Big and dangerous predators are invading unexpected waters, from golf courses and swimming pools to lakes and backyard keys. Through analyzing user-generated footage, shark experts get to the bottom of how and why sharks seem more willing than ever to meet us on our own turf. In a bizarre twist, people encountering sharks in unexpected places are called to urgent action.',
                    popularity: 2.958,
                    poster_path: '/mEbMdUI6l5iLwHrjLbL2WC0zIJd.jpg',
                    release_date: '2022-07-19',
                    title: 'Jaws Invasion',
                    video: false,
                    vote_average: 6,
                    vote_count: 1
                  },
                  {
                    adult: false,
                    backdrop_path: '/5u1I4oja97hTKIL92iqjfU1RAKS.jpg',
                    genre_ids: [27, 53],
                    id: 97559,
                    original_language: 'en',
                    original_title: 'Mako: The Jaws of Death',
                    overview:
                      'A man accidentally learns that he has a mystical connection with sharks, and is given a strange medallion by a shaman. Becoming more and more alienated from normal society, he develops an ability to communicate with sharks telepathically, setting out to destroy anybody who harms sharks. People enter into his strange world to exploit his weird passion, and he uses the animals to gain revenge on anybody who double crosses him.',
                    popularity: 3.934,
                    poster_path: '/fr59VuliyXNQRtVYUAGXtfTZ0jK.jpg',
                    release_date: '1976-07-01',
                    title: 'Mako: The Jaws of Death',
                    video: false,
                    vote_average: 3.9,
                    vote_count: 13
                  },
                  {
                    adult: false,
                    backdrop_path: '/7PNu7zmO7YnsOYWCXta800XyBX5.jpg',
                    genre_ids: [99, 10770],
                    id: 988357,
                    original_language: 'en',
                    original_title: 'Jaws vs. Boats',
                    overview:
                      'All across YouTube, viral videos abound of great whites and other sharks attacking boats with a ferocity and anger that has never been seen before. The question is, why? Is this simply a case of more people having cameras to video the behavior, or is something else happening? Dr. Mike Heithaus and Ph.D. candidate Sara Casareto set out to investigate what’s causing this clash between sharks and boats.',
                    popularity: 2.647,
                    poster_path: '/sL7QMYR2nw3rhIrUiy3IvxWlEtd.jpg',
                    release_date: '2022-07-10',
                    title: 'Jaws vs. Boats',
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  },
                  {
                    adult: false,
                    backdrop_path: '/mvMmmzj6K1zNvoHQeNduBuIPfML.jpg',
                    genre_ids: [35],
                    id: 50963,
                    original_language: 'en',
                    original_title: 'Deep Jaws',
                    overview:
                      "A bankrupt studio schemes the government to finance a sexploitation mermaids film. Casting couches thus join the already exploitive studio. Meanwhile, the Secretary of State arranges an affair with the studio head's buxom wife Henrietta.",
                    popularity: 2.523,
                    poster_path: '/libaJK5Dfaw1QuyrJeo1kWAZpgh.jpg',
                    release_date: '1976-01-01',
                    title: 'Deep Jaws',
                    video: false,
                    vote_average: 1,
                    vote_count: 1
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [18, 27, 9648],
                    id: 72021,
                    original_language: 'ja',
                    original_title: 'Jaws in Japan',
                    overview:
                      "Beautiful girls are in danger. At Sunny Beach, a huge shark is waiting for his prey. College students Miki and Mai arrive on a private beach on a tropical island. They can't find the hotel where they booked their reservations, and have gotten hopelessly lost, until a handsome young man shows up, offering to take them to his lodge. But something is not right about the place. The owner's fingernails are tainted with blood and Miki feels something sinister lurking nearby.",
                    popularity: 3.046,
                    poster_path: '/4Cf8I4D9I05KeHpYRUzlILRTn2C.jpg',
                    release_date: '2009-08-21',
                    title: 'Psycho Shark',
                    video: false,
                    vote_average: 3.3,
                    vote_count: 13
                  },
                  {
                    adult: false,
                    backdrop_path: '/yb0Ta4enVcgZQtg4uPfYbA16C3e.jpg',
                    genre_ids: [99],
                    id: 1005060,
                    original_language: 'en',
                    original_title: 'Jaws vs. Kraken',
                    overview:
                      'Something shocking is happening in the abyss around Guadalupe Island. Photos of great whites with strange scars believed to be from giant squids have surfaced. Dr. Tristan Guttridge leads a mission to get a glimpse into the battles between the two beasts.',
                    popularity: 2.206,
                    poster_path: '/8Cg0Gt4zacOrAYmHRvWnZupxcPk.jpg',
                    release_date: '2022-07-25',
                    title: 'Jaws vs. Kraken',
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  },
                  {
                    adult: false,
                    backdrop_path: '/gqO9RdweTGyBzfGmnr19zcazSbV.jpg',
                    genre_ids: [99],
                    id: 167065,
                    original_language: 'en',
                    original_title: 'The Making of Jaws',
                    overview:
                      'A documentary on the making of one of the greatest films ever made, filled with trivia, interviews from cast and crew and never-before-seen footage.',
                    popularity: 2.72,
                    poster_path: '/osyj5B7WrVn0Oc2oDWvDVoSCQ9y.jpg',
                    release_date: '1995-11-28',
                    title: 'The Making of Jaws',
                    video: false,
                    vote_average: 6.6,
                    vote_count: 25
                  },
                  {
                    adult: false,
                    backdrop_path: '/7MANnNbpsIQlRNim3unUl5QQPd3.jpg',
                    genre_ids: [99, 10770],
                    id: 988337,
                    original_language: 'en',
                    original_title: 'Counting Jaws',
                    overview:
                      'Shark encounters off the coast of California are skyrocketing. Now, a team of researchers is on a mission to investigate a newly discovered white shark hot spot close to popular beaches and determine how many great whites are out there. Their expedition will bring them face-to-face with some of the biggest sharks on the planet.',
                    popularity: 1.893,
                    poster_path: '/kAc1NGeGW5INfPZstuoysYRARAz.jpg',
                    release_date: '2022-07-10',
                    title: 'Counting Jaws',
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  },
                  {
                    adult: false,
                    backdrop_path: '/lbEZ94506M4489fuLn5mtIqUPKj.jpg',
                    genre_ids: [],
                    id: 84219,
                    original_language: 'en',
                    original_title: 'Jaws: The Inside Story',
                    overview:
                      'Steven Spielberg takes us behind the cameras for the making of a classic movie.',
                    popularity: 2.301,
                    poster_path: '/myqzQB5M8kW1AtiQgHjtKf80Eof.jpg',
                    release_date: '2010-06-16',
                    title: 'Jaws: The Inside Story',
                    video: false,
                    vote_average: 7.4,
                    vote_count: 8
                  },
                  {
                    adult: false,
                    backdrop_path: '/w5tQMEiVtshjM9jPjhMxdRNUXcr.jpg',
                    genre_ids: [99],
                    id: 613476,
                    original_language: 'en',
                    original_title: 'Saving Jaws',
                    overview:
                      'OCEAN RAMSEY attributes her unparalleled connection with sharks to over a decade of research, but many are convinced it is something more... The media has dubbed her "The Shark Whisperer". Battling a looming extinction, Ocean and her team of marine biologists will travel the globe for 12 months, conducting research and expanding their conservation efforts. From renowned scientists and PHDs, to elite athletes and celebrities, "The Shark Whisperer" will lead humans from all walks of life out of their element and into the deep... free-diving with some of the worlds most dangerous sharks. Her goal: To give the world the opportunity to see sharks the way she does.',
                    popularity: 1.328,
                    poster_path: '/soCdTnnjJss5oc55ceCBZSP1zsF.jpg',
                    release_date: '2019-06-24',
                    title: 'Saving Jaws',
                    video: false,
                    vote_average: 6.3,
                    vote_count: 3
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [27],
                    id: 645900,
                    original_language: 'en',
                    original_title: 'Jaws',
                    overview:
                      'Fessenden’s unfinished remake of Spielberg’s classic.',
                    popularity: 0.62,
                    poster_path: '/zQ790ksu8IXI0NO3ORz8MOCMuUG.jpg',
                    release_date: '1978-01-01',
                    title: 'Jaws',
                    video: false,
                    vote_average: 10,
                    vote_count: 1
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [16],
                    id: 514492,
                    original_language: 'en',
                    original_title: 'Jaws',
                    overview:
                      'A short film animation by Zaven Najjar about the movie "Jaws".',
                    popularity: 0.6,
                    poster_path: '/n29QyzfangOxBlNWtfukNXXu9YQ.jpg',
                    release_date: '2018-05-29',
                    title: 'Jaws',
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [99],
                    id: 619601,
                    original_language: 'en',
                    original_title: "How 'Jaws' Changed the World",
                    overview:
                      'A look at the classic film Jaws and what happened in the swell after the movie.',
                    popularity: 1.714,
                    poster_path: '/jBDS8CACOIUg3VlQZbFXiEqEAxV.jpg',
                    release_date: '2012-08-14',
                    title: "How 'Jaws' Changed the World",
                    video: false,
                    vote_average: 0,
                    vote_count: 0
                  }
                ],
                total_pages: 4,
                total_results: 66
              }
            },
            {
              title: 'Marvel',
              data: {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
                    genre_ids: [28, 12, 878],
                    id: 299537,
                    original_language: 'en',
                    original_title: 'Captain Marvel',
                    overview:
                      'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
                    popularity: 63.319,
                    poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
                    release_date: '2019-03-06',
                    title: 'Captain Marvel',
                    video: false,
                    vote_average: 6.9,
                    vote_count: 13870
                  },
                  {
                    adult: false,
                    backdrop_path: '/45Jpw4XHa95GoXKKUlQQSP1PgvK.jpg',
                    genre_ids: [28, 12, 878, 14],
                    id: 211387,
                    original_language: 'en',
                    original_title: 'Marvel One-Shot: Agent Carter',
                    overview:
                      'The film takes place one year after the events of Captain America: The First Avenger, in which Agent Carter, a member of the Strategic Scientific Reserve, is in search of the mysterious Zodiac.',
                    popularity: 17.864,
                    poster_path: '/4vFKKWPvCVDJTOWiwReBfpAMScP.jpg',
                    release_date: '2013-09-03',
                    title: 'Marvel One-Shot: Agent Carter',
                    video: false,
                    vote_average: 7.3,
                    vote_count: 614
                  },
                  {
                    adult: false,
                    backdrop_path: '/h7fyYm1VXCivGtNx6TfEj1AVObI.jpg',
                    genre_ids: [12, 14, 878, 28],
                    id: 76122,
                    original_language: 'en',
                    original_title: 'Marvel One-Shot: The Consultant',
                    overview:
                      "Agent Coulson informs Agent Sitwell that the World Security Council wishes Emil Blonsky to be released from prison to join the Avengers Initiative. As Nick Fury doesn't want to release Blonsky, the two agents decide to send a patsy to sabotage the meeting...",
                    popularity: 15.633,
                    poster_path: '/xqNLXUUvBnfVk6m3QFGGU0Grgs7.jpg',
                    release_date: '2011-09-13',
                    title: 'Marvel One-Shot: The Consultant',
                    video: false,
                    vote_average: 6.4,
                    vote_count: 422
                  },
                  {
                    adult: false,
                    backdrop_path: '/96ANeIgnKUqrBNlG2ZdesuOsony.jpg',
                    genre_ids: [16, 14, 10751],
                    id: 528222,
                    original_language: 'en',
                    original_title:
                      'LEGO Marvel Super Heroes: Black Panther - Trouble in Wakanda',
                    overview:
                      'After speaking at the Wakanda Embassy, Black Panther fights Thanos and fends him off with the help of fellow Avengers Captain America, Thor, Iron Man, Hulk, and Black Widow. After regaining conscious, Thanos is approached by Erik Killmonger and Ulysses Klaue in a plot where they will obtain the Vibranium in Wakanda to empower Thanos. When Black Panther discovers this plot, he must work with Shuri, Okoye, and the Avengers to defeat them.',
                    popularity: 49.022,
                    poster_path: '/2t6V87sYjESrtBj9flbHWhZKtAp.jpg',
                    release_date: '2018-06-04',
                    title:
                      'LEGO Marvel Super Heroes: Black Panther - Trouble in Wakanda',
                    video: false,
                    vote_average: 6.4,
                    vote_count: 50
                  },
                  {
                    adult: false,
                    backdrop_path: '/95AKEQdhAF7YlH6XJSOFaqNTW0J.jpg',
                    genre_ids: [10751, 16, 28, 35, 878, 10770, 12],
                    id: 491633,
                    original_language: 'en',
                    original_title: 'Marvel Rising: Secret Warriors',
                    overview:
                      "When a threat no one could have expected bears down on the Marvel Universe, this ragtag, untrained band of teens have no choice but to rise together and prove to the world that sometimes the difference between a 'hero' and 'misfit' is just in the name.",
                    popularity: 11.997,
                    poster_path: '/kY1ufnbv2bTyoNcAtGF4BwapKi6.jpg',
                    release_date: '2018-09-30',
                    title: 'Marvel Rising: Secret Warriors',
                    video: false,
                    vote_average: 6.9,
                    vote_count: 82
                  },
                  {
                    adult: false,
                    backdrop_path: '/cmQdrAsmZomfAl3v7WurDvZM7UK.jpg',
                    genre_ids: [16, 10751, 35],
                    id: 284019,
                    original_language: 'en',
                    original_title: 'Phineas and Ferb: Mission Marvel',
                    overview:
                      'Phineas and Ferb team up with the Avengers to save the world from Dr. Doofenshmirtz and a group of dangerous supervillains.',
                    popularity: 14.906,
                    poster_path: '/da2AREjdecPInHzWeZ550X1aYDU.jpg',
                    release_date: '2013-08-16',
                    title: 'Phineas and Ferb: Mission Marvel',
                    video: false,
                    vote_average: 6.6,
                    vote_count: 142
                  },
                  {
                    adult: false,
                    backdrop_path: '/pC36ONAaKMXStlvutYFcAbMemCM.jpg',
                    genre_ids: [878, 28, 14],
                    id: 119569,
                    original_language: 'en',
                    original_title: 'Marvel One-Shot: Item 47',
                    overview:
                      "Benny and Claire, a down-on-their-luck couple, find a discarded Chitauri weapon referred to as 'Item 47'.",
                    popularity: 11.415,
                    poster_path: '/rfxvoRoZtBLUXJqLf8z9kgJWkKt.jpg',
                    release_date: '2012-09-13',
                    title: 'Marvel One-Shot: Item 47',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 424
                  },
                  {
                    adult: false,
                    backdrop_path: '/vp4PvW8vxWHN8rai42SeOXcimcp.jpg',
                    genre_ids: [16, 10751, 878, 28],
                    id: 583209,
                    original_language: 'en',
                    original_title: 'Marvel Rising: Heart of Iron',
                    overview:
                      "Ironheart, AKA Riri Williams, is having difficulty adjusting to college life as the youngest student there when the college's engineering lab is demolished by an alien and her best friend is kidnapped. Inspired by Iron Man, she develops a plan to save her friend.",
                    popularity: 13.994,
                    poster_path: '/z3lD286jY8iYasC5hJZ2kgZF9uY.jpg',
                    release_date: '2019-04-03',
                    title: 'Marvel Rising: Heart of Iron',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 53
                  },
                  {
                    adult: false,
                    backdrop_path: '/czHz1DWWE0bcffXybT7u1wNshSx.jpg',
                    genre_ids: [10770, 99],
                    id: 259910,
                    original_language: 'en',
                    original_title: 'Marvel Studios: Assembling a Universe',
                    overview:
                      'A look at the story behind Marvel Studios and the Marvel Cinematic Universe, featuring interviews and behind-the-scenes footage from all of the Marvel films, the Marvel One-Shots and "Marvel\'s Agents of S.H.I.E.L.D."',
                    popularity: 12.443,
                    poster_path: '/41Ke02UzYoPsiTc3YbomPGiQKMl.jpg',
                    release_date: '2014-03-18',
                    title: 'Marvel Studios: Assembling a Universe',
                    video: false,
                    vote_average: 7,
                    vote_count: 136
                  },
                  {
                    adult: false,
                    backdrop_path: '/e6RHrRaG8t5o2REYMfYkvhoamw2.jpg',
                    genre_ids: [28, 35, 14, 53],
                    id: 253980,
                    original_language: 'en',
                    original_title: 'Marvel One-Shot: All Hail the King',
                    overview:
                      'A documentary filmmaker interviews the now-famous Trevor Slattery from behind bars.',
                    popularity: 15.811,
                    poster_path: '/ozXvopXv1TiOTls8zb09dBmu9dt.jpg',
                    release_date: '2014-02-04',
                    title: 'Marvel One-Shot: All Hail the King',
                    video: false,
                    vote_average: 6.8,
                    vote_count: 415
                  },
                  {
                    adult: false,
                    backdrop_path: '/zvjBC9guJVw32bZu4ODp6wzJ9Vi.jpg',
                    genre_ids: [10751, 16],
                    id: 368304,
                    original_language: 'en',
                    original_title:
                      'LEGO Marvel Super Heroes: Avengers Reassembled!',
                    overview:
                      'The Avengers are forced to “party” with Ultron when he seeks to disassemble the team by taking control of Iron Man’s armor and enact a nefarious scheme to take over the world.',
                    popularity: 13.886,
                    poster_path: '/wEtF1o9debfOwzr117TI78dNV6Y.jpg',
                    release_date: '2015-11-16',
                    title: 'LEGO Marvel Super Heroes: Avengers Reassembled!',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 107
                  },
                  {
                    adult: false,
                    backdrop_path: '/qXOYUTJ5p5aINFGmyIWTGeZCNTc.jpg',
                    genre_ids: [99],
                    id: 1001912,
                    original_language: 'en',
                    original_title:
                      'Marvel Studios Assembled: The Making of Ms. Marvel',
                    overview:
                      'Go behind-the-scenes every step of the way with immersive footage from the making of the series, along with insightful interviews on set from the cast and crew of Ms. Marvel as we watch Iman Vellani and her character, Kamala Khan, become the fan-favorite superhero right before our eyes.',
                    popularity: 7.059,
                    poster_path: '/6m0rG2bS90FOlUaxEq8ZPCTQMei.jpg',
                    release_date: '2022-08-03',
                    title: 'Marvel Studios Assembled: The Making of Ms. Marvel',
                    video: false,
                    vote_average: 6.9,
                    vote_count: 18
                  },
                  {
                    adult: false,
                    backdrop_path: '/tMOWRvHc7sdsc7UNtK6Nfb0onWD.jpg',
                    genre_ids: [10751, 16, 28, 12],
                    id: 576743,
                    original_language: 'en',
                    original_title: 'Marvel Rising: Chasing Ghosts',
                    overview:
                      'Hot on the trails of Sheath and Exile, Ghost-Spider teams up with the rest of the Secret Warriors to bring down the villains for good.',
                    popularity: 8.145,
                    poster_path: '/pufQvXrrxng95dT4kYlQtXn98kK.jpg',
                    release_date: '2019-01-16',
                    title: 'Marvel Rising: Chasing Ghosts',
                    video: false,
                    vote_average: 7.1,
                    vote_count: 39
                  },
                  {
                    adult: false,
                    backdrop_path: '/zRWPnVX9KL1LPOQrJfPuY9ynVkX.jpg',
                    genre_ids: [16],
                    id: 375211,
                    original_language: 'en',
                    original_title: 'Marvel Knights: Eternals',
                    overview:
                      "You are thousands of years old. You have amazing powers. You have watched civilizations rise and fall. So why does no one remember any of this? Best-selling author, Neil Gaiman (Marvel: 1602) is joined by superstar artist, John Romita. Jr. (Amazing Spider-Man), to bring you the extraordinary tale of The Eternals. Medical student Mark Curry's world is turned upside-down when he meets Ike Harris, a man who believes that he is part of a centuries-old race of super-powered beings put here on Earth by aliens to preserve and safeguard the planet — and even crazier, tried to convince Mark that he is one too.",
                    popularity: 7.27,
                    poster_path: '/wVWDDzB0sWEIEMh0TXgqRa8X65o.jpg',
                    release_date: '2014-09-16',
                    title: 'Marvel Knights: Eternals',
                    video: false,
                    vote_average: 6.8,
                    vote_count: 31
                  },
                  {
                    adult: false,
                    backdrop_path: '/yRbDw6Ly8MSQNDfLQNffHZuPZpS.jpg',
                    genre_ids: [16, 14],
                    id: 372631,
                    original_language: 'en',
                    original_title:
                      'Marvel Super Hero Adventures: Frost Fight!',
                    overview:
                      "The holiday season gets extra chilly as Loki and the frost giant Ymir plot to conquer the world. Marvel heroes Iron Man, Captain America, Hulk, Thor and others must stop the villains from stealing Santa's power – if anyone can actually find the mysterious Mr. Claus. Fortunately, Rocket Raccoon and Groot are also hot on Santa's trail. Heroes, villains, elves and cosmic bounty hunters collide in an epic quest that leaves the fate of the holiday and the world in the balance.",
                    popularity: 10.604,
                    poster_path: '/2StM8Vavf7ukvuj9mxg1o7nKxmi.jpg',
                    release_date: '2015-12-15',
                    title: 'Marvel Super Hero Adventures: Frost Fight!',
                    video: true,
                    vote_average: 5.9,
                    vote_count: 39
                  },
                  {
                    adult: false,
                    backdrop_path: '/4oQo2pkNyv5zOqwAdwI2dSJTmEx.jpg',
                    genre_ids: [16, 28, 12, 10751],
                    id: 592689,
                    original_language: 'en',
                    original_title: 'Marvel Rising: Playing with Fire',
                    overview:
                      'Inferno’s powers are stolen by a young and powerful villain and it’s up to the Secret Warriors to defeat their new foe and help their friend. But does Inferno even WANT his powers back? Meanwhile, America Chavez learns a lesson about friendship and family from teammate Ms. Marvel.',
                    popularity: 7.425,
                    poster_path: '/lelNkBnjIi4N1uQBV2TnODgS9UT.jpg',
                    release_date: '2019-12-18',
                    title: 'Marvel Rising: Playing with Fire',
                    video: false,
                    vote_average: 6.6,
                    vote_count: 34
                  },
                  {
                    adult: false,
                    backdrop_path: '/gBh15609apMzMgcafijKNBxdeTS.jpg',
                    genre_ids: [99],
                    id: 939356,
                    original_language: 'en',
                    original_title:
                      'Marvel Studios Assembled: The Making of Eternals',
                    overview:
                      'Join director Chloe Zhao and the Cast of Eternals as they recount their experiences during the making of Marvel Studios’ most ambitious film to date. Discover how the ensemble cast felt stepping into their roles, filming in remote locations, and creating bonds that would help to create the on-screen relationships that span over 7,000 years.',
                    popularity: 14.172,
                    poster_path: '/fBJ5ZjFJ6IHQWz90SsW80PizVlF.jpg',
                    release_date: '2022-02-16',
                    title: 'Marvel Studios Assembled: The Making of Eternals',
                    video: false,
                    vote_average: 7.3,
                    vote_count: 31
                  },
                  {
                    adult: false,
                    backdrop_path: '/EXJrCRBYAPffNuMQbX7irsbrRn.jpg',
                    genre_ids: [16, 28],
                    id: 622230,
                    original_language: 'en',
                    original_title: 'LEGO Marvel Spider-Man: Vexed by Venom',
                    overview:
                      'Thanks to Green Goblin and Venom, tech theft is now at an all-time high. Can our Friendly Neighborhood Spider-Man put an end to their mysterious villainous scheme before all of New York City is destroyed?',
                    popularity: 9.4,
                    poster_path: '/gTo2r8nNU3ZYAS6DqdeSp1VEqkq.jpg',
                    release_date: '2019-08-03',
                    title: 'LEGO Marvel Spider-Man: Vexed by Venom',
                    video: false,
                    vote_average: 7.3,
                    vote_count: 15
                  },
                  {
                    adult: false,
                    backdrop_path: '/26lpL6CMsOFSf59zbaP13rY5z18.jpg',
                    genre_ids: [10751, 16, 878, 12],
                    id: 592688,
                    original_language: 'en',
                    original_title: 'Marvel Rising: Operation Shuri',
                    overview:
                      'The lives of the Secret Warriors are turned upside down when faced with their latest mission: hang out with Shuri, the Crown Princess of Wakanda, and show her what it’s like to be an ordinary teenager. But nothing’s ordinary when you’re dealing with one of the smartest and most famous people on the planet.',
                    popularity: 5.337,
                    poster_path: '/4fcvluN98HWo6VB7C5ONRNOL4CY.jpg',
                    release_date: '2019-10-11',
                    title: 'Marvel Rising: Operation Shuri',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 23
                  },
                  {
                    adult: false,
                    backdrop_path: '/jUhqvox1RCNMg4yWWW5AqIVX8Mj.jpg',
                    genre_ids: [99],
                    id: 936643,
                    original_language: 'en',
                    original_title:
                      'Marvel Studios Assembled: The Making of Hawkeye',
                    overview:
                      'Join the likes of Jeremy Renner, Hailee Steinfeld, Florence Pugh, and Vincent D’Onofrio as they reveal how Marvel Studios’ “Hawkeye” was conceived and created. Witness firsthand what it took to pull off the show’s pulse-pounding action set pieces, and discover how iconic characters from the pages of Marvel Comics such as Kate Bishop were adapted and brought to life for the six-episode series.',
                    popularity: 10.696,
                    poster_path: '/pQOLNPHe4rwXl3RpKNa0VWjYNLR.jpg',
                    release_date: '2022-02-09',
                    title: 'Marvel Studios Assembled: The Making of Hawkeye',
                    video: false,
                    vote_average: 7.2,
                    vote_count: 28
                  }
                ],
                total_pages: 11,
                total_results: 203
              }
            },
            {
              title: 'Star Wars',
              data: {
                page: 1,
                results: [
                  {
                    adult: false,
                    backdrop_path: '/aDYSnJAK0BTVeE8osOy22Kz3SXY.jpg',
                    genre_ids: [12, 28, 878],
                    id: 11,
                    original_language: 'en',
                    original_title: 'Star Wars',
                    overview:
                      'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
                    popularity: 86.062,
                    poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
                    release_date: '1977-05-25',
                    title: 'Star Wars',
                    video: false,
                    vote_average: 8.2,
                    vote_count: 18162
                  },
                  {
                    adult: false,
                    backdrop_path: '/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg',
                    genre_ids: [12, 28, 878, 14],
                    id: 140607,
                    original_language: 'en',
                    original_title: 'Star Wars: The Force Awakens',
                    overview:
                      'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
                    popularity: 68.206,
                    poster_path: '/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
                    release_date: '2015-12-15',
                    title: 'Star Wars: The Force Awakens',
                    video: false,
                    vote_average: 7.3,
                    vote_count: 17680
                  },
                  {
                    adult: false,
                    backdrop_path: '/epVMXf10WqFkONzKR8V76Ypj5Y3.jpg',
                    genre_ids: [12, 28, 878],
                    id: 181808,
                    original_language: 'en',
                    original_title: 'Star Wars: The Last Jedi',
                    overview:
                      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
                    popularity: 59.766,
                    poster_path: '/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
                    release_date: '2017-12-13',
                    title: 'Star Wars: The Last Jedi',
                    video: false,
                    vote_average: 6.8,
                    vote_count: 13665
                  },
                  {
                    adult: false,
                    backdrop_path: '/ojHCeDULAkQK25700fhRU75Tur2.jpg',
                    genre_ids: [878, 12, 28],
                    id: 348350,
                    original_language: 'en',
                    original_title: 'Solo: A Star Wars Story',
                    overview:
                      'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
                    popularity: 49.07,
                    poster_path: '/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg',
                    release_date: '2018-05-15',
                    title: 'Solo: A Star Wars Story',
                    video: false,
                    vote_average: 6.6,
                    vote_count: 7487
                  },
                  {
                    adult: false,
                    backdrop_path: '/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg',
                    genre_ids: [12, 28, 878],
                    id: 181812,
                    original_language: 'en',
                    original_title: 'Star Wars: The Rise of Skywalker',
                    overview:
                      'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
                    popularity: 65.967,
                    poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
                    release_date: '2019-12-18',
                    title: 'Star Wars: The Rise of Skywalker',
                    video: false,
                    vote_average: 6.4,
                    vote_count: 8406
                  },
                  {
                    adult: false,
                    backdrop_path: '/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg',
                    genre_ids: [28, 12, 878],
                    id: 330459,
                    original_language: 'en',
                    original_title: 'Rogue One: A Star Wars Story',
                    overview:
                      'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.',
                    popularity: 44.699,
                    poster_path: '/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg',
                    release_date: '2016-12-14',
                    title: 'Rogue One: A Star Wars Story',
                    video: false,
                    vote_average: 7.5,
                    vote_count: 13754
                  },
                  {
                    adult: false,
                    backdrop_path: '/f53Jujiap580mgfefID0T0g2e17.jpg',
                    genre_ids: [16, 10751, 878, 35, 28, 27, 10770],
                    id: 857702,
                    original_language: 'en',
                    original_title: 'LEGO Star Wars Terrifying Tales',
                    overview:
                      'Poe Dameron and BB-8 must face the greedy crime boss Graballa the Hutt, who has purchased Darth Vader’s castle and is renovating it into the galaxy’s first all-inclusive Sith-inspired luxury hotel.',
                    popularity: 36.321,
                    poster_path: '/fYiaBZDjyXjvlY6EDZMAxIhBO1I.jpg',
                    release_date: '2021-10-01',
                    title: 'LEGO Star Wars Terrifying Tales',
                    video: false,
                    vote_average: 6.8,
                    vote_count: 204
                  },
                  {
                    adult: false,
                    backdrop_path: '/5fu7fzy4NZTsL1Jap00UBIInAuB.jpg',
                    genre_ids: [12, 28, 878],
                    id: 1893,
                    original_language: 'en',
                    original_title: 'Star Wars: Episode I - The Phantom Menace',
                    overview:
                      'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.',
                    popularity: 42.272,
                    poster_path: '/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg',
                    release_date: '1999-05-19',
                    title: 'Star Wars: Episode I - The Phantom Menace',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 12866
                  },
                  {
                    adult: false,
                    backdrop_path: '/vV5knD9jlW8QaOhCgf4129hbIIh.jpg',
                    genre_ids: [10751, 16, 35, 878, 10770],
                    id: 980804,
                    original_language: 'en',
                    original_title: 'LEGO Star Wars Summer Vacation',
                    overview:
                      "Looking for a much-needed break, Finn arranges a surprise vacation for his friends Rey, Poe, Rose, Chewie, BB-8, R2-D2, and C-3PO, aboard the luxurious Halcyon. However, Finn's plan to have one last hurrah together quickly goes awry.",
                    popularity: 28.886,
                    poster_path: '/2SatEFCs04oFRqkZuY1fODYXeFI.jpg',
                    release_date: '2022-08-05',
                    title: 'LEGO Star Wars Summer Vacation',
                    video: false,
                    vote_average: 6,
                    vote_count: 43
                  },
                  {
                    adult: false,
                    backdrop_path: '/xEdnGUc8KeZ7h0eEgSN3ERhjgL0.jpg',
                    genre_ids: [16, 28, 878, 12],
                    id: 12180,
                    original_language: 'en',
                    original_title: 'Star Wars: The Clone Wars',
                    overview:
                      "Set between Episode II and III, The Clone Wars is the first computer animated Star Wars film. Anakin and Obi Wan must find out who kidnapped Jabba the Hutt's son and return him safely. The Separatists will try anything to stop them and ruin any chance of a diplomatic agreement between the Hutts and the Republic.",
                    popularity: 21.491,
                    poster_path: '/d6YOfi0T9GowglzIkDQGGvGYVTM.jpg',
                    release_date: '2008-08-05',
                    title: 'Star Wars: The Clone Wars',
                    video: false,
                    vote_average: 6.1,
                    vote_count: 1699
                  },
                  {
                    adult: false,
                    backdrop_path: '/azRFRv6QQLlBIlmnSpLP2B76SGL.jpg',
                    genre_ids: [12, 28, 878],
                    id: 1895,
                    original_language: 'en',
                    original_title:
                      'Star Wars: Episode III - Revenge of the Sith',
                    overview:
                      'The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.',
                    popularity: 39.034,
                    poster_path: '/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg',
                    release_date: '2005-05-17',
                    title: 'Star Wars: Episode III - Revenge of the Sith',
                    video: false,
                    vote_average: 7.4,
                    vote_count: 12100
                  },
                  {
                    adult: false,
                    backdrop_path: '/pXnNSeyTCUebjpHTiZt7v6FZId0.jpg',
                    genre_ids: [12, 28, 878],
                    id: 1894,
                    original_language: 'en',
                    original_title:
                      'Star Wars: Episode II - Attack of the Clones',
                    overview:
                      'Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.',
                    popularity: 38.741,
                    poster_path: '/oZNPzxqM2s5DyVWab09NTQScDQt.jpg',
                    release_date: '2002-05-15',
                    title: 'Star Wars: Episode II - Attack of the Clones',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 11677
                  },
                  {
                    adult: false,
                    backdrop_path: '/1Lhc32P0a62BgMFgd20wXR1osR3.jpg',
                    genre_ids: [16, 10751, 12, 35, 878, 28, 10770],
                    id: 732670,
                    original_language: 'en',
                    original_title: 'LEGO Star Wars Holiday Special',
                    overview:
                      'As her friends prep for a Life Day holiday celebration, Rey journeys with BB-8 on a quest to gain a deeper knowledge of the Force at a mysterious Jedi Temple. There, she embarks on a cross-timeline adventure through beloved moments in Star Wars history, coming into contact with iconic heroes and villains from all eras of the saga. But will she make it back in time for the Life Day feast?',
                    popularity: 17.236,
                    poster_path: '/zyzJSI7UZZzz5Toj10rYGF5689z.jpg',
                    release_date: '2020-11-17',
                    title: 'LEGO Star Wars Holiday Special',
                    video: false,
                    vote_average: 6.7,
                    vote_count: 259
                  },
                  {
                    adult: false,
                    backdrop_path: '/ae9xlnkS2qb5Dy9Mtlu68AWh42O.jpg',
                    genre_ids: [12, 10751, 878],
                    id: 74849,
                    original_language: 'en',
                    original_title: 'The Star Wars Holiday Special',
                    overview:
                      'Luke Skywalker and Han Solo battle evil Imperial forces to help Chewbacca reach his imperiled family on the Wookiee planet - in time for Life Day, their most important day of the year!',
                    popularity: 17.347,
                    poster_path: '/eLIKCGIiYVaplbhKFGcPzmiywF2.jpg',
                    release_date: '1978-12-01',
                    title: 'The Star Wars Holiday Special',
                    video: false,
                    vote_average: 3.4,
                    vote_count: 388
                  },
                  {
                    adult: false,
                    backdrop_path: '/uNjBnOmdjZoiWTLQ938YJZ1cYVU.jpg',
                    genre_ids: [16, 35, 10751, 878, 12, 10770],
                    id: 392216,
                    original_language: 'en',
                    original_title: 'Phineas and Ferb: Star Wars',
                    overview:
                      "Phineas and Ferb become the galaxy's unlikeliest last hope when they must return the Death Star plans to the Rebel Alliance.",
                    popularity: 10.859,
                    poster_path: '/xomphpz7MIasqVluPX83TjoTL8G.jpg',
                    release_date: '2014-07-26',
                    title: 'Phineas and Ferb: Star Wars',
                    video: false,
                    vote_average: 7,
                    vote_count: 161
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [16, 35, 878],
                    id: 42979,
                    original_language: 'en',
                    original_title: 'Robot Chicken: Star Wars',
                    overview:
                      'A series of 30 sketches, following the hilarious antics of various characters from a galaxy, far, far away.',
                    popularity: 8.033,
                    poster_path: '/h44WN4mVJ6wEpJgLaaNoFjv0NAo.jpg',
                    release_date: '2007-07-17',
                    title: 'Robot Chicken: Star Wars',
                    video: false,
                    vote_average: 7.2,
                    vote_count: 213
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [99],
                    id: 378386,
                    original_language: 'en',
                    original_title: 'Star Wars: Greatest Moments',
                    overview:
                      'Alex Zane counts down the top 20 Star Wars moments as voted by the public. Includes contributions from famous fans as well as the stars and crew of the intergalactic saga.',
                    popularity: 5.825,
                    poster_path: '/zIffPwISrW48qSmvAXEV27lBTMA.jpg',
                    release_date: '2015-12-26',
                    title: 'Star Wars: Greatest Moments',
                    video: false,
                    vote_average: 6.7,
                    vote_count: 29
                  },
                  {
                    adult: false,
                    backdrop_path: '/c8XIFuJCPTtTJdSRpqnUoMr6eK1.jpg',
                    genre_ids: [878],
                    id: 667574,
                    original_language: 'en',
                    original_title: 'Battle Star Wars',
                    overview:
                      'When the leader of the evil Coalition threatens to destroy a Rebel planet for its resources, his daughter will have no choice but to join the Rebel side and fight for what is right.',
                    popularity: 5.658,
                    poster_path: '/ocA0ECiFoB4d1HITyEDQlLk7x84.jpg',
                    release_date: '2020-01-28',
                    title: 'Battle Star Wars',
                    video: false,
                    vote_average: 5.1,
                    vote_count: 33
                  },
                  {
                    adult: false,
                    backdrop_path: '/7rZrvtpQTrA9B1nqoHNGjsp8j8i.jpg',
                    genre_ids: [878, 99],
                    id: 825647,
                    original_language: 'en',
                    original_title: 'Star Wars Biomes',
                    overview:
                      'Take a virtual vacation to some of the Star Wars films’ most iconic and beloved locations like Hoth, Tatooine, and Sorgan, as this charming series whisks you off for fly-through tours of the Galaxy Far, Far Away.',
                    popularity: 5.368,
                    poster_path: '/8I69ReO2IZtcpXnzZpKeswpPI33.jpg',
                    release_date: '2021-05-04',
                    title: 'Star Wars Biomes',
                    video: false,
                    vote_average: 6.5,
                    vote_count: 33
                  },
                  {
                    adult: false,
                    backdrop_path: null,
                    genre_ids: [35, 878, 16, 10770],
                    id: 51888,
                    original_language: 'en',
                    original_title: 'Robot Chicken: Star Wars Episode III',
                    overview:
                      "Robot Chicken: Star Wars Episode III, directed by Chris McKay, combines the satirical sensibilities of Green and Matthew Senreich's Robot Chicken with characters of the Star Wars universe.",
                    popularity: 9.189,
                    poster_path: '/mi2lVho2zpfwcxI6yC1QYJi435D.jpg',
                    release_date: '2010-12-19',
                    title: 'Robot Chicken: Star Wars Episode III',
                    video: false,
                    vote_average: 7.4,
                    vote_count: 123
                  }
                ],
                total_pages: 7,
                total_results: 135
              }
            }
          ];
          page.data = data;
          return data;
        } catch (error) {
          console.log('ERROR', error);
        }
      }
    },
    {
      path: 'video/:id',
      component: Video
    }
  ],
  beforeEachRoute: async (from, to) => {
    return true;
  }
};
