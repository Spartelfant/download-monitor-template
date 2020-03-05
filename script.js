document.addEventListener('DOMContentLoaded', (event) => {
	let myLabels = document.querySelectorAll('.lbl-toggle');
	Array.from(myLabels).forEach(label => {
		label.addEventListener('keydown', e => {
			// 32 === spacebar
			// 13 === enter
			if (e.which === 32 || e.which === 13) {
				e.preventDefault();
				label.click();
			};
		});
	});
});

function getNearestTableAncestor(htmlElementNode) {
	while (htmlElementNode) {
		htmlElementNode = htmlElementNode.parentNode;
		if (htmlElementNode.tagName.toLowerCase() === 'table') {
			return htmlElementNode;
		}
	}
	return undefined;
}

function toggleExpandCollapse(masterToggler) {
	var parentTable = getNearestTableAncestor(masterToggler);
	if (parentTable) {
		var checkboxes = parentTable.getElementsByTagName('input');
		if (masterToggler.checked) {
			for (var i = 0; i < checkboxes.length; i++) {
				if (checkboxes[i].type == 'checkbox') {
					checkboxes[i].checked = true;
				}
			}
		} else {
			for (var i = 0; i < checkboxes.length; i++) {
				console.log(i)
				if (checkboxes[i].type == 'checkbox') {
					checkboxes[i].checked = false;
				}
			}
		}
	}
}
