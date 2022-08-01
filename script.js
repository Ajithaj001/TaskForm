// function validation(){
// 	let username =document.forms["myform"]["name"].value;
// 	let password1 = document.forms["myform"]["password"].value;
// 	let password2 = document.forms["myform"]["confirm-password"].value;

// 	if(username ==""){
// 		document.getElementById("form-control").innerHTML="entername";
// 		status=false;

// 	}
// 	if(password1!=password2)
// 	{
// 		alert("password do not match");
// 		return false;
// 	}

	
// }

var nameError = document.getElementById('name-error');
var idError = document.getElementById('id-error');
var mailError = document.getElementById('Mail-error');
var phnError = document.getElementById('phone-error');
var dobError = document.getElementById('dob-error');
var submitError = document.getElementById('submit-error');
// var buttonError = document.getElementById('button-error');
// var gen = document.forms["myforms"]["gender"];

sessionStorage.setItem("favoriteMovie", "Shrek");


function validateName(){
	var name = document.getElementById('contact-name').value;
	sessionStorage.setItem("favoriteMovie", name);
	

	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = 'write full name';
		return false;
	}
	nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	return true;
	console.log(name);

}

function validatePhone(){
	var phone = document.getElementById('contact-phone').value;
	sessionStorage.setItem("favoriteMovie", phone);

	 if(phone.length == 0){
	 	phnError.innerHTML ='phone no is required';
	 	return false;
	 }
	 if(phone.length !== 10){
	 	phnError.innerHTML = 'phone no should be 10 digit';
	 	return false;
	 }
	 if(!phone.match(/^[0-9]{10}$/)) {
	 	phnError.innerHTML='only digits';
	 	return false;
	 }
	 phnError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	 return true;

}
function validateId(){
	var emp = document.getElementById('contact-id').value;
	sessionStorage.setItem("favoriteMovie", emp);

	if(emp.length == 0){
		idError.innerHTML = 'id is reruired';
		return false;
	}

	if(!emp.match(/^[BIGTAPP]*\s{1}[0-9]*$/)){
		idError.innerHTML='id should start with organization name';
		return false

	}
	if(emp.length !==13){
		idError.innerHTML='id should be less than 13'

	}

	idError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;


}

function validateMail(){
	var mail = document.getElementById('contact-mail').value;
	sessionStorage.setItem("favoriteMovie", mail);


	if(mail.length==0){
		mailError.innerHTML='Email required';
		return false;
	}
	if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		mailError.innerHTML='email invalid';
		return false;
	}

	mailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	return true;



}
function validateDob(){
	var dob = document.getElementById('contact-dob').value;
	sessionStorage.setItem("favoriteMovie", dob);
	var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	
	    
    if (dob == null || dob == "" || !pattern.test(dob)) {
        dobError.innerHTML= "Invalid date of birth";
        return false;
    }

	
	dobError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
	return true;

}



function validateForm(){
	if(!validateName()|| !validateId()|| !validateMail()|| !validatePhone()|| !validateDob())
	{
		submitError.style.display ='block';
		submitError.innerHTML='<i class="fa-solid fa-square-xmark"></i>  please fix error';
		setTimeout(function(){submitError.style.display ='none';}, 3000);
		return false;
	}

	// submitError.innerHTML='<i class="fa-solid fa-badge-check"></i>';
	// return true;

}
// validateRadio(){
// if(gen[0].checked==false&&gen[1].checked==){
// 	buttonError.innerHTML='select gender';
// }
// }


// function getdata()
// {
// 	var fname = document.getElementById('contact-name').value;
// 	var phoneno = document.getElementById('contact-phone').value;
// 	var empno = document.getElementById('contact-id').value;
// 	var mailid = document.getElementById('contact-mail').value;
// 	var dobno = document.getElementById('contact-dob').value;

// 	console.log(fname);
// 	console.log(phoneno);
	
// 	console.log(empid);
	
// 	console.log(mailid);
	
// 	console.log(dobno);
	


// }






// function clickView(){
// 	document.getElementById('myform').Submit();
// }

// var form = document.getElementById('myform')
//  form.addEventListener('btn' function(event){
//  	event.preventfault()
//  	var name = document.getElementById('contact-name').value
//  	var id = document.getElementById('contact-id').value
//  	var mail = document.getElementById('contact-mail').value
//  	var phone = document.getElementById('contact-phone').value
//  	var dob = document.getElementById('contact-dob').value

//  	var doc = new jsPDF();

//  	doc.text(20,20, 'name');
//  	doc.text(20,30, 'id');
//  	doc.text(30,40, 'mail');
//  	doc.text(40,50, 'phone');
//  	doc.text(60,70, 'dob');

//  	doc.save("output.pdf");
 
//  })

