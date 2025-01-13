/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	MAIN DEBUGGER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let debugMode = localStorage.getItem("rats_debugMode") === "true";
window.addEventListener("keydown", function(event) {

	const activeElement = document.activeElement;
	if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") return;

	if (event.key === "0") {promptDebugger();}
	if (debugMode) {
		if (event.key === "1") {loadSplash(true);} // Splash Re-Roll
		if (event.key === "2") {promptDataErase();} // Clear All Data
		if (event.key === "3") {promptTheme();} // Change Theme
		if (event.key === "4") {promptBrand();} // Change Brand
		if (event.key === "6") {awardTrophy("TEST");} // Achievement Test
		if (event.key === "Tab") {event.preventDefault(); event.stopPropagation(); toggleTerminal();}

		if (event.key === "p") {loadGame("bobsAdventure");} // Bob's Adventure Test
		if (event.key === "f") {loadGame("funked");} // Funked
	}
});
function promptDebugger() {
	const action = debugMode ? "disable" : "enable";
	const message = debugMode ? "RatDev v2.0: Disabled\nThank you for using RatDev." : "RatDev v2.0: Enabled\nUSE WITH CAUTION!";
	const confirmationMessage = `Do you wish to ${action} Debug Mode?${debugMode ? "" : "\nThis may break some features."}`;
	if (confirm(confirmationMessage)) {
		alert(message);
		debugMode = !debugMode;
		localStorage.setItem("rats_debugMode", debugMode.toString());
	}
	loadDeviceStats(debugMode);
}

	// Functions
function promptDataErase() {
	if (window.confirm("This will erase all of your data on RATS.\nClick 'Cancel' if you do not wish to do so.") !== false) {
		for (let i = localStorage.length - 1; i >= 0; i--) {
			const key = localStorage.key(i);
			if (key.startsWith("rats_")) localStorage.removeItem(key);
		}
		window.location.reload();
		alert("Data Reset");
	}
}
function promptTheme() {
	const themePrompt = prompt("Enter Theme Name:", "default");
	if (themePrompt) {
		onThemeSelect(themePrompt);
		localStorage.rats_pageTheme = themePrompt;
	}
}
function promptBrand() {
	const brandPrompt = prompt("Enter Brand Name:", "clever,1");
	if (brandPrompt) {
		const [name, number] = brandPrompt.split(",").map(part => part.trim());
		onTabBranding(name || "clever", isNaN(number) ? 1 : parseInt(number, 10));
		localStorage.rats_tabBranding = brandPrompt;
	}
}
function loadGame(gameName) {
	gameMain = document.createElement("script");
	gameMain.src = `./assets/js/secret/${gameName}Main.js`;
	document.head.appendChild(gameMain);
}
/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	INFO SIDE PANEL  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const infolist = [
`App Version: ${navigator.appVersion}
Browser Name: ${navigator.appName}
Browser Engine: ${navigator.product}
Charset: ${document.charset}
Color Depth: ${window.screen.colorDepth}
Content Type: ${document.contentType}
Cookies Enabled: ${navigator.cookieEnabled}
Languages: ${navigator.language}
Memory: ${navigator.deviceMemory}
Operating System: ${navigator.platform}
Orientation: ${window.screen.orientation.type}
Orientation Angle: ${window.screen.orientation.angle}
Screen Ratio: ${window.screen.availHeight / window.screen.availWidth}
Screen Size: ${window.screen.availWidth}x${window.screen.availHeight}px
System Languages: ${navigator.languages.join(", ")}
Threads: ${navigator.hardwareConcurrency}
Window Prop: ${Object.keys(window).length}
Window Ratio: ${window.innerWidth / window.innerHeight}
Window Size: ${window.innerWidth}x${window.innerHeight}px

Page Theme: ${localStorage.rats_pageTheme}
Tab Branding: ${localStorage.rats_tabBranding}

PAGE LOADED ON ${new Date()}`];
function loadDeviceStats(debugMode) {
	const stats = document.getElementById("debugStats");
	if (debugMode) {
		const stats = document.createElement("pre");
		stats.id = "debugStats";
		stats.innerText = infolist;
		document.body.appendChild(stats);
	} else if (!debugMode) if (stats) stats.remove();
}
loadDeviceStats(debugMode);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	TERMINAL  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let terminalOutput = document.getElementById("terminalOutput");
let isTerminalVisible = false;
function addTerminal() {
	const terminal = document.createElement("div");
	terminal.id = "terminal";
	const terminalInput = document.createElement("textarea");
	terminalInput.id = "terminalInput";
	terminal.appendChild(terminalInput);
	document.body.appendChild(terminal);
}
addTerminal();
function toggleTerminal() {
	isTerminalVisible = !isTerminalVisible;
	isTerminalVisible ? (terminal.classList.add("active"), terminalInput.focus()) : (terminal.classList.remove("active"), terminalInput.blur());
	if (document.getElementById("terminalOutput") && !isTerminalVisible) terminalOutput.innerHTML = "";
}
terminalInput.addEventListener("keydown", function(event) {
	if (event.key === "Tab") {event.preventDefault(); event.stopPropagation(); toggleTerminal();}
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		try {
			const result = eval(terminalInput.value);
			logOutput(result);
		} catch (error) {
			logOutput(`Error: ${error.message}`);
		}
		terminalInput.value = "";
	}
});
function logOutput(output) {
	if (!terminalOutput) {
		terminalOutput = document.createElement("div");
		terminalOutput.id = "terminalOutput";
		terminal.parentNode.insertBefore(terminalOutput, terminal.nextSibling);
	}
	if (output === undefined) {
		terminalOutput.textContent = "";
		return;
	}
	terminalOutput.innerHTML = `<pre>> ${output}</pre>`;
}