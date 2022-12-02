function NumberToWords(number){
	var num = new String(number);
	var splt = num.split("");
	var newNumber = splt.reverse();
	var first = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	var two = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	var tens = ['', 'Ten', 'Twenty ', 'Thirty ', 'Forty ', 'Fifty ', 'Sixty ', 'Seventy ', 'Eighty ', 'Ninety '];
	
	var word = new Array();
	var count = 0;
	
	for(i=0; i < newNumber.length; i++){
		switch(i){
			case 0:
               if ((newNumber[i] == 0) || (newNumber[i + 1] == 1)) {
                   word[count] = '';
               }
               else {
                   word[count] = first[newNumber[i]];
               }
			
			word[count] = word[count];
			
               break;
			
			case 1:
				Tens();
               break;
			
			case 2:
				if (newNumber[i] == 0) {
					word[count] = '';
				}
				else if ((newNumber[i - 1] == 0) || (newNumber[i - 2] == 0)) {
					word[count] = first[newNumber[i]] + " Hundred ";
				}
				else {
					word[count] = first[newNumber[i]] + " Hundred ";
				}
               break;
			
			
			case 3:
				if (newNumber[i] == 0 || newNumber[i + 1] == 1) {
					word[count] = '';
				}
				else {
					word[count] = first[newNumber[i]];
				}
				if ((newNumber[i + 1] != 0) || (newNumber[i] > 0)) {
					word[count] = word[count] + " Thousand ";
				}
               break;
			
			case 4:
				Tens();
               break;
			
			case 5:
				if ((newNumber[i] == 0) || (newNumber[i + 1] == 1)) {
                   word[count] = '';
				}
				else {
					word[count] = first[newNumber[i]];
				}
				if (newNumber[i + 1] !== '0' || newNumber[i] > '0') {
					
					if(newNumber[4] === "0" && newNumber[3] === '0'){
						word[count] = word[count] + " Hundred Thousand ";	
					}else{
						word[count] = word[count] + " Hundred ";
					}
				}
                
               break;
			
			
			default: break;
		}
		
		count++;
		
	}
	
	
	function Tens() {
		if (newNumber[i] == 0) { 
			word[count] = ''; 
		}else if (newNumber[i] == 1) { 
			word[count] = two[newNumber[i - 1]]; 
		}else { 
			word[count] = tens[newNumber[i]]; 
		}
	}
	
	word.reverse();
	var result = '';
	for(i=0; i < newNumber.length; i++){
		result = result + word[i];
	}
	
	
	document.getElementById('result').innerHTML = result;
	
	
}

function NumberInput(evt) {
	var e = event || evt;
	var charCode = e.which || e.keyCode;
	
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}
