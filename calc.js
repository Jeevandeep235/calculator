$(document).ready(function(){
	//store the input from the user to calculate later 
	var inputs=[""];
	//String to store current input string
	var toatalString;
	//operators array for validation without dot
	var operator1=["+","-","/","*"];
	//operators array for validation with dot
	var operator2=["."];
	var num=[0,1,2,3,4,5,6,7,8,9];
// this function get proper input value
	function getValue(input){
		if(operator2.includes(inputs[inputs.length-1] === true && input==='.')){
         console.log("Duplicate '.' ");
		}
    // else if(inputs.length===1 && operator1.includes(input)===false){
     //	inputs.push(input);
    // }

     else if(operator1.includes(inputs[inputs.length-1])===false){
     	inputs.push(input);
     	
     
     }
     else if (num.includes(Number(input))) {
       inputs.push(input);
       
     }
     update();	
	}
// This function update the current value
	function update(){
       toatalString=inputs.join("");
       	$("#steps").html(toatalString);
	}
	//This function evaluate the total value
	function  getTotal(){
       toatalString=inputs.join("");
       $("#steps").html(eval(toatalString));
	}
	$("a").on("click", function(){
		if(this.id==="deleteAll"){
			inputs=[""];
			update();
		}
		else if(this.id==="back"){
             inputs.pop();
             update();
		}
		else if(this.id==="total"){
			getTotal();
		}
		else{
			if(inputs[inputs.length-1].indexOf("+","-","*","/") === -1){
				getValue(this.id);
			

			}
			else {
				getValue(this.id);
				
			}
		}
	});
});