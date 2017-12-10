//@author Selassie Golloh

function formValidation()  {
	var username = document.registerForm.username;
	var password = document.registerForm.password;
	var email = document.registerForm.email;
	var phonenumber = document.registerForm.phonenumber;
	var age = document.registerForm.age;
//	var organization = document.registerForm.organization;
	//var gender = document.registerForm.gender;

	if (allLetters(username)){
		if(pass(password,7,20)){
			if(useremail(email)){
				if(userphone(phonenumber)){
					if(userage(age)){

					}
				}
			}
		}
		} return false;
	}

	formValidation()  
	
function allLetters(username){
	var letters = /^[A-Za-z]+$/;  
	if(username.value.match(letters)){
	return true;
	}
	else{
	alert('Fullname must gave alphabet characters only');
	username.focus();
	return false;
	}
}

function pass(password,x,y){
	var pass_len = password.value.length;
	if (pass_len == 0 || pass_len >= x || pass_len < y){
		alert ("Password should not be empty/ lenght should be between 7 and 20");
		password.focus();
		return false;
	}
	return true;
	}
}

function useremail(email){
	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if (email.value.match(emailformat)){
		return true;
	}else{
		alert("You have entered an invalid email address!");
		email.focus();
		return false;
	}
}


function userphone(phonenumber){
	var numberformat = ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$;  
	if (phonenumber.value.match(numberformat)){
		return true;
	}else{
		alert("Phone number should be 10 digits!");
		phonenumber.focus();
		return false;
	}
}


function userage(age){
	var ager = ^[0-9]+$;  
	if (age.value.match(ager)){
		return true;
	}else{
		alert("Age should be a number!");
		age.focus();
		return false;
	}
}















