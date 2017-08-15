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
      $slidingweddings = $( "#weddingsImages .sliderBox" ).find("img"),

      roomsImagesVisible = false,
      restaurantsVisible = false,
      landscapesVisible = false,
      activitiesVisible = false,
      mogambospringsVisible = false,
      weddingsVisible = false;

  var cycleNames = [
    {"name": $rooms, "modalDiv": '#open-rooms', "Images": $roomsImages, "urls": roomsImgUrls}, 
    {"name": $restaurants, "modalDiv": '#open-restaurants', "Images": $restaurantsImages, "urls": restaurantsImgUrls }, 
    {"name": $landscapes, "modalDiv": '#open-landscapes', "Images": $landscapesImages, "urls": landscapesImgUrls }, 
    {"name": $activities, "modalDiv": '#open-activities', "Images": $activitiesImages, "urls": activitiesImgUrls },
    {"name": $mogambosprings, "modalDiv": '#open-mogambosprings', "Images": $mogambospringsImages, "urls": mogambospringsImgUrls },
    {"name": $weddings, "modalDiv": '#open-weddings', "Images": $weddingsImages, "urls": weddingsImgUrls }
  ]

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

  function doCycleBefore(name,images){
    $(images).on("cycle-before", function(e, options, outgoing, incoming) {
        console.log("Updating position...cycle-before", images.selector);
        updatePosition(images);
    });
  }

  function doCycleAfter(name,images){
    $(images).on("cycle-after", function(e, options, outgoing, incoming) {
      // console.log("Updating position...cycle-after", images.selector);
      // updatePosition(images);
      $(name).find("h2").html($(incoming).data("name"));
      $(name).find("p").html($(incoming).data("description"));
    });
  }

  function doCycleResume(modalDiv,images){
    $(modalDiv).on("click", function() {
      console.log("Pause all slide shows");
      pauseSlideShows();
      console.log("starting slideshow", images.selector);
      $(images).cycle('goto', 0);
      updatePosition(images);
      $(images).cycle("resume");
      return false;
    });
  }

  function updatePosition(pSlideName) {
    var theHeight = $( window ).height();
    $(pSlideName).css("maxHeight",theHeight);
    $(pSlideName).find("img").css("maxHeight",theHeight);  
  }

  function pauseSlideShows() {
    //Temporary solution to stop running slideshow, find a way to detect
    //currently running slideshow and only pause that specifific slideshow
    for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
      $(cycleNames[cycleCnt].Images).cycle("pause");;  
    };
  }

  function startAllSlideShows() {
    //Temporary solution to stop running slideshow, find a way to detect
    //currently running slideshow and only pause that specifific slideshow
    for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
      $(cycleNames[cycleCnt].Images).cycle("resume");;  
    };
  }

  for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
    $(cycleNames[cycleCnt].Images).cycle({
      // pause: true,
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
      // loader: true,
      progressive: cycleNames[cycleCnt].urls,
      log: false
    });

    $(cycleNames[cycleCnt].name).apFullscreenModal({
      openSelector: cycleNames[cycleCnt].modalDiv,
      closeSelector: '.close-modal',
      animationDuration: 800
    });

    // $(cycleNames[cycleCnt].Images).cycle("pause");

    doCycleAfter(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    doCycleBefore(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    gotoNext(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    gotoPrev(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    doPlayPause(cycleNames[cycleCnt].name,cycleNames[cycleCnt].Images);
    doCycleResume(cycleNames[cycleCnt].modalDiv,cycleNames[cycleCnt].Images);

    $(cycleNames[cycleCnt].name).find(".btnCaption").on("click", function() {
        $(".slideCaption").toggle();
    })
  }

  $( window ).resize( function (event) {
    event.preventDefault();
    // console.log("Updating position...resize");
    for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
      updatePosition(cycleNames[cycleCnt].Images);
    };
  });


  $(".slideCaption").toggle();

  $(".apfm-close-button").on("click", function() {
    startAllSlideShows();
  });

  $(document.documentElement).keyup(function (e) {

      if (e.keyCode == 39)
      {        
         // $roomsImages.cycle('next');
      }

      if (e.keyCode == 37)
      {
          // $roomsImages.cycle('prev');
      }

      if (e.keyCode == 27){
          // Temp. solution to continue download of slideshows pics while not shown.
          startAllSlideShows();
      }
  });
  
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
