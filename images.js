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

  // $("#open-rooms").on("click", function() {
  //   startSlideShow(0);
  // });

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
        console.log("e = ", e);
        console.log("options = ", options);
        console.log("outgoing = ", outgoing);
        console.log("incoming = ", incoming);
        // updatePosition(images);
        // updatePosition();
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
      // updatePosition(images);
      $(images).cycle('goto', 0);
      $(images).cycle("resume");
      // updatePosition();
      return false;
    });
  }

  // function updatePosition(pSlideName) {
  function updatePosition() {    
    var theHeight = $( window ).height();
    // $(pSlideName).css("maxHeight",theHeight);
    // $(pSlideName).find("img").css("maxHeight",theHeight);  

    for ( var cycleCnt = cycleNames.length - 1; cycleCnt >= 0; cycleCnt-- ) {
      // updatePosition(cycleNames[cycleCnt].Images);
      // console.log("Updating position...", cycleNames[cycleCnt].Images.selector)
      $(cycleNames[cycleCnt].Images).css("maxHeight",theHeight);
      $(cycleNames[cycleCnt].Images).find("img").css("maxHeight",theHeight);  
    };
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

  function startSlideShow(slideArrayNumber) {
    $(cycleNames[slideArrayNumber].Images).cycle({
      // pause: true,
      autoHeightSpeed: 1000,
      speed: 500,
      timeout: 10000,
      manualSpeed: 500,
      fx: "fade",
      swipe: true,
      swipefx: "fade",
      centerHorz: true,
      centerVert: true,
      pause: true,
      allowWrap: false,
      // slide: '> div',
      // loader: true,
      // progressive: cycleNames[slideArrayNumber].urls,
      log: false
    });

    $(cycleNames[slideArrayNumber].name).apFullscreenModal({
      openSelector: cycleNames[slideArrayNumber].modalDiv,
      closeSelector: '.close-modal',
      animationDuration: 1000
    });

    $(cycleNames[slideArrayNumber].Images).cycle("pause");

    doCycleAfter(cycleNames[slideArrayNumber].name,cycleNames[slideArrayNumber].Images);
    doCycleBefore(cycleNames[slideArrayNumber].name,cycleNames[slideArrayNumber].Images);
    gotoNext(cycleNames[slideArrayNumber].name,cycleNames[slideArrayNumber].Images);
    gotoPrev(cycleNames[slideArrayNumber].name,cycleNames[slideArrayNumber].Images);
    doPlayPause(cycleNames[slideArrayNumber].name,cycleNames[slideArrayNumber].Images);
    doCycleResume(cycleNames[slideArrayNumber].modalDiv,cycleNames[slideArrayNumber].Images);

    $(cycleNames[slideArrayNumber].name).find(".btnCaption").on("click", function() {
        $(".slideCaption").toggle();
    })

    updatePosition();
  }

  $( window ).resize( function (event) {
    event.preventDefault();
    updatePosition();
  });

  $(".apfm-close-button").on("click", function() {
    // startAllSlideShows();
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
          // startAllSlideShows();
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

    function preload(arr, imgGroup, imgGroupSlide, groupNumber){

      var loadedCount = 0,
          imgLen = arr.length,
          $imgGroupSelector = $("#" + imgGroup);

      $imgGroupSelector.find(".imgAll").html(imgLen);

      function PreloadImage(imgSrc,imgIndex){        

        var objImagePreloader = new Image();
        objImagePreloader.src = imgSrc;

        if ( objImagePreloader.complete ){
          loadHandler(objImagePreloader, imgIndex);
          objImagePreloader.onload=function(){};
        } else {
          objImagePreloader.onload = function() {
            loadHandler(objImagePreloader, imgIndex );
            //    clear onLoad, IE behaves irratically with animated gifs otherwise
            objImagePreloader.onload=function(){};
          }
        }

        function loadHandler(loadedImg, imgIndex) {
          loadedCount++
          $imgGroupSelector.find(".loadedCount").html(loadedCount);
          // imgGroupSlide.cycle('add',loadedImg);
          $(loadedImg).appendTo(imgGroupSlide);
          if ( loadedCount == imgLen ) {
            $imgGroupSelector.find(".mainLoader").hide();
            startSlideShow(groupNumber);
          }
        }
      }

      for ( i = 0; i < arr.length; i++) PreloadImage(arr[i],i); 

    }    

  preload(roomsImgUrls, "open-rooms", $roomsImages,0);
  preload(restaurantsImgUrls, "open-restaurants", $restaurantsImages,1);
  preload(landscapesImgUrls, "open-landscapes", $landscapesImages,2);
  preload(activitiesImgUrls, "open-activities", $activitiesImages,3);
  preload(mogambospringsImgUrls, "open-mogambosprings", $mogambospringsImages,4);
  preload(weddingsImgUrls, "open-weddings", $weddingsImages,5);

  $(".slideCaption").toggle();

});
