var ad = {
    "header": [
			'A',
			'B',
			'C',
			'DC'
	],
	"sideBar": [
			'D',
			'E',
			'F'
	],
	"inArticle": [
			'GG',
			'HH',
			'II',
			'II2',
			'II3'
	],
	"others": [],
	
}

var affStartTime = 500;
var intervalTime = 2000;
var reAttemptTime = 1000;
var $j = jQuery;
fillAds();

function fillAds(){
	var $j = jQuery;
	  $j('.aff').each(function(e){
		var affCat = $j(this).attr('rel'); 
		var adCode = fetchAd(affCat);
		$j(this).fadeOut(3000).html('').html(adCode).fadeIn(5000);
	  });
}


function fetchAd(category) {
	ad = clean(ad);
	var categories = Object.keys(ad)
	var totalCategory = Object.keys(ad).length;
	var catId = rand(totalCategory); //index start form 0
	var isCategoryExits = ad[category];
		
	if (category == undefined || category == '' || isCategoryExits == undefined) {
		category = categories[catId];
	};
	
	var selectedAdsArr = ad[category];
	var totalAdsInCategory = selectedAdsArr.length;
	var randomAdCode = selectedAdsArr[rand(totalAdsInCategory)];
	c(randomAdCode);
	return randomAdCode;
	
}


function rand(max) {
  return Math.floor(Math.random() * max);
}					

function clean(obj) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key] === undefined || obj[key] === null || obj[key].length <= 0) {
      delete obj[key];
    }
  })
  return obj;
}






function c(a){
	console.log(a);
}