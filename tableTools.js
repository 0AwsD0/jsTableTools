//Deletes rows based on text in selected td -> text equal to | btw. love that lengthy name - feels like JavaScript XD
function delRowsTdTextConditionEqualTo(row_selector_string, td_selector_string, condition_string){
	rows = document.querySelectorAll(row_selector_string);
	td =  document.querySelectorAll(td_selector_string);
	for(i = 0; i < rows.length; i++){
		if(td[i].innerText == condition_string){
			rows[i].remove();
		}
	}
}
//Example below
delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");