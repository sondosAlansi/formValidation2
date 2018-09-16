 "use strict"
 
 
    let username=document.getElementById('user');
    let pass=document.getElementById('password'); 
	//console.log(username.value);

function submitForm(){
	
	let patternText =/^[A-Za-z]+$/;
	let patternNumbers =/^[0-9]+$/;
    
 
 
 if(username.value=="" ){
	 
	alert('you have filled out the username '); 
	return false;
 }
 else if(pass.value==""){
	 
	alert('you have filled out the password'); 
	return false;
 }

   else if(!username.value.match(patternText)){
	 
	
	 alert('sorry the username must be just text');
	 return false;
	
 }

 else if(!pass.value.match(patternNumbers)){
	 
	alert('sorry the password must be just numbers');
	return false;
	
 }



window.location.href = "dash.html";


//document.getElementById('heading').innerHTML=username.value;
return true;
}



