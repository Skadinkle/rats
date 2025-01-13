/*	SOURCES:
	https://archive.org/download/the-grim-adventures-of-billy-and-mandy_202212/
*/
const episodeData = [
	/*	---------  */
	/*	SEASON 01  */
	/*	---------  */
	["S01E01", "Meet the Reaper / Skeletons in the Water Closet", [["", "", ""]]],
	["S01E02", "Opposite Day / Look Alive!", [["", "", ""]]],
	["S01E03", "Mortal Dilemma / Get Out of My Head!", [["", "", ""]]],
	["S01E04", "Recipe for Disaster", [["", "", ""]]],
	["S01E05", "A Dumb Wish", [["", "", ""]]],
	["S01E06", "Fiend Is Like Friend Without the 'R'", [["", "", ""]]],
	["S01E07", "Grim vs. Mom / Tastes Like Chicken", [["", "", ""]]],
	["S01E08", "Grim or Gregory? / Something Stupid This Way Comes", [["", "", ""]]],
	["S01E09", "A Grim Surprise / Beasts & Barbarians", [["", "", ""]]],
	["S01E10", "Hoss Delgado: Spectral Exterminator / To Eris Human", [["", "", ""]]],
	["S01E11", "Billy's Growth Spurt / Billy & the Bully", [["", "", ""]]],
	["S01E12", "Big Trouble in Billy's Basement / Tickle Me Mandy", [["", "", ""]]],
	["S01E13", "Little Rock of Horrors / Dream a Little Dream", [["", "", ""]]],
	["S01E14", "Toadblatt's School of Sorcery / Educating Grim / It's Hokey Mon!", [["", "", ""]]],
	["S01E15", "Night of the Living Grim / Brown Evil <i>(Parts 1 & 2)</i>", [["", "", ""]]],
	["S01E16", "Mandy, the Merciless / Creating Chaos / The Really Odd Couple", [["", "", ""]]],
	["S01E17", "Who Killed Who? / Tween Wolf", [["", "", ""]]],
	["S01E18", "Grim in Love / Crushed / Love is \"Evol\" Spelled Backwards", [["", "", ""]]],
	["S01E19", "The Crawling Niceness / Smarten Up! / The Grim Show", [["", "", ""]]],
	["S01E20", "Son of Nergal / Sister Grim / Go-Kart 3000!", [["", "", ""]]],
	["S01E21", "Terror of the Black Knight / Battle of the Bands / The Halls of Time", [["", "", ""]]],
	["S01E22", "Grim for a Day / Chicken Ball Z", [["", "", ""]]],
	["S01E23", "Billy & Mandy's Jacked-Up Halloween", [["", "", ""]]],
	["S01E24", "Five O' Clock Shadows", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 02  */
	/*	---------  */
	["S02E01", "Spider's Little Daddy / Tricycle of Terror", [["", "", ""]]],
	["S02E02", "Dumb Luck / No Body Love Grim", [["", "", ""]]],
	["S02E03", "Li'l Porkchop / Skarred for Life", [["", "", ""]]],
	["S02E04", "House of Pain / A Grim Prophecy / Mandy Bites Dog", [["", "", ""]]],
	["S02E05", "Nursery Crimes / My Peeps", [["", "", ""]]],
	["S02E06", "Nigel Planter and the Chamber Pot of Secrets / Circus of Fear", [["", "", ""]]],
	["S02E07", "Bully Boogie / Here Thar Be Dwarves!", [["", "", ""]]],
	["S02E08", "Which Came First? / Substitute Teacher", [["", "", ""]]],
	["S02E09", "Super Zero / Sickly Sweet", [["", "", ""]]],
	["S02E10", "Bearded Billy / The Nerve", [["", "", ""]]],
	["S02E11", "Attack of the Clowns / Complete and Utter Chaos! (Billy Gets Dumber!)", [["", "", ""]]],
	["S02E12", "Test of Time / A Kick in the Asgard", [["", "", ""]]],
	["S02E13", "Whatever Happened To Billy Whatishisname? / Just the Two of Pus", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 03  */
	/*	---------  */
	["S03E01", "Chocolate Sailor / The Good, the Bad & the Toothless", [["", "", ""]]],
	["S03E02", "That's My Mummy / Toys Will Be Toys", [["", "", ""]]],
	["S03E03", "The Secret Snake Club", [["", "", ""]]],
	["S03E04", "He's Not Dead, He's My Mascot / Hog Wild", [["", "", ""]]],
	["S03E05", "The Bad News Ghouls / The House of No Tomorrow", [["", "", ""]]],
	["S03E06", "Happy Huggy Stuffy Bears / The Secret Decoder Ring", [["", "", ""]]],
	["S03E07", "Wild Parts / The Problem With Billy", [["", "", ""]]],
	["S03E08", "Wishbones", [["", "", ""]]],
	["S03E09", "Dream Mutt / Scythe For Sale", [["", "", ""]]],
	["S03E10", "Jeffy's Web / Irwin Gets a Clue", [["", "", ""]]],
	["S03E11", "Duck! / Aren't You Chupacabra to See Me?", [["", "", ""]]],
	["S03E12", "Zip Your Fly! / Puddle Jumping", [["", "", ""]]],
	["S03E13", "Runaway Pants / Scythe 2.0", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 04  */
	/*	---------  */
	["S04E01", "The Firebird Sweet / The Bubble With Billy", [["", "", ""]]],
	["S04E02", "Billy Idiot / Home of the Ancients", [["", "", ""]]],
	["S04E03", "My Fair Mandy", [["", "", ""]]],
	["S04E04", "One Crazy Summoner / Guess What's Coming to Dinner?", [["", "", ""]]],
	["S04E05", "Mommy Fiercest / The Taking Tree", [["", "", ""]]],
	["S04E06", "Reap Walking / The Loser from the Earth's Core", [["", "", ""]]],
	["S04E07", "Ecto Cooler / The Schlubs", [["", "", ""]]],
	["S04E08", "Prank Call of Cthulhu", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 05  */
	/*	---------  */
	["S05E01", "Billy Ocean / Hill Billy", [["", "", ""]]],
	["S05E02", "Keeper of the Reaper", [["", "", ""]]],
	["S05E03", "The Love That Dare Not Speak Its Name / Major Cheese", [["", "", ""]]],
	["S05E04", "Modern Primitives / Giant Billy and Mandy All Out Attack", [["", "", ""]]],
	["S05E05", "The Wrongest Yard / Druid, Where's My Car?", [["", "", ""]]],
	["S05E06", "Herbicidal Maniac / Chaos Theory", [["", "", ""]]],
	["S05E07", "A Grim Day / Pandora's Lunch Box", [["", "", ""]]],
	["S05E08", "Billy and Mandy vs. the Martians", [["", "", ""]]],
	["S05E09", "Dumb-Dumbs & Dragons / Fear and Loathing in Endsville", [["", "", ""]]],
	["S05E10", "Dad Day Afternoon / Scary Poppins", [["", "", ""]]],
	["S05E11", "Hurter Monkey / Goodbling and the Hip Hop Opotamus", [["", "", ""]]],
	["S05E12", "", [["", "", ""]]],
	["S05E13", "", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 06  */
	/*	---------  */
	["S06E01", "", [["", "", ""]]],
	["S06E02", "", [["", "", ""]]],
	["S06E03", "", [["", "", ""]]],
	["S06E04", "", [["", "", ""]]],
	["S06E05", "", [["", "", ""]]],
	["S06E06", "", [["", "", ""]]],
	["S06E07", "", [["", "", ""]]],
	["S06E08", "", [["", "", ""]]],
	["S06E09", "", [["", "", ""]]],
	["S06E10", "", [["", "", ""]]],
	["S06E11", "", [["", "", ""]]],
	["S06E12", "", [["", "", ""]]],
	["S06E13", "", [["", "", ""]]]
]