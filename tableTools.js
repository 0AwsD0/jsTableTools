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
//delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");

//returns TEXT - you can use innerHTML to append generated table
function createTable(row_number, column_number){
	
	let table = "<table>\n";

	for(let i = 0; i < row_number; i++){
		table +="<tr>\n"
		for(let i2 = 0; i2 < column_number; i2++){
			table +="<td></td>\n"	
		}
		table +="</tr>\n"
	}

	table += "</table>\n"
	return table;
}

//same as above + attributes like style="..." / class=".." | All attributes are optional, but if you have none use function above.
function createTableWithAttributes (row_number, column_number, row_attributes , column_attributes, table_attributes){

	let table = "";

	if(typeof(table_attributes) != "undefined"){
		table = "<table "+table_attributes+" >\n";
	}
	else{
		table = "<table>\n";
	}
	
	for(let i = 0; i < row_number; i++){
		
		if(typeof(row_attributes) != "undefined"){
			table +="<tr "+row_attributes +" >\n";
		}
		else{
			table +="<tr>\n"
		}

		for(let i2 = 0; i2 < column_number; i2++){
			if(typeof(column_attributes) != "undefined"){
				table +="<td  "+column_attributes +" ></td>\n";
			}
			else{
				table +="<td></td>\n";
			}

		}
		table +="</tr>\n"
	}

	table += "</table>\n"
	return table;

}
//Example
//createTableWithAttributes(2,3, 'class="c1" style="min-height: 100px; min-width: 110px;"','class="c2" style="min-height: 20px; min-width: 80px;"');