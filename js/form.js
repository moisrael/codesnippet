var validate = ()=>{

		var contactForm = ()=>{
			//Contact Form parameters
			var contactForm = 'contact_form';
			var name = {
				full: document.forms[contactForm]['name'],
				label: document.querySelector('.contact-form .name label'),
				error: document.querySelector('.name-error')
			};

			var date = {
				day: document.forms[contactForm]['date'],
				today: new Date()
			};

			var phone = {
				number: document.forms[contactForm]['phone'],
				label: document.querySelector('.contact-form .phone label'),
				error: document.querySelector('.phone-error'),
			};

			var email = {
				address: document.forms[contactForm]['email'],
				label: document.querySelector('.contact-form .email label'),
				error: document.querySelector('.email-error')
			};

			var message = {
				message: document.forms[contactForm]['message'],
				label: document.querySelector('.message label'),
				error: document.querySelector('.message-error')
			};

			var submit = document.forms[contactForm]['send_message'];

			var errorMessage = {
				name: {
					empty: "Please enter your name",
					invalid: "Please enter your full name"
				},
				phone: {
					empty: "Please enter your phone number",
					invalid: "Please enter a valid phone number"
				},
				email: {
					empty: "Please enter your e-mail address",
					invalid: "Please enter a valid e-mail address"
				},
				message: "Please enter your message",
			};

			//To fill the error messages with blanks
			var preSubmitable = ()=>{
				var formErrors = [name.error, phone.error, email.error, message.error];
				for (var i = 0; i < formErrors.length;) {
					formErrors[i].innerHTML = " ";
					i += 1;
				}
			};

			//To check whether all form field contents are valid; if all are valid, the user can submit i.e. submit button becomes enabled
			var submitable = ()=>{
				if (name.error.innerHTML == "" && phone.error.innerHTML == "" && email.error.innerHTML == "" && message.error.innerHTML == "") {
					submit.removeAttribute('disabled');
					submit.className = submit.className.replace(' disabled-button', ' enabled');
				}
				if (!(name.error.innerHTML == "" && phone.error.innerHTML == "" && email.error.innerHTML == "" && message.error.innerHTML == "")) {
					submit.setAttribute('disabled', '');
					submit.className = submit.className.replace(' enabled', ' disabled-button');
				}
			};

			//Sets the current date as the date field's value
			date.day.setAttribute('value', '' + date.today.getFullYear() + '-' + (date.today.getMonth() + 1) + '-' + date.today.getDate() + '');

			//Calling the function that fills the error messages with blanks
			preSubmitable();

			//Calling the function that checks for the form validation
			submitable();

			//Name field label
			name.full.addEventListener('focus', ()=>{
				name.full.removeAttribute('placeholder');
				name.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;';
				submitable();
			}, false);

			//Name field validation
			name.full.addEventListener('blur', ()=>{

				if (name.full.value == "" || name.full.value == null) {
					name.full.setAttribute('placeholder', 'Your Name');
					name.label.style = 'opacity: 0; transform: translateY(0); transition: none;';
					name.error.innerHTML = errorMessage.name.empty;
				} else if (name.full.value != "" || name.full.value != null) {
					if (name.full.value.length < 5 || name.full.value.indexOf(" ") < 2 || (name.full.value.indexOf(" ") == name.full.value.length - 1)) {
						name.error.innerHTML = errorMessage.name.invalid;
					} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {
						name.error.innerHTML = "";
					}
				}

				if ((name.full.value != "" && name.full.value.length < 5) || (name.full.value != "" && name.full.value.indexOf(" ") < 2) || (name.full.value != "" && (name.full.value.indexOf(" ") == name.full.value.length - 1))) {
					name.error.innerHTML = errorMessage.name.invalid;
				} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {
					name.error.innerHTML = "";
				}

				submitable();

			}, false);

			//Phone Number field label
			phone.number.addEventListener('focus', ()=>{
				phone.number.removeAttribute('placeholder');
				phone.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;';
			}, false);

			//Disable Spacebar
			phone.number.addEventListener("keydown", (event)=>{
				if (event.keyCode == 32) {
					event.preventDefault();
				}
			}, false); 

			//Phone Number field validation
			phone.number.addEventListener('blur', ()=>{

				if (phone.number.value == "" || phone.number.value == null) {
					phone.number.setAttribute('placeholder', 'Your Phone Number');
					phone.label.style = 'opacity: 0; transform: translateY(0); transition: none;';
					phone.error.innerHTML = errorMessage.phone.empty;
				} else if (phone.number.value != "" || phone.number.value != null) {
					if (!Number.isInteger(parseInt(phone.number.value, 10))) {
						phone.error.innerHTML = errorMessage.phone.invalid;
					} else if (Number.isInteger(parseInt(phone.number.value, 10))) {
						if (phone.number.value.length >= 10) {
							ignoreSpace = phone.number.value.trim();
							if (Number.isInteger(parseInt(ignoreSpace, 10))) {
								phone.error.innerHTML = "";
							}
						}
						if (phone.number.value.length < 10) {
							phone.error.innerHTML = errorMessage.phone.invalid;
						}
					}
				}

				submitable();

			}, false);
			
			//E-mail field label
			email.address.addEventListener('focus', ()=>{
				email.address.removeAttribute('placeholder');
				email.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;';
			}, false);

			//E-mail field validation
			email.address.addEventListener('blur', ()=>{

				if (email.address.value == "" || email.address.value == null) {
					email.address.setAttribute('placeholder', 'Your E-mail Address');
					email.label.style = 'opacity: 0; transform: translateY(0); transition: none;';
					email.error.innerHTML = errorMessage.email.empty;
				} else if (email.address.value != "" || email.address.value != null) {
					if (email.address.value.indexOf("@") < 1 && (name.full.value.indexOf("@") == name.full.value.length - 1)) {
						email.error.innerHTML = errorMessage.email.invalid;
					} else if (email.address.value.indexOf("@") >= 1 && (email.address.value.substring((email.address.value.indexOf("@")), (email.address.value.length - 1)).length > 3)) {
						email.error.innerHTML = "";
					}
				}

				if ((email.address.value != "" && email.address.value.indexOf("@") < 1) || (email.address.value != "" && (name.full.value.indexOf("@") == name.full.value.length - 1))) {
					email.error.innerHTML = errorMessage.email.invalid;
				} else if (email.address.value.indexOf("@") >= 1 && (email.address.value.substring((email.address.value.indexOf("@")), (email.address.value.length - 1)).length > 3)) {
					email.error.innerHTML = "";
				}

				submitable();

			}, false);
			
			//message field label
			message.message.addEventListener('focus', ()=>{
				message.message.removeAttribute('placeholder');
				message.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;';
			}, false);

			//message field validation
			message.message.addEventListener('blur', ()=>{

				if (message.message.value == " " || message.message.value == "" || message.message.value == null) {
					message.message.setAttribute('placeholder', 'Leave Us A Message');
					message.label.style = 'opacity: 0; transform: translateY(0); transition: none;';
					message.error.innerHTML = errorMessage.message;
				} else if (message.message.value != " " || message.message.value != "" || message.message.value != null) {
					message.error.innerHTML = "";
				}

				submitable();

			}, false);
		};

		contactForm();

	}

	validate();