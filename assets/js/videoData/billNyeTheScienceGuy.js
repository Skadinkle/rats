/*	SOURCES:
	https://archive.org/details/billnyethescienceguythecompleteseries-07-28-2021
	https://archive.org/download/BNTSG_2
*/
const videoDataList = [
	/*	---------  */
	/*	PILOTS  */
	/*	---------  */
	["Bill Nye the Science Guy", "", [["", "", ""]]],
	["Water", "", [["", "", ""]]],

	/*	---------  */
	/*	SEASON 01  */
	/*	---------  */
	["S01E01", "Flight", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/01%20Flight.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/01%20Flight.mp4"]
	]],
	["S01E02", "Earth's Crust", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/02%20Earth%27s%20Crust.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/02%20Earth%27s%20Crust.mp4"]
	]],
	["S01E03", "Dinosaurs", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/03%20Dinosaurs.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/03%20Dinosaurs.mp4"]
	]],
	["S01E04", "Skin", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/04%20Skin.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/04%20Skin.mp4"]
	]],
	["S01E05", "Buoyancy", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/05%20Buoyancy.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/05%20Buoyancy.mp4"]
	]],
	["S01E06", "Gravity", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/06%20Gravity.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/06%20Gravity.mp4"]
	]],
	["S01E07", "Digestion", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/07%20Digestion.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/07%20Digestion.mp4"]
	]],
	["S01E08", "Phases of Matter", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/08%20Phases%20of%20Matter.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/08%20Phases%20of%20Matter.mp4"]
	]],
	["S01E09", "Biodiversity", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/09%20Biodiversity.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/09%20Biodiversity.mp4"]
	]],
	["S01E10", "Simple Machines", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/10%20Simple%20Machines.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/10%20Simple%20Machines.mp4"]
	]],
	["S01E11", "The Moon", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/11%20The%20Moon.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/11%20The%20Moon.mp4"]
	]],
	["S01E12", "Sound", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/12%20Sound.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/12%20Sound.mp4"]
	]],
	["S01E13", "Garbage", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/13%20Garbage.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/13%20Garbage.mp4"]
	]],
	["S01E14", "Structures", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/14%20Structures.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/14%20Structures.mp4"]
	]],
	["S01E15", "Earth's Seasons", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/15%20Earth%20Seasons.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/15%20Earth%20Seasons.mp4"]
	]],
	["S01E16", "Light & Color", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/16%20Light%20and%20Color.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/16%20Light%20and%20Color.mp4"]
	]],
	["S01E17", "Cells", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/17%20Cells.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/17%20Cells.mp4"]
	]],
	["S01E18", "Electricity", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/18%20Electricity.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/18%20Electricity.mp4"]
	]],
	["S01E19", "Outer Space", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/19%20Outer%20Space.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/19%20Outer%20Space.mp4"]
	]],
	["S01E20", "Eyeball", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/20%20Eyeball.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/20%20Eyeball.mp4"]
	]],
	["S01E21", "Magnetism", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/21%20Magnetism.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/21%20Magnetism.mp4"]
	]],
	["S01E22", "Wind", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/22%20Wind.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/22%20Wind.mp4"]
	]],
	["S01E23", "Blood & Circulation", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/23%20Blood%20%26%20Circulation.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/23%20Blood%20%26%20Circulation.mp4"]
	]],
	["S01E24", "Chemical Reactions", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/24%20Chemical%20Reactions.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/24%20Chemical%20Reactions.mp4"]
	]],
	["S01E25", "Static Electricity", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/25%20Static%20Electricity.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/25%20Static%20Electricity.mp4"]
	]],
	["S01E26", "Food Web", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/26%20Food%20Web.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/26%20Food%20Web.mp4"]
	]],

	/*	---------  */
	/*	SEASON 02  */
	/*	---------  */
	["S02E01", "Light Optics, Bending", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/27%20Light%20Optics.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/27%20Light%20Optics.mp4"]
	]],
	["S02E02", "Bones & Muscles", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/28%20Bones%20%26%20Muscles.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/28%20Bones%20%26%20Muscles.mp4"]
	]],
	["S02E03", "Oceanography", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/29%20Ocean%20Currents.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/29%20Ocean%20Currents.mp4"]
	]],
	["S02E04", "Heat", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/30%20Heat.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/30%20Heat.mp4"]
	]],
	["S02E05", "Insects", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/31%20Insects.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/31%20Insects.mp4"]
	]],
	["S02E06", "Balance", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/32%20Balance.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/32%20Balance.mp4"]
	]],
	["S02E07", "The Sun", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/33%20Sun.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/33%20Sun.mp4"]
	]],
	["S02E08", "Brain", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/34%20Brain.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/34%20Brain.mp4"]
	]],
	["S02E09", "Forests", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/35%20Forest.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/35%20Forest.mp4"]
	]],
	["S02E10", "Communication", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/36%20Communication.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/36%20Communication.mp4"]
	]],
	["S02E11", "Momentum", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/37%20Momentum.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/37%20Momentum.mp4"]
	]],
	["S02E12", "Reptiles", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/38%20Reptiles.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/38%20Reptiles.mp4"]
	]],
	["S02E13", "Atmosphere", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/39%20Atmosphere.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/39%20Atmosphere.mp4"]
	]],
	["S02E14", "Respiration", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/40%20Respiration.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/40%20Respiration.mp4"]
	]],
	["S02E15", "Planets & Moons", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/41%20Planets.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/41%20Planets.mp4"]
	]],
	["S02E16", "Pressure", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/42%20Pressure.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/42%20Pressure.mp4"]
	]],
	["S02E17", "Plants", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/43%20Plants.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/43%20Plants.mp4"]
	]],
	["S02E18", "Rocks & Soil", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/44%20Rocks%20%26%20Soil.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/44%20Rocks%20%26%20Soil.mp4"]
	]],
	["S02E19", "Energy", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/45%20Energy.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/45%20Energy.mp4"]
	]],
	["S02E20", "Evolution", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/46%20Evolution.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/46%20Evolution.mp4"]
	]],
	["S02E21", "Water Cycle", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/47%20Water%20Cycle.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/47%20Water%20Cycle.mp4"]
	]],
	["S02E22", "Friction", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/48%20Friction.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/48%20Friction.mp4"]
	]],
	["S02E23", "Germs", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/49%20Germs.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/49%20Germs.mp4"]
	]],
	["S02E24", "Climates", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/50%20Climate.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/50%20Climate.mp4"]
	]],
	["S02E25", "Waves", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/51%20Waves.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/51%20Waves.mp4"]
	]],
	["S02E26", "Ocean Life", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/52%20Ocean%20Life.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/52%20Ocean%20Life.mp4"]
	]],

	/*	---------  */
	/*	SEASON 03  */
	/*	---------  */
	["S03E01", "Mammals", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/53%20Mammals.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/53%20Mammals.mp4"]
	]],
	["S03E02", "Spinning Things", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/54%20Spinning%20Things.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/54%20Spinning%20Things.mp4"]
	]],
	["S03E03", "Fish", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/55%20Fish.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/55%20Fish.mp4"]
	]],
	["S03E04", "Human Transportation", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/56%20Human%20Transportation.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/56%20Human%20Transportation.mp4"]
	]],
	["S03E05", "Wetlands", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/57%20Wetlands.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/57%20Wetlands.mp4"]
	]],
	["S03E06", "Birds", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/58%20Birds.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/58%20Birds.mp4"]
	]],
	["S03E07", "Populations", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/59%20Populations.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/59%20Populations.mp4"]
	]],
	["S03E08", "Animal Locomotion", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/60%20Animal%20Locomotion.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/60%20Animal%20Locomotion.mp4"]
	]],
	["S03E09", "Earthquakes", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/64%20Earthquakes.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/64%20Earthquakes.mp4"]
	]],
	["S03E10", "NTV Top 11 Countdown", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/65%20NTV%20Top%2011%20Countdown.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/65%20NTV%20Top%2011%20Countdown.mp4"]
	]],
	["S03E11", "Nutrition", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/62%20Nutrition.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/62%20Nutrition.mp4"]
	]],
	["S03E12", "Marine Mammals", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/63%20Marine%20Mammals.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/63%20Marine%20Mammals.mp4"]
	]],
	["S03E13", "Rivers & Streams", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/61%20Rivers%20and%20Streams.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/61%20Rivers%20and%20Streams.mp4"]
	]],

	/*	---------  */
	/*	SEASON 04  */
	/*	---------  */
	["S04E01", "Spiders", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/66%20Spiders.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/66%20Spiders.mp4"]
	]],
	["S04E02", "Pollution Solutions", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/67%20Pollution%20Solutions.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/67%20Pollution%20Solutions.mp4"]
	]],
	["S04E03", "Probability", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/68%20Probability.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/68%20Probability.mp4"]
	]],
	["S04E04", "Pseudoscience", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/69%20Pseudoscience.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/69%20Pseudoscience.mp4"]
	]],
	["S04E05", "Flowers", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/70%20Flowers.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/70%20Flowers.mp4"]
	]],
	["S04E06", "Archaeology", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/71%20Archaeology.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/71%20Archaeology.mp4"]
	]],
	["S04E07", "Deserts", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/72%20Deserts.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/72%20Deserts.mp4"]
	]],
	["S04E08", "Amphibians", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/73%20Amphibians.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/73%20Amphibians.mp4"]
	]],
	["S04E09", "Volcanoes", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/74%20Volcanoes.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/74%20Volcanoes.mp4"]
	]],
	["S04E10", "Invertebrates", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/75%20Invertebrates.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/75%20Invertebrates.mp4"]
	]],
	["S04E11", "Heart", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/76%20Heart.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/76%20Heart.mp4"]
	]],
	["S04E12", "Inventions", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/77%20Inventing.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/77%20Inventing.mp4"]
	]],
	["S04E13", "Computers", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/78%20Computers.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/78%20Computers.mp4"]
	]],

	/*	---------  */
	/*	SEASON 05  */
	/*	---------  */
	["S05E01", "Fossils", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/79%20Fossils.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/79%20Fossils.mp4"]
	]],
	["S05E02", "Space Exploration", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/82%20Space%20Exploration.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/82%20Space%20Exploration.mp4"]
	]],
	["S05E03", "Forensics", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/81%20Forensics.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/81%20Forensics.mp4"]
	]],
	["S05E04", "Time", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/80%20Time.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/80%20Time.mp4"]
	]],
	["S05E05", "Genes", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/83%20Genes.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/83%20Genes.mp4"]
	]],
	["S05E06", "Architecture", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/84%20Architecture.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/84%20Architecture.mp4"]
	]],
	["S05E07", "Farming", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/85%20Farming.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/85%20Farming.mp4"]
	]],
	["S05E08", "Life Cycles", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/86%20Life%20Cycles.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/86%20Life%20Cycles.mp4"]
	]],
	["S05E09", "Do-It-Yourself Science", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/87%20Do-It-Yourself%20Science.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/87%20Do-It-Yourself%20Science.mp4"]
	]],
	["S05E10", "Atoms", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/88%20Atoms%20%26%20Molecules.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/88%20Atoms%20%26%20Molecules.mp4"]
	]],
	["S05E11", "Ocean Exploration", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/89%20Ocean%20Exploration.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/89%20Ocean%20Exploration.mp4"]
	]],
	["S05E12", "Lakes & Ponds", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/90%20Lakes%20%26%20Ponds.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/90%20Lakes%20%26%20Ponds.mp4"]
	]],
	["S05E13", "Smell", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/91%20Smell.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/91%20Smell.mp4"]
	]],
	["S05E14", "Caves", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/92%20Caves.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/92%20Caves.mp4"]
	]],

	/*	---------  */
	/*	SEASON 06  */
	/*	---------  */
	["S06E01", "Comets & Meteors", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/95%20Comets%20%26%20Meteors.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/95%20Comets%20%26%20Meteors.mp4"]
	]],
	["S06E02", "Fluids", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/93%20Fluids.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/93%20Fluids.mp4"]
	]],
	["S06E03", "Storms", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/96%20Storms.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/96%20Storms.mp4"]
	]],
	["S06E04", "Erosion", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/94%20Erosion.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/94%20Erosion.mp4"]
	]],
	["S06E05", "Music", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/99%20Science%20of%20Music.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/99%20Science%20of%20Music.mp4"]
	]],
	["S06E06", "Measurement", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/97%20Measurement.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/97%20Measurement.mp4"]
	]],
	["S06E07", "Patterns", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/98%20Patterns.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/98%20Patterns.mp4"]
	]],
	["S06E08", "Motion", [
		["368p", "Archive.org [.avi]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/100%20Motion.avi"],
		["368p", "Archive.org [.mp4]", "https://ia804508.us.archive.org/11/items/billnyethescienceguythecompleteseries-07-28-2021/100%20Motion.mp4"]
	]]
]