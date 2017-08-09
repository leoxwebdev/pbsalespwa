$( document ).on( "pagecreate", "#images", function () {

   var $roomsImages = $("#roomsImages .imageBox"),
      $slidingrooms = $( "#roomsImages .sliderBox" ).find("img"),
      // $roomsList = $("#roomsList").find("a"),
      roomsImagesURL = [],
      allRoomsCount = $slidingrooms.length,
      roomsisFirstLoad,

			$restaurantsImages = $("#restaurantsImages .imageBox"),
      $slidingrestaurants = $( "#restaurantsImages .sliderBox" ).find("img"),
      // $restaurantsList = $("#restaurantsList").find("a"),
      restaurantsImagesURL = [],
      allRestaurantsCount = $slidingrestaurants.length,
      restaurantsisFirstLoad,

      $landscapesImages = $("#landscapesImages .imageBox"),
      $slidinglandscapes = $( "#landscapesImages .sliderBox" ).find("img"),
      // $landscapeList = $("#landscapeList").find("a"),
      landscapesImagesURL = [],
      allLandscapesCount = $slidinglandscapes.length,
      landscapeisFirstLoad,

      $activitiesImages = $("#activitiesImages .imageBox"),
      $slidingactivities = $( "#activitiesImages .sliderBox" ).find("img"),
      // $activitieList = $("#activitieList").find("a"),
      activitiesImagesURL = [],
      allActivitiesCount = $slidingactivities.length,
      activitieisFirstLoad,

      $mogambospringsImages = $("#mogambospringsImages .imageBox"),
      $slidingmogambosprings = $( "#mogambospringsImages .sliderBox" ).find("img"),
      // $mogambospringList = $("#mogambospringList").find("a"),
      mogambospringsImagesURL = [],
      allMogambospringsCount = $slidingmogambosprings.length,
      mogambospringisFirstLoad,

      $weddingsImages = $("#weddingsImages .imageBox"),
      $slidingweddings = $( "#weddingsImages .sliderBox" ).find("img"),
      // $weddingList = $("#weddingList").find("a"),
      weddingsImagesURL = [],
      allWeddingsCount = $slidingweddings.length,
      weddingisFirstLoad;

  $(".slideCaption").toggle();

  $restaurantsImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 6000,
    manualSpeed: 500,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: restaurantsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $landscapesImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 6000,
    manualSpeed: 500,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: landscapesImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $activitiesImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 6000,
    manualSpeed: 500,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: activitiesImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $mogambospringsImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 6000,
    manualSpeed: 500,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: mogambospringsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $weddingsImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 6000,
    manualSpeed: 500,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: weddingsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  // function roomImgSlide_onBefore() { 
  //     // $('#output').html("Scrolling image:<br>" + this.src); 
  //     console.log("Before");
  //     $(".slideCaption").hide();
  // } 
  // function roomImgSlide_onAfter() { 
  //     // $('#output').html("Scroll complete for:<br>" + this.src) 
  //     //     .append('<h3>' + this.alt + '</h3>'); 
  //     console.log("After");
  //     $(".slideCaption").show();
  // }

  $roomsImages.cycle({
    autoHeightSpeed: 100,
    speed: 1000,
    timeout: 15000,
    manualSpeed: 1000,
    // fx: "scrollHorz",
    fx: "fade",// 
    swipe: true,
    // swipefx: "scrollHorz",
    swipefx: "fade",
    centerHorz: true,
    centerVert: true,
    //data-cycle-timeout="0"
    pause: true,
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    progressive: roomsImgUrls
    // before: roomImgSlide_onBefore,
    // after: roomImgSlide_onAfter
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  // var roomImgCaptionVisible = false;
  $roomsImages.on("cycle-before", function(e, options, outgoing, incoming) {
    // var currentImage = $(incoming).attr("name");
    // $("#imgCaption").find("p").html($(incoming).data("caption"));
    // $("#roomsImages").find("h2").html($(incoming).data("name"));
    // $("#roomsImages").find("p").html($(incoming).data("description"));
    // console.log("Before slide");
    // $(".slideCaption").hide();
  });

  $roomsImages.on("cycle-after", function(e, options, outgoing, incoming) {
    // var currentImage = $(incoming).attr("name");
    // $("#imgCaption").find("p").html($(incoming).data("caption"));
    $("#roomsImages").find("h2").html($(incoming).data("name"));
    $("#roomsImages").find("p").html($(incoming).data("description"));
    // console.log("After slide");
    // $(".slideCaption").show();
  });

  $('#roomsImages').apFullscreenModal({
    openSelector: '#open-rooms'
  });


  $("#roomsImages .btnCaption").on("click", function() {
      $(".slideCaption").toggle();
  })

  $("#roomsImages .btnNext").on("click", function() {
    $roomsImages.cycle('next'); 
  });

  $("#roomsImages .btnPrevious").on("click", function() {
    $roomsImages.cycle('prev'); 
  });

  // $roomsImages.find("button.playPause").on("click", function() {
  $("#roomsImages .playPause").on("click", function() {
      if ( $roomsImages.is( '.cycle-paused' ) ) {
          $roomsImages.cycle('resume');
          $roomsImages.cycle('next');
          $(this).text( '||' );
      } else {
          $roomsImages.cycle( 'pause' );
          $(this).text( '>' );
      }
  });


	$('#roomsImages').apFullscreenModal({
	  openSelector: '#open-rooms',
	  backgroundColor: '#000',
	});


	$('#restaurantsImages').apFullscreenModal({
	  openSelector: '#open-restaurants'
	});

	$('#restaurantsImages').apFullscreenModal({
	  openSelector: '#open-restaurants',
	  backgroundColor: '#000',
	});


	$('#landscapesImages').apFullscreenModal({
	  openSelector: '#open-landscapes'
	});

	$('#landscapesImages').apFullscreenModal({
	  openSelector: '#open-landscapes',
	  backgroundColor: '#000',
	});

	$('#activitiesImages').apFullscreenModal({
	  openSelector: '#open-activities'
	});

	$('#activitiesImages').apFullscreenModal({
	  openSelector: '#open-activities',
	  backgroundColor: '#000',
	});

	$('#mogambospringsImages').apFullscreenModal({
	  openSelector: '#open-mogambosprings'
	});

	$('#mogambospringImages').apFullscreenModal({
	  openSelector: '#open-mogambosprings',
	  backgroundColor: '#000',
	});

	$('#weddingsImages').apFullscreenModal({
	  openSelector: '#open-weddings'
	});

	$('#weddingsImages').apFullscreenModal({
	  openSelector: '#open-weddings',
	  backgroundColor: '#000',
	});

});
