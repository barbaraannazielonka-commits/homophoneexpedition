import { HomophonePair, ExpeditionStage, ProofreadingArticle, BlitzQuestion } from '../types/homophones';

export const HOMOPHONE_PAIRS: HomophonePair[] = [
  {
    id: 'discrete-discreet',
    groupName: 'Discrete vs. Discreet',
    category: 'CORE_ESSENTIAL',
    phonetic: '/dɪˈskriːt/',
    summaryNote: 'Discrete means distinct and disconnected; discreet means careful, cautious, and secretive.',
    words: [
      {
        id: 'discrete',
        word: 'discrete',
        partOfSpeech: 'adjective',
        definition: 'Individually separate, distinct, and discontinuous.',
        etymology: 'From Latin discretus ("separated, discerned").',
        mnemonic: 'The two "e"s in discr-e-t-e are separated by the "t" (discrete = separate).',
        exampleSentence: 'The calculus problem was divided into discrete computational intervals.'
      },
      {
        id: 'discreet',
        word: 'discreet',
        partOfSpeech: 'adjective',
        definition: 'Careful and circumspect in speech or actions; keeping confidentiality.',
        etymology: 'From Latin discretus, but evolved through Old French to mean wise, tactful.',
        mnemonic: 'The two "e"s in discr-ee-t huddle together to keep a secret between themselves.',
        exampleSentence: 'She was discreet about her classmate’s sudden absence during finals week.'
      }
    ]
  },
  {
    id: 'compliment-complement',
    groupName: 'Compliment vs. Complement',
    category: 'CORE_ESSENTIAL',
    phonetic: '/ˈkɒm.plɪ.mənt/',
    summaryNote: 'Compliment is praise; complement completes or perfects something.',
    words: [
      {
        id: 'compliment',
        word: 'compliment',
        partOfSpeech: 'noun / verb',
        definition: 'A polite expression of praise, admiration, or congratulations.',
        etymology: 'From Latin complimentum, related to comply (fulfilling courteous obligations).',
        mnemonic: '"I" like to receive compliments! (Spelled with an "I").',
        exampleSentence: 'The AP Art teacher gave him a glowing compliment on his charcoal portrait.'
      },
      {
        id: 'complement',
        word: 'complement',
        partOfSpeech: 'noun / verb',
        definition: 'Something that completes or brings to perfection; to match harmoniously.',
        etymology: 'From Latin complementum, from complere ("to fill up, complete").',
        mnemonic: 'Compl-E-ment with an "E" will Compl-E-te.',
        exampleSentence: 'Her analytical breakdown served as the perfect complement to his creative thesis.'
      }
    ]
  },
  {
    id: 'principal-principle',
    groupName: 'Principal vs. Principle',
    category: 'ACADEMIC',
    phonetic: '/ˈprɪn.sə.pəl/',
    summaryNote: 'Principal is the head of a school or capital sum; principle is a core moral rule or scientific truth.',
    words: [
      {
        id: 'principal',
        word: 'principal',
        partOfSpeech: 'noun / adjective',
        definition: 'The head of a school; the most important; original sum of money lent or invested.',
        etymology: 'From Latin principalis ("first, chief, original").',
        mnemonic: 'The princi-PAL is your PAL (or person in charge).',
        exampleSentence: 'The principal addressed the entire high school auditorium regarding the code of conduct.'
      },
      {
        id: 'principle',
        word: 'principle',
        partOfSpeech: 'noun',
        definition: 'A fundamental truth, doctrine, or moral rule of personal conduct.',
        etymology: 'From Latin principium ("beginning, foundation, fundamental truth").',
        mnemonic: 'A princi-PLE is a fundamental ru-LE (both end in "le").',
        exampleSentence: 'She refused to cheat on the honor council exam out of steadfast moral principle.'
      }
    ]
  },
  {
    id: 'affect-effect',
    groupName: 'Affect vs. Effect',
    category: 'CORE_ESSENTIAL',
    phonetic: '/əˈfɛkt/ · /ɪˈfɛkt/',
    summaryNote: 'Affect is usually an action verb; Effect is usually the end result noun (RAVEN rule).',
    words: [
      {
        id: 'affect',
        word: 'affect',
        partOfSpeech: 'verb (chiefly)',
        definition: 'To have an influence on; to produce a change or impression.',
        etymology: 'From Latin affectus, from afficere ("to act upon, touch, influence").',
        mnemonic: 'RAVEN: Remember, Affect = Verb, Effect = Noun. A is for Action.',
        exampleSentence: 'Sleep deprivation can severely affect a student’s cognitive performance.'
      },
      {
        id: 'effect',
        word: 'effect',
        partOfSpeech: 'noun (chiefly)',
        definition: 'A change that is a result or consequence of an action; an outcome.',
        etymology: 'From Latin effectus, from efficere ("to bring about, accomplish").',
        mnemonic: 'Special Effects (SFX) are nouns! The Effect is the End result.',
        exampleSentence: 'The greenhouse effect causes rising global surface temperatures.'
      }
    ]
  },
  {
    id: 'elicit-illicit',
    groupName: 'Elicit vs. Illicit',
    category: 'CORE_ESSENTIAL',
    phonetic: '/ɪˈlɪs.ɪt/',
    summaryNote: 'Elicit is an action meaning to evoke or draw out; illicit describes forbidden or illegal activities.',
    words: [
      {
        id: 'elicit',
        word: 'elicit',
        partOfSpeech: 'verb',
        definition: 'To draw forth, bring out, or evoke (a reaction, answer, or fact).',
        etymology: 'From Latin elicere ("to draw out by deceit or coaxing").',
        mnemonic: 'Elicit starts with "E" like Evoke and Extract.',
        exampleSentence: 'The prosecutor questioned the witness sharply to elicit key admissions.'
      },
      {
        id: 'illicit',
        word: 'illicit',
        partOfSpeech: 'adjective',
        definition: 'Forbidden by law, rules, or custom; illegitimate or unauthorized.',
        etymology: 'From Latin illicitus ("not permitted", il- + licitus "lawful").',
        mnemonic: 'Illicit starts with "IL" like ILlegal and ILlegitimate.',
        exampleSentence: 'The investigative journalist uncovered an illicit exchange of exam papers.'
      }
    ]
  },
  {
    id: 'imminent-eminent',
    groupName: 'Imminent vs. Eminent',
    category: 'LITERARY',
    phonetic: '/ˈɪm.ɪ.nənt/ · /ˈɛm.ɪ.nənt/',
    summaryNote: 'Imminent means impending immediately; eminent means famous, celebrated, and distinguished.',
    words: [
      {
        id: 'imminent',
        word: 'imminent',
        partOfSpeech: 'adjective',
        definition: 'About to happen at any moment; impending and threatening.',
        etymology: 'From Latin imminere ("to overhang, project over, menace").',
        mnemonic: 'Imminent has an "I" for In coming!',
        exampleSentence: 'Dark thunderclouds signaled that a severe torrential deluge was imminent.'
      },
      {
        id: 'eminent',
        word: 'eminent',
        partOfSpeech: 'adjective',
        definition: 'High in rank or repute; renowned, distinguished, and respected.',
        etymology: 'From Latin eminere ("to stand out, project above others").',
        mnemonic: 'Eminent people are Esteemed Experts of High Eminence.',
        exampleSentence: 'The keynote symposium lecture was delivered by an eminent molecular geneticist.'
      }
    ]
  },
  {
    id: 'stationery-stationary',
    groupName: 'Stationery vs. Stationary',
    category: 'ACADEMIC',
    phonetic: '/ˈsteɪ.ʃən.ɛr.i/',
    summaryNote: 'Stationery with an E is writing envelopes; Stationary with an A is immovable like an anchor.',
    words: [
      {
        id: 'stationery',
        word: 'stationery',
        partOfSpeech: 'noun',
        definition: 'Writing materials including paper, envelopes, pens, and notepads.',
        etymology: 'From historical stationer (a bookseller with a fixed station/shop).',
        mnemonic: 'StationEry has an "E" for Envelopes and lEtters.',
        exampleSentence: 'She penned her university thank-you notes on embossed heavyweight stationery.'
      },
      {
        id: 'stationary',
        word: 'stationary',
        partOfSpeech: 'adjective',
        definition: 'Not moving, remaining in one fixed place or static position.',
        etymology: 'From Latin stationarius ("motionless, belonging to a station").',
        mnemonic: 'StationAry has an "A" for Anchor and At rest.',
        exampleSentence: 'The laboratory centrifuge remained stationary on the vibration-dampened counter.'
      }
    ]
  },
  {
    id: 'allusion-illusion',
    groupName: 'Allusion vs. Illusion',
    category: 'LITERARY',
    phonetic: '/əˈluː.ʒən/ · /ɪˈluː.ʒən/',
    summaryNote: 'Allusion is an indirect literary/historical reference; Illusion is a trick or false visual perception.',
    words: [
      {
        id: 'allusion',
        word: 'allusion',
        partOfSpeech: 'noun',
        definition: 'An expression designed to call something to mind without mentioning it explicitly; a reference.',
        etymology: 'From Latin alludere ("to play with, jest, reference covertly").',
        mnemonic: 'Allusion = A literary reference.',
        exampleSentence: 'The poem contained a subtle allusion to Dante’s Divine Comedy.'
      },
      {
        id: 'illusion',
        word: 'illusion',
        partOfSpeech: 'noun',
        definition: 'A false idea or belief; a deceptive appearance or impression.',
        etymology: 'From Latin illudere ("to mock, deceive, trick").',
        mnemonic: 'An illusion is an optical trick created by an ILLusionist.',
        exampleSentence: 'Mirages on the desert highway create the optical illusion of standing water.'
      }
    ]
  },
  {
    id: 'canvas-canvass',
    groupName: 'Canvas vs. Canvass',
    category: 'FORMAL_STYLE',
    phonetic: '/ˈkæn.vəs/',
    summaryNote: 'Canvas with one S is cloth fabric; Canvass with two S’s is soliciting votes or surveying an area.',
    words: [
      {
        id: 'canvas',
        word: 'canvas',
        partOfSpeech: 'noun',
        definition: 'A strong, coarse unbleached cloth used for oil paintings, sails, or tents.',
        etymology: 'From Old French chanevas, ultimately from Latin cannabis ("hemp").',
        mnemonic: 'One "s" is for a Single sheet of painting fabric.',
        exampleSentence: 'The museum curator restored a delicate 17th-century oil painting on canvas.'
      },
      {
        id: 'canvass',
        word: 'canvass',
        partOfSpeech: 'verb',
        definition: 'To solicit votes, orders, or opinions from residents; to scrutinize thoroughly.',
        etymology: 'Originally meaning to toss someone in a canvas sheet; later meaning to sift/scrutinize thoroughly.',
        mnemonic: 'Two "s"s stand for Seeking Support in an election campaign.',
        exampleSentence: 'Student volunteers went door-to-door to canvass the district for the school referendum.'
      }
    ]
  },
  {
    id: 'censor-sensor-censure',
    groupName: 'Censor vs. Sensor vs. Censure',
    category: 'ACADEMIC',
    phonetic: '/ˈsɛn.sər/ · /ˈsɛn.sər/ · /ˈsɛn.ʃər/',
    summaryNote: 'Censor cuts content; Sensor detects stimuli; Censure is harsh official condemnation.',
    words: [
      {
        id: 'censor',
        word: 'censor',
        partOfSpeech: 'verb / noun',
        definition: 'To examine books, films, or news and suppress unacceptable parts; an official who does this.',
        etymology: 'From Latin censor (Roman magistrate who inspected morals).',
        mnemonic: 'Censor cuts words.',
        exampleSentence: 'The editor refused to censor the student journalist’s investigative editorial.'
      },
      {
        id: 'sensor',
        word: 'sensor',
        partOfSpeech: 'noun',
        definition: 'A device that detects or measures a physical property (light, heat, motion).',
        etymology: 'From Latin sensus ("feeling, perception").',
        mnemonic: 'Sensor uses Senses (infrared, temperature, motion).',
        exampleSentence: 'The robotics club calibrated the infrared proximity sensor for the obstacle course.'
      },
      {
        id: 'censure',
        word: 'censure',
        partOfSpeech: 'noun / verb',
        definition: 'Express severe disapproval of someone or something, especially in a formal statement.',
        etymology: 'From Latin censura ("judgment, reprimand").',
        mnemonic: 'Censure has "sure" — they will sure reprimand you formally.',
        exampleSentence: 'The senate committee voted unanimously to censure the representative for misconduct.'
      }
    ]
  },
  {
    id: 'peak-peek-pique',
    groupName: 'Peak vs. Peek vs. Pique',
    category: 'LITERARY',
    phonetic: '/piːk/',
    summaryNote: 'Peak is a mountain top; Peek is a quick look; Pique is to stimulate or provoke interest.',
    words: [
      {
        id: 'peak',
        word: 'peak',
        partOfSpeech: 'noun / verb',
        definition: 'The pointed top of a mountain; reaching the highest point of achievement.',
        etymology: 'From Middle English pike / peak ("sharp point").',
        mnemonic: 'The capital "A" in p-e-A-k looks like a mountain peak.',
        exampleSentence: 'Athletes train year-round to reach their physical peak for the championships.'
      },
      {
        id: 'peek',
        word: 'peek',
        partOfSpeech: 'verb / noun',
        definition: 'To look quickly or furtively, often from a concealed spot.',
        etymology: 'From Middle English piken.',
        mnemonic: 'The two "e"s in p-EE-k look like two eyes peeking around the corner.',
        exampleSentence: 'She took a quick peek at the debate topic before taking the stage.'
      },
      {
        id: 'pique',
        word: 'pique',
        partOfSpeech: 'verb / noun',
        definition: 'To stimulate or arouse (interest or curiosity); or to wound someone’s pride.',
        etymology: 'From French piquer ("to prick, sting, provoke").',
        mnemonic: 'Pique ends with "que" like a Curiosity or Question.',
        exampleSentence: 'The mystery novel’s opening sentence served to pique my deepest curiosity.'
      }
    ]
  },
  {
    id: 'council-counsel',
    groupName: 'Council vs. Counsel',
    category: 'ACADEMIC',
    phonetic: '/ˈkaʊn.səl/',
    summaryNote: 'Council is an assembly or committee; Counsel is advice or legal representation.',
    words: [
      {
        id: 'council',
        word: 'council',
        partOfSpeech: 'noun',
        definition: 'An advisory, deliberative, or administrative body of people meeting regularly.',
        etymology: 'From Latin concilium ("gathering, meeting").',
        mnemonic: 'CouncIL is an elect-I-on body (like Student Council).',
        exampleSentence: 'The student council coordinated the annual homecoming charity fundraiser.'
      },
      {
        id: 'counsel',
        word: 'counsel',
        partOfSpeech: 'noun / verb',
        definition: 'Advice, especially that given formally; a legal advocate or attorney.',
        etymology: 'From Latin consilium ("advice, consultation").',
        mnemonic: 'A guidan-SE or couns-E-lor gives you advice.',
        exampleSentence: 'Before signing the contract, the entrepreneur sought legal counsel.'
      }
    ]
  },
  {
    id: 'cite-site-sight',
    groupName: 'Cite vs. Site vs. Sight',
    category: 'CORE_ESSENTIAL',
    phonetic: '/saɪt/',
    summaryNote: 'Cite is quoting sources; Site is a location; Sight is vision or scenery.',
    words: [
      {
        id: 'cite',
        word: 'cite',
        partOfSpeech: 'verb',
        definition: 'To quote as an authority, reference, or proof in an academic paper.',
        etymology: 'From Latin citare ("to summon, call forth, mention").',
        mnemonic: 'Cite has "C" like Citation and Copyright.',
        exampleSentence: 'Make sure to cite all primary historical sources using MLA format.'
      },
      {
        id: 'site',
        word: 'site',
        partOfSpeech: 'noun',
        definition: 'An area of ground on which something is located, or a website.',
        etymology: 'From Latin situs ("local position, situation").',
        mnemonic: 'Site has "S" like Space and Situation.',
        exampleSentence: 'Archaeologists unearthed ancient Roman pottery shards at the dig site.'
      },
      {
        id: 'sight',
        word: 'sight',
        partOfSpeech: 'noun / verb',
        definition: 'The faculty or power of seeing; a spectacular view or spectacle.',
        etymology: 'From Old English gesiht ("vision, appearance").',
        mnemonic: 'Sight has "igh" like Eye and Light.',
        exampleSentence: 'The aurora borealis over the icy fjord was a breathtaking sight.'
      }
    ]
  },
  {
    id: 'flair-flare',
    groupName: 'Flair vs. Flare',
    category: 'LITERARY',
    phonetic: '/flɛər/',
    summaryNote: 'Flair is natural talent or stylish panache; Flare is a sudden burst of flame or blaze.',
    words: [
      {
        id: 'flair',
        word: 'flair',
        partOfSpeech: 'noun',
        definition: 'A special or instinctive aptitude or ability for doing something well; stylish elegance.',
        etymology: 'From Old French flairer ("to have an instinctive scent for something").',
        mnemonic: 'Flair has "air" — carrying an air of sophistication and talent.',
        exampleSentence: 'The jazz soloist played the saxophone improvisation with effortless flair.'
      },
      {
        id: 'flare',
        word: 'flare',
        partOfSpeech: 'noun / verb',
        definition: 'A sudden brief burst of bright flame or light; a distress beacon.',
        etymology: 'Perhaps from Scandinavian roots meaning to shine erratically.',
        mnemonic: 'Flare has "are" like fire and gl-are.',
        exampleSentence: 'The stranded sailors launched an emergency red distress flare into the night sky.'
      }
    ]
  },
  {
    id: 'phase-faze',
    groupName: 'Phase vs. Faze',
    category: 'CORE_ESSENTIAL',
    phonetic: '/feɪz/',
    summaryNote: 'Phase is a stage or developmental period; Faze means to disturb, perturb, or disconcert.',
    words: [
      {
        id: 'phase',
        word: 'phase',
        partOfSpeech: 'noun / verb',
        definition: 'A distinct period or stage in a series of events or a process of change.',
        etymology: 'From Greek phasis ("appearance of a star, aspect").',
        mnemonic: 'Phases of the moon (with PH like PHysics).',
        exampleSentence: 'The engineering team completed the initial prototyping phase ahead of schedule.'
      },
      {
        id: 'faze',
        word: 'faze',
        partOfSpeech: 'verb',
        definition: 'To disturb, disconcert, or intimidate; to perturb someone’s composure.',
        etymology: 'From Old English fesian ("to drive away, frighten").',
        mnemonic: 'Nothing can f-A-z-e someone with fearless A-ttitude.',
        exampleSentence: 'The hecklers failed to faze the debater during her cross-examination.'
      }
    ]
  },
  {
    id: 'palate-palette-pallet',
    groupName: 'Palate vs. Palette vs. Pallet',
    category: 'LITERARY',
    phonetic: '/ˈpæl.ɪt/',
    summaryNote: 'Palate is taste/roof of mouth; Palette is an artist color board; Pallet is a wooden cargo platform.',
    words: [
      {
        id: 'palate',
        word: 'palate',
        partOfSpeech: 'noun',
        definition: 'The roof of the mouth; a person’s appreciation of taste and flavor.',
        etymology: 'From Latin palatum ("roof of the mouth").',
        mnemonic: 'Pal-ATE has "ATE" — related to eating and tasting food.',
        exampleSentence: 'The culinary judge possessed a refined palate capable of discerning rare spices.'
      },
      {
        id: 'palette',
        word: 'palette',
        partOfSpeech: 'noun',
        definition: 'A thin board on which an artist lays and mixes colors; range of colors.',
        etymology: 'From French palette ("small shovel or spatula").',
        mnemonic: 'Pal-ET-te has double T and E like an artis-TE painting.',
        exampleSentence: 'The impressionist mixed soft ochres and cobalt blues upon her wooden palette.'
      },
      {
        id: 'pallet',
        word: 'pallet',
        partOfSpeech: 'noun',
        definition: 'A flat wooden structure used for handling, storing, and shipping goods with forklifts.',
        etymology: 'From Anglo-French paillette ("straw bundle").',
        mnemonic: 'Pal-LET is a heavy plank platform to LET heavy cargo sit upon.',
        exampleSentence: 'The warehouse forklift moved a heavy wooden pallet stacked with science textbooks.'
      }
    ]
  },
  {
    id: 'bated-baited',
    groupName: 'Bated vs. Baited',
    category: 'LITERARY',
    phonetic: '/ˈbeɪ.tɪd/',
    summaryNote: 'Bated breath means held or lessened breath (from abate); Baited breath is a common misspelling of lure/hook.',
    words: [
      {
        id: 'bated',
        word: 'bated',
        partOfSpeech: 'adjective',
        definition: 'In great suspense; with breath held back or abated.',
        etymology: 'Shortening of abated (reduced, subdued).',
        mnemonic: 'Bated comes from a-BATED (breath held in suspense).',
        exampleSentence: 'The entire audience waited with bated breath as the grand prize envelope was opened.'
      },
      {
        id: 'baited',
        word: 'baited',
        partOfSpeech: 'verb (past tense)',
        definition: 'Lured or enticed with bait; provoked or teased deliberately.',
        etymology: 'From Old Norse beita ("to cause to bite").',
        mnemonic: 'You put BAIT on a fish hook.',
        exampleSentence: 'The fisherman baited his hook with earthworms before casting into the lake.'
      }
    ]
  },
  {
    id: 'capital-capitol',
    groupName: 'Capital vs. Capitol',
    category: 'ACADEMIC',
    phonetic: '/ˈkæp.ɪ.təl/',
    summaryNote: 'Capitol with an O is the physical legislative domed building; Capital with an A is money, uppercase letters, or governing city.',
    words: [
      {
        id: 'capital',
        word: 'capital',
        partOfSpeech: 'noun / adjective',
        definition: 'The most important city/seat of government; wealth in the form of money/assets; uppercase letter.',
        etymology: 'From Latin capitalis ("of the head, chief").',
        mnemonic: 'Capit-A-l with an "A" is for Assets, All cities, and Alphabet letters.',
        exampleSentence: 'Paris is the capital of France, while the startup raised venture capital.'
      },
      {
        id: 'capitol',
        word: 'capitol',
        partOfSpeech: 'noun',
        definition: 'The building in which a state or national legislative body meets.',
        etymology: 'From Latin Capitolinus (the Capitolium temple of Jupiter in Rome).',
        mnemonic: 'The capit-O-l has a round d-O-me roof (both have the letter "O").',
        exampleSentence: 'The protesters gathered peacefully on the marble steps of the state capitol building.'
      }
    ]
  }
];

