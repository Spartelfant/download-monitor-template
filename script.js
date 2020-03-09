document.addEventListener('DOMContentLoaded', (event) => {
	let myLabels = document.querySelectorAll('.collapsible-lbl');
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
	let parentTable = getNearestTableAncestor(masterToggler);
	if (parentTable) {
		let masterState = masterToggler.checked;
		let checkboxes = parentTable.getElementsByTagName('input');
		for (let i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].type === 'checkbox') {
				checkboxes[i].checked = masterState;
			}
		}
	}
}
