/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	ASSETS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
var newContent = document.createElement("div");
newContent.id = "funked-hud";
newContent.innerHTML = `
	<link href="./assets/css/secret/funkedMain.css" rel="stylesheet" type="text/css"/>
	<script src="./assets/music/variations/variations-hard.js"></script>
`;
var targetImg = document.getElementById("overlay");
targetImg.parentNode.appendChild(newContent, targetImg);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SONG  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */

// Create the arrow container
const arrowContainer = document.createElement("div");
arrowContainer.className = "arrow-container";

// Define the arrow directions and their corresponding data keys
const arrows = [
	{ direction: "left", key: "A" },
	{ direction: "down", key: "S" },
	{ direction: "up", key: "W" },
	{ direction: "right", key: "D" }
];

// Create each arrow div and append it to the arrow container
arrows.forEach(arrow => {
	const arrowDiv = document.createElement("div");
	arrowDiv.className = `arrow ${arrow.direction}`;
	arrowDiv.setAttribute("data-key", arrow.key);
	arrowContainer.appendChild(arrowDiv);
});

// Create the config container
const configContainer = document.createElement("div");
configContainer.className = "config-container";

// Create labels and inputs for keybindings
arrows.forEach(arrow => {
	const label = document.createElement("label");
	label.innerHTML = `${arrow.direction.charAt(0).toUpperCase() + arrow.direction.slice(1)} Arrow Key: `;
	
	const input = document.createElement("input");
	input.type = "text";
	input.id = `key-${arrow.direction}`;
	input.maxLength = 1;

	label.appendChild(input);
	configContainer.appendChild(label);
});

// Create save button
const saveButton = document.createElement("button");
saveButton.id = "save-keybinds";
saveButton.textContent = "Save Keybinds";
configContainer.appendChild(saveButton);

// Append both containers to the body
document.body.appendChild(arrowContainer);
document.body.appendChild(configContainer);


// Default keybinds
const defaultKeybinds = {
	left: "A",
	down: "S",
	up: "W",
	right: "D"
};

// Load keybinds from localStorage or use defaults
function loadKeybinds() {
	const keybinds = JSON.parse(localStorage.getItem("keybinds")) || defaultKeybinds;
	document.getElementById("key-left").value = keybinds.left;
	document.getElementById("key-down").value = keybinds.down;
	document.getElementById("key-up").value = keybinds.up;
	document.getElementById("key-right").value = keybinds.right;
	return keybinds;
}

let keybinds = loadKeybinds();

function saveKeybinds() {
	const newKeybinds = {
		left: document.getElementById("key-left").value.toUpperCase(),
		down: document.getElementById("key-down").value.toUpperCase(),
		up: document.getElementById("key-up").value.toUpperCase(),
		right: document.getElementById("key-right").value.toUpperCase()
	};
	localStorage.setItem("keybinds", JSON.stringify(newKeybinds));
	keybinds = newKeybinds;
}

document.getElementById("save-keybinds").addEventListener("click", saveKeybinds);

function handleKey(key, isActive) {
	const direction = Object.keys(keybinds).find(direction => key === keybinds[direction]);
	if (direction) {
		const arrow = document.querySelector(`.arrow.${direction}`);
		if (arrow) {
			if (isActive) {
				arrow.classList.add("active");
			} else {
				arrow.classList.remove("active");
			}
		}
	}
}

document.addEventListener("keydown", function(event) {
const key = event.key.toUpperCase();

// Handle arrow keys
const arrowDirection = {
"ARROWLEFT": "left",
"ARROWDOWN": "down",
"ARROWUP": "up",
"ARROWRIGHT": "right"
}[key];

if (arrowDirection) {
const arrow = document.querySelector(`.arrow.${arrowDirection}`);
if (arrow) {
	arrow.classList.add("active");
}
}

// Handle other keys
handleKey(key, true);
});
document.addEventListener("keyup", function(event) {
const key = event.key.toUpperCase();

// Handle arrow keys
const arrowDirection = {
"ARROWLEFT": "left",
"ARROWDOWN": "down",
"ARROWUP": "up",
"ARROWRIGHT": "right"
}[key];

if (arrowDirection) {
const arrow = document.querySelector(`.arrow.${arrowDirection}`);
if (arrow) {
	arrow.classList.remove("active");
}
}

// Handle other keys
handleKey(key, false);
});

function onSongStart(songPath, hasVoices) {
	const instrumental = new Audio(`./assets/music/${songPath}/Inst.ogg`);
	const voices = hasVoices ? new Audio(`./assets/music/${songPath}/Voices.ogg`) : null;
	instrumental.play().then(() => {
		if (hasVoices && voices) {
			voices.loop = true;
			voices.play();
		}
	}).catch(error => {
		console.error("Error playing audio:", error);
	});
}
onSongStart("variations", true);
	   // Calculate the time between beats based on BPM
	   let beatInterval = (60 / bpm) * 1000;

	   // Function to make the camera bop
	   function cameraBop() {
		   const camera = document.documentElement;
		   // Apply the bop effect (scale or move)
		   camera.style.transform = "scale(1.05)";

		   // Return to the original position after a short delay
		   setTimeout(() => {
			   camera.style.transform = "scale(1)";
		   }, 50); // Bop duration (50ms)
	   }

	   // Start bopping when the songScript is loaded
	   function startBop() {
		   setInterval(cameraBop, beatInterval);
	   }

	   // Listen for the song script to be called
startBop()


document.addEventListener("songDataLoaded", () => {
	const backgroundPosition = {
		"0": "0 96",	// Left
		"1": "96 96",   // Down
		"2": "192 96",  // Up
		"3": "288 96"   // Right
	};

	const noteBackgroundPosition = {
		"strumline": "0 0", // Strumline note position
		"normal": "0 192"   // Regular note position
	};

	const activeArrows = new Set();

	function createNote(type, note, position, character, camera) {
		const noteElement = document.createElement("div");
		noteElement.className = `note ${type}`;
		noteElement.style.backgroundPosition = noteBackgroundPosition[type];
		noteElement.style.left = `${position * scrollSpeed}px`;
		noteElement.dataset.character = character;

		if (camera == 1) {
			noteElement.style.transform = "translateY(0)";
		} else if (camera == 2) {
			noteElement.style.transform = "translateY(-50%)";
		}

		document.querySelector(".arrow-container").appendChild(noteElement);
		activeArrows.add(noteElement); // Add note to active notes set
	}

	function hitNote() {
		// Logic for hitting a note can be added here
		// Similar to hitArrow, but for different note types
	}

	document.addEventListener("keydown", (event) => {
		const keyMap = {
			"A": "left",
			"S": "down",
			"W": "up",
			"D": "right"
		};
		const key = event.key.toUpperCase();
		if (keyMap[key]) {
			hitNote(); // Call hit function for the corresponding note
		}
	});

	function gameLoop() {
		chart.forEach(([note, position, character, camera]) => {
			if (character === "dad") {
				createNote("strumline", note, position, character, camera); // Create strumline note for dad
			} else {
				createNote("normal", note, position, character, camera); // Create normal note for other characters
			}
		});
	}

	setInterval(gameLoop, 1000 / (bpm / 60)); // Using bpm from variations-hard.js
});
