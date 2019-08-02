let ad = {
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
let affStartTime = 500
let intervalTime = 2000
let reAttemptTime = 1000

function fillAds(){
	   let $j = jQuery
	  $j('.aff').each(function(e){
		let affCat = $j(this).attr('rel')
		let adCode = fetchAd(affCat)
		$j(this).fadeOut(3000).html('').html(adCode).fadeIn(5000)
	  });
}

function fetchAd(category) {
	ad = clean(ad)
	let categories = Object.keys(ad)
	let totalCategory = Object.keys(ad).length
	let catId = rand(totalCategory)
	let isCategoryExits = ad[category]
	if (category == undefined || category == '' || isCategoryExits == undefined) {
		category = categories[catId]
	}
	let selectedAdsArr = ad[category]
	let totalAdsInCategory = selectedAdsArr.length
	let randomAdCode = selectedAdsArr[rand(totalAdsInCategory)]
	
	return randomAdCode
}

function rand(max) {
  return Math.floor(Math.random() * max)
}					

function clean(obj) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key] === undefined || obj[key] === null || obj[key].length <= 0) {
      delete obj[key]
    }
  })
  return obj
}

//excute
fillAds()
