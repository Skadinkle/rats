/*	SOURCES:
	https://archive.org/download/spider-mantheanimatedseries
*/
const videoDataList = [
	/*	---------  */
	/*	SEASON 01  */
	/*	---------  */
	["S01E01", "Night of the Lizard", [
		["1080p AI Upscale", "Archive.org [.mkv]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAxJTIwTmlnaHQlMjBvZiUyMHRoZSUyMExpemFyZC5ta3Y="],
		["1080p AI Upscale", "Archive.org [.mp4]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAxJTIwTmlnaHQlMjBvZiUyMHRoZSUyMExpemFyZC5tcDQ="]
	]],
	["S01E02", "The Spider Slayer", [
		["1080p AI Upscale", "Archive.org [.mkv]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAyJTIwVGhlJTIwU3BpZGVyJTIwU2xheWVyLm1rdg=="],
		["1080p AI Upscale", "Archive.org [.mp4]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAyJTIwVGhlJTIwU3BpZGVyJTIwU2xheWVyLm1wNA=="]
	]],
	["S01E03", "Return of the Spider Slayers", [
		["1080p AI Upscale", "Archive.org [.mkv]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAzJTIwUmV0dXJuJTIwb2YlMjB0aGUlMjBTcGlkZXIlMjBTbGF5ZXJzLm1rdg=="],
		["1080p AI Upscale", "Archive.org [.mp4]", "YXJjaGl2ZS5vcmcvZG93bmxvYWQvc3BpZGVyLW1hbnRoZWFuaW1hdGVkc2VyaWVzLzAxeDAzJTIwUmV0dXJuJTIwb2YlMjB0aGUlMjBTcGlkZXIlMjBTbGF5ZXJzLm1wNA=="]
	]],
	["S01E04", "Doctor Octopus - Armed and Dangerous", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E05", "The Menace of Mysterio", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E06", "The Sting of the Scorpion", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E07", "Kraven The Hunter", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E08", "The Alien Costume <i>(Part 1)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E09", "The Alien Costume <i>(Part 2)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E10", "The Alien Costume <i>(Part 3)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E11", "The Hobgoblin <i>(Part 1)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E12", "The Hobgoblin <i>(Part 2)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S01E13", "Day of the Chameleon", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],

	/*	---------  */
	/*	SEASON 02  */
	/*	---------  */
	["S02E01", "The Insidious Six", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E02", "Battle of the Insidious Six", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E03", "Hydro-Man", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E04", "The Mutant Agenda", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E05", "Mutants' Revenge", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E06", "Morbius", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E07", "Enter the Punisher", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E08", "Duel of the Hunters", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E09", "Blade, The Vampire Hunter", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E10", "The Immortal Vampire", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E11", "Tablet of Time", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E12", "Ravages of Time", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E13", "Shriek of the Vulture", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S02E14", "The Final Nightmare", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],

	/*	---------  */
	/*	SEASON 03  */
	/*	---------  */
	["S03E01", "Doctor Strange", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E02", "Make A Wish", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E03", "Attack of the Octobot", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E04", "Enter the Green Goblin", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E05", "The Rocket Racer", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E06", "Framed", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E07", "The Man Without Fear", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E08", "The Ultimate Slayer", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E09", "Tombstone", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E10", "Venom Returns", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E11", "Carnage", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E12", "The Spot", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E13", "Goblin War", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S03E14", "Turning Point", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],

	/*	---------  */
	/*	SEASON 04  */
	/*	---------  */
	["S04E01", "Guilty", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E02", "The Cat", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E03", "The Black Cat", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E04", "The Return of Kraven", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E05", "Partners", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E06", "The Awakening", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E07", "The Vampire Queen", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E08", "The Return of the Green Goblin", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E09", "The Haunting of Mary Jane Watson", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E10", "The Lizard King", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S04E11", "The Prowler", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],

	/*	---------  */
	/*	SEASON 05  */
	/*	---------  */
	["S05E01", "The Wedding", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E02", "Six Forgotten Warriors", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E03", "Unclaimed Legacy", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E04", "Secrets of the Six", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E05", "The Six Fighters Again", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E06", "The Price of Heroism", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E07", "The Return of Hydro-Man <i>(Part 1)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E08", "The Return of Hydro-Man <i>(Part 2)</i>", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E09", "Arrival", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E10", "The Gauntlet of the Red Skull", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E11", "Doom", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E12", "I Really, Really Hate Clones", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]],
	["S05E13", "Farewell, Spider-Man", [
		["1080p AI Upscale", "Archive.org [.mkv]", ""],
		["1080p AI Upscale", "Archive.org [.mp4]", ""]
	]]
];