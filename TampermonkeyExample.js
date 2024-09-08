(function() {
    'use strict';

    // Your code here...
            function delRowsTdTextConditionEqualTo(row_selector_string, td_selector_string, condition_string){
        let rows = document.querySelectorAll(row_selector_string);
        let td =  document.querySelectorAll(td_selector_string);
        for(i = 0; i < rows.length; i++){
            if(td[i].innerText == condition_string){
                rows[i].remove();
            }
        }
    }
    //for submit button
    let button = document.querySelector(".btn-submit");
    button.addEventListener("click", () => setTimeout(function(){
        delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
    }, 5000));
    //for next button
    let button2 = document.querySelector(".mat-paginator-navigation-next");
    button2.addEventListener("click", () => setTimeout(function(){
		delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
	}, 3000));

})();

//JS Proof Version Below -> RECOMENDED
(function() {
    'use strict';

    // Your code here...
        function delRowsTdTextConditionEqualTo(row_selector_string, td_selector_string, condition_string){
        let rows = document.querySelectorAll(row_selector_string);
        let td = document.querySelectorAll(td_selector_string);
        for(let i = 0; i < rows.length; i++){
            if(td[i].innerText == condition_string){
                rows[i].remove();
            }
        }
    }

        function setListeners(){
            let button = document.querySelector(".btn-submit");
            button.addEventListener("click", () => setTimeout(function(){
                delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
            }, 5000));
            //for next button
            let button2 = document.querySelector(".mat-paginator-navigation-next");
            button2.addEventListener("click", () => setTimeout(function(){
                delRowsTdTextConditionEqualTo("tr.mat-row", ".cdk-row>.cdk-column-studentRegCount", "0");
            }, 3000));
            console.log("setListeners() Executed");
        }

    setTimeout(function(){
                setListeners();
            }, 5000);

    console.log("LOADED THE SCRIPT");

})();