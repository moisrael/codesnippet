(function mainSlideShow() {
	const slides = document.querySelectorAll('.slide'); //The slides
	const x = (slides.length - 1);

	var slideIndex = x; //Indicates the current slide

	document.querySelectorAll('.trails')[0].style.opacity = "0.75";

	function carousel() {
		const slideShow = document.querySelector('.slides'); //The container of the slides
		var slideWidth = slides[0].clientWidth; //Width of each slide
		const leftButton = document.querySelector('.prev-button'); //The left slide show navigation button
		const rightButton = document.querySelector('.next-button'); //The right slide show navigation button
		const slideTrack = document.querySelectorAll('.trail'); //The slide show trail

		window.addEventListener('resize', widthChange);

		function widthChange() {
			slideWidth = slides[0].clientWidth;
		}

		slideTrack[slideIndex].style.opacity = "0.75"; //Indicates the track position of the current slide

		var inactive = function() {slideTrack[slideIndex].style.opacity = "0.25";}
		var active = function() {slideTrack[slideIndex].style.opacity = "0.75";}

		autoSlideShow();

		//To slide to the left when the left button is clicked
		leftButton.addEventListener('click', ()=>{
			//To take the slide show to the last slide when it's on the first slide and the left button is clicked
			if (slideIndex == 0) {
				inactive(); //Reduces the opacity of the previous slide's track
				slideIndex = x;
				slideShow.style = 'transform: translateX(-'+ (slideWidth * x) +'px); transition: none;'; //To go to the next slide
				active(); //Indicates the track position of the current slide
				return;
			} else {//To slide to the left
				inactive(); //Reduces the opacity of the previous slide's track
				slideIndex--;
				slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: transform 0.9s ease-in-out;';
				active(); //Indicates the track position of the current slide
				return;
			}
		});

		//To slide to the right when the right button is clicked
		rightButton.addEventListener('click', ()=>{
			//To restart the slide show when it's on the last slide
			if (slideIndex == x) {
				inactive(); //Reduces the opacity of the previous slide's track
				slideIndex = 0;
				slideShow.style = 'transform: translateX('+ (0) +'px); transition: none;';
				active(); //Indicates the track position of the current slide
				return;
			} else {
				inactive(); //Reduces the opacity of the previous slide's track
				slideIndex++;
				slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: transform 0.9s ease-in-out;';
				active(); //Indicates the track position of the current slide
				return;
			}
		});

		slideTrack[0].addEventListener('click', ()=>{
			for (i = 0; i < slideTrack.length; i++) {
				slideTrack[i].style.opacity = '0.25';
			}
			slideIndex = 0;
			slideTrack[slideIndex].style.opacity = '0.75';
			slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: none;';
		});

		slideTrack[1].addEventListener('click', ()=>{
			for (i = 0; i < slideTrack.length; i++) {
				slideTrack[i].style.opacity = '0.25';
			}
			slideIndex = 1;
			slideTrack[slideIndex].style.opacity = '0.75';
			slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: none;';
		});

		slideTrack[2].addEventListener('click', ()=>{
			for (i = 0; i < slideTrack.length; i++) {
				slideTrack[i].style.opacity = '0.25';
			}
			slideIndex = 2;
			slideTrack[slideIndex].style.opacity = '0.75';
			slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: none;';
		});

		if (slideTrack.length == 4) {
			slideTrack[3].addEventListener('click', ()=>{
				for (i = 0; i < slideTrack.length; i++) {
					slideTrack[i].style.opacity = '0.25';
				}
				slideIndex = 3;
				slideTrack[slideIndex].style.opacity = '0.75';
				slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: none;';
			});
		}

		//Automatic slide show
		function autoSlideShow() {

			var inactive = function() {slideTrack[slideIndex].style.opacity = "0.25";}
			var active = function() {slideTrack[slideIndex].style.opacity = "0.75";}

			if (slideIndex < slides.length) {
				inactive(); //Reduces the opacity of the previous slide's track
				slideIndex++;
				slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: transform 0.9s ease-in-out;';
				if (slideIndex < slides.length) {
					active(); //Indicates the track position of the current slide
				}
			}

			if (slideIndex == slides.length) {
				slideIndex = 0;
				slideShow.style = 'transform: translateX(-'+ (slideWidth * slideIndex) +'px); transition: none;';
				active(); //Indicates the track position of the current slide
			}		
		}
		setInterval(autoSlideShow, 5000); //Switches to the next slide every 5 seconds
	}
	setTimeout(carousel, 100);
}());