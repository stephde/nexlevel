const dogNames = require('dog-names')
function NameGenerator () {

    const adjective = [
        'abandoned',
        'abashed',
        'abhorrent',
        'abiding',
        'able',
        'abnormal',
        'aboriginal',
        'abortive',
        'abrupt',
        'absent',
        'absorbed',
        'absorbing',
        'abstracted',
        'absurd',
        'abundant',
        'abusive',
        'acceptable',
        'accessible',
        'accidental',
        'accurate',
        'acid',
        'acoustic',
        'acrid',
        'adamant',
        'adaptable',
        'addicted',
        'adhesive',
        'adorable',
        'adventurous',
        'afraid',
        'aggressive',
        'agonizing',
        'agreeable',
        'ahead',
        'alert',
        'alike',
        'alive',
        'alleged',
        'amazing',
        'ambiguous',
        'ambitious',
        'amused',
        'amusing',
        'ancient',
        'angry',
        'animated',
        'annoyed',
        'annoying',
        'anxious',
        'apathetic',
        'aquatic',
        'aromatic',
        'arrogant',
        'ashamed',
        'aspiring',
        'assorted',
        'astonishing',
        'attractive',
        'auspicious',
        'automatic',
        'available',
        'average',
        'aware',
        'awesome',
        'axiomatic',
        'bad',
        'barbarous',
        'bashful',
        'bawdy',
        'beautiful',
        'befitting',
        'belligerent',
        'beneficial',
        'bewildered',
        'big',
        'billowy',
        'bitter',
        'bizarre',
        'black',
        'black-and-white',
        'bloody',
        'blue',
        'blue-eyed',
        'blushing',
        'boiling',
        'boorish',
        'bored',
        'boring',
        'bouncy',
        'boundless',
        'brainy',
        'brave',
        'brawny',
        'breakable',
        'breezy',
        'bright',
        'broad',
        'broken',
        'brown',
        'bumpy',
        'burly',
        'busy',
        'calculating',
        'callous',
        'calm',
        'capable',
        'capricious',
        'careful',
        'careless',
        'caring',
        'cautious',
        'ceaseless',
        'certain',
        'changeable',
        'charming',
        'cheap',
        'cheerful',
        'childlike',
        'chilly',
        'chivalrous',
        'chubby',
        'chunky',
        'clammy',
        'classy',
        'clean',
        'clever',
        'cloistered',
        'cloudy',
        'clumsy',
        'cluttered',
        'coherent',
        'cold',
        'colorful',
        'colossal',
        'combative',
        'comfortable',
        'common',
        'complete',
        'complex',
        'concerned',
        'condemned',
        'confused',
        'conscious',
        'cool',
        'cooperative',
        'coordinated',
        'courageous',
        'cowardly',
        'crabby',
        'crazy',
        'creepy',
        'crooked',
        'crowded',
        'cruel',
        'cuddly',
        'cultured',
        'curious',
        'curly',
        'curved',
        'curvy',
        'cute',
        'cynical',
        'daffy',
        'daily',
        'damaged',
        'damp',
        'dangerous',
        'dark',
        'dazzling',
        'dead',
        'deafening',
        'dear',
        'decisive',
        'deep',
        'deeply',
        'defeated',
        'defective',
        'defiant',
        'delicate',
        'delicious',
        'delightful',
        'demonic',
        'delirious',
        'depressed',
        'deranged',
        'deserted',
        'detailed',
        'determined',
        'devilish',
        'diligent',
        'direful',
        'dirty',
        'disagreeable',
        'disastrous',
        'discreet',
        'disgusted',
        'disgusting',
        'disillusioned',
        'dispensable',
        'distinct',
        'disturbed',
        'divergent',
        'dizzy',
        'domineering',
        'doubtful',
        'draconian',
        'dramatic',
        'dreary',
        'drunk',
        'dry',
        'dull',
        'dusty',
        'dynamic',
        'dysfunctional',
        'eager',
        'early',
        'earthy',
        'easy',
        'eatable',
        'economic',
        'educated',
        'efficacious',
        'efficient',
        'elastic',
        'elderly',
        'electric',
        'elegant',
        'elfin',
        'elite',
        'embarrassed',
        'eminent',
        'enchanted',
        'enchanting',
        'encouraging',
        'endurable',
        'energetic',
        'enormous',
        'entertaining',
        'enthusiastic',
        'envious',
        'equable',
        'equal',
        'evasive',
        'excellent',
        'excited',
        'exciting',
        'exclusive',
        'exotic',
        'expensive',
        'exuberant',
        'fabulous',
        'faded',
        'fair',
        'faithful',
        'fallacious',
        'false',
        'familiar',
        'famous',
        'fanatical',
        'fancy',
        'fantastic',
        'far',
        'fascinated',
        'fast',
        'fat',
        'faulty',
        'fearful',
        'fearless',
        'feeble',
        'female',
        'fertile',
        'festive',
        'fierce',
        'filthy',
        'fine',
        'finicky',
        'first',
        'fixed',
        'flagrant',
        'flaky',
        'flashy',
        'flat',
        'flawless',
        'flimsy',
        'flowery',
        'fluffy',
        'foamy',
        'foolish',
        'forgetful',
        'fortunate',
        'fragile',
        'frantic',
        'free',
        'freezing',
        'fresh',
        'fretful',
        'friendly',
        'frightened',
        'frightening',
        'full',
        'fumbling',
        'functional',
        'funny',
        'furry',
        'furtive',
        'future',
        'futuristic',
        'fuzzy',
        'gabby',
        'gainful',
        'gamy',
        'gaping',
        'garrulous',
        'gaudy',
        'general',
        'gentle',
        'giant',
        'giddy',
        'gifted',
        'gigantic',
        'glamorous',
        'gleaming',
        'glib',
        'glistening',
        'glorious',
        'glossy',
        'godly',
        'good',
        'goofy',
        'gorgeous',
        'graceful',
        'grandiose',
        'grateful',
        'gratis',
        'gray',
        'greasy',
        'great',
        'greedy',
        'green',
        'grey',
        'grieving',
        'groovy',
        'grotesque',
        'grouchy',
        'grubby',
        'gruesome',
        'grumpy',
        'guarded',
        'guiltless',
        'gullible',
        'gusty',
        'guttural',
        'habitual',
        'half',
        'hallowed',
        'halting',
        'handsome',
        'handy',
        'hanging',
        'hapless',
        'happy',
        'hard',
        'hard-to-find',
        'harmonious',
        'harsh',
        'hateful',
        'heady',
        'healthy',
        'heartbreaking',
        'heavenly',
        'heavy',
        'hellish',
        'helpful',
        'helpless',
        'hesitant',
        'hideous',
        'high',
        'highfalutin',
        'high-pitched',
        'hilarious',
        'hissing',
        'historical',
        'holistic',
        'hollow',
        'homeless',
        'homely',
        'honorable',
        'horrible',
        'hospitable',
        'hot',
        'huge',
        'hulking',
        'humdrum',
        'humorous',
        'hungry',
        'hurried',
        'hurt',
        'hushed',
        'husky',
        'hypnotic',
        'hysterical',
        'icky',
        'icy',
        'idiotic',
        'ignorant',
        'ill',
        'illegal',
        'ill-fated',
        'ill-informed',
        'illustrious',
        'imaginary',
        'immense',
        'imminent',
        'impartial',
        'imperfect',
        'impolite',
        'important',
        'imported',
        'impossible',
        'incandescent',
        'incompetent',
        'inconclusive',
        'industrious',
        'incredible',
        'inexpensive',
        'infamous',
        'innate',
        'innocent',
        'inquisitive',
        'insidious',
        'instinctive',
        'intelligent',
        'interesting',
        'internal',
        'invincible',
        'irate',
        'irritating',
        'itchy',
        'jaded',
        'jagged',
        'jazzy',
        'jealous',
        'jittery',
        'jobless',
        'jolly',
        'joyous',
        'judicious',
        'juicy',
        'jumbled',
        'jumpy',
        'juvenile',
        'keen',
        'kind',
        'kindhearted',
        'kindly',
        'knotty',
        'knowing',
        'knowledgeable',
        'known',
        'labored',
        'lackadaisical',
        'lacking',
        'lame',
        'lamentable',
        'languid',
        'large',
        'last',
        'late',
        'laughable',
        'lavish',
        'lazy',
        'lean',
        'learned',
        'left',
        'legal',
        'lethal',
        'level',
        'lewd',
        'light',
        'like',
        'likeable',
        'limping',
        'literate',
        'little',
        'lively',
        'living',
        'lonely',
        'long',
        'longing',
        'long-term',
        'loose',
        'lopsided',
        'loud',
        'loutish',
        'lovely',
        'loving',
        'low',
        'lowly',
        'lucky',
        'ludicrous',
        'lumpy',
        'lush',
        'luxuriant',
        'lying',
        'lyrical',
        'macabre',
        'macho',
        'maddening',
        'madly',
        'magenta',
        'magical',
        'magnificent',
        'majestic',
        'makeshift',
        'male',
        'malicious',
        'mammoth',
        'maniacal',
        'many',
        'marked',
        'massive',
        'married',
        'marvelous',
        'material',
        'materialistic',
        'mature',
        'mean',
        'measly',
        'meaty',
        'medical',
        'meek',
        'mellow',
        'melodic',
        'melted',
        'merciful',
        'mere',
        'messy',
        'mighty',
        'military',
        'milky',
        'mindless',
        'miniature',
        'minor',
        'miscreant',
        'misty',
        'mixed',
        'moaning',
        'modern',
        'moldy',
        'momentous',
        'motionless',
        'mountainous',
        'muddled',
        'mundane',
        'murky',
        'mushy',
        'mute',
        'mysterious',
        'naive',
        'nappy',
        'narrow',
        'nasty',
        'natural',
        'naughty',
        'nauseating',
        'near',
        'neat',
        'nebulous',
        'necessary',
        'needless',
        'needy',
        'neighborly',
        'nervous',
        'new',
        'next',
        'nice',
        'nifty',
        'nimble',
        'nippy',
        'noiseless',
        'noisy',
        'nonchalant',
        'nondescript',
        'nonstop',
        'normal',
        'nostalgic',
        'nosy',
        'noxious',
        'numberless',
        'numerous',
        'nutritious',
        'nutty',
        'oafish',
        'obedient',
        'obeisant',
        'obese',
        'obnoxious',
        'obscene',
        'obsequious',
        'observant',
        'obsolete',
        'obtainable',
        'oceanic',
        'odd',
        'offbeat',
        'old',
        'old-fashioned',
        'omniscient',
        'onerous',
        'open',
        'opposite',
        'optimal',
        'orange',
        'ordinary',
        'organic',
        'ossified',
        'outgoing',
        'outrageous',
        'outstanding',
        'oval',
        'overconfident',
        'overjoyed',
        'overrated',
        'overt',
        'overwrought',
        'painful',
        'painstaking',
        'pale',
        'paltry',
        'panicky',
        'panoramic',
        'parallel',
        'parched',
        'parsimonious',
        'past',
        'pastoral',
        'pathetic',
        'peaceful',
        'penitent',
        'perfect',
        'periodic',
        'permissible',
        'perpetual',
        'petite',
        'phobic',
        'physical',
        'picayune',
        'pink',
        'piquant',
        'placid',
        'plain',
        'plant',
        'plastic',
        'plausible',
        'pleasant',
        'plucky',
        'pointless',
        'poised',
        'polite',
        'political',
        'poor',
        'possessive',
        'possible',
        'powerful',
        'precious',
        'premium',
        'present',
        'pretty',
        'previous',
        'pricey',
        'prickly',
        'private',
        'probable',
        'productive',
        'profuse',
        'protective',
        'proud',
        'psychedelic',
        'psychotic',
        'public',
        'puffy',
        'pumped',
        'puny',
        'purple',
        'purring',
        'pushy',
        'puzzled',
        'puzzling',
        'quaint',
        'quarrelsome',
        'questionable',
        'quick',
        'quiet',
        'quirky',
        'quixotic',
        'quizzical',
        'rabid',
        'racial',
        'ragged',
        'rainy',
        'rambunctious',
        'rampant',
        'rapid',
        'rare',
        'raspy',
        'ratty',
        'ready',
        'real',
        'rebel',
        'receptive',
        'recondite',
        'red',
        'redundant',
        'reflective',
        'regular',
        'relieved',
        'remarkable',
        'reminiscent',
        'repulsive',
        'resolute',
        'resonant',
        'responsible',
        'rhetorical',
        'rich',
        'right',
        'righteous',
        'rightful',
        'rigid',
        'ripe',
        'ritzy',
        'roasted',
        'robust',
        'romantic',
        'roomy',
        'rotten',
        'rough',
        'round',
        'royal',
        'ruddy',
        'rude',
        'rural',
        'rustic',
        'ruthless',
        'sable',
        'sad',
        'safe',
        'salty',
        'same',
        'sassy',
        'satisfying',
        'savory',
        'scandalous',
        'scarce',
        'scared',
        'scary',
        'scattered',
        'scientific',
        'scintillating',
        'scrawny',
        'screeching',
        'second',
        'second-hand',
        'secret',
        'secretive',
        'sedate',
        'seemly',
        'selective',
        'selfish',
        'separate',
        'serious',
        'shaggy',
        'shaky',
        'shallow',
        'sharp',
        'shiny',
        'shivering',
        'shocking',
        'short',
        'shrill',
        'shut',
        'shy',
        'sick',
        'silent',
        'silky',
        'silly',
        'simple',
        'simplistic',
        'sincere',
        'skillful',
        'skinny',
        'sleepy',
        'slim',
        'slimy',
        'slippery',
        'sloppy',
        'slow',
        'small',
        'smart',
        'smelly',
        'smiling',
        'smoggy',
        'smooth',
        'sneaky',
        'snobbish',
        'snotty',
        'soft',
        'soggy',
        'solid',
        'somber',
        'sophisticated',
        'sordid',
        'sore',
        'sour',
        'sparkling',
        'special',
        'spectacular',
        'spicy',
        'spiffy',
        'spiky',
        'spiritual',
        'spiteful',
        'splendid',
        'spooky',
        'spotless',
        'spotted',
        'spotty',
        'spurious',
        'squalid',
        'square',
        'squealing',
        'squeamish',
        'staking',
        'stale',
        'standing',
        'statuesque',
        'steadfast',
        'steady',
        'steep',
        'stereotyped',
        'sticky',
        'stiff',
        'stimulating',
        'stingy',
        'stormy',
        'straight',
        'strange',
        'striped',
        'strong',
        'stupendous',
        'sturdy',
        'subdued',
        'subsequent',
        'substantial',
        'successful',
        'succinct',
        'sudden',
        'sulky',
        'super',
        'superb',
        'superficial',
        'supreme',
        'swanky',
        'sweet',
        'sweltering',
        'swift',
        'symptomatic',
        'synonymous',
        'taboo',
        'tacit',
        'tacky',
        'talented',
        'tall',
        'tame',
        'tan',
        'tangible',
        'tangy',
        'tart',
        'tasteful',
        'tasteless',
        'tasty',
        'tawdry',
        'tearful',
        'tedious',
        'teeny',
        'teeny-tiny',
        'telling',
        'temporary',
        'ten',
        'tender',
        'tense',
        'tenuous',
        'terrific',
        'tested',
        'testy',
        'thankful',
        'therapeutic',
        'thick',
        'thin',
        'thinkable',
        'third',
        'thirsty',
        'thoughtful',
        'thoughtless',
        'threatening',
        'thundering',
        'tidy',
        'tight',
        'tightfisted',
        'tiny',
        'tired',
        'tiresome',
        'toothsome',
        'torpid',
        'tough',
        'towering',
        'tranquil',
        'trashy',
        'tremendous',
        'tricky',
        'trite',
        'troubled',
        'truculent',
        'true',
        'truthful',
        'typical',
        'ubiquitous',
        'ultra',
        'unable',
        'unaccountable',
        'unadvised',
        'unarmed',
        'unbecoming',
        'unbiased',
        'uncovered',
        'understood',
        'undesirable',
        'unequal',
        'unequaled',
        'uneven',
        'unhealthy',
        'uninterested',
        'unique',
        'unkempt',
        'unknown',
        'unnatural',
        'unruly',
        'unsightly',
        'unsuitable',
        'untidy',
        'unused',
        'unusual',
        'unwieldy',
        'unwritten',
        'upbeat',
        'uppity',
        'upset',
        'uptight',
        'used',
        'useful',
        'useless',
        'utopian',
        'vacuous',
        'vagabond',
        'vague',
        'valuable',
        'various',
        'vast',
        'vengeful',
        'venomous',
        'verdant',
        'versed',
        'victorious',
        'vigorous',
        'violent',
        'violet',
        'vivacious',
        'voiceless',
        'volatile',
        'voracious',
        'vulgar',
        'wacky',
        'waggish',
        'waiting',
        'wakeful',
        'wandering',
        'wanting',
        'warlike',
        'warm',
        'wary',
        'wasteful',
        'watery',
        'weak',
        'wealthy',
        'weary',
        'well-groomed',
        'well-made',
        'well-off',
        'well-to-do',
        'wet',
        'whimsical',
        'whispering',
        'white',
        'whole',
        'wholesale',
        'wicked',
        'wide',
        'wide-eyed',
        'wiggly',
        'wild',
        'willing',
        'windy',
        'wiry',
        'wise',
        'wistful',
        'witty',
        'woebegone',
        'womanly',
        'wonderful',
        'wooden',
        'woozy',
        'workable',
        'worried',
        'worthless',
        'wrathful',
        'wretched',
        'wrong',
        'wry',
        'yellow',
        'yielding',
        'young',
        'youthful',
        'yummy',
        'zany',
        'zealous',
        'zesty',
        'zippy',
        'zonked',
    ]
    const animals = [
        'Shrimp',
        'Anteater',
        'Opossum',
        'Siren',
        'Siren',
        'Kitten',
        'Panther',
        'Toad',
        'Moose',
        'Horse',
        'Apallousa',
        'Terrier',
        'Racoons',
        'Coyote',
        'Tadpoles',
        'Antelope',
        'Mastiff',
        'Cobra',
        'Kangaroo',
        'Peacock',
        'Cow',
        'Seagull',
        'Snake',
        'Mole',
        'Chipmunk',
        'Coati',
        'Salmon',
        'Mouse',
        'Kiwi',
        'Jaguar',
        'Blowfish',
        'Staghound',
        'Eels',
        'Camel',
        'Lizard',
        'Rabbit',
        'Salmon',
        'Sheep',
        'Springbok',
        'Monkey',
        'Falcon',
        'Crab',
        'Reindeer',
        'Snake',
        'C. elegans',
        'Hummingbird',
        'Opossum',
        'Grasshopper',
        'Raven',
        'Duck',
        'Flamingo',
        'Bird',
        'Wallaby',
        'Cats',
        'Deer',
        'Armadillo',
        'Octopus',
        'Chimpanzee',
        'Chamois',
        'Cuttlefish',
        'Dragon',
        'Mouse',
        'Gnu',
        'Lion',
        'Koala',
        'Squirrel',
        'Polarbear',
        'Zebu',
        'Mollusk',
        'Percheron',
        'Osprey',
        'Lion',
        'Firefish',
        'Ermines',
        'Tiger',
        'Fowl',
        'Bison',
        'Poodles',
        'Octopus',
        'Pigeon',
        'Otter',
        'Serval',
        'Tiger',
        'Fennec',
        'European bear',
        'Monkey',
        'Rhino',
        'Wolf',
        'Springbok',
        'Baboon',
        'Owl',
        'Goldfish',
        'Bloohounds',
        'Gnu',
        'Tigress',
        'Zebra',
        'Gecko',
        'Llama',
        'Alpaca',
        'Wood rat',
        'Tortoise',
        'Turtle',
        'Owl',
        'Kitten',
        'Alaskan malamute',
        'Seal',
        'Snake-necked turtle',
        'Galago lemur',
        'Chick & egg',
        'Marabou stork',
        'Victoria crowned pigeons',
        'Rockhopper penguin',
        'Striped hyena',
        'Foxhound',
        'Foxhound',
        'German shepard',
        'German shepard',
        'Welsh terriers',
        'Belgian shepherd',
        'Kingfisher',
        'African bushback',
        'Donkey',
        'Woodpecker',
        'Bush baby',
        'Porcupines',
        'Potto',
        'Barbirusa',
        'Orangutan',
        'Seahorse',
        'Wolf',
        'Pyrops candelaria (lantern flies)',
        'Bullfrog',
        'Emu',
        'Owls',
        'Egyptian goose',
        'Green anole',
        'Kingfisher',
        'European tree frogs',
        'Steer',
        'Basilisk',
        'Land crab',
        'Cormorant',
        'Corsac',
        'Palm civet',
        'Yellowjacket',
        'Centipede',
        'Ladybug',
        'Tsetse fly',
        'Rosalie beetle',
        'Dragon fly & damsel fly',
        'Cicadas',
        'Silkworm moths',
        'Honey bee',
        'Red wood ants (female & male)',
        'Centipede',
        'Moth',
        'Stag beetle',
        'Ants',
        'Ants',
        'Female garden spiders',
        'Dung beetle',
        'Splendar beetle',
        'Hornets',
        'Scarab beetle',
        'Moving leaf insect',
        'Moving leaf insect',
        'Scorpion',
        'Bumble bee',
        'Herring gull',
        'Buntings',
        'Pigeon',
        'Flying squirrel',
        'Aoudad',
        'Blesbok',
        'West african green monkeys',
        'Camel',
        'Bighorn sheep',
        'Greater honeyguide',
        'Thread-winged lacewing ',
        'Sea otter',
        'Proboscis monkey',
        'Monkey',
        'Llama & camel',
        'Badger',
        'Emu (jeuvenile)',
        'Galapagos land iguana',
        'Cuckoo',
        'Cat & mouse',
        'Dove',
        'Kangaroo',
        'Mammoth',
        'Cow',
        'Chipmunk',
        'Thoroughbred horse',
        'Secretary bird',
        'Snipefish',
        'Crested pigeon',
        'Hermit crab',
        'Boatbill heron',
        'Sable antelope',
        'Stingray',
        'African crowned crane',
        'Arctic tern',
        'Ticks',
        'Spotted eagle',
        'Bellbird',
        'Percheron',
        'Smoothhound shark',
        'Darter',
        'Camel',
        'Cuckoo',
        'Rock python',
        'Great plover',
        'Cheetah',
        'Catfish',
        'Flying fish',
        'Flying dragon',
        'Sea sponge',
        'Jelly fish',
        'Pig deer',
        'Swan',
        'Toucan',
        'Silk worm',
        'Elephant shrew',
        'Spring Haas',
        'Rock python',
        'Caiman',
        'Harvest mice',
        'Tawny owl',
        'Dolium shell',
        'Greyhound',
        'Owls',
        'Blood pheasant',
        'Asiatic wild ram',
        'Tegu',
        'German shepherd',
        'Crows',
        'Hornbill',
        'Africa openbill',
        'Boa constricter',
        'Spotted salamander',
        'Chameleon',
        'Salamander',
        'Squid',
        'Snail',
        'Eastern chipmunks',
        'Sooty phalanger (brush-tailed possums) ',
        'Arcus pheasant',
        'Swordfish',
        'Caribou',
        'Monkey',
        'Land crab',
        'Great black cockatoo',
        'Toad & insect',
        'Snow leopard',
        'Tree Swift',
        'Wall creepers',
        'Kitten',
        'Gavial',
        'Tarsier',
        'Flies',
        'Turtle',
        'Oyster catcher',
        'North African ground hornbill',
        'Pika & hyrax',
        'Catfish',
        'Pinscher dog',
        'Tarsier',
        'Puffins',
        'Rock thrush',
        'Platypus',
        'Koala',
        'Sword billed humming bird',
        'Lioness',
        'Whaleshark',
        'Lobster',
        'Emu',
        'Wallaby & joey',
        'Starfish',
        'Wallaby & joey',
        'Entellus or hanuman monkey',
        'Man-o\'-war',
        'Crested eagle',
        'Stickleback fish',
        'European common toad',
        'Fat frog',
        'Horse shoe crab',
        'Caracara bird',
        'Surinam toad',
        'Climbing frog',
        'Parakeet',
        'White-tailed eagle',
        'Bluejay',
        'Beisa oryx',
        'Peacock',
        'Peafowl',
        'Tarpan',
        'Reeves\'s pheasant',
        'Bee eaters',
        'Pennant-winged night jar',
        'Jabiru',
        'Red mullet fish'
    ].filter(term => term.indexOf(' ') === -1)

    function randomAnimal() {
        const index = Math.floor((Math.random() * animals.length))
        return animals[index]
    }

    function randomAdjective(animal) {
        let validAttributes = adjective.filter(term => term.startsWith(animal[0].toLowerCase()))
        const index = Math.floor((Math.random() * validAttributes.length))

        return capitalizeFirstLetter(validAttributes[index])
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    this.next = function () {
        const animal = randomAnimal()
        return randomAdjective(animal) + ' ' + animal
    }

    this.getBoringName = function () {
        return dogNames.allRandom()
    }
}

module.exports = NameGenerator