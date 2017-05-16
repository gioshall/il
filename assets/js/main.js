$(document).ready(function(){
var device = navigator.userAgent.toLowerCase();
var mobile = device.match(/(iphone|ipod|ipad|android)/);

console.log(device);

if (mobile) {
     $('.video-background').hide();
     $('body').addClass('m-bg')
     }
});
