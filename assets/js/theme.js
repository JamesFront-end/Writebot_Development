"use strict";

document.addEventListener("DOMContentLoaded", function () {
	/**
	 * Theme Settings
	 */
	const themeDropdownIcon = document.getElementById("themeDropdownIcon");
	const theme = localStorage.getItem("theme");
	const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	if (theme === "dark") {
		document.body.setAttribute("data-bs-theme", "dark");
		updateThemeIcon("dark");
	} else if (theme === "light") {
		document.body.setAttribute("data-bs-theme", "light");
		updateThemeIcon("light");
	} else if (theme === "auto" && systemPrefersDark) {
		document.body.setAttribute("data-bs-theme", "dark");
		updateThemeIcon("auto");
	} else if (theme === "auto" && !systemPrefersDark) {
		document.body.setAttribute("data-bs-theme", "light");
		updateThemeIcon("auto");
	} else if (systemPrefersDark) {
		document.body.setAttribute("data-bs-theme", "dark");
		updateThemeIcon("dark");
	} else {
		document.body.setAttribute("data-bs-theme", "light");
		updateThemeIcon("light");
	}

	// Handle theme change
	const selectLightTheme = document.getElementById("lightTheme");
	if (selectLightTheme) {
		selectLightTheme.addEventListener("click", function () {
			document.body.setAttribute("data-bs-theme", "light");
			localStorage.setItem("theme", "light");
			updateThemeIcon("light");
		});
	}

	const selectDarkTheme = document.getElementById("darkTheme");
	if (selectDarkTheme) {
		selectDarkTheme.addEventListener("click", function () {
			document.body.setAttribute("data-bs-theme", "dark");
			localStorage.setItem("theme", "dark");
			updateThemeIcon("dark");
		});
	}

	const selectAutoTheme = document.getElementById("autoTheme");
	if (selectAutoTheme) {
		selectAutoTheme.addEventListener("click", function () {
			localStorage.setItem("theme", "auto");
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.body.setAttribute("data-bs-theme", "dark");
			} else {
				document.body.setAttribute("data-bs-theme", "light");
			}
			updateThemeIcon("auto");
		});
	}

	function updateThemeIcon(theme) {
		if (theme === "light" && themeDropdownIcon) {
			themeDropdownIcon.className = "bi bi-brightness-high";
		} else if (theme === "dark" && themeDropdownIcon) {
			themeDropdownIcon.className = "bi bi-moon-stars";
		} else {
			if (themeDropdownIcon) {
				themeDropdownIcon.className = "bi bi-circle-half";
			}
		}
	}
});
