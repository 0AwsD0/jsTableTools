(function() {
    'use strict';

    // Your code here...
            function delRowsTdTextConditionEqualTo(row_selector_string, td_selector_string, condition_string){
        rows = document.querySelectorAll(row_selector_string);
        td =  document.querySelectorAll(td_selector_string);
        for(i = 0; i < rows.length; i++){
            if(td[i].innerText == condition_string){
                rows[i].remove();
            }
        }
    }
    //for submit button
    button = document.querySelector(".btn-submit");
    button.addEventListener("click", () => setTimeout(function(){
        delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
    }, 5000));
    //for next button
    button = document.querySelector(".mat-paginator-navigation-next");
    button.addEventListener("click", () => setTimeout(function(){
		delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
	}, 3000));

})();