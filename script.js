function startIntro() {
	const introContainer = document.getElementById("intro-container");
	const introImage = introContainer.querySelector("img");

	// Hide the introContainer after 3.9 seconds
	setTimeout(function() {
		introContainer.style.display = "none";
		document.getElementById("homepage-container").style.display = "block";
	}, 3900)

	// Start the GIF from the beginning on page load
	introImage.src = introImage.src;
}

