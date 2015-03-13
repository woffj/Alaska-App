		
	$scope.slideshow =[];

	$scope.slideChange = function() {
		var images = [],
		index = 0;

		images[0] = "<a href = '#'><img src='images/mainSlides/pic1.jpg' alt='' class='stretch'></a>";
		images[1] = "<a href = '#'><img src='images/mainSlides/pic2.jpg' alt='' class='stretch'></a>";
		images[2] = "<a href = '#'><img src='images/mainSlides/pic3.jpg' alt='' class='stretch'></a>";
		images[3] = "<a href = '#'><img src='images/mainSlides/pic4.jpg' alt='' class='stretch'></a>";
		images[4] = "<a href = '#'><img src='images/mainSlides/pic5.jpg' alt='' class='stretch'></a>";
		images[5] = "<a href = '#'><img src='images/mainSlides/pic6.jpg' alt='' class='stretch'></a>";

		index = Math.floor(Math.random() * images.length);
		document.write(images[index]);
	};