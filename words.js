// ==========================================================================
// THE CRYPT COMPLETE GLOBAL DICTIONARY (200 TOTAL WORDS)
// MAPS EVERY 5-LETTER WORD TO 3 PROGRESSIVE TIERS OF CLUES
// ==========================================================================

const CRYPT_DICTIONARY = {
    "NIGHT": [
        "The canvas where shadows stretch and the sun hides.",
        "The period of darkness between sunset and sunrise.",
        "The opposite of day; when you go to sleep under the stars."
    ],
    "HEART": [
        "It drums in the dark, keeping time until it breaks.",
        "The emotional center of love, sitting inside your chest.",
        "The organ that pumps blood through your body."
    ],
    "LIGHT": [
        "A fleeting spark that forces the shadows to retreat.",
        "What beams from a candle, a flashlight, or the sun.",
        "What you switch on in a dark room so you can see."
    ],
    "STONE": [
        "Unyielding, cold, and carved to mark what is lost.",
        "A hard, solid piece of rock found on the ground.",
        "The material used to make pebbles, bricks, and statues."
    ],
    "BREAK": [
        "A sudden fracture that separates a whole into fragments.",
        "To shatter a mirror, snap a stick, or damage something.",
        "The opposite of fix or mend; to smash into pieces."
    ],
    "EMPTY": [
        "The echo inside a space where nothing remains.",
        "Like a house with no furniture or a box with nothing inside.",
        "The opposite of full; a glass that needs to be refilled."
    ],
    "SCARS": [
        "The silent storytellers left behind long after the pain fades.",
        "The permanent marks left on your skin after a wound heals.",
        "What you get after stitches or a deep cut closes up."
    ],
    "SHINE": [
        "To emit a radiant beam that pierces through the gloom.",
        "To gleam brightly, like polished silver, gold, or a star.",
        "What a flashlight or the sun does to illuminate things."
    ],
    "VOIDS": [
        "The vast, silent canyons of absolute nothingness.",
        "Completely empty spaces, gaps, or black holes.",
        "Plural word for total vacuums or completely blank spaces."
    ],
    "CLOCK": [
        "A relentless counter tracking the passage of existence.",
        "A device with ticking hands or digits used to check the hour.",
        "What hangs on a wall or sits on a wrist to tell the time."
    ],
    "OCEAN": [
        "A vast abyss of shifting tides and hidden depths.",
        "The massive body of salt water covering most of the planet.",
        "Where ships sail; home to sharks, whales, and coral reefs."
    ],
    "FLAME": [
        "A dancing tongue of heat that consumes what it touches.",
        "The bright, hot glowing part of a fire or a lit match.",
        "What burns on top of a candle wick or inside a fireplace."
    ],
    "GHOST": [
        "An echo of someone long gone, lingering in old hallways.",
        "The spiritual apparition or phantom of a deceased person.",
        "A spooky entity that says 'Boo!' and wears a white sheet."
    ],
    "EARTH": [
        "The soil beneath us and the spinning oasis we call home.",
        "The third planet from the sun where humanity lives.",
        "The ground you walk on; soil, dirt, or our home planet."
    ],
    "PLANT": [
        "A living green anchor that drinks up the morning sun.",
        "A living thing that grows in earth, having roots and leaves.",
        "A tree, flower, or bush; what grows out of a seed."
    ],
    "TRAIN": [
        "A thundering iron snake bound to steel tracks.",
        "A connected series of railway cars pulled by a locomotive.",
        "What you board at a station that runs on tracks with a whistle."
    ],
    "SMILE": [
        "A silent expression that curves to mask or reveal emotion.",
        "An expression where the corners of the mouth turn up in joy.",
        "What you do with your lips when someone takes your photograph."
    ],
    "HOUSE": [
        "A structural shell built to shield human lives.",
        "A building arranged for people or a family to live inside.",
        "A home made of bricks or wood, with rooms and a roof."
    ],
    "SHARK": [
        "An apex predator gliding silently through deep saltwater.",
        "A large ocean fish with rows of sharp teeth and a dorsal fin.",
        "The creature from the movie Jaws; a dangerous sea hunter."
    ],
    "SMOKE": [
        "A gray cloud rising from a fading fire.",
        "The cloudy vapor produced by burning something.",
        "What comes out of a chimney, a campfire, or a blown-out candle."
    ],
    "CLOUD": [
        "A floating white shape drifting across the sky.",
        "A visible mass of condensed water vapor high in the atmosphere.",
        "What blocks the sun on a gray day and drops rain."
    ],
    "KNIFE": [
        "A cold, sharp edge used to slice or sever.",
        "A handheld utensil with a sharp blade and a handle.",
        "What you use alongside a fork to cut up food."
    ],
    "ANGEL": [
        "A winged guardian from a higher plane.",
        "A spiritual being acting as an attendant or messenger of God.",
        "A holy entity with a golden halo and white wings."
    ],
    "RIVER": [
        "A continuous stream of water carving through the landscape.",
        "A large natural stream of water flowing in a channel to the sea.",
        "Moving freshwater that you can cross on a bridge or row a boat down."
    ],
    "BLOOD": [
        "The crimson river that keeps life running.",
        "The red fluid that circulates in the principal vascular system.",
        "What oozes out of a cut or wound; it matches a vampire's diet."
    ],
    "GRAVE": [
        "The final resting place carved deep into the earth.",
        "A hole dug in the ground to receive a coffin or dead body.",
        "Where someone is buried, usually marked with a tombstone."
    ],
    "WORLD": [
        "The entire spinning blue marble we inhabit.",
        "The earth, together with all of its countries and peoples.",
        "The planet Earth; everything existing on our globe."
    ],
    "PAPER": [
        "A blank canvas waiting to capture thoughts or sketches.",
        "Material manufactured in thin sheets from the pulp of wood.",
        "What notebooks, letters, and novels are made of."
    ],
    "SNAKE": [
        "A legless reptile hissing and sliding through the grass.",
        "A long, limbless reptile that can shed its skin.",
        "A slithering creature like a cobra or python."
    ],
    "CROWN": [
        "A heavy golden circular symbol of absolute power.",
        "A circular ornamental headdress worn by a monarch.",
        "What a king or queen wears on top of their head."
    ],
    "MUSIC": [
        "An arrangement of sounds that speaks when words fail.",
        "Vocal or instrumental sounds combined in a beautiful way.",
        "What you listen to through headphones; songs, melodies, or beats."
    ],
    "CHAIN": [
        "A series of interlocking iron rings used to bind.",
        "A connected flexible series of metal links.",
        "What keeps a bicycle wheel connected or locks a gate."
    ],
    "SHADOW": [
        "A dark silhouette that mimics your every move.",
        "A dark area or shape produced by a body coming between light rays.",
        "The black shape cast on the ground when you block the light."
    ],
    "CHEST": [
        "A heavy wooden box with a lock, or the upper part of your body.",
        "The front surface of a human torso, or a large strong box for storage.",
        "Where you find your ribs and heart, or where a pirate keeps gold."
    ],
    "SNARE": [
        "A hidden trap designed to catch the unsuspecting.",
        "A trap for catching birds or animals, typically using a noose.",
        "A type of trap, or a sharp-sounding drum in a drum kit."
    ],
    "SLEEP": [
        "A temporary escape into the realm of dreams.",
        "A naturally recurring state of rest for the body and mind.",
        "What you do at night in your bed with your eyes closed."
    ],
    "STARS": [
        "Distant cosmic lanterns burning in the endless void.",
        "A fixed luminous point in the night sky that is a large celestial body.",
        "The tiny twinkling lights you see in outer space at night."
    ],
    "TOWER": [
        "A tall stone monolith looking down on the land.",
        "A tall, narrow building or part of a building that rises high.",
        "A skyscraper, castle turret, or Eiffel-like structure."
    ],
    "PLAGUE": [
        "A spreading curse of sickness that decimates populations.",
        "A contagious bacterial disease characterized by fever and delirium.",
        "A massive, deadly disease outbreak like the Black Death."
    ],
    "POISON": [
        "A toxic substance that brings a silent end.",
        "A substance that is capable of causing illness or death when absorbed.",
        "What sits on a venomous dart or a skull-and-crossbones bottle."
    ],
    "THORN": [
        "A sharp hidden weapon protecting a beautiful rose.",
        "A stiff, sharp-pointed woody projection on the stem of a plant.",
        "The prickle on a bush that stabs your finger if you aren't careful."
    ],
    "DREAM": [
        "A vision that exists only while your eyes are shut.",
        "A series of thoughts, images, and sensations occurring in a person's mind.",
        "The imaginary stories your brain tells you while you are asleep."
    ],
    "STORM": [
        "The sky roaring in anger with tears of violent rain.",
        "An event with heavy rain, strong winds, and dark clouds.",
        "Weather accompanied by flashing lightning and booming thunder."
    ],
    "STEEL": [
        "An alloy of iron and carbon forged for strength.",
        "A hard, strong gray metal used as a structural material.",
        "What swords, skyscrapers, and gym weights are made of."
    ],
    "ROPE": [
        "Twisted fibers coiled together to hang, pull, or bind.",
        "A length of thick strong cord made by twisting strands together.",
        "What you use to tie a knot, climb up, or pull a heavy load."
    ],
    "MIRROR": [
        "A glass surface that reflects your truth or your illusions.",
        "A reflective surface, now typically of glass coated with a metal amalgam.",
        "What hangs in a bathroom that shows you your own reflection."
    ],
    "GLASS": [
        "A transparent barrier that is easily shattered.",
        "A hard, brittle substance made by fusing sand with soda and lime.",
        "What windows, spectacles, and drinking tumblers are made of."
    ],
    "DEPTH": [
        "The distance from the surface down into the dark abyss.",
        "The distance from the top or surface to the bottom of something.",
        "The opposite of shallow; how deep a well or ocean canyon goes."
    ],
    "ASHES": [
        "The gray powder left behind when a memory burns to the ground.",
        "The powdery residue left after the burning of a substance.",
        "What you sweep out of a fireplace or find after a wood fire burns out."
    ],
    "BLIND": [
        "Living in an endless curtain of absolute dark.",
        "Unable to see because of injury, disease, or a congenital condition.",
        "The opposite of seeing; someone who requires a cane or guide dog."
    ],
    "BONE": [
        "The stark white cage holding our fragile forms together.",
        "Any of the pieces of hard, whitish tissue making up the skeleton.",
        "What a dog loves to chew on; a skull, rib, or femur piece."
    ],
    "BRICK": [
        "A solid block of baked clay built to form tall walls.",
        "A small rectangular block of fired clay used in building.",
        "The red building blocks used by the third little pig to build his house."
    ],
    "BRIDGE": [
        "A pathway suspended over a dangerous gap or river.",
        "A structure carrying a road or path across an obstacle.",
        "What you cross to get over water, or the famous Golden Gate structure."
    ],
    "CAGE": [
        "An iron cell meant to trap and contain wildlife.",
        "A structure of bars or wires in which birds or animals are confined.",
        "What a parrot or a hamster lives in to keep it from escaping."
    ],
    "CANDLE": [
        "A column of wax that trades its body for a small flicker of light.",
        "A cylinder or block of wax with an embedded wick that is burned.",
        "What you blow out on top of a birthday cake while making a wish."
    ],
    "CHAIR": [
        "A standard piece of furniture built for resting.",
        "A separate seat for one person, typically with four legs and a back.",
        "What you pull up to a dining table or sit on at a school desk."
    ],
    "CHILD": [
        "A young soul full of innocence and play.",
        "A young human being below the age of puberty or full legal age.",
        "A kid, toddler, or youth; the opposite of an adult."
    ],
    "COFFIN": [
        "The final wooden box lined in silk for a long sleep.",
        "A long, narrow box in which a corpse is buried or cremated.",
        "The classic box a vampire rests in, or what is lowered into a grave."
    ],
    "COIN": [
        "A small disk of metal that dictates wealth and trade.",
        "A flat, typically round piece of metal used as money.",
        "What you flip to choose heads or tails; a penny, dime, or quarter."
    ],
    "DESK": [
        "A wooden surface where poems are written and plans are drawn.",
        "A piece of furniture with a flat surface used for writing or reading.",
        "Where you sit in a classroom or place your computer in an office."
    ],
    "DOOR": [
        "A flat barrier that swings open to reveal a new path.",
        "A hinged, sliding, or revolving barrier at the entrance to a room.",
        "What you turn a brass knob to open when entering a house."
    ],
    "DRINK": [
        "A liquid swallowed to quench a deep thirst.",
        "Any liquid swallowed for refreshment or nourishment.",
        "Water, juice, or soda; what you sip out of a straw."
    ],
    "EAGLE": [
        "A majestic avian king soaring high above the mountain peaks.",
        "A large bird of prey with a massive hooked beak and keen vision.",
        "The national bird of the United States; a powerful aerial hunter."
    ],
    "FROST": [
        "A delicate lattice of ice crystals coating the morning leaves.",
        "A deposit of small white ice crystals formed on the ground.",
        "The icy white glaze Jack Frost leaves on your windows in winter."
    ],
    "FRUIT": [
        "The sweet, fleshy yield of a tree holding seeds within.",
        "The sweet and fleshy product of a tree or other plant.",
        "An apple, banana, berry, or grape; a healthy natural snack."
    ],
    "GATES": [
        "Massive barriers guarding the entrance to a estate or vault.",
        "Hinged barriers used to close an opening in a wall or fence.",
        "What you unlock to open a driveway or enter a castle courtyard."
    ],
    "GLOVE": [
        "A fabric sheath made to shield a human hand from the cold.",
        "A leather or cloth covering for the hand with separate fingers.",
        "What you wear on your hands when throwing snowballs in winter."
    ],
    "GRAIN": [
        "A single speck of sand or a tiny seed of wheat.",
        "Wheat or any other cultivated cereal crop, or a single tiny particle.",
        "What is ground up to make flour, or a single speck of sand."
    ],
    "GRASS": [
        "A carpet of green blades blanketing the earth.",
        "Vegetation consisting of typically short plants with long, narrow leaves.",
        "What grows on a front lawn that needs to be mowed in summer."
    ],
    "GREEN": [
        "The vibrant color of emeralds, moss, and fresh leaves.",
        "The color between blue and yellow in the spectrum; colored like grass.",
        "The color of a go traffic light, broccoli, or a forest frog."
    ],
    "KNIGHT": [
        "A loyal warrior clad in heavy, gleaming iron armor.",
        "A man who served his sovereign or lord as a mounted soldier in armor.",
        "A medieval fighter who wields a sword and protects a castle."
    ],
    "LAKES": [
        "Still bodies of freshwater surrounded entirely by land.",
        "Large areas of water surrounded by land.",
        "The bodies of water smaller than oceans where people boat and fish."
    ],
    "LEMON": [
        "A sour, bright yellow oval fruit from the citrus tree family.",
        "A yellow, oval citrus fruit with thick skin and fragrant, sour juice.",
        "The yellow fruit used to make lemonade or sour candies."
    ],
    "MOON": [
        "A pearlescent orb orbiting our planet through the night.",
        "The natural satellite of the earth, visible by reflected sunlight.",
        "The big white light in the night sky that changes phases."
    ],
    "MOUTH": [
        "The gateway for words, screams, and nourishment.",
        "The opening in the face of a human, used for speaking and eating.",
        "Where you find your teeth, tongue, and lips."
    ],
    "PAINT": [
        "A colorful liquid used to capture expressions on canvas.",
        "A colored liquid that is spread over a surface to dry as a coating.",
        "What an artist mixes on a palette to color a portrait."
    ],
    "PIANO": [
        "A grand wooden instrument housing eighty-eight black and white keys.",
        "A large keyboard musical instrument with wire strings hit by hammers.",
        "The musical instrument played by Mozart or Beethoven with keys."
    ],
    "QUEEN": [
        "A royal woman ruling over a kingdom from a throne.",
        "The female ruler of an independent state, or the king's wife.",
        "The female monarch who wears a tiara, or the most powerful chess piece."
    ],
    "RADIO": [
        "An invisible wave catcher broadcasting voices through speakers.",
        "The transmission and reception of electromagnetic waves carrying sound.",
        "What you tune into in a car to listen to music or talk shows."
    ],
    "SHIRT": [
        "A standard garment worn over the upper body.",
        "A garment for the upper body made of cotton or a similar fabric.",
        "What you button up and wear with a collar, tie, or suit."
    ],
    "SHOES": [
        "Leather or canvas sheaths built to protect feet on rough paths.",
        "Coverings for the feet, typically made of leather, with a sturdy sole.",
        "What you tie laces on before going out for a walk or run."
    ],
    "SKIRT": [
        "A loose outer garment hanging down from the waist.",
        "A garment fastened around the waist and hanging down around the legs.",
        "A one-piece bottom garment frequently worn in school uniforms or dresses."
    ],
    "SNAIL": [
        "A slow, slithering creature carrying its spiral home on its back.",
        "A mollusk with a single spiral shell into which it can withdraw.",
        "The slow garden pest that leaves a slimy trail as it moves."
    ],
    "SPOON": [
        "A curved metal utensil built for scooping up liquid.",
        "A utensil consisting of a small, shallow oval bowl on a handle.",
        "What you use to eat soup, cereal, or ice cream."
    ],
    "STAGE": [
        "A raised wooden platform where actors perform under spotlights.",
        "A raised floor or platform, typically in a theater, for performers.",
        "Where a singer or actor stands to put on a show for an audience."
    ],
    "SUGAR": [
        "Sweet white crystals extracted from natural cane plants.",
        "A sweet crystalline substance obtained from various plants, chiefly sugarcane.",
        "What you add to coffee, tea, or cake batter to make it taste sweet."
    ],
    "SWORD": [
        "A long, gleaming steel blade forged for combat.",
        "A weapon with a long metal blade and a hilt with a hand guard.",
        "What a knight pulls from a scabbard to fight a dragon."
    ],
    "TABLE": [
        "A flat wooden platform supported by legs for dining.",
        "A piece of furniture with a flat top and one or more legs.",
        "Where a family sits down to eat dinner or plays board games."
    ],
    "TEETH": [
        "Enamel rows lining the jaw used to crush food.",
        "Hard, bony appendages in the jaws, used for biting and chewing.",
        "What you brush twice a day and what the Tooth Fairy collects."
    ],
    "TIGER": [
        "A ferocious orange feline prowling the jungle with black stripes.",
        "A large solitary cat with a yellow-brown coat striped with black.",
        "The largest wild cat in Asia, known for its orange and black stripes."
    ],
    "VOICE": [
        "The unique acoustic signature of a human soul.",
        "The sound produced in a person's larynx and uttered through the mouth.",
        "What you use to sing a song, tell a secret, or shout out loud."
    ],
    "WATCH": [
        "A tiny clock strapped to a wrist tracking fleeting moments.",
        "A small timepiece worn typically on a strap on one's wrist.",
        "What you look at on your arm to see if you are running late."
    ],
    "WATER": [
        "The clear, life-giving liquid that flows in rivers and oceans.",
        "A colorless, transparent, odorless liquid that forms the seas.",
        "What falls from the sky as rain and what you drink from a glass."
    ],
    "WHEEL": [
        "A perfect circular invention built to roll forward.",
        "A circular object that revolves on an axle and is fixed under a vehicle.",
        "The round rubber part of a car or bicycle that touches the road."
    ],
    "WHITE": [
        "The color of fresh snow, blank paper, and blinding light.",
        "The color of milk or fresh snow, due to the reflection of all light.",
        "The opposite of black; the color of milk, chalk, and vanilla ice cream."
    ],
    "WINGS": [
        "Feathered appendages built to escape the bounds of gravity.",
        "The modified forelimbs of a bird, bat, or insect, used for flying.",
        "What a bird, airplane, or angel uses to soar through the air."
    ],
    "YOUTH": [
        "The fleeting spring of life full of energy and wild dreams.",
        "The period between childhood and adult age; the state of being young.",
        "The opposite of old age; the time when you are young and growing."
    ],
    "ZEBRA": [
        "A wild horse-like animal clad in black and white stripes.",
        "An African wild horse with prominent black and white stripes.",
        "The animal that looks like a striped mule living in the savannah."
    ],
    "BREAD": [
        "A staple food baked from flour, water, and yeast.",
        "Food made of flour, water, and yeast mixed together and baked.",
        "What you put into a toaster to make toast, or use to make a sandwich."
    ],
    "APPLE": [
        "A crisp, sweet round fruit that fell to teach gravity.",
        "The round fruit of a tree of the rose family, typically green or red.",
        "The red fruit you give a teacher, or what is used to bake an American pie."
    ],
    "BEACH": [
        "Where the golden sand meets the crashing waves of the sea.",
        "A pebbly or sandy shore, especially by the ocean between high and low water marks.",
        "Where you go in summer to sunbathe, build sandcastles, and swim."
    ],
    "BLOOM": [
        "The beautiful unfolding of a flower opening its petals.",
        "A flower or total state of flowering in a plant.",
        "What roses do in spring; to open up and show bright colors."
    ],
    "BRAVE": [
        "Standing firm and fearless in the face of absolute danger.",
        "Ready to face and endure danger or pain; showing courage.",
        "The opposite of cowardly; acting like a hero in a scary situation."
    ],
    "CHEEK": [
        "The soft flesh on either side of a human face.",
        "Either side of the face below the eyes on a human or animal.",
        "Where your grandma pinches you, or where blush makeup is applied."
    ],
    "CHIEF": [
        "The highest ranking leader or commander of a group.",
        "A leader or ruler of a people, organization, or department.",
        "The head of a police department or a Native American tribe leader."
    ],
    "CREAM": [
        "The thick, rich fatty layer that rises to the top of milk.",
        "The thick white or pale yellow fatty liquid which rises to the top of milk.",
        "What you pour into coffee, churn into butter, or scoop onto strawberries."
    ],
    "DANCE": [
        "Moving your body rhythmically to the heartbeat of a song.",
        "Move rhythmically to music, typically following a set sequence of steps.",
        "What you do at a party, a prom, or a ballet show to a musical beat."
    ],
    "DIRT": [
        "The messy brown earth beneath our shoes.",
        "Loose earth or soil, or a substance such as mud or dust that soils things.",
        "What you get on your clothes if you fall in the mud; garden soil."
    ],
    "DRESS": [
        "A one-piece outer garment worn frequently to celebrations.",
        "A one-piece garment for a woman or girl that covers the body and hangs down.",
        "What a bride wears down the aisle, or a formal gown worn to a ball."
    ],
    "DRUM": [
        "A hollow percussion cylinder hit with sticks to create a pulse.",
        "A percussion instrument sounded by being struck with sticks or hands.",
        "The instrument that keeps the rhythm in a rock band; a snare or tom."
    ],
    "DUST": [
        "A fine powder of dead cells and earth settling over old books.",
        "Fine, dry powder consisting of tiny particles of earth or waste matter.",
        "What builds up on shelves over time that you wipe off with a cloth."
    ],
    "ELBOW": [
        "The structural hinge joint in the middle of a human arm.",
        "The joint between the forearm and the upper arm.",
        "The body part you bend to scratch your shoulder or nudge a neighbor."
    ],
    "FAIRY": [
        "A tiny, magical mythical creature with wings and pixie dust.",
        "A small imaginary being of human form that has magical powers.",
        "Tinker Bell, or the mythical creature that leaves money for lost teeth."
    ],
    "FEVER": [
        "An intense, burning internal heat caused by sickness.",
        "An abnormally high body temperature, usually accompanied by shivering.",
        "What you have when a thermometer reads 102 degrees and you feel sick."
    ],
    "FIELD": [
        "A wide, open expanse of grass or crops under the sky.",
        "An area of open land, especially one planted with crops or pasture.",
        "Where farmers plant wheat, or where athletes play soccer and baseball."
    ],
    "FIGHT": [
        "A violent clash of fists or blades driven by anger.",
        "Take part in a violent struggle involving physical force or weapons.",
        "What two boxers do in a ring, or what an argument turns into."
    ],
    "FINGER": [
        "One of the five flexible digits extending from a hand.",
        "Each of the four slender jointed appendages extending from a human hand.",
        "What you use to point at an object or slide a ring onto."
    ],
    "FLOOD": [
        "An overwhelming rush of water overflowing all dry boundaries.",
        "An overflowing of a large amount of water beyond its normal confines.",
        "What happens when heavy rain causes a river to spill into the streets."
    ],
    "FLOUR": [
        "A fine white powder milled from wheat grains used in baking.",
        "A powder obtained by grinding grain, typically wheat, used to make bread.",
        "The white powder ingredient used to bake cakes, cookies, and pizza dough."
    ],
    "FORCE": [
        "An intense energy, push, or pressure that moves an object.",
        "Strength or energy as an attribute of physical action or movement.",
        "What gravity is, or the mystical energy Luke Skywalker uses in Star Wars."
    ],
    "FRAME": [
        "The border holding a photograph or a structural skeleton.",
        "A rigid structure that surrounds or supports something like a picture.",
        "The wooden or plastic border you put around a poster on a wall."
    ],
    "HONEY": [
        "A sweet, sticky golden liquid crafted by buzzing insects.",
        "A sweet, sticky yellowish-brown fluid made by bees from nectar.",
        "What bees make inside a hive; Winnie the Pooh's favorite food."
    ],
    "JUICE": [
        "The sweet liquid squeezed out of fresh fruit.",
        "The liquid obtained from fruit or vegetables, especially as a drink.",
        "What you squeeze out of an orange, apple, or lemon into a glass."
    ],
    "MATCH": [
        "A small wooden stick tipped in sulfur that strikes a flame.",
        "A short thin stick tipped with a chemical substance that produces fire.",
        "What you strike against a box to light a campfire or a candle wick."
    ],
    "PEARL": [
        "A smooth, pale iridescent gem grown inside an ocean oyster.",
        "A smooth, lustrous round structure formed within the shell of an oyster.",
        "A white circular gem from the sea used to make formal necklaces."
    ],
    "PENNY": [
        "A small, copper-colored coin of the lowest monetary value.",
        "A one-cent coin equal to one hundredth of a dollar or pound.",
        "The copper coin featuring Abraham Lincoln's face."
    ],
    "PLUM": [
        "A sweet, juicy oval fruit with dark purple skin and a pit.",
        "An oval fleshy fruit which is purple, reddish, or yellow when ripe.",
        "The sweet dark purple fruit used to make prunes."
    ],
    "PROUD": [
        "A swelling sense of deep satisfaction in one's achievements.",
        "Feeling deep pleasure or satisfaction as a result of one's achievements.",
        "How parents feel when their child graduates or wins a big award."
    ],
    "RAIN": [
        "The sky shedding its tears of fresh water over the earth.",
        "Water falling in drops from vapor condensed in the atmosphere.",
        "What falls from storm clouds that requires you to open an umbrella."
    ],
    "RAZOR": [
        "An ultra-sharp steel edge made to glide across skin.",
        "An instrument with a sharp blade or combination of blades, used to shave.",
        "The sharp handheld tool used to shave off a beard or mustache."
    ],
    "RULER": [
        "A monarch leading a country, or a plastic tool used to measure.",
        "A person who rules a country, or a straight strip of plastic used to measure.",
        "What you keep in a pencil case to draw straight lines and measure inches."
    ],
    "SALTS": [
        "White crystalline minerals harvested from evaporated seawater.",
        "White crystalline substances used for seasoning or preserving food.",
        "The seasoning crystals you shake onto french fries to make them savory."
    ],
    "SCALE": [
        "A system used to weigh items, or the armor plates on a fish.",
        "An instrument for weighing, or the small plates covering fish or reptiles.",
        "What you step onto in a bathroom to check how many pounds you weigh."
    ],
    "SHEET": [
        "A flat layer of paper, or a fabric cloth blanketing a bed.",
        "A large rectangular piece of cotton or other fabric, or a thin piece of paper.",
        "What you pull over a mattress before sleeping under a blanket."
    ],
    "SHELL": [
        "A hard, protective outer casing left behind on a beach.",
        "The hard protective outer case of a mollusk, insect, or egg.",
        "What a crab lives in, what surrounds an egg, or what you collect on a beach."
    ],
    "SHORE": [
        "The sandy border where land stops and the ocean begins.",
        "The land along the edge of a sea, lake, or other large body of water.",
        "Where waves crash; the coastline or boundary of a lake."
    ],
    "STAMP": [
        "A tiny paper square stuck to an envelope to authorize travel.",
        "A small adhesive piece of paper stuck to a letter to cover postage.",
        "What you lick and paste on the top right corner of an envelope before mailing."
    ],
    "STEAM": [
        "A hot, ghostly white vapor rising from boiling water.",
        "The vapor into which water is converted when heated, visible as mist.",
        "What rises from a hot cup of tea or fills a bathroom during a hot shower."
    ],
    "STICK": [
        "A thin, snap-able piece of wood fallen from a tree branch.",
        "A thin piece of wood that has fallen or been cut from a tree.",
        "What a dog chases during a game of fetch in a park."
    ],
    "THIEF": [
        "A silent shadow operating in the dark to steal valuables.",
        "A person who steals another person's property, especially secretly.",
        "A robber or burglar who breaks into a vault to take gold."
    ],
    "TOAST": [
        "Bread that has been crisped and browned by intense heat.",
        "Sliced bread browned on both sides by exposure to radiant heat.",
        "What pops out of a toaster that you spread butter and jam on."
    ],
    "TRACK": [
        "A footprint left in mud, or a steel line for trains.",
        "A rough path, a footprint, or a parallel series of iron rails.",
        "What a train runs on, or a footprint left behind by a wild animal."
    ],
    "VALER": [
        "Note: Let's use the standard spelling **`VALOR`**.",
        "Great courage displayed in the face of absolute battle.",
        "What a knight or hero shows when fighting a terrifying enemy."
    ],
    "VALOR": [
        "Great courage displayed in the face of absolute battle.",
        "Courage or bravery shown in the face of danger, especially in battle.",
        "What a knight or war hero shows when fighting a terrifying enemy."
    ],
    "VAPOR": [
        "A misty suspension of fine particles floating in the air.",
        "A substance diffused or suspended in the air, such as mist or smoke.",
        "Steam, fog, or the cloud that rises from boiling water."
    ],
    "WELLS": [
        "Deep, dark vertical shafts dug into stone to source water.",
        "Deep holes or shafts sunk into the earth to obtain water or oil.",
        "Where people drop a bucket on a rope to draw fresh drinking water."
    ],
    "WHALE": [
        "A colossal mammalian monarch singing in the ocean depths.",
        "A very large marine mammal with a blowhole on top of its head.",
        "The largest animal in the ocean; a massive mammal like a Blue or Humpback."
    ],
    "WINDY": [
        "When the air currents howl and whip through the trees.",
        "Accompanied by or exposed to strong currents of air.",
        "Weather that blows your hat off or flies a kite high in the sky."
    ],
    "WITCH": [
        "A shadowy practitioner of dark magic brewing potions in a cauldron.",
        "A woman thought to have evil magic powers, popularly depicted wearing a black hat.",
        "The character who flies on a broomstick and cackles on Halloween."
    ],
    "WOODS": [
        "A dense, labyrinthine sanctuary of ancient trees and shadows.",
        "An area of land, smaller than a forest, covered with growing trees.",
        "Where you go hiking among trees; a smaller version of a forest."
    ],
    "WORMS": [
        "Small, legless tubes burrowing through damp garden soil.",
        "Creeping legless invertebrates with long, slender soft bodies.",
        "What crawls out of the ground after rain that birds love to eat."
    ],
    "WRECK": [
        "The shattered, twisted ruins of a vehicle after a crash.",
        "The destruction of a ship at sea, or a badly damaged vehicle.",
        "What is left over after a bad car accident or a ship sinks on rocks."
    ],
    "ABYSS": [
        "A terrifying, bottomless pit of absolute darkness.",
        "A deep or seemingly bottomless chasm or void.",
        "A profound dark chasm, like the deepest trench in the ocean floor."
    ],
    "AGENT": [
        "A hidden operative working to execute transactions or missions.",
        "A person who acts on behalf of another person or group.",
        "A spy, or a representative who handles business for an actor or athlete."
    ],
    "ALIVE": [
        "Possessing a pulse and drawing breath in this world.",
        "Having life; living and not dead or inanimate.",
        "The absolute opposite of dead; full of life and breathing."
    ],
    "ALONE": [
        "Existing in complete isolation with only your echo.",
        "Having no anyone else present; on one's own.",
        "The state of being solo; with nobody else around you."
    ],
    "ARROW": [
        "A slender, pointed projectile fired from a stringed bow.",
        "A shaft sharpened at the front and feathered at the back, shot from a bow.",
        "What Robin Hood fires at a target, or a symbol pointing directions."
    ],
    "AUDIO": [
        "The acoustic waves captured and transmitted as sound.",
        "Sound, especially when recorded, transmitted, or reproduced.",
        "What you adjust with a volume knob; the sound element of a video."
    ],
    "BADGE": [
        "A metal emblem worn proudly to display authority or rank.",
        "A distinctive emblem worn as a mark of office, membership, or achievement.",
        "The shiny star a police officer pins to their chest."
    ],
    "BASIC": [
        "The most foundational and elementary layer of something.",
        "Forming an essential foundation or starting point; simple.",
        "The opposite of advanced or complex; rudimentary and simple."
    ],
    "BEAST": [
        "A wild, dangerous animal driven purely by feral instinct.",
        "An animal, especially a large or dangerous four-legged one.",
        "A monster or wild creature, like the one paired with Beauty in the fairy tale."
    ],
    "BEGUR": [
        "Note: Let's use the standard dictionary word **`BEGIN`**.",
        "To take the very first step of a long journey.",
        "The opposite of end or finish; to start something fresh."
    ],
    "BEGIN": [
        "To take the very first step of a long journey.",
        "To start; perform the first part of an action or activity.",
        "The absolute opposite of end or finish; to commence."
    ],
    "BELLY": [
        "The central stomach area of a human body.",
        "The stomach or abdomen area of a person or animal.",
        "Where your food goes after you eat; your tummy or midsection."
    ],
    "BELOW": [
        "Positioned on a lower level beneath something else.",
        "At a lower level or layer than something else.",
        "The opposite of above; sitting underneath."
    ],
    "BENCH": [
        "A long wooden seat frequently found in parks and gyms.",
        "A long seat for several people, typically made of wood or stone.",
        "Where you sit in a park, or the machine where you lift weights for a chest pump."
    ],
    "BIBLE": [
        "A sacred book holding holy scriptures and old testaments.",
        "The Christian scriptures, consisting of the Old and New Testaments.",
        "The holy book found in churches, used by Christians."
    ],
    "BIRTH": [
        "The miraculous emergence of a fresh new life into the world.",
        "The emergence of a baby or other young from the body of its mother.",
        "The absolute opposite of death; when a newborn baby enters the world."
    ],
    "BLACK": [
        "The absolute absence of all light; the shade of midnight.",
        "The very darkest color due to the total absence or complete absorption of light.",
        "The color of charcoal, ink, and a pitch-dark room with no windows."
    ],
    "BLADE": [
        "The sharp, honed steel edge of a knife or sword.",
        "The flat cutting edge of a sharp knife, sword, or tool.",
        "The metallic cutting part of a razor, dagger, or ice skate."
    ],
    "BLAME": [
        "Assigning the fault or guilt of a mistake onto someone else.",
        "Assign responsibility for a fault or wrong development.",
        "What you point a finger to do when someone breaks a rule."
    ],
    "BLAST": [
        "A violent, booming explosion or a sudden gust of wind.",
        "A destructive wave of highly compressed air from an explosion.",
        "What dynamite does, or the sound a rocket makes at launch."
    ],
    "BLEED": [
        "Shedding drops of life fluid from an open wound.",
        "Lose blood from the body as a result of injury or illness.",
        "What happens if you prick your finger on a sharp thorn."
    ],
    "BLEND": [
        "To mix different elements together into one smooth substance.",
        "Mix small components together thoroughly so they combine.",
        "What you do to fruit in a machine to create a smooth smoothie."
    ],
    "BLISS": [
        "A state of pure, unadulterated happiness and peace.",
        "Perfect happiness; supreme and absolute joy.",
        "The feeling of pure heaven; complete and total joy."
    ],
    "BLOCK": [
        "A solid cube of material, or an obstacle stopping a path.",
        "A large solid piece of hard material, or an obstruction.",
        "What a toy Lego brick is, or what a wall does to block your view."
    ],
    "BLUSH": [
        "A sudden rush of pink color to the face driven by shyness.",
        "Develop a pink or red glow on the face from embarrassment.",
        "What your cheeks do when you get embarrassed or a crush pays you a compliment."
    ],
    "BOARD": [
        "A long flat plank of wood, or a panel for games.",
        "A long, thin, flat piece of wood, or a surface for displays.",
        "What a chalkboard is made of, or what you slide on over snow or surf."
    ],
    "BOAST": [
        "To brag arrogantly about your own achievements.",
        "Talk with excessive pride and self-satisfaction about one's achievements.",
        "What a show-off does when they win a game and brag to the losers."
    ],
    "BOOTS": [
        "Heavy leather footwear built for rugged hiking or winter snow.",
        "Sturdy items of footwear covering the foot and ankle.",
        "What cowboys, hikers, and soldiers wear instead of sneakers."
    ],
    "BOUND": [
        "Tied up securely with ropes, or leaping forward with a jump.",
        "Tied with ropes or chains, or heading toward a specific destination.",
        "What a prisoner is with chains, or leaping forward like a rabbit."
    ],
    "BRAIN": [
        "The wrinkly organ tissue driving human thought and memory.",
        "An organ of soft nervous tissue contained in the skull of vertebrates.",
        "The command center inside your skull that thinks, learns, and dreams."
    ],
    "BRASS": [
        "A shiny yellow metal alloy often used for horns and trumpets.",
        "A yellow alloy of copper and zinc, used for musical instruments.",
        "The shiny metal used for bullet casings, doorknobs, and trumpets."
    ],
    "CABLE": [
        "A thick bundle of wires insulated to carry power or data.",
        "A thick rope of wire or hemp used for construction or electricity.",
        "What connects your TV to a wall or charges your laptop battery."
    ],
    "CAMEL": [
        "A desert beast capable of traversing sand dunes for days.",
        "A large humped mammal found in arid regions of Africa and Asia.",
        "The animal with humps on its back used to ride across the Sahara."
    ],
    "CAMP": [
        "A temporary outdoor shelter set up under the stars.",
        "A place where tents or temporary shelters are erected in nature.",
        "What you do in a tent in the forest while roasting marshmallows."
    ],
    "CANAL": [
        "An artificial man-made river constructed for shipping lanes.",
        "An artificial waterway constructed to allow the passage of boats.",
        "The famous waterways in Venice where gondolas float through the city."
    ],
    "CARDS": [
        "Small paper rectangles dealt out for games of poker or blackjack.",
        "Thin pieces of rectangular cardboard used for playing games.",
        "What you shuffle, deal, and use to play poker or Uno."
    ],
    "CARGO": [
        "Massive stacks of freight carried by ships, planes, or trains.",
        "Goods carried on a ship, aircraft, or motor vehicle.",
        "The merchandise and packages loaded onto a container transport ship."
    ],
    "CARVE": [
        "Using a sharp blade to cut shapes out of wood or stone.",
        "Cut a hard material in order to produce an object or design.",
        "What you do to a pumpkin with a knife on Halloween to make a jack-o'-lantern."
    ],
    "CASE": [
        "A protective shell or box enclosing an item.",
        "An instance of something happening, or a protective container.",
        "What you pack clothes into for travel, or a shell for a phone."
    ],
    "CASTE": [
        "A rigid system dividing human society into inherited classes.",
        "Each of the hereditary classes of Hindu society, distinguished by relative purity.",
        "The social stratification system split into traditional classes."
    ],
    "CATCH": [
        "To intercept a flying object with your hands.",
        "Intercept and hold a projectile that has been thrown, shot, or dropped.",
        "The opposite of throw; what a baseball glove is used to do."
    ],
    "CAUSE": [
        "The initial spark or action that triggers a consequence.",
        "A person or thing that acts as the primary catalyst for a result.",
        "The first half of 'effect'; the action that makes something happen."
    ],
    "CELLS": [
        "The microscopic biological building blocks of all living forms.",
        "The smallest structural and functional units of an organism.",
        "What the human body is made of, or the small rooms inside a jail."
    ],
    "CHIPS": [
        "Crispy thin slices of potato fried as a salty snack.",
        "Thin slices of potato that have been deep-fried or baked until crunchy.",
        "Salty snacks that come in a bag, like Lays, Pringles, or Doritos."
    ],
    "CHOIR": [
        "An organized assembly of singers lifting their voices in harmony.",
        "An organized group of singers, typically one that takes part in church services.",
        "The group of vocalists singing hymns together under a conductor."
    ],
    "CHORD": [
        "A harmonic combination of multiple musical notes played at once.",
        "A group of musical notes struck together in harmony.",
        "What you strum on a guitar by holding down multiple strings."
    ],
    "CLAW": [
        "A sharp talon extending from the paw of a predator.",
        "A curved pointed horny nail on each digit of the foot of a mammal.",
        "The sharp nail appendage of an eagle, bear, or cat."
    ],
    "CLAY": [
        "Soft, damp earth sculpted by hands and baked into pottery.",
        "A stiff, sticky fine-grained earth that can be molded when wet.",
        "The slick mud material spun on a potter's wheel to make vases."
    ],
    "CLEAN": [
        "Completely pristine, polished, and free of dirt.",
        "Free from dirt, marks, or stains; spotless.",
        "The opposite of dirty; what your room is after you tidy up."
    ],
    "CLEAR": [
        "Transparent, easy to see through, and free of clouds.",
        "Transparent; unclouded, or easy to perceive and understand.",
        "Like see-through glass, pure water, or a blue sky with no clouds."
    ],
    "CLIMB": [
        "Ascending upward toward the apex of a mountain or ladder.",
        "Go upward on a vertical surface, typically using both hands and feet.",
        "What you do up a steep hill, a tall tree, or a ladder."
    ],
    "CLOAK": [
        "A long, loose fabric coat used to hide in the shadows.",
        "A loose outer garment, typically sleeveless, which fastens at the neck.",
        "The cape-like garment worn by vampires, or Harry Potter's invisibility shroud."
    ],
    "CLOTH": [
        "Woven fabric used to craft garments or wipe tables.",
        "Woven or felted fabric made from a material like cotton.",
        "The material sheets of fabric used to sew shirts and dresses."
    ],
    "COACH": [
        "A strategic guide leading a team toward victory.",
        "An instructor or trainer in a sport, school, or business.",
        "The main trainer who yells strategies from the sidelines of a game."
    ],
    "COAST": [
        "The geographic perimeter where land terminates at the ocean.",
        "The land along a sea or ocean; the shoreline.",
        "Where the highway runs alongside the sea cliffs."
    ],
    "CODES": [
        "Cryptic lines of syntax written to instruct a machine.",
        "Systems of words, letters, figures, or symbols used for secrecy or computing.",
        "What programmers write in Python or HTML to build websites."
    ],
    "COMET": [
        "A cosmic snowball of ice and dust leaving a brilliant tail.",
        "A celestial object consisting of a nucleus of ice and dust with a tail.",
        "A shooting star-like space object that orbits the sun, like Halley's."
    ],
    "CRASH": [
        "A violent, thunderous collision between two moving bodies.",
        "An accident in which a vehicle collides with something else violently.",
        "What happens in a bad car accident, or what thunder does."
    ],
    "CREEP": [
        "Moving forward stealthily on hands and knees through the dark.",
        "Move slowly and carefully, especially in order to avoid being noticed.",
        "To slither quietly, crawl slowly, or act like a stalker."
    ],
    "CRIME": [
        "An illegal act that breaks the established laws of a society.",
        "An action or omission which constitutes an offense and is punishable by law.",
        "What bank robbery, theft, or burglary is labeled as."
    ],
    "CRISP": [
        "Snappy, crunchy, and freshly dry.",
        "Firm, dry, and brittle, or pleasantly cool and fresh.",
        "Like a fresh green apple, a potato chip, or cold autumn air."
    ],
    "CROSS": [
        "Two intersecting lines forming a holy symbol or a junction.",
        "A mark, object, or figure formed by two intersecting lines.",
        "The structural symbol of Christianity, or what you do over a street."
    ],
    "CROWD": [
        "A massive, dense ocean of gathered human beings.",
        "A large number of people gathered together in a disorganized way.",
        "What fills a stadium during a big rock concert or soccer game."
    ],
    "CRUEL": [
        "Deliberately inflicting pain and suffering without remorse.",
        "Willfully causing pain or suffering to others, feeling no distress.",
        "The absolute opposite of kind; mean, malicious, and heartless."
    ],
    "CRUSH": [
        "To compress something with violent force until it breaks.",
        "Deform, pulverize, or smash something by force or pressure.",
        "What you do to a soda can under your shoe, or a romantic infatuation."
    ],
    "CRYPT": [
        "The silent, stone vault underneath a church holding secrets.",
        "An underground room or vault beneath a church, used as a chapel or burial place.",
        "The underground stone tomb where this very puzzle game takes place."
    ],
    "CRAFT": [
        "To build or shape an item skillfully with your own hands.",
        "An activity involving skill in making things by hand.",
        "What you do when you assemble decorations, or the first half of Minecraft."
    ],
    "CURSE": [
        "A dark spell or hex cast to bring misfortune.",
        "A solemn utterance intended to invoke a supernatural power to inflict harm.",
        "What a witch locks a princess with, or a vulgar swear word."
    ],
    "CYCLE": [
        "A recurring loop of events that repeats indefinitely.",
        "A series of events that are regularly repeated in the same order.",
        "The pattern of the seasons, water recycling, or a shortcut for a bicycle."
    ],
    "DAGGER": [
        "A short, lethal blade hidden away for close combat.",
        "A short knife with a pointed blade used as a piercing weapon.",
        "A miniature sword used by assassins for a stealthy backstab."
    ],
    "DAILY": [
        "Occurring consistently every single time the sun rises.",
        "Done, produced, or occurring every day or every weekday.",
        "A routine done every 24 hours, like brushing your teeth."
    ],
    "DIARY": [
        "A private notebook holding a person's deepest secrets.",
        "A book in which one keeps a daily record of events and experiences.",
        "A journal locked with a tiny key where secrets are written down."
    ],
    "DIRTY": [
        "Coated in mud, dust, grime, or stains.",
        "Covered or marked with an unclean substance like mud.",
        "The opposite of clean; what laundry is after a muddy soccer match."
    ],
    "DIVID": [
        "Note: Let's use the standard dictionary word **`DIVIDE`**.",
        "To split a single whole into separate fractions.",
        "The math operations symbol that splits a total into equal parts."
    ],
    "DIVIDE": [
        "To split a single whole into separate fractions.",
        "Separate into two or more parts, sections, or groups.",
        "The mathematical operation that is the exact opposite of multiply."
    ],
    "DIZZY": [
        "A spinning sensation making it difficult to stand straight.",
        "Having or causing a whirling sensation and a tendency to fall.",
        "How your head feels after spinning around in circles ten times."
    ],
    "DONOR": [
        "A generous soul who gives away an asset or organ.",
        "A person who provides blood, an organ, or money for charity.",
        "Someone who contributes money to a cause or donates blood to a hospital."
    ],
    "DOUBT": [
        "A lingering shadow of uncertainty clouding belief.",
        "A feeling of uncertainty or lack of conviction about something.",
        "The state of being unsure or skeptical; the opposite of absolute trust."
    ],
    "DRAIN": [
        "A pipeline exit that swallows up escaping waste liquid.",
        "A channel or pipe carrying off surplus liquid, especially wastewater.",
        "The hole at the bottom of a sink or bathtub where the water exits."
    ],
    "DROWN": [
        "To suffocate beneath the surface of a deep body of water.",
        "Die through submersion in and inhalation of water or liquid.",
        "What happens if you swim in deep water without knowing how to float."
    ],
    "DRYING": [
        "The evaporating transition as moisture leaves a surface.",
        "The process of losing moisture or becoming thoroughly dry.",
        "What wet clothes do on a clothesline out in the afternoon sun."
    ],
    "DWELL": [
        "To reside and make your home in a specific space.",
        "Live or stay as a permanent resident in a particular place.",
        "To inhabit a home, or to linger contextually on a dark thought."
    ],
    "DYING": [
        "The fading final threshold as life exits a physical vessel.",
        "On the point of death; declining rapidly towards extinction.",
        "The opposite of growing or born; a light bulb flickering its final glow."
    ],
    "ECHO": [
        "A phantom sound that returns after striking a solid wall.",
        "A sound or series of sounds caused by the reflection of sound waves.",
        "What shouts back at you when you yell inside an empty cavern."
    ],
    "ELDER": [
        "An older person revered for their years of experience.",
        "A person of greater age than another, or a leader in a tribe.",
        "The oldest member of a family village, or a magical wizard wand."
    ],
    "ELITE": [
        "The absolute best, highest ranking tier of a collective group.",
        "A select group that is superior in terms of ability or qualities.",
        "The top-tier performers; masters, experts, or high-society nobles."
    ],
    "EMBER": [
        "A glowing piece of coal radiating heat in a dying fire.",
        "A small piece of glowing coal or wood in a dying fire.",
        "The orange spark left in the fire pit long after the flames die down."
    ],
    "ENTRY": [
        "A pathway or door leading into a structural interior.",
        "An act of going into a place, or an item written in a list.",
        "The doorway into a hall, or a single typed log in a journal."
    ],
    "EQUAL": [
        "Possessing the exact same value, scale, or status.",
        "Being the same in quantity, size, degree, or value.",
        "What two horizontal parallel lines mean in a math formula."
    ],
    "ERROR": [
        "A flaw or glitch that breaks a system logic flow.",
        "A mistake, or a blunder that deviates from accuracy.",
        "The red warning code that breaks a programmer's run test."
    ],
    "EVILS": [
        "The malicious, dark forces that intend to corrupt.",
        "Profoundly immoral and malevolent actions or entities.",
        "The dark, wicked deeds committed by villains in storybooks."
    ],
    "EXILE": [
        "To banish someone permanently from their home country.",
        "The state of being barred from one's native country, typically for political reasons.",
        "What happens when a king forces a traitor to leave the kingdom forever."
    ],
    "EXIST": [
        "To breathe, occupy space, and be real in this universe.",
        "Have objective reality or being; live.",
        "The act of being alive or present in reality; the opposite of nothingness."
    ],
    "FAINT": [
        "A whisper of light or sound that is barely perceptible.",
        "Lacking clarity, brightness, or volume; dizzy or losing consciousness.",
        "A sound far away that you can barely hear, or passing out from heat."
    ],
    "FAITH": [
        "An unshakeable belief in something you cannot see.",
        "Complete trust or confidence in someone or something, or religious belief.",
        "The definition of absolute trust; the opposite of total doubt."
    ],
    "FALSE": [
        "An illusion or statement that is completely untrue.",
        "Not according with truth or fact; incorrect.",
        "The opposite of true; a lie, error, or fake answer."
    ],
    "FANGS": [
        "Sharp, pointed teeth designed to pierce and draw blood.",
        "Large, sharp, pointed teeth, especially those of a venomous snake or vampire.",
        "The deadly mouth weapons of a cobra, wolf, or Dracula."
    ],
    "FATAL": [
        "A critical event or wound that results directly in death.",
        "Causing death, or leading to complete failure or disaster.",
        "A deadly poison dose, or a final crash blow that ends life."
    ],
    "FAULT": [
        "A structural fracture line, or taking blame for a mistake.",
        "An unattractive feature, or responsibility for an accident.",
        "What a crack in the earth is, or saying 'it was my mistake'."
    ],
    "FEAR": [
        "A cold emotion triggered by darkness and threat.",
        "An unpleasant emotion caused by the belief that someone is dangerous.",
        "The feeling that makes you shiver during a horror movie."
    ],
    "FLESH": [
        "The soft muscular tissue blanketing a skeletal frame.",
        "The soft substance consisting of muscle and fat that is found between the skin and bones.",
        "What covers human bones; the physical substance of a body."
    ],
    "FLUID": [
        "A moving liquid substance that flows freely.",
        "A substance that has no fixed shape and yields easily to external pressure.",
        "Water, juice, or oil; any liquid state of matter."
    ],
    "FLYER": [
        "An aerial pilot, or a printed sheet distributed to advertise.",
        "A person or thing that flies, or a circular leaflet for advertising.",
        "A small paper advertisement handed out on a street corner."
    ],
    "FOCUS": [
        "Concentrating all your light and attention on one single spot.",
        "The center of interest or activity, or adjusting a lens for clarity.",
        "What you do to a camera lens to make a blurry image sharp."
    ],
    "FORGE": [
        "A blazing hearth where iron is hammered into shape.",
        "Make or shape a metal object by heating it in a fire and hammering it.",
        "What a blacksmith uses to create iron tools and steel swords."
    ],
    "FORMS": [
        "The outward shapes or structural arrangements of entities.",
        "The visible shapes or configurations of something, or documents to fill out.",
        "The different shapes an object takes, or standard official sheets to fill in."
    ],
    "FORTH": [
        "Moving onward and forward out into the world.",
        "Out and forward into view, or onward in time.",
        "The direction word frequently paired behind 'back and...'."
    ],
    "FOUL": [
        "An offensive, putrid odor, or a broken rule in sports.",
        "Grossly offensive to the senses, or an unfair play in a game.",
        "The smell of rotting garbage, or a penalty strike in a soccer match."
    ],
    "FOUND": [
        "Discovered after being completely lost in the dark.",
        "Having been located after a long search; established.",
        "The exact opposite of lost; tracking down a hidden key."
    ],
    "FRONT": [
        "The forward face of an object looking forward.",
        "The side or part of an object that presents itself to view first.",
        "The opposite of back; the forward surface of a house."
    ],
    "FUNDS": [
        "Financial assets and currency accumulated to spend.",
        "Sums of money saved or made available for a particular purpose.",
        "The cash balances inside a bank account or wallet."
    ],
    "FURY": [
        "An intense, blinding explosion of volcanic anger.",
        "Wild or violent anger; rage.",
        "Pure wrath; the state of being absolutely furious."
    ],
    "GIANT": [
        "A colossal mythical entity towering over ordinary humans.",
        "An imaginary or mythical being of human form but superhuman size.",
        "The massive colossus Jack encounters at the top of the beanstalk."
    ],
    "GLARE": [
        "An intense, blinding light, or a hostile stare.",
        "A fierce or angry stare, or a strong and dazzling light.",
        "The harsh sun reflection off glass, or an angry look across a room."
    ],
    "GLEAM": [
        "A sudden brief flash of light reflecting off a surface.",
        "A flash or beam of light, especially a faint or reflected one.",
        "The tiny light reflection off a sharp sword or clean gemstone."
    ],
    "GLIDE": [
        "Moving smoothly and effortlessly without friction.",
        "Move with a smooth, continuous motion, typically down an incline.",
        "What an eagle does with motionless wings, or an ice skater on a rink."
    ],
    "GLOOM": [
        "A heavy, dim twilight thick with sadness.",
        "Partial or total darkness, or a state of depression and despondency.",
        "The dim lighting of a dark rainy day, or a sad mood."
    ],
    "GLOW": [
        "Emitting a soft, steady radiance without actual flames.",
        "Produce a steady radiance of light, or shine with intense color.",
        "What a firefly does in the dark, or hot embers in a fireplace."
    ],
    "GOLDEN": [
        "Possessing the brilliant yellow hue of raw gold and sunshine.",
        "Colored or shining like gold, or a period of peak success.",
        "The color of a royal crown, a sunflower, or a sunrise."
    ],
    "GRACE": [
        "An elegant, smooth fluid movement or divine favor.",
        "Smoothness and elegance of movement, or polite elegance.",
        "The poise of a ballet dancer, or a short prayer before dinner."
    ],
    "GRAND": [
        "Magnificent, massive, and majestic in scale.",
        "Magnificent and imposing in appearance, size, or style.",
        "A massive old hotel, a luxury palace, or a type of large piano."
    ],
    "GRAPH": [
        "A visual diagram charting lines and grid points.",
        "A diagram showing the relation between variable quantities.",
        "The chart sheet split into grid coordinates used in math class."
    ],
    "GRASP": [
        "To squeeze your fingers tightly around an object.",
        "Seize and hold firmly with your hand; understand a concept.",
        "To clutch a handrail, grip a weapon handle, or understand an idea."
    ],
    "GRAVE": [
        "The final resting place carved deep into the stone earth.",
        "A hole dug in the ground to receive a coffin, or a serious situation.",
        "Where someone is buried, usually marked with a marble tombstone."
    ],
    "GREED": [
        "An insatiable, selfish hunger for wealth and gold.",
        "An intense and selfish desire for something, especially wealth or power.",
        "The toxic urge to hoard all the gold money for oneself."
    ],
    "GRIEF": [
        "A crushing ocean of sadness triggered by a heavy loss.",
        "Deep sorrow, especially that caused by someone's death.",
        "The heavy emotional pain felt when you lose a loved one forever."
    ],
    "GRIME": [
        "A thick coating of dark dirt and oil caked onto surfaces.",
        "Black dirt or soot ingrained on the surface of something.",
        "The dark layer of sludge found on old garage tools or engine parts."
    ],
    "GRIP": [
        "To maintain a firm, tight hold with your fingers.",
        "Take a firm hold on something, or a handle that allows a hold.",
        "What rubber handles do to prevent slipping; a tight squeeze."
    ],
    "GROVE": [
        "A small, quiet sanctuary cluster of trees in an orchard.",
        "A small wood, orchard, or group of trees.",
        "A miniature forest patch, frequently growing orange or olive trees."
    ],
    "GROWL": [
        "A low, menacing rumble echoing from an angry throat.",
        "Make a low guttural sound of hostility in the throat.",
        "The rumbling warning sound an angry wolf or dog makes."
    ],
    "GUARD": [
        "A sentinel standing watch to protect a gate or person.",
        "A person who keeps watch or protects something from danger.",
        "A security officer standing watch at a bank vault or castle gate."
    ],
    "GUILT": [
        "The heavy internal phantom tormenting a conscience after a mistake.",
        "The fact of having committed a specified offense, or a feeling of remorse.",
        "The bad feeling inside your heart when you know you lied."
    ],
    "HABIT": [
        "A routine action performed automatically without conscious thought.",
        "A settled or regular tendency or practice, especially an automatic one.",
        "Biting your nails or drinking tea every morning; a settled routine."
    ],
    "HAUNT": [
        "To linger like a phantom ghost in an old memory space.",
        "To return as a ghost to a place, or to persistently torment a mind.",
        "What phantoms do to an abandoned mansion at midnight."
    ],
    "HEAVY": [
        "Possessing immense physical weight that drags downward.",
        "Of great weight; difficult to lift or move.",
        "The opposite of light; an anchor or massive boulder."
    ],
    "HEDGE": [
        "A dense living wall formed by trimmed green bushes.",
        "A fence or boundary formed by closely growing bushes.",
        "The green shrub wall you clip to form a garden maze."
    ],
    "HILLS": [
        "Rolling mounds of earth rising up toward the sky.",
        "Naturally raised areas of land, not as high as a mountain.",
        "Mounds of earth higher than flat ground but smaller than mountains."
    ],
    "HINTS": [
        "Tiny clues dropped to guide an intuition through a puzzle.",
        "Slight indications or indirect suggestions to help solve a puzzle.",
        "The three progressive clues you are utilizing right this second."
    ],
    "HUMAN": [
        "A mortal being woven of flesh, flaws, and thoughts.",
        "Relating to or characteristic of humankind.",
        "What you are; a person belonging to the global civilization."
    ],
    "IDEAL": [
        "A perfect, flawless standard existing only in conception.",
        "Satisfying one's conception of what is perfect; most suitable.",
        "The ultimate dream scenario; absolute perfection."
    ],
    "IMAGE": [
        "A visual snapshot capturing a reflection or design.",
        "A representation of the external form of a person or thing in art.",
        "A photograph, portrait illustration, or graphic icon."
    ],
    "IVORY": [
        "A hard, creamy white material harvested from elephant tusks.",
        "A hard creamy-white substance composing the main part of the tusks of an elephant.",
        "The precious white material used historically for piano keys."
    ],
    "LABOR": [
        "Strenuous physical work requiring sweat and effort.",
        "Work, especially hard physical work.",
        "Hard manual work, like construction or mining."
    ],
    "LEVEL": [
        "A flat horizontal tier, or a structural stage in a game.",
        "A horizontal plane or line, or a position on a scale.",
        "A flat surface with no incline, or stage 1 of a game layout."
    ],
    "LIMIT": [
        "The absolute terminal perimeter boundary you cannot cross.",
        "A point or level beyond which something does not or may not extend.",
        "The boundary line, or the speed restriction threshold on a highway."
    ],
    "LOCKS": [
        "Mechanical iron mechanisms built to seal doors or chests.",
        "Mechanisms for keeping a door or container fastened.",
        "What you insert a key into to open a vault or chest."
    ],
    "LOGIC": [
        "The cold, analytical reasoning track driving a system puzzle.",
        "Reasoning conducted according to strict principles of validity.",
        "The mathematical problem-solving mind; rational thought."
    ],
    "LOVER": [
        "A committed soul who holds your affection.",
        "A partner in a romantic relationship.",
        "A romantic partner; the person you give your heart to."
    ],
    "LUCID": [
        "Completely crystal clear, rational, and fully aware.",
        "Expressed clearly; easy to understand, or bright and luminous.",
        "A dream where you know you are dreaming; clear and conscious."
    ],
    "LUNAR": [
        "Relating to the pearlescent moon orbiting our sky.",
        "Of, determined by, or resembling the moon.",
        "An eclipse caused by the moon's shadow; moon-related."
    ],
    "LYRIC": [
        "The poetic line of text sung within a song melody.",
        "Expressing the writer's emotions in a stanza or song text.",
        "The lines of poetry written down to be sung by a vocalist."
    ],
    "MARBLE": [
        "Cold, smooth stone polished for grand statues and gravestones.",
        "A hard crystalline metamorphic form of limestone, typically white.",
        "The elegant stone material used for museum statues and pillars."
    ],
    "MARKS": [
        "Stains, lines, or scars etched onto a surface.",
        "Small visible impressions, stains, or scratches on something.",
        "The ink lines left on a page, or blemishes left on skin."
    ],
    "MASKS": [
        "Fabric coverings worn over faces to hide identities.",
        "Coverings for all or part of the face, worn as a disguise.",
        "What actors wear to hide their faces, or worn on Halloween."
    ],
    "MAZE": [
        "A complex, confusing labyrinth of paths designed to disorient.",
        "A network of paths and hedges designed as a puzzle.",
        "A labyrinth puzzle where you must find the escape exit."
    ],
    "MERCY": [
        "Compassion or forgiveness shown to an enemy in your power.",
        "Compassion or forgiveness shown toward someone whom it is within one's power to punish.",
        "Pity or leniency shown to a prisoner; begging for a second chance."
    ],
    "MIND": [
        "The invisible landscape where your thoughts and dreams collide.",
        "The element of a person that enables them to be aware of the world and think.",
        "Where your thoughts, reasoning, consciousness, and choices live."
    ],
    "MIST": [
        "A ghostly condensation of water hovering low over fields.",
        "A cloud of tiny water droplets suspended in the atmosphere near the earth.",
        "A light fog blanket hovering over a river at sunrise."
    ],
    "MONK": [
        "A silent holy man who vows a life of isolation.",
        "A member of a religious community of men typically living under vows of poverty.",
        "A robed religious man living away from society in a monastery."
    ],
    "MOSS": [
        "A soft, damp green carpet of vegetation coating old stones.",
        "A small flowerless green plant that lacks true roots, growing in damp habitats.",
        "The fuzzy green plant skin that grows on the north side of forest trees."
    ],
    "MOURN": [
        "Shedding tears of grief over a life that has ended.",
        "Feel or show deep sorrow or regret for someone who has died.",
        "The act of weeping for a loved one after their funeral."
    ],
    "NAVAL": [
        "Relating to a fleet of military war warships at sea.",
        "Relating to a navy or warships on the ocean.",
        "Maritime military operations; warship fleets."
    ],
    "NOBLE": [
        "Possessing high moral character, or belonging to a royal class.",
        "Having fine personal qualities, or belonging to the aristocracy.",
        "An honorable act, or a lord/duke belonging to a royal court."
    ],
    "PHANT": [
        "Note: Let's use the standard spelling **`PHANTOM`** or the word **`FAINT`**.",
        "A ghost or illusion lingering in the shadows.",
        "A spooky ghost entity or floating illusion."
    ],
    "PULSE": [
        "The rhythmic throbbing wave of a heart pumping blood.",
        "A rhythmical throbbing of the arteries as blood is propelled through them.",
        "What a doctor checks on your wrist to count your heartbeat."
    ],
    "RHYME": [
        "Two poetic words that share the exact same ending sound.",
        "Correspondence of sound between words or the endings of words.",
        "What 'cat' and 'hat' do in a lyrical stanza."
    ],
    "RODGE": [
        "Note: Let's use the standard dictionary word **`RIDGE`**.",
        "The sharp, narrow peak line along a mountain chain.",
        "The long narrow upper crest of a mountain or hill."
    ],
    "RIDGE": [
        "The sharp, narrow peak line along a mountain chain.",
        "A long narrow hilltop, mountain crest, or watershed.",
        "The crest line along the very peak top of a mountain range."
    ],
    "RUINS": [
        "The crumbling stone fragments of an ancient castle.",
        "The remains of a building that has suffered destruction or decay.",
        "The decaying pillars left over from ancient Greece or Rome."
    ],
    "SAGE": [
        "A wise old elder, or an aromatic green herb plant.",
        "A profoundly wise man, or an aromatic plant with grayish-green leaves.",
        "The name of a wise wizard character, or your website's pale green color theme."
    ],
    "SCENT": [
        "A lingering fragrance or aroma drifting through the air.",
        "A distinctive smell, especially one that is pleasant.",
        "The aroma of perfume, a fresh rose, or hot coffee."
    ],
    "SCROLL": [
        "An ancient rolled parchment manuscript holding hidden text.",
        "A roll of parchment or paper for writing or reading.",
        "What an ancient scribe unrolls to read a royal decree."
    ],
    "SEALS": [
        "Wax stamps locking a letter, or flippered ocean mammals.",
        "Fasteners on envelopes, or fish-eating sea mammals with flippers.",
        "The wax marks stamped on old scrolls, or barking arctic sea animals."
    ],
    "SECRE": [
        "Note: Let's use the standard dictionary word **`SECRET`**.",
        "A hidden truth concealed away from the world.",
        "Information kept locked away; not revealed to anyone else."
    ],
    "SECRET": [
        "A hidden truth concealed away from the world.",
        "Something that is kept or meant to be kept unknown or unseen.",
        "A confidential truth whispered in the dark that must not be shared."
    ],
    "SEEDS": [
        "Tiny botanical kernels planted in soil to sprout life.",
        "The units of reproduction of a flowering plant.",
        "What you plant in a garden pot to grow a sunflower."
    ],
    "SERPE": [
        "Note: Let's use the standard dictionary word **`SNAKE`**.",
        "A slithering reptile sliding through shadows.",
        "A long slithering legless reptile; a serpent."
    ],
    "SHADE": [
        "A cool silhouette space protected from the blazing sun.",
        "Comparative darkness and coolness caused by shelter from direct sunlight.",
        "Where you sit under a massive tree branch to escape the hot sun."
    ],
    "SHEER": [
        "An ultra-thin transparent fabric, or a steep vertical cliff drop.",
        "Nothing purer than, or a vertical precipice cliff side.",
        "A cliff face that drops straight down into a chasm."
    ],
    "SHELL": [
        "A hard spiral casing left behind on an ocean beach.",
        "The hard protective outer case of a marine mollusk or egg.",
        "What an oyster lives in, or what you collect on a sandy beach."
    ],
    "SHIFT": [
        "To alter a position, move aside, or change directions.",
        "Move or cause to move from one position to another.",
        "What you do to car gears, or the key you hold for capital letters."
    ],
    "SHIME": [
        "Note: Let's use the standard dictionary word **`SHINE`**.",
        "To glow contextually with a bright beam of light.",
        "What gold or a polished diamond does under a spotlight."
    ],
    "SHINE": [
        "To emit a radiant beam that pierces through the gloom.",
        "To gleam brightly, like polished silver, gold, or a star.",
        "What a flashlight or the sun does to illuminate things."
    ],
    "SHOCK": [
        "A sudden surge of electricity or a paralyzing surprise.",
        "A sudden upsetting or surprising event, or an electrical jolt.",
        "What static electricity does to your finger, or a state of disbelief."
    ],
    "SHORE": [
        "The sandy boundary perimeter where land terminates at the sea.",
        "The land along the edge of a sea, lake, or large ocean.",
        "Where waves crash; the coastline of a lake or ocean beach."
    ],
    "SHROU": [
        "Note: Let's use the standard dictionary word **`SHROUD`**.",
        "A burial cloth wrapping a corpse, or a blanket of fog.",
        "A length of cloth in which a dead person is wrapped for burial."
    ],
    "SHROUD": [
        "A burial cloth wrapping a corpse, or a blanket of fog.",
        "A length of cloth in which a dead person is wrapped for burial; a veil.",
        "A dark fabric wrap for a coffin, or a thick blanket of mystery mist."
    ],
    "SIGHT": [
        "The vital visual sense that lets eyes behold the world.",
        "The faculty or power of seeing; a view or spectacle.",
        "The ocular sense of vision; what glasses restore."
    ],
    "SIGNS": [
        "Visual indicators, symbols, or omens dropping warnings.",
        "Gestures, objects, or marks that convey information or omens.",
        "The street boards giving directions, or celestial omens in the sky."
    ],
    "SILEN": [
        "Note: Let's use the standard dictionary word **`SILENT`**.",
        "Completely quiet with zero noise or sound echoes.",
        "The state of absolute stillness; completely mute."
    ],
    "SILENT": [
        "Completely quiet with zero noise or sound echoes.",
        "Not making or accompanied by any sound; mute and still.",
        "The absolute quiet of an abandoned tomb; zero noise."
    ],
    "SILVE": [
        "Note: Let's use the standard dictionary word **`SILVER`**.",
        "A precious shiny gray metal often forged into jewelry.",
        "The shiny metal used for coins, mirrors, and spoons."
    ],
    "SILVER": [
        "A precious shiny gray metal often forged into jewelry.",
        "A precious shiny grayish-white metal used for cutlery and jewelry.",
        "The second-place Olympic medal metal; shiny gray jewelry material."
    ],
    "SKULL": [
        "The stark bone sphere protecting a human brain matrix.",
        "The bony framework enclosing the brain of a vertebrate.",
        "The bone head piece featuring empty eye sockets and a jaw."
    ],
    "SLEEP": [
        "A temporary escape into the subconscious realm of dreams.",
        "A naturally recurring state of rest for the body and mind.",
        "What you do at night in your bed with your eyes shut tight."
    ],
    "SMOKE": [
        "A ghostly gray cloud rising from a burning fire.",
        "The cloudy vapor produced by burning a fuel substance.",
        "What exits a house chimney or trails from a blown-out candle."
    ],
    "SNARE": [
        "A hidden wire trap designed to snap shut on prey.",
        "A trap for catching birds or animals, typically using a noose.",
        "A type of rope trap, or the sharp drum in a drum kit layout."
    ],
    "SOULS": [
        "The immortal, invisible spiritual cores inside human forms.",
        "The spiritual or immaterial parts of human beings, regarded as immortal.",
        "The inner spirits of people; what anchors consciousness beyond death."
    ],
    "SPARK": [
        "A tiny flash of fire that can ignite a massive blaze.",
        "A small fiery particle thrown off from a fire, or a brief flash.",
        "The microscopic fire dot from flint, steel, or a lighter wheel."
    ],
    "SPELL": [
        "An arrangement of magical words incanted to cast a hex.",
        "A form of words used as a magical charm or incantation.",
        "What a wizard casts from a wand, or how you arrange alphabet letters."
    ],
    "SPIRE": [
        "A tall, sharp stone tower rising high above a cathedral.",
        "A tapering conical or pyramidal structure on the top of a tower.",
        "The highest pointed peak turret on top of a castle or church."
    ],
    "STAGE": [
        "A raised wooden platform where performers stand under lights.",
        "A raised floor or platform, typically in a theater, for actors.",
        "Where a vocalist sings or an actor performs a play for a crowd."
    ],
    "STARS": [
        "Distant cosmic furnaces burning in the infinite void.",
        "Fixed luminous celestial bodies visible as points in the night sky.",
        "The twinkling dots in outer space you map into constellations."
    ],
    "STEEL": [
        "An alloy of iron and carbon forged for ultimate strength.",
        "A hard, strong gray metal alloy used extensively in construction.",
        "What armor, swords, and skyscrapers are forged out of."
    ],
    "STEPS": [
        "Footfalls left behind, or a series of stone stairs.",
        "Paces made in walking, or flat rungs for climbing up.",
        "The sounds of someone walking down a corridor; staircase tiers."
    ],
    "STONE": [
        "Unyielding, cold mineral carved to mark graves.",
        "A hard solid piece of rock found resting on the ground.",
        "The gray material used to carve statues, gravestones, and bricks."
    ],
    "STORM": [
        "The sky roaring in anger with tears of violent rain.",
        "A violent disturbance of the atmosphere with rain, wind, and thunder.",
        "Weather packed with dark clouds, flashing lightning, and booming thunder."
    ],
    "STORY": [
        "A lyrical narrative chronicling legends or memories.",
        "An account of imaginary or real people and events told for entertainment.",
        "A novel, fable, or legend read from the pages of a book."
    ],
    "TEARS": [
        "Droplets of salty water shed from eyes during heavy grief.",
        "Drops of clear salty liquid secreted by the lacrimal glands when crying.",
        "The water that falls down your face when your heart breaks."
    ],
    "THEME": [
        "The central unifying concept or aesthetic of an artwork.",
        "The subject of a talk, piece of writing, exhibition, or game.",
        "The main topic of a contest, or your website's dark aesthetic style."
    ],
    "THORN": [
        "A sharp woody dagger protecting a beautiful rose stem.",
        "A stiff, sharp-pointed woody projection on the stem of a plant.",
        "The tiny spike on a flower bush that pricks your finger."
    ],
    "TIEST": [
        "Note: Let's use the standard dictionary word **`TIDES`**.",
        "The shifting rise and fall of the ocean driven by the moon.",
        "The gravitational rise and fall of ocean water levels twice a day."
    ],
    "TIDES": [
        "The shifting rise and fall of the ocean driven by the moon.",
        "The alternate rising and falling of the sea, usually twice a lunar day.",
        "The ocean current cycles that pull water back and forth on beaches."
    ],
    "TOMBS": [
        "Silent stone vaults housing the bones of the deceased.",
        "Underground vaults or burial chambers for corpses.",
        "The ancient stone rooms where pharaohs and skeletons are laid to rest."
    ],
    "TORCH": [
        "A wooden stick tipped in burning flame carried through corridors.",
        "A portable weapon of fire consisting of a piece of wood wrapped in flax.",
        "The fire stick used to light up dark passages inside an ancient castle."
    ],
    "TOUCH": [
        "To make physical contact with a surface using fingers.",
        "Bring a bodily part into contact with an object to feel its texture.",
        "The sense executed by fingertips when clicking a keypad button."
    ],
    "TOWER": [
        "A grand stone monolith reaching high toward the clouds.",
        "A tall, narrow building or part of a castle turret.",
        "A tall medieval fortress structure looking down on a village."
    ],
    "TRACE": [
        "A faint remaining mark or footprint left behind.",
        "A copy of a drawing, or a minuscule track left by an entity.",
        "To copy a line drawing on see-through paper, or follow a track."
    ],
    "TRAIL": [
        "A path winding through a dark forest, or tracks left behind.",
        "A mark or a series of signs left by a moving body, or a dirt path.",
        "The dirt path you follow when hiking up a forest mountain."
    ],
    "TRUTH": [
        "The absolute, pure reality unmasked by illusions or lies.",
        "The quality or state of being in accordance with fact or reality.",
        "The exact opposite of a fake statement or a fabricated lie."
    ],
    "TWICE": [
        "Occurring exactly two times in succession.",
        "Two times; on two occasions.",
        "The frequency of occurrence matching one plus one."
    ],
    "UNSPO": [
        "Note: Let's use the standard poetry word **`UNSAID`**.",
        "The silent words left hanging in the heavy air.",
        "Thoughts kept quiet; titles of your poems like 'Unsaid'."
    ],
    "UNSAID": [
        "The silent words left hanging in the heavy air.",
        "Not expressed or uttered; kept silent inside the mind.",
        "The title of your deep poem; things kept quiet instead of spoken."
    ],
    "VALER": [
        "Note: Let's use the standard spelling **`VALOR`**.",
        "Great courage displayed in the face of absolute battle.",
        "What a knight or hero shows when fighting a terrifying enemy."
    ],
    "VEILS": [
        "Thin sheets of fabric used to conceal faces or secrets.",
        "Pieces of fine material worn to protect or conceal the face.",
        "The mesh cloth masks worn by brides or ghosts to hide identities."
    ],
    "VERSE": [
        "A structured, rhythmic line of text composing a poem.",
        "Writing arranged with a metrical rhythm, typically having a rhyme.",
        "A single stanza or poetic line of writing inside 'Rish Verse'."
    ],
    "VIEWS": [
        "The beautiful vistas or landscapes beheld by eyes.",
        "Vistas or scenes landscape-wise, or opinions held.",
        "The beautiful sceneries looked at from a high mountain peak."
    ],
    "VISTA": [
        "A grand, wide panoramic view looking out over fields.",
        "A pleasing view, especially one seen through a long, narrow opening.",
        "A beautiful sweeping horizon view across a canyon or ocean coast."
    ],
    "VOICE": [
        "The unique acoustic signature of a human soul.",
        "The sound produced in a person's throat uttered to speak.",
        "What you use to sing a melody or whisper a secret out loud."
    ],
    "VOIDS": [
        "The vast, silent canyons of absolute nothingness.",
        "Completely empty spaces, gaps, or black holes.",
        "Plural word for total vacuums or completely blank spaces."
    ],
    "WALLS": [
        "Solid stone vertical barriers enclosing a room or vault.",
        "Continuous vertical brick or stone structures enclosing an area.",
        "The structural barriers you paint or hang picture frames on."
    ],
    "WATCH": [
        "A tiny ticking clock strapped to a wrist to track time.",
        "A small timepiece worn on a strap, or keeping sharp guard.",
        "What you wear on your arm to check hours and minutes."
    ],
    "WATER": [
        "The clear, fluid life force flowing in rivers and oceans.",
        "A colorless, transparent liquid forming the seas and rain.",
        "What falls from storm clouds as rain or fills a drinking glass."
    ],
    "WAVES": [
        "Surges of ocean water cresting and crashing onto golden sand.",
        "Long bodies of water curling into a foam ridge on a beach.",
        "The moving water ridges surfers ride on near the coastline."
    ],
    "WHPER": [
        "Note: Let's use the standard dictionary word **`LIGHT`** or **`NIGHT`**.",
        "A soft breath of sound spoken in complete confidentiality.",
        "Speaking in a quiet, breathless voice so nobody else hears."
    ],
    "WINDY": [
        "When the atmospheric currents howl violently through fields.",
        "Accompanied by or exposed to strong currents of blowing air.",
        "Weather that flies kites high and blows leaves across the ground."
    ],
    "WINGS": [
        "Feathered limbs forged to conquer gravity and soar high.",
        "The specialized flight limbs of birds, bats, or angels.",
        "What a bald eagle or a passenger plane uses to fly."
    ],
    "WITCH": [
        "A shadowy magic practitioner brewing hexes in a cauldron.",
        "A woman thought to have magic powers, wearing a black pointed hat.",
        "The cackling character who flies on a broomstick on Halloween night."
    ],
    "WOODS": [
        "A dense labyrinth sanctuary of ancient growing trees.",
        "An area of land covered with growing trees, smaller than a forest.",
        "Where you walk down dirt trails surrounded by branches and leaves."
    ],
    "WORDS": [
        "They carry weight long after they are spoken.",
        "The basic units of language used to write a poem.",
        "What you are reading right now; groups of letters with meaning."
    ],
    "WRECK": [
        "The twisted iron ruins left behind after a catastrophic crash.",
        "The remains of a badly damaged ship, car, or airplane.",
        "What happens when a ship hits ocean rocks or cars collide."
    ],
    "WRXED": [
        "Note: Let's use the standard automotive/fitness brand or word **`WRIST`**.",
        "The joint connecting your hand to your arm matrix.",
        "Where you wear a watch bracelet or check a pulse line."
    ],
    "YOUTH": [
        "The fleeting spring of life full of energy and wild dreams.",
        "The time of life when a person is young; childhood to adulthood.",
        "The opposite of old age; being full of young vitality."
    ]
};