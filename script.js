// Responsive menu bar script starts here 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Form submit response starts here 

// contact form current time display
var popuptime = function() {
  window.open ("https://www.google.com/search?q=current+time+with+seconds+in+india&rlz=1C1SQJL_enIN967IN967&ei=zgRJY7a1CMHZhwPS6q34Bg&ved=0ahUKEwi21Mnsjt_6AhXB7GEKHVJ1C28Q4dUDCA4&uact=5&oq=current+time+with+seconds+in+india&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQ0oECEEYAEoECEYYAFCPBVirHWDLI2gBcAF4AIAB0gSIAYsXkgEJMi01LjMuMC4xmAEAoAEByAEKwAEB&sclient=gws-wiz", "Window","status=1,toolbar=1");
}

// contact form current location display
var popuplocation = function() {
  window.open ("https://www.google.com/maps/place/11%C2%B013'13.6%22N+78%C2%B009'42.1%22E/@11.22058,78.1615092,19z/data=!4m6!3m5!1s0!7e2!8m2!3d11.2204355!4d78.1616826", "Window","status=1,toolbar=1");
}
