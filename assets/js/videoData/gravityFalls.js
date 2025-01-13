/*	SOURCES:
PILOTS:
	https://archive.org/details/youtube-fI-CeNsOpkI
	https://archive.org/details/youtube_aQzfZSRcDlA_1920x1080_h264
	https://archive.org/details/GFPilot2010
	https://archive.org/details/youtube-JqbWn8TCy_A
	https://archive.org/details/gravity-falls-2010-reel
	https://archive.org/details/next-time-on
	https://archive.org/details/Gravityfallspilotthing
	https://archive.org/details/next-time-on-gravity-falls-1080p-24fps-h-264-128kbit-aac

SEASON 1:
	https://www.youtube.com/playlist?list=PLg6R6yXKSLYBomPPcqXGzaQI0pCZc8uZA
*/
const videoDataList = [
	/*	---------  */
	/*	PILOTS  */
	/*	---------  */
	["Pilot", "", [
		["360p", "Archive.org [.mkv]", "https://ia600506.us.archive.org/30/items/youtube-fI-CeNsOpkI/Gravity_Falls_-_Pilot-fI-CeNsOpkI.mkv"],
		["360p", "Archive.org [.mp4] (1)", "https://ia800506.us.archive.org/30/items/youtube-fI-CeNsOpkI/Gravity_Falls_-_Pilot-fI-CeNsOpkI.mp4"],
		["360p", "Archive.org [.mp4] (2)", "https://ia600808.us.archive.org/19/items/GFPilot2010/4aa8fed619360a69340f00b9f11f44ba.mp4"],
		["360p", "Archive.org [.mp4] (3)", "https://ia800506.us.archive.org/1/items/youtube-JqbWn8TCy_A/Gravity_Falls_Pilot-JqbWn8TCy_A.mp4"],
		["360p", "Archive.org [.ogv] (1)", "https://ia600506.us.archive.org/30/items/youtube-fI-CeNsOpkI/Gravity_Falls_-_Pilot-fI-CeNsOpkI.ogv"],
		["360p", "Archive.org [.ogv] (2)", "https://ia600808.us.archive.org/19/items/GFPilot2010/4aa8fed619360a69340f00b9f11f44ba.ogv"],
		["1080p", "Archive.org", "https://ia600700.us.archive.org/17/items/youtube_aQzfZSRcDlA_1920x1080_h264/youtube_aQzfZSRcDlA_1920x1080_h264.mp4"],
		["1080p Upscale", "YouTube", "https://www.youtube.com/embed/5BrZ4OF-_pM"]
		//https://ia800808.us.archive.org/view_archive.php?archive=/19/items/GFPilot2010/GFPilot.zip&file=4aa8fed619360a69340f00b9f11f44ba.mp4
	]],
	["Next Time On Gravity Falls", "", [
		["720p", "Archive.org (1)", "https://ia904705.us.archive.org/5/items/gravity-falls-2010-reel/Next%20Time%20On%20Gravity%20Falls%20%28FULL%202010%20REEL%29.mp4"],
		["720p", "Archive.org (2)", "https://ia800306.us.archive.org/0/items/next-time-on/Next%20Time%20On.mp4"],
		["720p", "Archive.org (3)", "https://ia800306.us.archive.org/7/items/Gravityfallspilotthing/jZaxJsLtvq5j0VCv.mp4"],
		["1080p", "Archive.org [.ia.mp4]", "https://ia800305.us.archive.org/7/items/next-time-on-gravity-falls-1080p-24fps-h-264-128kbit-aac/Next%20Time%20On%20Gravity%20Falls%20%281080p_24fps_H264-128kbit_AAC%29.ia.mp4"],
		["1080p", "Archive.org [.mp4]", "https://ia600305.us.archive.org/7/items/next-time-on-gravity-falls-1080p-24fps-h-264-128kbit-aac/Next%20Time%20On%20Gravity%20Falls%20%281080p_24fps_H264-128kbit_AAC%29.mp4"]
	]],

	/*	---------  */
	/*	SEASON 01  */
	/*	---------  */
	["S01E01", "Tourist Trapped", [
		["1080p", "YouTube", "https://www.youtube.com/embed/o2E2wLm_LlY"]
	]],
	["S01E02", "The Legend of the Gobblewonker", [
		["1080p", "YouTube", "https://www.youtube.com/embed/vvgGISTij8Q"]
	]],
	["S01E03", "Headhunters", [
		["1080p", "YouTube", "https://www.youtube.com/embed/RFD_Zh3C7bg"]
	]],
	["S01E04", "The Hand That Rocks the Mabel", [
		["1080p", "YouTube", "https://www.youtube.com/embed/zRxlL8Dx0lI"]
	]],
	["S01E05", "The Inconveniencing", [
		["1080p", "YouTube", "https://www.youtube.com/embed/ZWDASfJxOMk"]
	]],
	["S01E06", "Dipper vs. Manliness", [
		["1080p", "YouTube", "https://www.youtube.com/embed/TNKmB5p8irI"]
	]],
	["S01E07", "Double Dipper", [
		["1080p", "YouTube", "https://www.youtube.com/embed/B-3rQ1dL2og"]
	]],
	["S01E08", "Irrational Treasure", [
		["1080p", "YouTube", "https://www.youtube.com/embed/DEjQK3vU0Hw"]
	]],
	["S01E09", "The Time Traveler's Pig", [
		["1080p", "YouTube", "https://www.youtube.com/embed/b-44BWPa_8k"]
	]],
	["S01E10", "Fight Fighters", [
		["1080p", "YouTube", "https://www.youtube.com/embed/yv9tsvrZMU4"]
	]],
	["S01E11", "Little Dipper", [
		["1080p", "YouTube", "https://www.youtube.com/embed/E0jwGBtugK0"]
	]],
	["S01E12", "Summerween", [
		["1080p", "YouTube", "https://www.youtube.com/embed/-SNEwiG98SM"]
	]],
	["S01E13", "Boss Mabel", [
		["1080p", "YouTube", "https://www.youtube.com/embed/J7jzSA17skU"]
	]],
	["S01E14", "Bottomless Pit!", [
		["1080p", "YouTube", "https://www.youtube.com/embed/UdGZf8Xm2qc"]
	]],
	["S01E15", "The Deep End", [
		["1080p", "YouTube", "https://www.youtube.com/embed/Jt4CsE-gmyQ"]
	]],
	["S01E16", "Carpet Diem", [
		["1080p", "YouTube", "https://www.youtube.com/embed/Ds4iNL9tlW0"]
	]],
	["S01E17", "Boyz Crazy", [
		["1080p", "YouTube", "https://www.youtube.com/embed/yfkp_O9lGY0"]
	]],
	["S01E18", "Land Before Swine", [
		["1080p", "YouTube", "https://www.youtube.com/embed/k6S8EoLa5Wg"]
	]],
	["S01E19", "Dreamscapers <i>(Part 1)</i>", [
		["1080p", "YouTube", "https://www.youtube.com/embed/DjpXZbF-qrg"]
	]],
	["S01E20", "Gideon Rises <i>(Part 2)</i>", [
		["1080p", "YouTube", "https://www.youtube.com/embed/VMMhwsHDh00"]
	]],

	/*	---------  */
	/*	SEASON 02  */
	/*	---------  */
	["S02E01", "Scary-oke", [["", "", ""]]],
	["S02E02", "Into the Bunker", [["", "", ""]]],
	["S02E03", "The Golf War", [["", "", ""]]],
	["S02E04", "Sock Opera", [["", "", ""]]],
	["S02E05", "Soos and the Real Girls", [["", "", ""]]],
	["S02E06", "Little Gift Shop of Horrors", [["", "", ""]]],
	["S02E07", "Society of the Blind Eye", [["", "", ""]]],
	["S02E08", "Blendin's Game", [["", "", ""]]],
	["S02E09", "The Love God", [["", "", ""]]],
	["S02E10", "Northwest Mansion Mystery", [["", "", ""]]],
	["S02E11", "Not What He Seems", [["", "", ""]]],
	["S02E12", "A Tale of Two Stans", [["", "", ""]]],
	["S02E13", "Dungeons, Dungeons, & More Dungeons", [["", "", ""]]],
	["S02E14", "The Stanchurian Candidate", [["", "", ""]]],
	["S02E15", "The Last Mabelcorn", [["", "", ""]]],
	["S02E16", "Roadside Attraction", [["", "", ""]]],
	["S02E17", "Dipper and Mabel vs. the Future", [["", "", ""]]],
	["S02E18", "Weirdmageddon <i>(Part 1)</i>", [["", "", ""]]],
	["S02E19", "Weirdmageddon <i>(Part 2)</i>", [["", "", ""]]],
	["S02E20", "Weirdmageddon <i>(Part 3)</i>", [["", "", ""]]]
]