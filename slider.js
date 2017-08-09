
$( document ).on( "pagecreate", "#home", function () {
  
  var $imageBoxSlide = $("#imageBox .image-slideshow"),
      $images = $("#imgList").find("a"),
      $slidingImage = $( "#imageBox" ).find("img"),
      imageUrl = [],
      imgAllCount = $slidingImage.length,
      isFirstLoad;

      //image path
  for ( var imgCnt = 0; imgCnt < imgAllCount; imgCnt = imgCnt + 1){
    var $imgElem = $( $slidingImage[imgCnt] ),
      imgPath = $imgElem.data("src");

    imageUrl.push(imgPath);
  }

  function updateImagePath(){

    var screenWidth = $( window ).width() + 17, // 17 - ???? based on desktop browser.
        imgSize = imageUrl[0].slice( 13, 17 );

    if (screenWidth <= 353.5) {
      if (imgSize !== "0320") {
        updateImgSourceArray(imgSize,"0320");
      } else if ( !isFirstLoad ){
        updateImgSourceArray(imgSize,"0320");
      }
    } else if (screenWidth >= 353.51 && screenWidth <= 433.50) {
      if (imgSize !== "0387") {
        updateImgSourceArray(imgSize,"0387");
      }
    } else if (screenWidth >= 433.51 && screenWidth <= 540) {
      if (imgSize !== "0480") { 
        updateImgSourceArray(imgSize,"0480");
      }
    } else if (screenWidth >= 540.01 && screenWidth <= 620) {
      if (imgSize !== "0600") { 
        updateImgSourceArray(imgSize,"0600");
      }
    } else if (screenWidth >= 620.01 && screenWidth <= 660) {
      if (imgSize !== "0640") { 
        updateImgSourceArray(imgSize,"0640");
      }
    } else if (screenWidth >= 660.01 && screenWidth <= 724) {
      if (imgSize !== "0680") { 
        updateImgSourceArray(imgSize,"0680");
      }
    } else if (screenWidth >= 724.01 && screenWidth <= 784) {
      if (imgSize !== "0768") { 
        updateImgSourceArray(imgSize,"0768");
      }
    } else if (screenWidth >= 784.01 && screenWidth <= 880) {
      if (imgSize !== "0800") { 
        updateImgSourceArray(imgSize,"0800");
      }
    } else if (screenWidth >= 880.01 && screenWidth <= 979) {
      if (imgSize !== "0960") { 
        updateImgSourceArray(imgSize,"0960");
      }
    } else if (screenWidth >= 979.01 && screenWidth <= 1011) {
      if (imgSize !== "0998") { 
        updateImgSourceArray(imgSize,"0998");
      }
    } else if (screenWidth >= 1011.01 && screenWidth <= 1052) {
      if (imgSize !== "1024") { 
        updateImgSourceArray(imgSize,"1024");
      }
    } else if (screenWidth >= 1052.01 && screenWidth <= 1108.5) {
      if (imgSize !== "1080") { 
        updateImgSourceArray(imgSize,"1080");
      }
    } else if (screenWidth >= 1108.51 && screenWidth <= 1208.5) {
      if (imgSize !== "1137") { 
        updateImgSourceArray(imgSize,"1137");
      }
    } else if (screenWidth > 1208.51) {
      if (imgSize !== "1280") { 
        updateImgSourceArray(imgSize,"1280");
      }
    }

    function updateImageSRC(oldimgSize,newimgSize){
        $slidingImage.attr( 'src', function(index, attr) {
          return attr.replace( oldimgSize, newimgSize );
        });
    }

    function updateImgSourceArray(oldImagesize,newImagesize){

        for ( var imgCnt = 0; imgCnt < imgAllCount; imgCnt = imgCnt + 1){
          imageUrl[imgCnt] = imageUrl[imgCnt].replace( oldImagesize, newImagesize );
        }

        preLoadImagesFirst(imageUrl);
    }

    function preLoadImagesFirst(){

          var loadImagePromise, singleImagePromise = [],
              singleImagePromise0 = $.loadImage( imageUrl[0] ),//.done( addImageSource(0) ),
              singleImagePromise1 = $.loadImage( imageUrl[1] ),//.done( addImageSource(1) ),
              singleImagePromise2 = $.loadImage( imageUrl[2] ),//.done( addImageSource(2) ),
              singleImagePromise3 = $.loadImage( imageUrl[3] ),//.done( addImageSource(3) ),
              singleImagePromise4 = $.loadImage( imageUrl[4] ),//.done( addImageSource(4) ),
              singleImagePromise5 = $.loadImage( imageUrl[5] ),//.done( addImageSource(5) ),
              singleImagePromise6 = $.loadImage( imageUrl[6] ),//.done( addImageSource(6) ),
              singleImagePromise7 = $.loadImage( imageUrl[7] ),//.done( addImageSource(7) ),
              singleImagePromise8 = $.loadImage( imageUrl[8] ),//.done( addImageSource(8) ),
              singleImagePromise9 = $.loadImage( imageUrl[9] ),//.done( addImageSource(9) ),
              singleImagePromise10 = $.loadImage( imageUrl[10] ),//.done( addImageSource(10) ),
              singleImagePromise11 = $.loadImage( imageUrl[11] ),//.done( addImageSource(11) ),
              singleImagePromise12 = $.loadImage( imageUrl[12] ),//.done( addImageSource(12) ),
              singleImagePromise13 = $.loadImage( imageUrl[13] ),//.done( addImageSource(13) ),
              singleImagePromise14 = $.loadImage( imageUrl[14] ),//.done( addImageSource(14) ),
              singleImagePromise15 = $.loadImage( imageUrl[15] );//.done( addImageSource(15) );
          
          loadImagePromise = $.Deferred();

          singleImagePromise0 = loadImagePromise.done(function (){ addImageSource(0); });
          singleImagePromise1 = singleImagePromise0.done(function (){ addImageSource(1); });
          singleImagePromise2 = singleImagePromise1.done(function (){ addImageSource(2); });
          singleImagePromise3 = singleImagePromise2.done(function (){ addImageSource(3); });
          singleImagePromise4 = singleImagePromise3.done(function (){ addImageSource(4); });
          singleImagePromise5 = singleImagePromise4.done(function (){ addImageSource(5); });
          singleImagePromise6 = singleImagePromise5.done(function (){ addImageSource(6); });
          singleImagePromise7 = singleImagePromise6.done(function (){ addImageSource(7); });
          singleImagePromise8 = singleImagePromise7.done(function (){ addImageSource(8); });
          singleImagePromise9 = singleImagePromise8.done(function (){ addImageSource(9); });
          singleImagePromise10 = singleImagePromise9.done(function (){ addImageSource(10); });
          singleImagePromise11 = singleImagePromise10.done(function (){ addImageSource(11); });
          singleImagePromise12 = singleImagePromise11.done(function (){ addImageSource(12); });
          singleImagePromise13 = singleImagePromise12.done(function (){ addImageSource(13); });
          singleImagePromise14 = singleImagePromise13.done(function (){ addImageSource(14); });
          singleImagePromise15 = singleImagePromise14.done(function (){ addImageSource(15); });

          loadImagePromise.resolve();

          function addImageSource(imgUrlIndex){
            $( $slidingImage[imgUrlIndex] ).attr( "src", imageUrl[ imgUrlIndex ] );
          }
    }
  }

  $imageBoxSlide.cycle({
    autoHeightSpeed: 1000,
    speed: 1000,
    timeout: 4000,
    manualSpeed: 500,
    fx: "fade",
    swipe: true,
    swipefx: "fade",
    allowWrap: false,
    log: false//, // set to true to display slider console logs
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  updateImagePath();

  $images.first().addClass("active");

  $( window ).resize( function ( event ) {
    event.preventDefault();
    updateImagePath();
  } );

  $images.on("click", function(e) {
    var image = $(this).attr("name"),
        imageIndex = $imageBoxSlide.find("[name='" + image + "']").index();
    $imageBoxSlide.cycle("goto", imageIndex -3 );
  });
  
  $imageBoxSlide.on("cycle-before", function(e, options, outgoing, incoming) {
           
    var currentImage = $(incoming).attr("name");
    $images.removeClass("active");
    $images.filter("[name='" + currentImage + "']").addClass("active");
    $("#imgCaption").find("p").html($(incoming).data("caption"));
  });
});

$( document ).on( "pagecreate", "#packages", function () {
  
  var $imageBoxSlide = $("#functionAreaBox .functionArea-slideshow"),
      $slidingImage = $( "#functionAreaBox" ).find("img"),
      imageUrl = [],
      imgAllCount = $slidingImage.length,
      isFirstLoad;

      //image path
  for ( var imgCnt = 0; imgCnt < imgAllCount; imgCnt = imgCnt + 1){
    var $imgElem = $( $slidingImage[imgCnt] ),
      imgPath = $imgElem.data("src");

    imageUrl.push(imgPath);
  }

    function preLoadImagesFirst(){

          var loadImagePromise, singleImagePromise = [],
              singleImagePromise0 = $.loadImage( imageUrl[0] ),
              singleImagePromise1 = $.loadImage( imageUrl[1] ),
              singleImagePromise2 = $.loadImage( imageUrl[2] ),
              singleImagePromise3 = $.loadImage( imageUrl[3] ),
              singleImagePromise4 = $.loadImage( imageUrl[4] ),
              singleImagePromise5 = $.loadImage( imageUrl[5] ),
              singleImagePromise6 = $.loadImage( imageUrl[6] ),
              singleImagePromise7 = $.loadImage( imageUrl[7] ),
              singleImagePromise8 = $.loadImage( imageUrl[8] ),
              singleImagePromise9 = $.loadImage( imageUrl[9] );
          
          loadImagePromise = $.Deferred();

          singleImagePromise0 = loadImagePromise.done(function (){ addImageSource(0); });
          singleImagePromise1 = singleImagePromise0.done(function (){ addImageSource(1); });
          singleImagePromise2 = singleImagePromise1.done(function (){ addImageSource(2); });
          singleImagePromise3 = singleImagePromise2.done(function (){ addImageSource(3); });
          singleImagePromise4 = singleImagePromise3.done(function (){ addImageSource(4); });
          singleImagePromise5 = singleImagePromise4.done(function (){ addImageSource(5); });
          singleImagePromise6 = singleImagePromise5.done(function (){ addImageSource(6); });
          singleImagePromise7 = singleImagePromise6.done(function (){ addImageSource(7); });
          singleImagePromise8 = singleImagePromise7.done(function (){ addImageSource(8); });
          singleImagePromise9 = singleImagePromise8.done(function (){ addImageSource(9); });

          loadImagePromise.resolve();

          function addImageSource(imgUrlIndex){
            $( $slidingImage[imgUrlIndex] ).attr( "src", imageUrl[ imgUrlIndex ] );
          }
    }

  $imageBoxSlide.cycle({
    autoHeightSpeed: 1000,
    speed: 1000,
    timeout: 4000,
    manualSpeed: 500,
    fx: "fade",
    swipe: true,
    swipefx: "fade",
    /*data-cycle-timeout="0"*/
    next: ".functionArea-next",
    prev: ".functionArea-prev",
    allowWrap: false,
    log: true//, // set to true to display slider console logs
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  preLoadImagesFirst();

  $imageBoxSlide.on("cycle-before", function(e, options, outgoing, incoming) {
    var currentImage = $(incoming).attr("name");
    $("#functionAreaCaption").find("p").html($(incoming).data("caption"));
  });
});

$( document ).on( "pagecreate", "#images", function () {
  
 // photo gallery  
  var $photoGalleryBoxSlide = $("#photoGalleryBox .photoGallery-slideshow"),
      $slidingphotoGallery = $( "#photoGalleryBox" ).find("img"),
      $photoGalleryList = $("#photoGalleryList").find("a"),
      photoGalleryUrl = [],
      photoGalleryAllCount = $slidingphotoGallery.length,
      photoGalleryisFirstLoad;

      //image path
  for ( var photoGalleryCnt = 0; photoGalleryCnt < photoGalleryAllCount; photoGalleryCnt = photoGalleryCnt + 1){
    var $photoGalleryElem = $( $slidingphotoGallery[photoGalleryCnt] ),
      photoGalleryPath = $photoGalleryElem.data("src");

    photoGalleryUrl.push(photoGalleryPath);
  }

    function preLoadphotoGalleryFirst(){

          var loadphotoGalleryPromise, singlephotoGalleryPromise = [],
              singlephotoGalleryPromise0 = $.loadImage( photoGalleryUrl[0] ),
              singlephotoGalleryPromise1 = $.loadImage( photoGalleryUrl[1] ),
              singlephotoGalleryPromise2 = $.loadImage( photoGalleryUrl[2] ),
              singlephotoGalleryPromise3 = $.loadImage( photoGalleryUrl[3] ),
              singlephotoGalleryPromise4 = $.loadImage( photoGalleryUrl[4] ),
              singlephotoGalleryPromise5 = $.loadImage( photoGalleryUrl[5] ),
              singlephotoGalleryPromise6 = $.loadImage( photoGalleryUrl[6] ),
              singlephotoGalleryPromise7 = $.loadImage( photoGalleryUrl[7] ),
              singlephotoGalleryPromise8 = $.loadImage( photoGalleryUrl[8] ),
              singlephotoGalleryPromise9 = $.loadImage( photoGalleryUrl[9] ),
              singlephotoGalleryPromise10 = $.loadImage( photoGalleryUrl[10] ),
              singlephotoGalleryPromise11 = $.loadImage( photoGalleryUrl[11] ),
              singlephotoGalleryPromise12 = $.loadImage( photoGalleryUrl[12] ),
              singlephotoGalleryPromise13 = $.loadImage( photoGalleryUrl[13] ),
              singlephotoGalleryPromise14 = $.loadImage( photoGalleryUrl[14] ),
              singlephotoGalleryPromise15 = $.loadImage( photoGalleryUrl[15] );
          
          loadphotoGalleryPromise = $.Deferred();

          singlephotoGalleryPromise0 = loadphotoGalleryPromise.done(function (){ addphotoGallerySource(0); });
          singlephotoGalleryPromise1 = singlephotoGalleryPromise0.done(function (){ addphotoGallerySource(1); });
          singlephotoGalleryPromise2 = singlephotoGalleryPromise1.done(function (){ addphotoGallerySource(2); });
          singlephotoGalleryPromise3 = singlephotoGalleryPromise2.done(function (){ addphotoGallerySource(3); });
          singlephotoGalleryPromise4 = singlephotoGalleryPromise3.done(function (){ addphotoGallerySource(4); });
          singlephotoGalleryPromise5 = singlephotoGalleryPromise4.done(function (){ addphotoGallerySource(5); });
          singlephotoGalleryPromise6 = singlephotoGalleryPromise5.done(function (){ addphotoGallerySource(6); });
          singlephotoGalleryPromise7 = singlephotoGalleryPromise6.done(function (){ addphotoGallerySource(7); });
          singlephotoGalleryPromise8 = singlephotoGalleryPromise7.done(function (){ addphotoGallerySource(8); });
          singlephotoGalleryPromise9 = singlephotoGalleryPromise8.done(function (){ addphotoGallerySource(9); });
          singlephotoGalleryPromise10 = singlephotoGalleryPromise9.done(function (){ addphotoGallerySource(10); });
          singlephotoGalleryPromise11 = singlephotoGalleryPromise10.done(function (){ addphotoGallerySource(11); });
          singlephotoGalleryPromise12 = singlephotoGalleryPromise11.done(function (){ addphotoGallerySource(12); });
          singlephotoGalleryPromise13 = singlephotoGalleryPromise12.done(function (){ addphotoGallerySource(13); });
          singlephotoGalleryPromise14 = singlephotoGalleryPromise13.done(function (){ addphotoGallerySource(14); });
          singlephotoGalleryPromise15 = singlephotoGalleryPromise14.done(function (){ addphotoGallerySource(15); });

          loadphotoGalleryPromise.resolve();

          function addphotoGallerySource(photoGalleryUrlIndex){
            $( $slidingphotoGallery[photoGalleryUrlIndex] ).attr( "src", photoGalleryUrl[ photoGalleryUrlIndex ] );
          }
    }

  $photoGalleryBoxSlide.cycle({
    autoHeightSpeed: 1000,
    speed: 1000,
    timeout: 4000,
    manualSpeed: 500,
    fx: "fade",
    swipe: true,
    swipefx: "fade",
    //centerHorz: true,
    //centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: true//, // set to true to display slider console logs
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  preLoadphotoGalleryFirst();

  $photoGalleryBoxSlide.on("cycle-before", function(e, options, outgoing, incoming) {
    var currentphotoGallery = $(incoming).attr("name");
    $photoGalleryList.removeClass("active");
    $photoGalleryList.filter("[name='" + currentphotoGallery + "']").addClass("active");
    $("#photoGalleryCaption").find("p").html($(incoming).data("caption"));

  });

  $photoGalleryList.first().addClass("active");

  $photoGalleryList.on("click", function(e) {
    var photoGallery = $(this).attr("name"),
        photoGalleryIndex = $photoGalleryBoxSlide.find("[name='" + photoGallery + "']").index();
    $photoGalleryBoxSlide.cycle("goto", photoGalleryIndex -3 );
  });


 // Celendar 2015
   var $calendar2015BoxSlide = $("#calendar2015Box .calendar2015-slideshow"),
      $slidingcalendar2015 = $( "#calendar2015Box" ).find("img"),
      $calendar2015List = $("#calendar2015List").find("a"),
      calendar2015Url = [],
      calendar2015AllCount = $slidingcalendar2015.length,
      calendar2015isFirstLoad;

      //image path
  for ( var calendar2015Cnt = 0; calendar2015Cnt < calendar2015AllCount; calendar2015Cnt = calendar2015Cnt + 1){
    var $calendar2015Elem = $( $slidingcalendar2015[calendar2015Cnt] ),
      calendar2015Path = $calendar2015Elem.data("src");

    calendar2015Url.push(calendar2015Path);
  }

    function preLoadcalendar2015First(){

          var loadcalendar2015Promise, singlecalendar2015Promise = [],
              singlecalendar2015Promise0 = $.loadImage( calendar2015Url[0] ),
              singlecalendar2015Promise1 = $.loadImage( calendar2015Url[1] ),
              singlecalendar2015Promise2 = $.loadImage( calendar2015Url[2] ),
              singlecalendar2015Promise3 = $.loadImage( calendar2015Url[3] ),
              singlecalendar2015Promise4 = $.loadImage( calendar2015Url[4] ),
              singlecalendar2015Promise5 = $.loadImage( calendar2015Url[5] ),
              singlecalendar2015Promise6 = $.loadImage( calendar2015Url[6] ),
              singlecalendar2015Promise7 = $.loadImage( calendar2015Url[7] ),
              singlecalendar2015Promise8 = $.loadImage( calendar2015Url[8] ),
              singlecalendar2015Promise9 = $.loadImage( calendar2015Url[9] ),
              singlecalendar2015Promise10 = $.loadImage( calendar2015Url[10] ),
              singlecalendar2015Promise11 = $.loadImage( calendar2015Url[11] ),
              singlecalendar2015Promise12 = $.loadImage( calendar2015Url[12] ),
              singlecalendar2015Promise13 = $.loadImage( calendar2015Url[13] ),
              singlecalendar2015Promise14 = $.loadImage( calendar2015Url[14] ),
              singlecalendar2015Promise15 = $.loadImage( calendar2015Url[15] ),
              singlecalendar2015Promise16 = $.loadImage( calendar2015Url[16] ),
              singlecalendar2015Promise17 = $.loadImage( calendar2015Url[17] ),
              singlecalendar2015Promise18 = $.loadImage( calendar2015Url[18] ),
              singlecalendar2015Promise19 = $.loadImage( calendar2015Url[19] ),
              singlecalendar2015Promise20 = $.loadImage( calendar2015Url[20] ),
              singlecalendar2015Promise21 = $.loadImage( calendar2015Url[21] ),
              singlecalendar2015Promise22 = $.loadImage( calendar2015Url[22] ),
              singlecalendar2015Promise23 = $.loadImage( calendar2015Url[23] );
          
          loadcalendar2015Promise = $.Deferred();

          singlecalendar2015Promise0 = loadcalendar2015Promise.done(function (){ addcalendar2015Source(0); });
          singlecalendar2015Promise1 = singlecalendar2015Promise0.done(function (){ addcalendar2015Source(1); });
          singlecalendar2015Promise2 = singlecalendar2015Promise1.done(function (){ addcalendar2015Source(2); });
          singlecalendar2015Promise3 = singlecalendar2015Promise2.done(function (){ addcalendar2015Source(3); });
          singlecalendar2015Promise4 = singlecalendar2015Promise3.done(function (){ addcalendar2015Source(4); });
          singlecalendar2015Promise5 = singlecalendar2015Promise4.done(function (){ addcalendar2015Source(5); });
          singlecalendar2015Promise6 = singlecalendar2015Promise5.done(function (){ addcalendar2015Source(6); });
          singlecalendar2015Promise7 = singlecalendar2015Promise6.done(function (){ addcalendar2015Source(7); });
          singlecalendar2015Promise8 = singlecalendar2015Promise7.done(function (){ addcalendar2015Source(8); });
          singlecalendar2015Promise9 = singlecalendar2015Promise8.done(function (){ addcalendar2015Source(9); });
          singlecalendar2015Promise10 = singlecalendar2015Promise9.done(function (){ addcalendar2015Source(10); });
          singlecalendar2015Promise11 = singlecalendar2015Promise10.done(function (){ addcalendar2015Source(11); });
          singlecalendar2015Promise12 = singlecalendar2015Promise11.done(function (){ addcalendar2015Source(12); });
          singlecalendar2015Promise13 = singlecalendar2015Promise12.done(function (){ addcalendar2015Source(13); });
          singlecalendar2015Promise14 = singlecalendar2015Promise13.done(function (){ addcalendar2015Source(14); });
          singlecalendar2015Promise15 = singlecalendar2015Promise14.done(function (){ addcalendar2015Source(15); });
          singlecalendar2015Promise16 = singlecalendar2015Promise15.done(function (){ addcalendar2015Source(16); });
          singlecalendar2015Promise17 = singlecalendar2015Promise16.done(function (){ addcalendar2015Source(17); });
          singlecalendar2015Promise18 = singlecalendar2015Promise17.done(function (){ addcalendar2015Source(18); });
          singlecalendar2015Promise19 = singlecalendar2015Promise18.done(function (){ addcalendar2015Source(19); });
          singlecalendar2015Promise20 = singlecalendar2015Promise19.done(function (){ addcalendar2015Source(20); });
          singlecalendar2015Promise21 = singlecalendar2015Promise20.done(function (){ addcalendar2015Source(21); });
          singlecalendar2015Promise22 = singlecalendar2015Promise21.done(function (){ addcalendar2015Source(22); });
          singlecalendar2015Promise23 = singlecalendar2015Promise22.done(function (){ addcalendar2015Source(23); });

          loadcalendar2015Promise.resolve();

          function addcalendar2015Source(calendar2015UrlIndex){
            $( $slidingcalendar2015[calendar2015UrlIndex] ).attr( "src", calendar2015Url[ calendar2015UrlIndex ] );
          }
    }

  $calendar2015BoxSlide.cycle({
    autoHeightSpeed: 1000,
    speed: 1000,
    timeout: 4000,
    manualSpeed: 500,
    fx: "fade",
    swipe: true,
    swipefx: "fade",
    //centerHorz: true,
    //centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  preLoadcalendar2015First();

  $calendar2015BoxSlide.on("cycle-before", function(e, options, outgoing, incoming) {
    var currentcalendar2015 = $(incoming).attr("name");
    $calendar2015List.removeClass("active");
    $calendar2015List.filter("[name='" + currentcalendar2015 + "']").addClass("active");
    $("#calendar2015Caption").find("p").html($(incoming).data("caption"));

  });

  $calendar2015List.first().addClass("active");

  $calendar2015List.on("click", function(e) {
    var calendar2015 = $(this).attr("name"),
        calendar2015Index = $calendar2015BoxSlide.find("[name='" + calendar2015 + "']").index();
    $calendar2015BoxSlide.cycle("goto", calendar2015Index -3 );
  });

 // Celendar 2014
   var $calendar2014BoxSlide = $("#calendar2014Box .calendar2014-slideshow"),
      $slidingcalendar2014 = $( "#calendar2014Box" ).find("img"),
      $calendar2014List = $("#calendar2014List").find("a"),
      calendar2014Url = [],
      calendar2014AllCount = $slidingcalendar2014.length,
      calendar2014isFirstLoad;

      //image path
  for ( var calendar2014Cnt = 0; calendar2014Cnt < calendar2014AllCount; calendar2014Cnt = calendar2014Cnt + 1){
    var $calendar2014Elem = $( $slidingcalendar2014[calendar2014Cnt] ),
      calendar2014Path = $calendar2014Elem.data("src");

    calendar2014Url.push(calendar2014Path);
  }

    function preLoadcalendar2014First(){

          var loadcalendar2014Promise, singlecalendar2014Promise = [],
              singlecalendar2014Promise0 = $.loadImage( calendar2014Url[0] ),
              singlecalendar2014Promise1 = $.loadImage( calendar2014Url[1] ),
              singlecalendar2014Promise2 = $.loadImage( calendar2014Url[2] ),
              singlecalendar2014Promise3 = $.loadImage( calendar2014Url[3] ),
              singlecalendar2014Promise4 = $.loadImage( calendar2014Url[4] ),
              singlecalendar2014Promise5 = $.loadImage( calendar2014Url[5] ),
              singlecalendar2014Promise6 = $.loadImage( calendar2014Url[6] ),
              singlecalendar2014Promise7 = $.loadImage( calendar2014Url[7] ),
              singlecalendar2014Promise8 = $.loadImage( calendar2014Url[8] ),
              singlecalendar2014Promise9 = $.loadImage( calendar2014Url[9] ),
              singlecalendar2014Promise10 = $.loadImage( calendar2014Url[10] ),
              singlecalendar2014Promise11 = $.loadImage( calendar2014Url[11] ),
              singlecalendar2014Promise12 = $.loadImage( calendar2014Url[12] ),
              singlecalendar2014Promise13 = $.loadImage( calendar2014Url[13] ),
              singlecalendar2014Promise14 = $.loadImage( calendar2014Url[14] ),
              singlecalendar2014Promise15 = $.loadImage( calendar2014Url[15] ),
              singlecalendar2014Promise16 = $.loadImage( calendar2014Url[16] ),
              singlecalendar2014Promise17 = $.loadImage( calendar2014Url[17] ),
              singlecalendar2014Promise18 = $.loadImage( calendar2014Url[18] ),
              singlecalendar2014Promise19 = $.loadImage( calendar2014Url[19] ),
              singlecalendar2014Promise20 = $.loadImage( calendar2014Url[20] ),
              singlecalendar2014Promise21 = $.loadImage( calendar2014Url[21] ),
              singlecalendar2014Promise22 = $.loadImage( calendar2014Url[22] ),
              singlecalendar2014Promise23 = $.loadImage( calendar2014Url[23] );
          
          loadcalendar2014Promise = $.Deferred();

          singlecalendar2014Promise0 = loadcalendar2014Promise.done(function (){ addcalendar2014Source(0); });
          singlecalendar2014Promise1 = singlecalendar2014Promise0.done(function (){ addcalendar2014Source(1); });
          singlecalendar2014Promise2 = singlecalendar2014Promise1.done(function (){ addcalendar2014Source(2); });
          singlecalendar2014Promise3 = singlecalendar2014Promise2.done(function (){ addcalendar2014Source(3); });
          singlecalendar2014Promise4 = singlecalendar2014Promise3.done(function (){ addcalendar2014Source(4); });
          singlecalendar2014Promise5 = singlecalendar2014Promise4.done(function (){ addcalendar2014Source(5); });
          singlecalendar2014Promise6 = singlecalendar2014Promise5.done(function (){ addcalendar2014Source(6); });
          singlecalendar2014Promise7 = singlecalendar2014Promise6.done(function (){ addcalendar2014Source(7); });
          singlecalendar2014Promise8 = singlecalendar2014Promise7.done(function (){ addcalendar2014Source(8); });
          singlecalendar2014Promise9 = singlecalendar2014Promise8.done(function (){ addcalendar2014Source(9); });
          singlecalendar2014Promise10 = singlecalendar2014Promise9.done(function (){ addcalendar2014Source(10); });
          singlecalendar2014Promise11 = singlecalendar2014Promise10.done(function (){ addcalendar2014Source(11); });
          singlecalendar2014Promise12 = singlecalendar2014Promise11.done(function (){ addcalendar2014Source(12); });
          singlecalendar2014Promise13 = singlecalendar2014Promise12.done(function (){ addcalendar2014Source(13); });
          singlecalendar2014Promise14 = singlecalendar2014Promise13.done(function (){ addcalendar2014Source(14); });
          singlecalendar2014Promise15 = singlecalendar2014Promise14.done(function (){ addcalendar2014Source(15); });
          singlecalendar2014Promise16 = singlecalendar2014Promise15.done(function (){ addcalendar2014Source(16); });
          singlecalendar2014Promise17 = singlecalendar2014Promise16.done(function (){ addcalendar2014Source(17); });
          singlecalendar2014Promise18 = singlecalendar2014Promise17.done(function (){ addcalendar2014Source(18); });
          singlecalendar2014Promise19 = singlecalendar2014Promise18.done(function (){ addcalendar2014Source(19); });
          singlecalendar2014Promise20 = singlecalendar2014Promise19.done(function (){ addcalendar2014Source(20); });
          singlecalendar2014Promise21 = singlecalendar2014Promise20.done(function (){ addcalendar2014Source(21); });
          singlecalendar2014Promise22 = singlecalendar2014Promise21.done(function (){ addcalendar2014Source(22); });
          singlecalendar2014Promise23 = singlecalendar2014Promise22.done(function (){ addcalendar2014Source(23); });

          loadcalendar2014Promise.resolve();

          function addcalendar2014Source(calendar2014UrlIndex){
            $( $slidingcalendar2014[calendar2014UrlIndex] ).attr( "src", calendar2014Url[ calendar2014UrlIndex ] );
          }
    }

  $calendar2014BoxSlide.cycle({
    autoHeightSpeed: 1000,
    speed: 1000,
    timeout: 4000,
    manualSpeed: 500,
    fx: "fade",
    swipe: true,
    swipefx: "fade",
    //centerHorz: true,
    //centerVert: true,
    //data-cycle-timeout="0"
    //next: ".photoGallery-next",
    //prev: ".photoGallery-prev",
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  preLoadcalendar2014First();

  $calendar2014BoxSlide.on("cycle-before", function(e, options, outgoing, incoming) {
    var currentcalendar2014 = $(incoming).attr("name");
    $calendar2014List.removeClass("active");
    $calendar2014List.filter("[name='" + currentcalendar2014 + "']").addClass("active");
    $("#calendar2014Caption").find("p").html($(incoming).data("caption"));

  });

  $calendar2014List.first().addClass("active");

  $calendar2014List.on("click", function(e) {
    var calendar2014 = $(this).attr("name"),
        calendar2014Index = $calendar2014BoxSlide.find("[name='" + calendar2014 + "']").index();
    $calendar2014BoxSlide.cycle("goto", calendar2014Index -3 );
  });
});
