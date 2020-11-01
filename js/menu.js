const menuButton = document.querySelector('.menu-icon-container .menu-icon i'); //The button that opens the menu
const menu = document.querySelector('.mobile-menu'); //The menu
const navigation = document.querySelector('mobile-menu .navigation'); //The menu navigation
const closeButton = document.querySelector('.mobile-menu .menu-icon .fa'); //The button that closes the menu
const res1024 = window.matchMedia('(max-width: 1024px)'); //Screen resolution with a maximum width of 1024px

function mouseEvents(event) {
	if (menuOpen == 1) {
		if (event.target == menu && event.target.parentNode != navigation && event.target.parentNode.parentNode != navigation && event.target.parentNode.parentNode.parentNode != navigation) {
			menuButton.style = 'opacity: 1; pointer-events: auto;';
			menu.style = 'left: 100%; transition: none;';
			window.addEventListener('resize', (res1024)=>{
			    res1024 = window.matchMedia('(max-width: 1024px)');
			    if (res1024.matches) {
			        menu.style = 'left: 100%; transition: none;';
			    }
			});
		  	menuOpen = 0;
			return;
		}
	}
	if (menuOpen == 0) {
		if (event.target == menuButton) {
			menuButton.style = 'opacity: 0; pointer-events: none;';
			menu.style = 'right: 0; left: 0; height: ' + window.innerHeight + 'px;';
			window.addEventListener('resize', (res1024)=>{
			    res1024 = window.matchMedia('(max-width: 1024px)');
			    if (res1024.matches) {
			        menu.style = 'right: 0; left: 0; height: ' + window.innerHeight + 'px; transition: none;';
			    }
			});
		  	menuOpen = 1;
			return;
		}
	}
}

var closeButtonHandler = ()=>{
	if (menuOpen == 1) {
		menuButton.style = 'opacity: 1; pointer-events: auto;';
		menu.style = 'left: 100%; transition: none;';
		window.addEventListener('resize', (res1024)=>{
		    res1024 = window.matchMedia('(max-width: 1024px)');
		    if (res1024.matches) {
		        menu.style = 'left: 100%; transition: none;';
		    }
		});
		menuOpen = 0;
		return;
	}
}

var menuOpen = 0;

window.addEventListener('mouseup', mouseEvents, false);

//Touch/Mouse event listener (cross-device targeting)
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (winNav.userAgent.indexOf("iOS")) {
	if (isIOSChrome || isIEedge) {
	   // is Google Chrome on IOS
	   window.addEventListener('mouseup', mouseEvents, false);
	   closeButton.addEventListener('mouseup', closeButtonHandler, false);
	} else if(
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false
	) {
	   // is Google Chrome
	   window.addEventListener('mouseup', mouseEvents, false);
	} else { 
	   // not Google Chrome
		window.addEventListener('touchend', mouseEvents, false);

		closeButton.addEventListener('touchend', closeButtonHandler, false);

	}
}
if (navigator.userAgent.indexOf("Android") != -1) {
	if (isIOSChrome || isIEedge) {
	   // is Google Chrome on IOS
	   window.addEventListener('mouseup', mouseEvents, false);
	   closeButton.addEventListener('mouseup', closeButtonHandler, false);
	} else {
		window.removeEventListener('touchend', mouseEvents);

		closeButton.removeEventListener('touchend', closeButtonHandler);

		window.addEventListener('mouseup', mouseEvents, false);
		closeButton.addEventListener('mouseup', closeButtonHandler, false);
	}		
}