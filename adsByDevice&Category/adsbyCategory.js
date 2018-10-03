//var affStartTime = 500;
//var reAttemptTime = 1000;
//var intervalTime = 3000;

var affStartTime = 500;
var intervalTime = 2000;
var reAttemptTime = 1000;
var $j = jQuery;
	
function isMobile(){
	var screen = localStorage.getItem('screen');
	if (screen == undefined || screen == ''){
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		localStorage.setItem('screen',  isMobile ? 'mobile' : 'desktop');
	}
}
isMobile();

var ad = {
    "phones": {
        "mobile": [
					'<a href="https://amzn.to/2xSB9Gi" target="_blank"><img border="0" src="https://bit.ly/2NXok7E"></a><img src="https://bit.ly/2NgbBrb" width="1" height="1" border="0" alt="comedymood" />', '<a href="https://amzn.to/2Qn4BuU" target="_blank"><img border="0" src="https://bit.ly/2NX4A3Z" ></a><img src="https://bit.ly/2zKHVz3" width="1" height="1" border="0" alt="comedymood.com" />'
				],
        "desktop": [
					'<a href="https://amzn.to/2xSB9Gi" target="_blank"><img border="0" src="https://bit.ly/2NXok7E"></a><img src="https://bit.ly/2NgbBrb" width="1" height="1" border="0" alt="comedymood" />',
					
					'<iframe src="http://bit.ly/2xXz2Rw"></iframe>',
					'<iframe src="http://bit.ly/2y9AkYR"></iframe>',
				]
    },
    "electronics": {
        "mobile": [],
        "desktop": []
    },
    "cooking": {
        "mobile": [],
        "desktop": []
    },
    "books": {
        "mobile": [],
        "desktop": []
    },
    "movies": {
        "mobile": [
					'<a href="https://amzn.to/2Rk3KfR"><img src="https://comedymood.com/api/aff/img/bmshowoff.jpg" alt="comedymood"/></a>',
				],
        "desktop": [
					'<a href="https://amzn.to/2xSB9Gi" target="_blank"><img border="0" src="https://bit.ly/2NXok7E"></a><img src="https://bit.ly/2NgbBrb" width="1" height="1" border="0" alt="comedymood" />', '<a href="https://amzn.to/2Rk3KfR"><img src="https://comedymood.com/api/aff/img/bmshowoff.jpg" alt="comedymood"/></a>'
				]
    },
    "others": {
        "mobile": [],
        "desktop": []
    }
}

function c(a){
	console.log(a);
}

function fetchAd(category) {
	var totalCategory = Object.keys(ad).length;
	//var catId = parseInt(rand(totalCategory)-1); //index start form 0
	var catId = rand(totalCategory); //index start form 0
	var isCategoryExits = ad[category];
		
	if (category == undefined || category == '' || isCategoryExits == undefined) {
		const keys = Object.keys(ad)
		category = keys[catId]
	};
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var deviceType = localStorage.getItem('screen');
	var selectedAdsArr = ad[category][deviceType];
	var totalAdsInCategory = selectedAdsArr.length;
	if(totalAdsInCategory == 0){
		c('aff not found.. fetching others')
		catId = rand(totalCategory);
		category = ad[catId];
		window.setTimeout(function(){ fetchAd()}, reAttemptTime)
		return false;
	}
	c('aff found ['+ category +']')
	var randomAdCode = selectedAdsArr[rand(totalAdsInCategory)];
	return randomAdCode;
}

function rand(max) {
  return Math.floor(Math.random() * max) + 0
}

function fillAds(){
	var $j = jQuery;
	  $j('.aff').each(function(e){
		var affCat = $j(this).attr('rel'); 
		var adCode = fetchAd(affCat);
		$j(this).fadeOut(3000).html('').html(adCode).fadeIn(5000);
	  });
	c('aff serverd');  
}

/*
window.setTimeout(function(){ 
	fillAds();
	window.setInterval(function(){ fillAds();},intervalTime);
}, affStartTime);
*/

function test(){
	var adCode = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://bit.ly/2y72u6Q"></iframe>';
	
	$j('.affTest').html(adCode);
}

var duration = 10000;
console.log('will start after ' + duration/1000 + ' seconds');
window.setTimeout(function(){ 
	console.log('excuted');
	test()
}, duration);



// end of the file ok