var allimg = document.querySelectorAll(".sgds-image img")
for (var x in allimg) {
	var aspectratio = allimg[x].naturalWidth / allimg[x].naturalHeight
	var paddingno = aspectratio * 6
	var paddingstring = paddingno.toString() + "px"
	if (aspectratio < 3.5) {
		document.querySelectorAll(".sgds-image")[x].style.padding = paddingstring
	} else {
		document.querySelectorAll(".sgds-image")[x].style.padding = "25px"
	}
}
