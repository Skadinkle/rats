/*	SOURCES:
GENERAL:
	https://archive.org/details/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402
	https://archive.org/details/adventures-of-sonic-the-hedgehog-1993_202311
	https://archive.org/details/SomeAdventuresOfSonicTheHedgehogEppies
	https://archive.org/details/adventures-of-sonic-the-hedgehog-the-complete-collection
	https://archive.org/details/adventures-of-sonic-the-hedgehog-1993-uk-vhs

INDIVIDUAL:
	https://archive.org/details/adventures-of-sonic-the-hedgehog-road-hog
	https://archive.org/details/adventures-of-sonic-the-hedgehog-grounder-the-genius
	https://archive.org/details/adventures-of-sonic-the-hedgehog-super-special-sonic-search-smash-squad
*/
const videoDataList = [
	/*	---------  */
	/*	PILOTS  */
	/*	---------  */
	["Pilot", "", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%20Full%20Pilot%20Episode.mp4"]
	]],

	/*	---------  */
	/*	SEASON 01  */
	/*	---------  */
	["S01E01", "Best Hedgehog", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x01%20-%20Best%20Hedgehog.mp4"]
	]],
	["S01E02", "Tails' New Home", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x02%20-%20Tails%60%20New%20Home.mp4"]
	]],
	["S01E03", "Birth of a Salesman", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x03%20-%20Birth%20of%20a%20Salesman.mp4"]
	]],
	["S01E04", "Submerged Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X04%20-%20Submerged%20Sonic.mp4"]
	]],
	["S01E05", "Pseudo Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X05%20-%20Pseudo%20Sonic.mp4"]
	]],
	["S01E06", "Over the Hill Hero", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x06%20-%20Over%20the%20Hill%20Hero.mp4"]
	]],
	["S01E07", "Robolympics", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x07%20-%20Robolympics.mp4"]
	]],
	["S01E08", "Lovesick Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x08%20-%20Lovesick%20Sonic.mp4"]
	]],
	["S01E09", "Subterranean Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x09%20-%20Subterranean%20Sonic.mp4"]
	]],
	["S01E10", "Grounder the Genius", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X10%20-%20Grounder%20The%20Genius.mp4"]
	]],
	["S01E11", "High Stakes Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x11%20-%20High%20Stakes%20Sonic.mp4"]
	]],
	["S01E12", "Blank-Headed Eagle", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X12%20-%20Blank-Headed%20Eagle.mp4"]
	]],
	["S01E13", "Boogey-Mania", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X13%20-%20Boogey-Mania.mp4"]
	]],
	["S01E14", "Big Daddy", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x14%20-%20Big%20Daddy.mp4"]
	]],
	["S01E15", "The Robotnik Express", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x15%20-%20The%20Robotnik%20Express.mp4"]
	]],
	["S01E16", "Momma Robotnik's Birthday", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x16%20-%20Momma%20Robotnik%60s%20Birthday.mp4"]
	]],
	["S01E17", "Slowwww Going", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x17%20-%20Slowwww%20Going.mp4"]
	]],
	["S01E18", "So Long Sucker", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X18%20-%20So%20Long%20Sucker.mp4"]
	]],
	["S01E19", "Robotnik's Rival", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x19%20-%20Robotnik%60s%20Rival.mp4"]
	]],
	["S01E20", "Trail of the Missing Tails", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x20%20-%20Trail%20of%20the%20Missing%20Tails.mp4"]
	]],
	["S01E21", "Momma Robotnik Returns", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X21%20-%20Momma%20Robotnik%20Returns.mp4"]
	]],
	["S01E22", "Too Tall Tails", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x22%20-%20Too%20Tall%20Tails.mp4"]
	]],
	["S01E23", "Super Special Sonic Search & Smash Squad", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x23%20-%20Super%20Special%20Sonic%20Search%20%26%20Smash%20Squad.mp4"]
	]],
	["S01E24", "Magnificent Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x24%20-%20Magnificent%20Sonic.mp4"]
	]],
	["S01E25", "Zoobotnik", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x25%20-%20Zoobotnik.mp4"]
	]],
	["S01E26", "Tails in Charge", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X26%20-%20Tails%20In%20Charge.mp4"]
	]],
	["S01E27", "Musta Been a Beautiful Baby", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X27%20-%20Musta%20Been%20A%20Beautiful%20Baby.mp4"]
	]],
	["S01E28", "Sonic the Matchmaker", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x28%20-%20Sonic%20the%20Matchmaker.mp4"]
	]],
	["S01E29", "Attack on Pinball Fortress", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x29%20-%20Attack%20on%20Pinball%20Fortress.mp4"]
	]],
	["S01E30", "The Last Resort", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x30%20-%20The%20Last%20Resort.mp4"]
	]],
	["S01E31", "Coachnik", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x31%20-%20Coachnik.mp4"]
	]],
	["S01E32", "Sonic Gets Thrashed", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x32%20-%20Sonic%20Gets%20Thrashed.mp4"]
	]],
	["S01E33", "Close Encounter of the Sonic Kind", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x33%20-%20Close%20Encounter%20of%20the%20Sonic%20Kind.mp4"]
	]],
	["S01E34", "Tails Prevails", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x34%20-%20Tails%20Prevails.mp4"]
	]],
	["S01E35", "Robotnik, Jr.", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X35%20-%20Robotnik%2C%20Jr..mp4"]
	]],
	["S01E36", "The Magic Hassle", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x36%20-%20The%20Magic%20Hassle.mp4"]
	]],
	["S01E37", "Black Bot the Pirate", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x37%20-%20Black%20Bot%20the%20Pirate.mp4"]
	]],
	["S01E38", "Hedgehog of the 'Hound' Table", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x38%20-%20Hedgehog%20of%20the%20%60Hound%60%20Table.mp4"]
	]],
	["S01E39", "Robotnik's Pyramid Scheme", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x39%20-%20Robotnik%60s%20Pyramid%20Scheme.mp4"]
	]],
	["S01E40", "Prehistoric Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X40%20-%20Prehistoric%20Sonic.mp4"]
	]],
	["S01E41", "Untouchable Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x41%20-%20Untouchable%20Sonic.mp4"]
	]],
	["S01E42", "Sonic Breakout", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x42%20-%20Sonic%20Breakout.mp4"]
	]],
	["S01E43", "Sonically Ever After", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X43%20-%20Sonically%20Ever%20After.mp4"]
	]],
	["S01E44", "The Mystery of the Missing Hi-tops", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X44%20-%20The%20Mystery%20Of%20The%20Missing%20Hi-Tops.mp4"]
	]],
	["S01E45", "Super Robotnik", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x45%20-%20Super%20Robotnik.mp4"]
	]],
	["S01E46", "Mass Transit Trouble", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x46%20-%20Mass%20Transit%20Trouble.mp4"]
	]],
	["S01E47", "Spaceman Sonic", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X47%20-%20Spaceman%20Sonic.mp4"]
	]],
	["S01E48", "MacHopper", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X48%20-%20Machopper.mp4"]
	]],
	["S01E49", "Baby-Sitter Jitters", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X49%20-%20Baby-Sitter%20Jitters.mp4"]
	]],
	["S01E50", "Full Tilt Tails", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X50%20-%20Full%20Tilt%20Tails.mp4"]
	]],
	["S01E51", "Lifestyles of the Sick and Twisted", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X51%20-%20Lifestyles%20Of%20The%20Sick%20And%20Twisted.mp4"]
	]],
	["S01E52", "Road Hog", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X52%20-%20Road%20Hog.mp4"]
	]],
	["S01E53", "The Mobius 5000", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X53%20-%20The%20Mobius%205000.mp4"]
	]],
	["S01E54", "Honey, I Shrunk the Hedgehog", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X54%20-%20Honey%2C%20I%20Shrunk%20The%20Hedgehog.mp4"]
	]],
	["S01E55", "Sonic's Song", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x55%20-%20Sonic%60s%20Song.mp4"]
	]],
	["S01E56", "Sno Problem", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X56%20-%20Sno%20Problem.mp4"]
	]],
	["S01E57", "Sonic is Running", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X57%20-%20Sonic%20Is%20Running.mp4"]
	]],
	["S01E58", "Mad Mike, Da Bear Warrior", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20of%20Sonic%20the%20Hedgehog%20-%2001x58%20-%20Mad%20Mike%2C%20Da%20Bear%20Warrior.mp4"]
	]],
	["S01E59", "Robotnikland", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X59%20-%20Robotnikland.mp4"]
	]],
	["S01E60", "The Little Merhog", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X60%20-%20The%20Little%20Merhog.mp4"]
	]],
	["S01E61", "Robo-Ninjas", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X61%20-%20Robo-Ninjas.mp4"]
	]],
	["S01E62", "Fast and Easy", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X62%20-%20Fast%20And%20Easy.mp4"]
	]],
	["S01E63", "Tails' Tale", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X63%20-%20Tails%60%20Tale.mp4"]
	]],
	["S01E64", "The Robots' Robot", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X64%20-%20The%20Robot%60S%20Robot.mp4"]
	]],
	["S01E65", "Hero of the Year", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2001X65%20-%20Hero%20Of%20The%20Year.mp4"]
	]],

	/*	---------  */
	/*	SPECIALS  */
	/*	---------  */
	["Special", "Sonic Christmas Blast", [
		["480p", "Archive.org", "https://ia601305.us.archive.org/1/items/adventures-of-sonic-the-hedgehog-01-x-44-the-mystery-of-the-missing-hi-tops_202402/AOSTH%20Episodes%20%28%2B%20Special%20and%20Pilot%29/Adventures%20Of%20Sonic%20The%20Hedgehog%20-%2000X01%20-%20Sonic%20Christmas%20Blast.mp4"]
	]]
]