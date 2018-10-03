# affiAds
Manage multiple affiliate code dynamically without affecting AdSense. 

<h2>Just add below html tag whereever you want add to be appear</h2>

```javascript
<code>
var ad = {
    "header": [
			'put add code here which fit in header',
			'some other ads',
			'C',
			'DC'
	],
	"sideBar": [
			'ads',
			'some other ad'
	],
	"inArticle": [
			'GG'
	],
	"others": [],
}

var affStartTime = 500;
var intervalTime = 2000;
var reAttemptTime = 1000;
var $j = jQuery;
fillAds();
</code>
```

```
<div class="aff" rel="header"></div> <!-- ads from header -->
<div class="aff" rel="sideBar"></div> <!-- ads from header -->
<div class="aff"></div> <!-- ads random -->
```
