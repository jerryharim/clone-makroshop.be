
let actual_menu_display = "none";

/* toggle element visibility */
function toggle_visibility( id, display_type_when_visible ) {
	let actual_display = document.getElementById(id).style.display;

	if (actual_display === "none" || actual_display === "") {
		actual_display = display_type_when_visible;
	} else { 
		actual_display = "none";
	}

	document.getElementById(id).style.display = actual_display;
}

function show_filter_content() {
	toggle_visibility( "filter-contents", "flex");
}