export const EXPEDITION_STAGES: ExpeditionStage[] = [
  {
    id: 1,
    slug: 'port-hope',
    name: 'Port Hope: The Cartographer’s Manifesto',
    locationName: 'Settler’s Landing & Port Hope',
    description: 'Begin the linguistic voyage. The chief cartographer prepares parchment maps and foundational charters.',
    xPercent: 18,
    yPercent: 38,
    requiredStars: 0,
    questions: [
      {
        id: 'q1-1',
        title: 'The Sturdy Sails',
        scenario: 'The shipwrights are outfitting the expedition flagship with heavy waterproof material for the mainsails.',
        sentenceWithBlank: 'The expedition team repaired the ship’s storm jib using heavy waterproof _____ before embarking into the Atlantic swell.',
        blankOptions: ['canvas', 'canvass'],
        correctAnswer: 'canvas',
        explanation: 'Canvas (one "s") refers to coarse, heavy cloth used for sails, tents, and oil paintings. Canvass (two "s"s) means to solicit votes or opinions.',
        homophonePairId: 'canvas-canvass',
        clues: [
          { type: 'riddle', text: 'Woven from hemp or cotton strong, upon my face the wind blows long.' },
          { type: 'etymology', text: 'Derived from Latin cannabis meaning hemp cloth.' },
          { type: 'mnemonic', text: 'One single "S" for a Single sheet of sailcloth.' }
        ]
      },
      {
        id: 'q1-2',
        title: 'The Motionless Fleet',
        scenario: 'A windless doldrum has settled over the coastal waters. The compass needle wavers, but the vessel does not drift.',
        sentenceWithBlank: 'Anchored firmly in the calm sheltered cove, the frigate remained completely _____ despite the churning tidal rip.',
        blankOptions: ['stationery', 'stationary'],
        correctAnswer: 'stationary',
        explanation: 'Stationary (with "a") means standing still, unmoving, or fixed in position. Stationery (with "e") refers to writing paper, pens, and envelopes.',
        homophonePairId: 'stationery-stationary',
        clues: [
          { type: 'riddle', text: 'Fixed to the bedrock or bound by stone, I stay in one place when winds have blown.' },
          { type: 'etymology', text: 'From Latin stationarius, referring to keeping a military post without moving.' },
          { type: 'mnemonic', text: 'StationAry has an "A" like an Anchor holding fast.' }
        ]
      },
      {
        id: 'q1-3',
        title: 'The Code of the Expedition',
        scenario: 'Before sailing, the voyage captain reads aloud the unbending moral code that all crew members must honor.',
        sentenceWithBlank: 'The academy captain was a man of steadfast integrity who never compromised on a fundamental moral _____.',
        blankOptions: ['principal', 'principle'],
        correctAnswer: 'principle',
        explanation: 'Principle (ending in -le) is a core rule, standard, or fundamental truth. Principal (-pal) refers to the head of a school or capital sum.',
        homophonePairId: 'principal-principle',
        clues: [
          { type: 'riddle', text: 'I am not a person or gold in hand, but the sacred code by which you stand.' },
          { type: 'etymology', text: 'From Latin principium meaning foundation or first law.' },
          { type: 'mnemonic', text: 'A princi-PLE is a fundamental moral ru-LE (both end with "le").' }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'cascades-eloquence',
    name: 'Cascade Falls: The Diplomat’s Bridge',
    locationName: 'Whispering Waterfalls & Gorge Bridge',
    description: 'Cross the rushing cataracts where ambassadors and scholars must choose words with utmost precision.',
    xPercent: 44,
    yPercent: 42,
    requiredStars: 2,
    questions: [
      {
        id: 'q2-1',
        title: 'The Confidential Envoy',
        scenario: 'An envoy is tasked with transporting secret peace treaties between rival island states without drawing suspicion.',
        sentenceWithBlank: 'The diplomat made _____ inquiries among town elders so as not to provoke panic or media speculation.',
        blankOptions: ['discrete', 'discreet'],
        correctAnswer: 'discreet',
        explanation: 'Discreet means tactful, circumspect, and careful to avoid attracting notice or betraying secrets. Discrete means detached and individually distinct.',
        homophonePairId: 'discrete-discreet',
        clues: [
          { type: 'riddle', text: 'I walk in silence with veiled glance, keeping secrets safe from circumstance.' },
          { type: 'etymology', text: 'Evolved through Old French to mean prudent and trustworthy.' },
          { type: 'mnemonic', text: 'The two "ee"s in discr-ee-t huddle together to whisper and keep a secret.' }
        ]
      },
      {
        id: 'q2-2',
        title: 'The Legal Guidance',
        scenario: 'A high school mock trial champion consults the senior legal mentor before presenting closing arguments.',
        sentenceWithBlank: 'The young defense team wisely sought the experienced _____ of an appellate attorney before delivering their cross-examination.',
        blankOptions: ['council', 'counsel'],
        correctAnswer: 'counsel',
        explanation: 'Counsel (with -sel) means advice or legal attorney. Council (with -cil) refers to an official group, board, or assembly of elected people.',
        homophonePairId: 'council-counsel',
        clues: [
          { type: 'riddle', text: 'I am wise advice given to you, or the courtroom lawyer guiding what to do.' },
          { type: 'etymology', text: 'From Latin consilium meaning consultation or deliberated guidance.' },
          { type: 'mnemonic', text: 'A guidance couns-E-lor gives you wis-E advic-E.' }
        ]
      },
      {
        id: 'q2-3',
        title: 'Drawing Out the Truth',
        scenario: 'The lead inquisitor interrogates an evasive witness to extract the coordinates of the hidden cache.',
        sentenceWithBlank: 'Through patient cross-examination, the history teacher was able to _____ the authentic historical evidence from the archive.',
        blankOptions: ['elicit', 'illicit'],
        correctAnswer: 'elicit',
        explanation: 'Elicit is a verb meaning to evoke, draw out, or obtain information. Illicit is an adjective meaning unlawful or strictly forbidden.',
        homophonePairId: 'elicit-illicit',
        clues: [
          { type: 'riddle', text: 'I am a verb that brings to light, facts held in shadows out of sight.' },
          { type: 'etymology', text: 'From Latin elicere: e- ("out") + lacere ("to entice, draw").' },
          { type: 'mnemonic', text: 'Elicit starts with "E" like Evoke and Extract.' }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'whispering-gorge',
    name: 'Serpent’s Spine: The Sentinel’s Ridge',
    locationName: 'Serpent’s Spine & The Deep Gorge',
    description: 'High upon the craggy canyon, wind howls through stone arches where ancient sentinels inspect every traveler.',
    xPercent: 62,
    yPercent: 48,
    requiredStars: 4,
    questions: [
      {
        id: 'q3-1',
        title: 'The Motion Detector',
        scenario: 'The island fortress engineers installed an infrared apparatus at the narrow ridge gap to detect trespassers.',
        sentenceWithBlank: 'The robotic perimeter was safeguarded by an acoustic motion _____ that triggered an alarm whenever footsteps approached.',
        blankOptions: ['censor', 'sensor', 'censure'],
        correctAnswer: 'sensor',
        explanation: 'Sensor is a physical or electronic detection device. Censor suppresses objectionable material. Censure is formal condemnation or reprimand.',
        homophonePairId: 'censor-sensor-censure',
        clues: [
          { type: 'riddle', text: 'I have no eyes yet I can see; I track vibrations, heat, and degree.' },
          { type: 'etymology', text: 'From Latin sensus, the same root as the biological senses.' },
          { type: 'mnemonic', text: 'A sensor uses mechanical Senses.' }
        ]
      },
      {
        id: 'q3-2',
        title: 'The Rough Mountain Pass',
        scenario: 'The rocky trail through the ridge is jagged, unpolished, and abrasive to the mountaineers’ boots.',
        sentenceWithBlank: 'The steep mountain trail was strewn with _____ gravel and jagged boulders that shredded their climbing boots.',
        blankOptions: ['coarse', 'course'],
        correctAnswer: 'coarse',
        explanation: 'Coarse means rough in texture, abrasive, or crude. Course means a path of travel, academic subject, or sequence of dishes.',
        homophonePairId: 'coarse-course',
        clues: [
          { type: 'riddle', text: 'Rough to the touch and harsh to feel, sandpaper grit beneath your heel.' },
          { type: 'etymology', text: 'From Middle English cours meaning common, unrefined, or crude.' },
          { type: 'mnemonic', text: 'CoArse has an "A" like Abrasive.' }
        ]
      },
      {
        id: 'q3-3',
        title: 'Documenting the Dig Site',
        scenario: 'A high school archaeological team documents the precise GPS coordinates of an ancient stone vault.',
        sentenceWithBlank: 'The research paper urged the geologists to _____ the original survey coordinates of the ancient burial _____.',
        blankOptions: ['cite / site', 'site / cite', 'sight / site'],
        correctAnswer: 'cite / site',
        explanation: 'Cite means to quote or reference formally. Site means a physical location or area of land.',
        homophonePairId: 'cite-site-sight',
        clues: [
          { type: 'riddle', text: 'First you quote a scholar’s source, then you name the ground of course.' },
          { type: 'etymology', text: 'Cite from Latin citare ("to summon/quote"); Site from Latin situs ("location").' },
          { type: 'mnemonic', text: 'Cite has "C" for Citation; Site has "S" for Spatial location.' }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'literary-crypt',
    name: 'Lost Valley: The Literary Crypt',
    locationName: 'Ruined Fortress & Sunken Archives',
    description: 'Explore the moss-covered stone library where timeless literary tropes and stylistic elegance are inscribed.',
    xPercent: 78,
    yPercent: 40,
    requiredStars: 6,
    questions: [
      {
        id: 'q4-1',
        title: 'The Mythological Echo',
        scenario: 'In an AP English Literature essay, a student notices the protagonist’s tragic descent mirrors Icarus flying too near the sun.',
        sentenceWithBlank: 'The novelist made a poignant _____ to the Greek myth of Icarus when depicting the young inventor’s overambitious flight.',
        blankOptions: ['allusion', 'illusion'],
        correctAnswer: 'allusion',
        explanation: 'Allusion is an indirect literary, artistic, or historical reference. Illusion is a deceptive mirage or false sensory appearance.',
        homophonePairId: 'allusion-illusion',
        clues: [
          { type: 'riddle', text: 'I do not fool your eyes with sleight; I nod to tales in readers’ sight.' },
          { type: 'etymology', text: 'From Latin alludere, meaning to playfully touch upon or hint at.' },
          { type: 'mnemonic', text: 'An Allusion is an Author’s reference; an Illusion is an Ill-fitting perception.' }
        ]
      },
      {
        id: 'q4-2',
        title: 'Harmonious Harmony',
        scenario: 'A food critic pairs a dark vintage roast with bittersweet chocolate, noting how each ingredient elevates the other.',
        sentenceWithBlank: 'The tart acidity of the wild blackberries was selected to _____ the rich creaminess of the artisan cheesecake.',
        blankOptions: ['compliment', 'complement'],
        correctAnswer: 'complement',
        explanation: 'Complement (with an "e") means to complete, balance, or enhance harmoniously. Compliment (with an "i") is polite praise.',
        homophonePairId: 'compliment-complement',
        clues: [
          { type: 'riddle', text: 'I do not flatter or say you are neat; I fit like a puzzle to make things complete.' },
          { type: 'etymology', text: 'From Latin complementum, from complere ("to fill up, fulfill").' },
          { type: 'mnemonic', text: 'Compl-E-ment with an "E" will Compl-E-te.' }
        ]
      },
      {
        id: 'q4-3',
        title: 'The Preface of the Tome',
        scenario: 'Before reading the historical monograph, students examine the introductory remarks written by a renowned historian.',
        sentenceWithBlank: 'The distinguished biographer penned a compelling _____ detailing how newly declassified diaries were discovered.',
        blankOptions: ['foreword', 'forward'],
        correctAnswer: 'foreword',
        explanation: 'Foreword is an introductory preface in a book written before the main text. Forward refers to onward direction or advancement.',
        homophonePairId: 'foreword-forward',
        clues: [
          { type: 'riddle', text: 'Words set before the tale begins, introducing chapters, feats, and sins.' },
          { type: 'etymology', text: 'Compound of "fore" (before) + "word".' },
          { type: 'mnemonic', text: 'ForeWORD is made of literal WORDS placed be-FORE the book.' }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'celestial-observatory',
    name: 'Celestial Observatory: The High Peak',
    locationName: 'Peak Summit & Ancient Astrolabe',
    description: 'Scale the highest mountain pinnacle where astronomers watch stars and decipher planetary alignments.',
    xPercent: 58,
    yPercent: 18,
    requiredStars: 8,
    questions: [
      {
        id: 'q5-1',
        title: 'Stimulating Scientific Curiosity',
        scenario: 'A bizarre anomaly in the spectrograph immediately grips the lead astrophysicist’s imagination.',
        sentenceWithBlank: 'The unexpected discovery of radio pulses from the distant pulsar served to _____ the astrophysics team’s scientific curiosity.',
        blankOptions: ['peak', 'peek', 'pique'],
        correctAnswer: 'pique',
        explanation: 'Pique means to stimulate, provoke, or excite (curiosity/interest). Peak is a mountain summit. Peek is a sneaky glance.',
        homophonePairId: 'peak-peek-pique',
        clues: [
          { type: 'riddle', text: 'I am no mount of stone or ice; I sting the mind and make inquiries rise.' },
          { type: 'etymology', text: 'From French piquer, literally meaning to prick, sting, or spur into action.' },
          { type: 'mnemonic', text: 'Pique ends with "que" like a Curiosity or Question.' }
        ]
      },
      {
        id: 'q5-2',
        title: 'The Distinguished Scholar',
        scenario: 'The observatory invites a world-famous astrophysicist and Nobel laureate to lecture on gravitational waves.',
        sentenceWithBlank: 'The university symposium was proud to host an _____ cosmologist whose groundbreaking theories revolutionized relativity.',
        blankOptions: ['imminent', 'eminent'],
        correctAnswer: 'eminent',
        explanation: 'Eminent means distinguished, renowned, and high in station or prestige. Imminent means about to happen immediately.',
        homophonePairId: 'imminent-eminent',
        clues: [
          { type: 'riddle', text: 'Revered in lecture halls of fame, revered by all who speak my name.' },
          { type: 'etymology', text: 'From Latin eminere, meaning to stand out prominently above the rest.' },
          { type: 'mnemonic', text: 'Eminent people are Esteemed and Exalted.' }
        ]
      },
      {
        id: 'q5-3',
        title: 'The Domed Seat of Law',
        scenario: 'A high school civics club visits the state legislature to watch a historic constitutional debate.',
        sentenceWithBlank: 'The student delegates climbed the broad granite steps of the state _____ beneath its gleaming copper dome.',
        blankOptions: ['capital', 'capitol'],
        correctAnswer: 'capitol',
        explanation: 'Capitol (with "o") refers strictly to the building where a legislature meets. Capital (with "a") refers to the city, financial wealth, or uppercase letter.',
        homophonePairId: 'capital-capitol',
        clues: [
          { type: 'riddle', text: 'I have pillars, halls, and a rotunda dome, where lawmakers call their chambers home.' },
          { type: 'etymology', text: 'From the Roman temple on the Capitoline Hill in ancient Rome.' },
          { type: 'mnemonic', text: 'The capit-O-l has a round d-O-me roof.' }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'treasure-vault',
    name: 'Treasure Cove: The Lexicographer’s Final Hoard',
    locationName: 'Treasure Cove & The Golden Chest',
    description: 'The final destination at the crossbones mark. Unlock the master lock by solving the hardest high school homophone enigmas!',
    xPercent: 78,
    yPercent: 70,
    requiredStars: 10,
    questions: [
      {
        id: 'q6-1',
        title: 'The Impact of the Discovery',
        scenario: 'The scientific journal publishes findings that directly alter how doctors prescribe antibiotics.',
        sentenceWithBlank: 'The biologist wondered how the synthetic enzyme would _____ the cellular membrane, and what lasting _____ it would produce.',
        blankOptions: ['affect / effect', 'effect / affect', 'affect / affect'],
        correctAnswer: 'affect / effect',
        explanation: 'Affect is the verb (to produce an impact or change). Effect is the noun (the result, outcome, or consequence).',
        homophonePairId: 'affect-effect',
        clues: [
          { type: 'riddle', text: 'First comes the action that will touch; then comes the outcome felt so much.' },
          { type: 'etymology', text: 'Afficere (Latin: to influence) vs. Efficere (Latin: to bring about an outcome).' },
          { type: 'mnemonic', text: 'RAVEN: Remember Affect = Verb, Effect = Noun!' }
        ]
      },
      {
        id: 'q6-2',
        title: 'The Suspenseful Silence',
        scenario: 'As the expedition leader fits the golden skeleton key into the padlock, nobody dares breathe.',
        sentenceWithBlank: 'The crew watched with _____ breath as the ancient brass lock clicked and the heavy cedar lid creaked open.',
        blankOptions: ['bated', 'baited'],
        correctAnswer: 'bated',
        explanation: 'Bated breath means breath held in suspense or abated (held back). Baited refers to putting bait on a trap or fishing hook.',
        homophonePairId: 'bated-baited',
        clues: [
          { type: 'riddle', text: 'Not hooked like worms upon a line, but held in silence by design.' },
          { type: 'etymology', text: 'A shortening of "abated" meaning reduced or restrained.' },
          { type: 'mnemonic', text: 'Bated breath comes from a-BATED (breath held back in suspense).' }
        ]
      },
      {
        id: 'q6-3',
        title: 'Unshakable Composure',
        scenario: 'Despite intense scrutiny from the debate judges, the captain remains entirely unflustered.',
        sentenceWithBlank: 'The opposing team’s aggressive rebuttals did not _____ the speaker during the final round of the National Speech Tournament.',
        blankOptions: ['faze', 'phase'],
        correctAnswer: 'faze',
        explanation: 'Faze (with "z") means to disconcert, perturb, or intimidate. Phase (with "ph") is a developmental stage or lunar period.',
        homophonePairId: 'phase-faze',
        clues: [
          { type: 'riddle', text: 'I mean to shake your calm or scare, but resolute minds do not care.' },
          { type: 'etymology', text: 'From Old English fesian meaning to drive out or frighten.' },
          { type: 'mnemonic', text: 'Nothing can f-A-z-e an A-thlete with supreme confidence.' }
        ]
      },
      {
        id: 'q6-4',
        title: 'The Master Artist’s Colors',
        scenario: 'The cartographer uses a vibrant spectrum of inks to paint the illuminated borders of the grand map.',
        sentenceWithBlank: 'The master illuminator blended vermilion and gold leaf upon her porcelain _____ to tint the royal seal.',
        blankOptions: ['palette', 'palate', 'pallet'],
        correctAnswer: 'palette',
        explanation: 'Palette is an artist’s board or selection of colors. Palate is the roof of the mouth or sense of taste. Pallet is a wooden cargo platform.',
        homophonePairId: 'palate-palette-pallet',
        clues: [
          { type: 'riddle', text: 'Where oils and pigments mingle free, the tool of painters across the sea.' },
          { type: 'etymology', text: 'From French palette meaning a painter’s color mixing board.' },
          { type: 'mnemonic', text: 'An artis-TE mixes paints on a pal-ET-te.' }
        ]
      }
    ]
  }
];

export const PROOFREADING_ARTICLES: ProofreadingArticle[] = [
  {
    id: 'student-election',
    genre: 'Campus Journalism',
    title: 'Editorial: The Integrity of the Spring Student Council Referendum',
    context: 'The editor-in-chief of The Beacon student newspaper published this investigative editorial regarding election procedures. Can you spot the homophone errors?',
    paragraphs: [
      {
        id: 'p1',
        text: 'Last Friday, the student council authorized candidates to canvass local neighborhoods to solicit student voter participation.',
        errors: []
      },
      {
        id: 'p2',
        text: 'However, during the election assembly, the principal advisor reminded everyone that moral principal must transcend competitive politics.',
        errors: [
          {
            id: 'err-1',
            wrongWord: 'principal',
            correctWord: 'principle',
            explanation: '"Moral principle" refers to a fundamental standard or ethical rule (ending in -le), whereas "principal" refers to a school head or primary sum.',
            options: ['principle', 'principal', 'principality']
          }
        ]
      },
      {
        id: 'p3',
        text: 'The campaign committee sought formal legal council before approving posters on thick embossed stationary.',
        errors: [
          {
            id: 'err-2',
            wrongWord: 'council',
            correctWord: 'counsel',
            explanation: '"Legal counsel" means professional advice or an attorney. A "council" is an assembled governing committee.',
            options: ['counsel', 'council', 'consul']
          },
          {
            id: 'err-3',
            wrongWord: 'stationary',
            correctWord: 'stationery',
            explanation: 'Writing materials and decorative paper are "stationery" (with an "e" for envelope). "Stationary" (with an "a") means standing motionless.',
            options: ['stationery', 'stationary', 'station']
          }
        ]
      },
      {
        id: 'p4',
        text: 'Investigators also discovered that an anonymous club had distributed discrete pamphlets attacking opponent policy without attribution.',
        errors: [
          {
            id: 'err-4',
            wrongWord: 'discrete',
            correctWord: 'discreet',
            explanation: 'Secretive and stealthy distribution should be described as "discreet" (cautious, subtle). "Discrete" means individually separate or detached.',
            options: ['discreet', 'discrete', 'discrepant']
          }
        ]
      }
    ]
  },
  {
    id: 'ap-biology',
    genre: 'Scientific Research Abstract',
    title: 'Peer-Reviewed Abstract: Circadian Rhythm Modulation in Drosophila',
    context: 'A high school Intel Science Talent Search finalist drafted this abstract. Find the 3 subtle homophone confusions hidden in the scientific prose.',
    paragraphs: [
      {
        id: 'p1',
        text: 'Our investigation sought to determine how artificial blue-spectrum wavelength exposure would affect neurological sleep-wake cycles.',
        errors: []
      },
      {
        id: 'p2',
        text: 'The experimental design utilized an infrared censor array to monitor locomotor activity during both illuminated and nocturnal phases.',
        errors: [
          {
            id: 'err-5',
            wrongWord: 'censor',
            correctWord: 'sensor',
            explanation: 'An electronic device that detects heat or motion is a "sensor". A "censor" suppresses objectionable writing or speech.',
            options: ['sensor', 'censor', 'censure']
          }
        ]
      },
      {
        id: 'p3',
        text: 'The cumulative data revealed a marked physiological effect on circadian clock protein synthesis, with statistically significant variance.',
        errors: []
      },
      {
        id: 'p4',
        text: 'Furthermore, the researchers were careful to site three seminal neurobiology publications that first documented similar gene expression.',
        errors: [
          {
            id: 'err-6',
            wrongWord: 'site',
            correctWord: 'cite',
            explanation: 'To quote, credit, or reference an academic source is to "cite" (from Latin citare). A "site" is a physical plot of ground or website.',
            options: ['cite', 'site', 'sight']
          }
        ]
      }
    ]
  },
  {
    id: 'college-essay',
    genre: 'College Admissions Essay',
    title: 'Admissions Essay: Reflections from the Timberline Peak',
    context: 'A student wrote their Common App personal essay about overcoming self-doubt during a multi-day high-altitude backpacking expedition.',
    paragraphs: [
      {
        id: 'p1',
        text: 'Standing on the granite summit at sunrise, the panoramic vista across the mountain peak took my breath away.',
        errors: []
      },
      {
        id: 'p2',
        text: 'Yet during the grueling third day ascent, freezing sleet had failed to phase my resolve, even as the trail narrowed along loose shale.',
        errors: [
          {
            id: 'err-7',
            wrongWord: 'phase',
            correctWord: 'faze',
            explanation: 'To disconcert, intimidate, or perturb someone is to "faze" them (spelled with a "z"). A "phase" is a developmental stage or lunar cycle.',
            options: ['faze', 'phase', 'phaze']
          }
        ]
      },
      {
        id: 'p3',
        text: 'The grueling climb was a living allusion to the challenges I had previously faced in competitive debate and robotics.',
        errors: []
      },
      {
        id: 'p4',
        text: 'As the final ridge approached, my teammates and I waited with baited breath for the fog to part, revealing the shimmering timberline lake below.',
        errors: [
          {
            id: 'err-8',
            wrongWord: 'baited',
            correctWord: 'bated',
            explanation: 'The idiom is "with bated breath" (from "abated", meaning breath held in suspense). "Baited" refers to fishing bait or lures.',
            options: ['bated', 'baited', 'batted']
          }
        ]
      }
    ]
  }
];

export const BLITZ_QUESTIONS: BlitzQuestion[] = [
  {
    id: 'b1',
    sentence: 'The chemistry professor praised the students for their _____ lab technique.',
    options: ['compliment', 'complement'],
    correct: 'compliment',
    pairName: 'Compliment vs. Complement'
  },
  {
    id: 'b2',
    sentence: 'The navy blazer and gold buttons _____ each other perfectly.',
    options: ['compliment', 'complement'],
    correct: 'complement',
    pairName: 'Compliment vs. Complement'
  },
  {
    id: 'b3',
    sentence: 'The data set was partitioned into three _____ categories.',
    options: ['discrete', 'discreet'],
    correct: 'discrete',
    pairName: 'Discrete vs. Discreet'
  },
  {
    id: 'b4',
    sentence: 'The detective maintained a _____ presence outside the suspect’s apartment.',
    options: ['discrete', 'discreet'],
    correct: 'discreet',
    pairName: 'Discrete vs. Discreet'
  },
  {
    id: 'b5',
    sentence: 'The school _____ announced the date for the commencement ceremony.',
    options: ['principal', 'principle'],
    correct: 'principal',
    pairName: 'Principal vs. Principle'
  },
  {
    id: 'b6',
    sentence: 'Newton’s second law of motion is a foundational scientific _____.',
    options: ['principal', 'principle'],
    correct: 'principle',
    pairName: 'Principal vs. Principle'
  },
  {
    id: 'b7',
    sentence: 'Severe drought can negatively _____ agricultural yields across the Midwest.',
    options: ['affect', 'effect'],
    correct: 'affect',
    pairName: 'Affect vs. Effect'
  },
  {
    id: 'b8',
    sentence: 'The new tax policy had an immediate stimulative _____ on small businesses.',
    options: ['affect', 'effect'],
    correct: 'effect',
    pairName: 'Affect vs. Effect'
  },
  {
    id: 'b9',
    sentence: 'The defense attorney attempted to _____ a confession from the defendant.',
    options: ['elicit', 'illicit'],
    correct: 'elicit',
    pairName: 'Elicit vs. Illicit'
  },
  {
    id: 'b10',
    sentence: 'The customs agents confiscated an _____ shipment of smuggled artifacts.',
    options: ['elicit', 'illicit'],
    correct: 'illicit',
    pairName: 'Elicit vs. Illicit'
  },
  {
    id: 'b11',
    sentence: 'Meteorologists warned that a category 4 hurricane was _____.',
    options: ['imminent', 'eminent'],
    correct: 'imminent',
    pairName: 'Imminent vs. Eminent'
  },
  {
    id: 'b12',
    sentence: 'The seminar was chaired by an _____ professor of constitutional law.',
    options: ['imminent', 'eminent'],
    correct: 'eminent',
    pairName: 'Imminent vs. Eminent'
  },
  {
    id: 'b13',
    sentence: 'She sent handwritten invitations on monogrammed cream _____.',
    options: ['stationery', 'stationary'],
    correct: 'stationery',
    pairName: 'Stationery vs. Stationary'
  },
  {
    id: 'b14',
    sentence: 'The exercise bike remained _____ while the cyclist pedaled vigorously.',
    options: ['stationery', 'stationary'],
    correct: 'stationary',
    pairName: 'Stationery vs. Stationary'
  },
  {
    id: 'b15',
    sentence: 'The opening line was a clever _____ to Shakespeare’s Hamlet.',
    options: ['allusion', 'illusion'],
    correct: 'allusion',
    pairName: 'Allusion vs. Illusion'
  },
  {
    id: 'b16',
    sentence: 'The magician created the _____ that a coin vanished into thin air.',
    options: ['allusion', 'illusion'],
    correct: 'illusion',
    pairName: 'Allusion vs. Illusion'
  },
  {
    id: 'b17',
    sentence: 'The campaign volunteers set out to _____ the suburban precinct.',
    options: ['canvas', 'canvass'],
    correct: 'canvass',
    pairName: 'Canvas vs. Canvass'
  },
  {
    id: 'b18',
    sentence: 'The artist stretched heavy linen _____ over the wooden frame.',
    options: ['canvas', 'canvass'],
    correct: 'canvas',
    pairName: 'Canvas vs. Canvass'
  },
  {
    id: 'b19',
    sentence: 'The provocative lecture was intended to _____ debate among the audience.',
    options: ['peak', 'peek', 'pique'],
    correct: 'pique',
    pairName: 'Peak vs. Peek vs. Pique'
  },
  {
    id: 'b20',
    sentence: 'Snow covered the mountain _____ even during the height of July.',
    options: ['peak', 'peek', 'pique'],
    correct: 'peak',
    pairName: 'Peak vs. Peek vs. Pique'
  },
  {
    id: 'b21',
    sentence: 'The city _____ voted to allocate funding for the new public library.',
    options: ['council', 'counsel'],
    correct: 'council',
    pairName: 'Council vs. Counsel'
  },
  {
    id: 'b22',
    sentence: 'The student listened attentively to the counselor’s wise _____.',
    options: ['council', 'counsel'],
    correct: 'counsel',
    pairName: 'Council vs. Counsel'
  },
  {
    id: 'b23',
    sentence: 'Please remember to _____ your sources when writing an argumentative essay.',
    options: ['cite', 'site', 'sight'],
    correct: 'cite',
    pairName: 'Cite vs. Site vs. Sight'
  },
  {
    id: 'b24',
    sentence: 'The historical monument is located on the _____ of an 1863 battle.',
    options: ['cite', 'site', 'sight'],
    correct: 'site',
    pairName: 'Cite vs. Site vs. Sight'
  },
  {
    id: 'b25',
    sentence: 'The harsh criticism failed to _____ the seasoned debate captain.',
    options: ['faze', 'phase'],
    correct: 'faze',
    pairName: 'Phase vs. Faze'
  },
  {
    id: 'b26',
    sentence: 'The governor delivered the annual address in the state _____ rotunda.',
    options: ['capital', 'capitol'],
    correct: 'capitol',
    pairName: 'Capital vs. Capitol'
  },
  {
    id: 'b27',
    sentence: 'Tokyo is the bustling _____ of Japan.',
    options: ['capital', 'capitol'],
    correct: 'capital',
    pairName: 'Capital vs. Capitol'
  },
  {
    id: 'b28',
    sentence: 'The food critic possessed a particularly discerning _____.',
    options: ['palate', 'palette', 'pallet'],
    correct: 'palate',
    pairName: 'Palate vs. Palette vs. Pallet'
  }
];
