<?php 
	// require_once('../../leoxTracker.php');
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
	<!-- <meta http-equiv="Content-Type" content="text/html; " /> -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<title>Plantation Bay Resort and Spa</title>
	<meta name="keywords" content="Plantation bay, Rooms, Activities, lLandscapes, weddings, Mogambo springs, spa, Restaurants">
	<meta name="Description" content="5-Star Colonial Plantation charm - surprisingly affordable prices! Cebu Resort Hotel, the Premier Philippine Spa.">
	<link rel="Shortcut Icon" href="../pbayImages/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="../jqm145.css" />
	<script type="text/javascript" src="../jq211.js"></script>
	<script type="text/javascript" src="../jqm145.js"></script>
	<link rel="stylesheet" href="../slider.css">	
	<link rel="stylesheet" href="../ap-fullscreen-modal.min.css">	
	<script type="text/javascript" src="./imgUrl.js"></script>
	<script type="text/javascript" src="./images.js"></script>
	<script type="text/javascript" src="../jqCycle2.js"></script>
	<script type="text/javascript" src="../c2center.min.js"></script>
	<script type="text/javascript" src="../ap-fullscreen-modal.min.js"></script>

	<!-- TODO add manifest here -->

</head>
<body>
<div data-role="page" id="images">
    <div data-role="content">	
		<!-- <section class="homeMain"> -->
			<!-- <section class="homeArticle"> -->
				<!-- <div id="hotelbeauties"> -->

					<input type="button" value="Rooms" id="open-rooms" />
					<input type="button" value="Restaurants" id="open-restaurants" />
					<input type="button" value="Landscapes" id="open-landscapes" />
					<input type="button" value="Activities" id="open-activities" />
					<input type="button" value="Mogambo Spring" id="open-mogambosprings" />
					<input type="button" value="Weddings" id="open-weddings" />

					<div style="display: none;">
					  <div id="roomsImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/rooms/FamilyRoom.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/rooms/FamilyRoom.jpg" />
										</div>
									</section>
					    </div>
					    <button>Add More Images</button>
					  </div>
					</div>

					<div style="display: none;">
					  <div id="restaurantsImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/restaurants/AlienAbduction.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/restaurants/AlienAbduction.jpg" />
										</div>
									</section>
					    </div>

					  </div>
					</div>

					<div style="display: none;">
					  <div id="landscapesImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/landscape/AerialView.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/landscape/AerialView.jpg" />
										</div>
									</section>
					    </div>
					  </div>
					</div>

					<div style="display: none;">
					  <div id="activitiesImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/activities/Archery.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/activities/Archery.jpg" />
										</div>
									</section>
					    </div>
					  </div>
					</div>

					<div style="display: none;">
					  <div id="mogambospringsImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/mogambosprings/MogamboSprings1.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/mogambosprings/MogamboSprings1.jpg" />
										</div>
									</section>
					    </div>
					  </div>
					</div>

					<div style="display: none;">
					  <div id="weddingsImages" class="modal-content">
					    <div class="wrapper">
									<section class="sliderBox">
										<div class="imageBox">
											<div class="cycle-prev"></div>
											<div class="cycle-next"></div>
											<!-- <img name="" data-caption="" src="" data-src="../../pbayImages/Pictures/weddings/1.jpg" /> -->
											<img name="" data-caption="" src="../pbayImages/Pictures/weddings/1.jpg" />
										</div>
									</section>
					    </div>
					  </div>
					</div>
				<!-- </div> -->
			<!-- </section> -->
		<!-- </section>	 -->
    </div>
</div>
<script type="text/javascript" src="../rlmjHelpers.js"></script>
 <!-- Uncomment the line below when ready to test with fake data -->
  <script src="./leox.js" async></script>
</body>
</html>