const categories = [
  {
    name: "",
    stories: [
      {
        headline: "UK 'getting safer everyday' says vaccine minister",
        large: true,
        live: true,
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/997A/production/_116809293_hi065409304.jpg",
        attribution: "UK",
      },
      {
        headline: "New vaccine 'ready by autumn' to tackle mutations",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/6927/production/_116791962_gettyimages-1299801960.jpg",
        attribution: "Health",
      },
      {
        headline: "Love Island's Dr Alex made mental health ambassador",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/7EDE/production/_116787423_alex_030221_cps.jpg",
        attribution: "Newsbeat",
      },
    ],
  },
  {
    name: "More top stories",
    background:
      "url(https://ichef.bbci.co.uk/news/1536/cpsprodpb/6374/live/740d70e0-5c02-11eb-ae14-e37d6049a926.jpg)",
    stories: [
      {
        headline: "It's A Sin actor: I caught HIV the first time I had sex",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/17550/production/_116786559_hiv_030221_cps.jpg",
        attribution: "Newsbeat",
      },
      {
        headline: "India says Rihanna tweet on farmers 'irresponsible'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11736/production/_116787417_rihanna_030221_cps.jpg",
        attribution: "India",
      },
      {
        headline: "'I don't know when the job I love will be a job again'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/67C8/production/_116786562_tricky-2_030221_bbc.jpg",
        attribution: "BBC Radio 4",
      },
    ],
  },
  {
    name: "Coronavirus pandemic",
    arrow: true,
    backgroundColor: "rgb(238, 238, 238)",
    stories: [
      {
        headline: "South Africa variant testing areas 'make no sense'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/B410/production/_116769064_sally.jpg",
        attribution: "Kent",
      },
      {
        headline: "Vaccine myths debunked in five South Asian languages",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/EE39/production/_116758906_gettyimages-1230781148.jpg",
        attribution: "UK",
      },
      {
        headline: "Wealthy home workers retreat to their sheds",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/C9D7/production/_116717615_charleswaltonshed.jpg",
        attribution: "Business",
      },
    ],
  },
  {
    title: "Lockdown Learning",
    description:
      "TV lessons and online activities to take the stress out of home-schooling",
    banner: true,
    background:
      "url(https://ichef.bbci.co.uk/news/1536/cpsprodpb/ec12/live/b5887d90-549a-11eb-ae14-e37d6049a926.jpg)",
    foreground:
      "url('https://ichef.bbci.co.uk/live-experience/cps/480/cpsprodpb/12080/production/_116365837_bitesize-houses.jpg')",

    button: "LEARN NOW",
  },
  {
    name: "News headlines",
    backgroundColor: "rgb(238, 238, 238)",
    arrow: true,
    stories: [
      {
        headline: "Forget Frankfurt and Paris, says Barclays boss",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/FFE8/production/_116821556_de54.jpg",
        attribution: "Business",
      },
      {
        headline: "Lockdowns 'willl waste 87 million pints of beer'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/28E8/production/_116827401_b47aaa2c-821c-4bc0-a4ff-8d6bfcb112bb.jpg",
        attribution: "UK Politics",
      },
      {
        headline: "One 'stabbed' and hopital locked down in Kilmarnock",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/0930/production/_116825320_1.jpg",
        attribution: "Business",
      },
    ],
  },
  {
    name: "Sport headlines",
    backgroundColor: "rgb(238, 238, 238)",
    arrow: true,
    stories: [
      {
        headline:
          "Sibley & Root hit unbeaten half-centuries for England against India - live text & Cricket Social",
        live: true,
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/16942/production/_116828429_sibkey59.jpg",
        attribution: "Cricket",
      },
      {
        headline: "Chelsea and Tottenham news conferences",
        live: true,
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/0174/production/_116827300_josetuchel.jpg",
        attribution: "Football",
      },
      {
        headline: "Channel 4 to show England in India",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/15D5D/production/_116773498_whatsubject.jpg",
        attribution: "Business",
      },
    ],
  },
  {
    title: "'I was offered £20,000 not to speak out'",
    description:
      "Lifting the lid on the music industry's response to assault allegations",
    banner: true,
    backgroundColor: "rgb(104, 8, 20)",
    foreground:
      "url(https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/15B3A/production/_116709888_nda_280121_bbc-three.jpg)",

    attribution: "BBC Three",
    badge: "MUSIC'S DIRTY SECRETS",
  },
  {
    name: "Society",
    stories: [
      {
        headline: "Anger at university 'decolonised curriculum' plans",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/12C65/production/_116810967_rhiannon.jpg",
        attribution: "Leicester",
      },
      {
        headline: "Beckham-backed cannabis skincare firm to sell shares",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/3D22/production/_116805651_gettyimages-1209981008.jpg",
        attribution: "Business",
      },
      {
        headline: "Why JLS star ditched the city for family life on a farm",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/16707/production/_116811919_jls_040221_tiny-happy-people.jpg",
        attribution: "Tiny Happy People",
      },
    ],
  },
  {
    title: "'Some people see it as an art but I love it as a sport'",
    description:
      "Rising Team GB star Karam Singh on hanging out with footballers and his lige as a world champion 'b-boy'",
    banner: true,
    backgroundColor: "rgb(40, 53, 83)",
    foreground:
      "url(https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/16857/production/_116774229_karam-singh_020221_redbull.jpg)",

    attribution: "Olympics",
    badge: "BREAKING THROUGH",
  },
  {
    name: "Food",
    arrow: true,
    background:
      "url(https://ichef.bbci.co.uk/news/1536/cpsprodpb/5069/live/6ca297e0-66de-11eb-ad5c-31ca4e65adf8.jpg)",
    stories: [
      {
        headline:
          "Make this sweet Italian treat one of your favourite pastries",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/8085/production/_116810923_canoli_040221_article.jpg",
        attribution: "BBC Food",
      },
      {
        headline: "Add a colourful twist to your breakfast options",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/DA3C/production/_116786855_breakfast_03021_article.jpg",
        attribution: "BBC Food",
      },
      {
        headline: "Raid your cupboards and create some mouth-watering treats",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/9E4F/production/_116772504_cupboard-dishes_020221_article.jpg",
        attribution: "BBC Food",
      },
    ],
  },

  {
    name: "Talked about TV",
    background:
      "url(https://ichef.bbci.co.uk/news/900/cpsprodpb/fd9f/live/bbcbeda0-4ddc-11eb-8929-f9c569105915.jpg)",
    stories: [
      {
        headline: "'I came out to mum as non-binary while watching Drag Race'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/EE18/production/_116725906_nbedit.jpg",
        attribution: "Newsbeat",
      },
      {
        headline: "'I promise you I'm not helping... look the other way!'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/03B6/production/_116805900_claudia-angela_030221_grab.jpg",
        attribution: "BBC One",
      },
      {
        headline: "Gripping new BBC thiller could be your next lockdown binge",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/134A0/production/_116780097_bloodlands_020221_grab.jpg",
        attribution: "BBC One",
      },
    ],
  },
  {
    title: "National Lottery draws",
    description:
      "See the latest results, including Lotto EuroMillions, Set for Life and Thunderball",
    banner: true,
    background:
      "url(https://ichef.bbci.co.uk/news/400/cpsprodpb/06a5/live/edf98750-1930-11eb-85c5-f555e0695185.jpg)",
    foreground:
      "url('https://ichef.bbci.co.uk/live-experience/cps/480/cpsprodpb/6174/production/_115084942_lottery_banner_foreground_jpg.jpg')",

    button: "RESULTS",
  },
  {
    name: "Behind the headlines",
    backgroundColor: "rgb(238, 238, 238)",
    arrow: true,
    stories: [
      {
        headline: "Brexit: 71 pages of paperwork for one lorry of fish",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/37F2/production/_116822341_116788224_charliesamways2.jpg",
        attribution: "Business",
      },
      {
        headline: "Five things we know about new Amazon boss Andy Jassy",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/1250D/production/_116812057_andy-jassey_040221_ichef.jpg",
        attribution: "Business",
      },
      {
        headline: "Myanmar military blocks Facebook for 'stability'",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/15C71/production/_116810298_gettyimages-1230961902.jpg",
        attribution: "Asia",
      },
    ],
  },
  {
    name: "Learn at home",
    arrow: true,
    background:
      "url(https://ichef.bbci.co.uk/news/1536/cpsprodpb/5c32/live/34ee0e00-500f-11eb-8929-f9c569105915.jpg)",
    stories: [
      {
        headline: "Can you smash this super hard spelling quiz?",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/1285C/production/_116786857_spelling-quiz_030221_getty.jpg",
        attribution: "CBBC",
      },
      {
        headline: "10 pieces of classiscal music you didn't know you knew",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/D634/production/_116763845_classical-music_16x9_010221_cps.jpg",
        attribution: "BBC Bitesize",
      },
      {
        headline: "The simple trick that can help you stay motivated",
        image:
          "https://ichef.bbci.co.uk/live-experience/cps/960/cpsprodpb/1FF9/production/_116358180_motivated_060121_gt847260446.jpg",
        attribution: "BBC Bitesize",
      },
    ],
  },
];

export default categories;
