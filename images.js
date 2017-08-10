$( document ).on( "pagecreate", "#images", function () {

   var $rooms = $("#roomsImages"), 
       $roomsImages = $rooms.find(".imageBox"),
       $slidingrooms = $( "#roomsImages .sliderBox" ).find("img"),

      $restaurants = $("#restaurantsImages"),
      $restaurantsImages = $restaurants.find(".imageBox"),
      $slidingrestaurants = $( "#restaurantsImages .sliderBox" ).find("img"),

      $landscapes = $("#landscapesImages"),
      $landscapesImages = $landscapes.find(".imageBox"),
      $slidinglandscapes = $( "#landscapesImages .sliderBox" ).find("img"),

      $activities = $("#activitiesImages"),
      $activitiesImages = $activities.find(".imageBox"),
      $slidingactivities = $( "#activitiesImages .sliderBox" ).find("img"),

      $mogambosprings = $("#mogambospringsImages"),
      $mogambospringsImages = $mogambosprings.find(".imageBox"),
      $slidingmogambosprings = $( "#mogambospringsImages .sliderBox" ).find("img"),

      $weddings = $("#weddingsImages"),
      $weddingsImages = $weddings.find(".imageBox"),
      $slidingweddings = $( "#weddingsImages .sliderBox" ).find("img");

  var cycleNames = [
    {"name": $rooms, "modalDiv": '#open-rooms', "Images": $roomsImages, "urls": roomsImgUrls}, 
    {"name": $restaurants, "modalDiv": '#open-restaurants', "Images": $restaurantsImages, "urls": restaurantsImgUrls }, 
    {"name": $landscapes, "modalDiv": '#open-landscapes', "Images": $landscapesImages, "urls": landscapesImgUrls }, 
    {"name": $activities, "modalDiv": '#open-activities', "Images": $activitiesImages, "urls": activitiesImgUrls },
    {"name": $mogambosprings, "modalDiv": '#open-mogambosprings', "Images": $mogambospringsImages, "urls": mogambospringsImgUrls },
    {"name": $weddings, "modalDiv": '#open-weddings', "Images": $weddingsImages, "urls": weddingsImgUrls }
  ]

  for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
    $(cycleNames[cycleCnt].Images).cycle({
      autoHeightSpeed: 1000,
      speed: 1000,
      timeout: 10000,
      manualSpeed: 1000,
      fx: "fade",
      swipe: true,
      swipefx: "fade",
      centerHorz: true,
      centerVert: true,
      pause: true,
      allowWrap: false,
      loader: true,
      progressive: cycleNames[cycleCnt].urls,
      log: false
    });

    $(cycleNames[cycleCnt].Images).on("cycle-before", function(e, options, outgoing, incoming) {
        updatePosition();
    });

    doCycleAfter(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);

    $(cycleNames[cycleCnt].name).apFullscreenModal({
      openSelector: cycleNames[cycleCnt].modalDiv,
      animationDuration: 800
    });

    $(cycleNames[cycleCnt].name).find(".btnCaption").on("click", function() {
        $(".slideCaption").toggle();
    })

    gotoNext(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    gotoPrev(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    doPlayPause(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);

    $(cycleNames[cycleCnt].modalDiv).on("click", function() {
      console.log("hi");
    });
  }

  function gotoNext(name,images) {
    $(name).find(".btnNext").on("click", function() {
      $(images).cycle('next'); 
    });
  }

  function gotoPrev(name,images) {
    $(name).find(".btnPrevious").on("click", function() {
      $(images).cycle('prev'); 
    });
  }

  function doPlayPause(name,images) {
    $(name).find(".playPause").on("click", function() {
        if ( $(images).is( '.cycle-paused' ) ) {
            $(images).cycle('resume');
            $(images).cycle('next');
            $(this).text( '||' );
        } else {
            $(images).cycle( 'pause' );
            $(this).text( '>' );
        }
    });
  }

  function doCycleAfter(name,images){
    $(images).on("cycle-after", function(e, options, outgoing, incoming) {
      $(name).find("h2").html($(incoming).data("name"));
      $(name).find("p").html($(incoming).data("description"));
    });
  }

  function updatePosition() {
    var theHeight = $( window ).height();
    for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
      $(cycleNames[cycleCnt].Images).css("maxHeight",theHeight);
      $(cycleNames[cycleCnt].Images).find("img").css("maxHeight",theHeight);
    }
  }

  $( window ).resize( function (event) {
    event.preventDefault();
    updatePosition();
  });

  updatePosition();


  $(".slideCaption").toggle();


  // $rooms.apFullscreenModal({
  //   openSelector: '#open-rooms',
  //   // backgroundColor: '#000',
  // });
  
  // $roomsImages.cycle({
  //   autoHeightSpeed: 100,
  //   speed: 1000,
  //   timeout: 15000,
  //   manualSpeed: 1000,
  //   // fx: "scrollHorz",
  //   fx: "fade",// 
  //   swipe: true,
  //   // swipefx: "scrollHorz",
  //   swipefx: "fade",
  //   centerHorz: true,
  //   centerVert: true,
  //   //data-cycle-timeout="0"
  //   pause: true,
  //   allowWrap: false,
  //   log: false,//, // set to true to display slider console logs
  //   progressive: roomsImgUrls
  //   // before: roomImgSlide_onBefore,
  //   // after: roomImgSlide_onAfter
  //   //pauseOnHover: true
  //   //paused: true // while waiting for other images to finish loading then start slide show
  // });

});
