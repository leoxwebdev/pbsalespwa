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

 //      //image path
 //  for ( var roomsCnt = 0; roomsCnt < allRoomsCount; roomsCnt = roomsCnt + 1){
 //    var $roomsElem = $( $slidingrooms[roomsCnt] ),
 //      roomsPath = $roomsElem.data("src");

 //    roomsImagesURL.push(roomsPath);
 //  }

 //  for ( var restaurantsCnt = 0; restaurantsCnt < allRestaurantsCount; restaurantsCnt = restaurantsCnt + 1){
 //    var $restaurantsElem = $( $slidingrestaurants[restaurantsCnt] ),
 //      restaurantsPath = $restaurantsElem.data("src");

 //    restaurantsImagesURL.push(restaurantsPath);
 //  }

 //  for ( var landscapesCnt = 0; landscapesCnt < allLandscapesCount; landscapesCnt = landscapesCnt + 1){
 //    var $landscapesElem = $( $slidinglandscapes[landscapesCnt] ),
 //      landscapesPath = $landscapesElem.data("src");

 //    landscapesImagesURL.push(landscapesPath);
 //  }

      // for ( var activitiesCnt = 0; activitiesCnt < allActivitiesCount; activitiesCnt = activitiesCnt + 1){
 //    var $activitiesElem = $( $slidingactivities[activitiesCnt] ),
 //      activitiesPath = $activitiesElem.data("src");

 //    activitiesImagesURL.push(activitiesPath);
 //  }

      // for ( var mogambospringsCnt = 0; mogambospringsCnt < allMogambospringsCount; mogambospringsCnt = mogambospringsCnt + 1){
 //    var $mogambospringsElem = $( $slidingmogambosprings[mogambospringsCnt] ),
 //      mogambospringsPath = $mogambospringsElem.data("src");

 //    mogambospringsImagesURL.push(mogambospringsPath);
 //  }

      // for ( var weddingsCnt = 0; weddingsCnt < allWeddingsCount; weddingsCnt = weddingsCnt + 1){
 //    var $weddingsElem = $( $slidingweddings[weddingsCnt] ),
 //      weddingsPath = $weddingsElem.data("src");

 //    weddingsImagesURL.push(weddingsPath);
 //  }
 //    function preloadRoomsImages(){

 //          var loadroomsPromise, roomImage = [],
 //              roomImage0 = $.loadImage( roomsImagesURL[0] ),
 //              roomImage1 = $.loadImage( roomsImagesURL[1] ),
 //              roomImage2 = $.loadImage( roomsImagesURL[2] ),
 //              roomImage3 = $.loadImage( roomsImagesURL[3] ),
 //              roomImage4 = $.loadImage( roomsImagesURL[4] ),
 //              roomImage5 = $.loadImage( roomsImagesURL[5] ),
 //              roomImage6 = $.loadImage( roomsImagesURL[6] ),
 //              roomImage7 = $.loadImage( roomsImagesURL[7] ),
 //              roomImage8 = $.loadImage( roomsImagesURL[8] ),
 //              roomImage9 = $.loadImage( roomsImagesURL[9] ),
 //              roomImage10 = $.loadImage( roomsImagesURL[10] ),
 //              roomImage11 = $.loadImage( roomsImagesURL[11] ),
 //              roomImage12 = $.loadImage( roomsImagesURL[12] ),
 //              roomImage13 = $.loadImage( roomsImagesURL[13] ),
 //              roomImage14 = $.loadImage( roomsImagesURL[14] ),
 //              roomImage15 = $.loadImage( roomsImagesURL[15] );
          
 //          loadroomsPromise = $.Deferred();

 //          roomImage0 = loadroomsPromise.done(function (){ addroomsSource(0); });
 //          roomImage1 = roomImage0.done(function (){ addroomsSource(1); });
 //          roomImage2 = roomImage1.done(function (){ addroomsSource(2); });
 //          roomImage3 = roomImage2.done(function (){ addroomsSource(3); });
 //          roomImage4 = roomImage3.done(function (){ addroomsSource(4); });
 //          roomImage5 = roomImage4.done(function (){ addroomsSource(5); });
 //          roomImage6 = roomImage5.done(function (){ addroomsSource(6); });
 //          roomImage7 = roomImage6.done(function (){ addroomsSource(7); });
 //          roomImage8 = roomImage7.done(function (){ addroomsSource(8); });
 //          roomImage9 = roomImage8.done(function (){ addroomsSource(9); });
 //          roomImage10 = roomImage9.done(function (){ addroomsSource(10); });
 //          roomImage11 = roomImage10.done(function (){ addroomsSource(11); });
 //          roomImage12 = roomImage11.done(function (){ addroomsSource(12); });
 //          roomImage13 = roomImage12.done(function (){ addroomsSource(13); });
 //          roomImage14 = roomImage13.done(function (){ addroomsSource(14); });
 //          roomImage15 = roomImage14.done(function (){ addroomsSource(15); });

 //          loadroomsPromise.resolve();

 //          function addroomsSource(roomsImagesURLIndex){
 //            $( $slidingrooms[roomsImagesURLIndex] ).attr( "src", roomsImagesURL[ roomsImagesURLIndex ] );
 //          }
 //    }

 //    function preloadRestaurantsImages(){

 //          var loadrestaurantsPromise, restaurantImage = [],
 //              restaurantImage0 = $.loadImage( restaurantsImagesURL[0] ),
 //              restaurantImage1 = $.loadImage( restaurantsImagesURL[1] ),
 //              restaurantImage2 = $.loadImage( restaurantsImagesURL[2] ),
 //              restaurantImage3 = $.loadImage( restaurantsImagesURL[3] ),
 //              restaurantImage4 = $.loadImage( restaurantsImagesURL[4] ),
 //              restaurantImage5 = $.loadImage( restaurantsImagesURL[5] ),
 //              restaurantImage6 = $.loadImage( restaurantsImagesURL[6] ),
 //              restaurantImage7 = $.loadImage( restaurantsImagesURL[7] ),
 //              restaurantImage8 = $.loadImage( restaurantsImagesURL[8] ),
 //              restaurantImage9 = $.loadImage( restaurantsImagesURL[9] ),
 //              restaurantImage10 = $.loadImage( restaurantsImagesURL[10] ),
 //              restaurantImage11 = $.loadImage( restaurantsImagesURL[11] ),
 //              restaurantImage12 = $.loadImage( restaurantsImagesURL[12] ),
 //              restaurantImage13 = $.loadImage( restaurantsImagesURL[13] ),
 //              restaurantImage14 = $.loadImage( restaurantsImagesURL[14] ),
 //              restaurantImage15 = $.loadImage( restaurantsImagesURL[15] ),
 //              restaurantImage16 = $.loadImage( restaurantsImagesURL[16] ),
 //              restaurantImage17 = $.loadImage( restaurantsImagesURL[17] ),
 //              restaurantImage18 = $.loadImage( restaurantsImagesURL[18] ),
 //              restaurantImage19 = $.loadImage( restaurantsImagesURL[19] ),
 //              restaurantImage20 = $.loadImage( restaurantsImagesURL[20] );
          
 //          loadrestaurantsPromise = $.Deferred();

 //          restaurantImage0 = loadrestaurantsPromise.done(function (){ addrestaurantsSource(0); });
 //          restaurantImage1 = restaurantImage0.done(function (){ addrestaurantsSource(1); });
 //          restaurantImage2 = restaurantImage1.done(function (){ addrestaurantsSource(2); });
 //          restaurantImage3 = restaurantImage2.done(function (){ addrestaurantsSource(3); });
 //          restaurantImage4 = restaurantImage3.done(function (){ addrestaurantsSource(4); });
 //          restaurantImage5 = restaurantImage4.done(function (){ addrestaurantsSource(5); });
 //          restaurantImage6 = restaurantImage5.done(function (){ addrestaurantsSource(6); });
 //          restaurantImage7 = restaurantImage6.done(function (){ addrestaurantsSource(7); });
 //          restaurantImage8 = restaurantImage7.done(function (){ addrestaurantsSource(8); });
 //          restaurantImage9 = restaurantImage8.done(function (){ addrestaurantsSource(9); });
 //          restaurantImage10 = restaurantImage9.done(function (){ addrestaurantsSource(10); });
 //          restaurantImage11 = restaurantImage10.done(function (){ addrestaurantsSource(11); });
 //          restaurantImage12 = restaurantImage11.done(function (){ addrestaurantsSource(12); });
 //          restaurantImage13 = restaurantImage12.done(function (){ addrestaurantsSource(13); });
 //          restaurantImage14 = restaurantImage13.done(function (){ addrestaurantsSource(14); });
 //          restaurantImage15 = restaurantImage14.done(function (){ addrestaurantsSource(15); });
 //          restaurantImage16 = restaurantImage14.done(function (){ addrestaurantsSource(16); });
 //          restaurantImage17 = restaurantImage14.done(function (){ addrestaurantsSource(17); });
 //          restaurantImage18 = restaurantImage14.done(function (){ addrestaurantsSource(18); });
 //          restaurantImage19 = restaurantImage14.done(function (){ addrestaurantsSource(19); });
 //          restaurantImage20 = restaurantImage14.done(function (){ addrestaurantsSource(20); });


 //          loadrestaurantsPromise.resolve();

 //          function addrestaurantsSource(restaurantsImagesURLIndex){
 //            $( $slidingrestaurants[restaurantsImagesURLIndex] ).attr( "src", restaurantsImagesURL[ restaurantsImagesURLIndex ] );
 //          }
 //    }

 //    function preloadLandscapesImages(){

 //          var loadlandscapesPromise, landscapeImage = [],
 //              landscapeImage0 = $.loadImage( landscapesImagesURL[0] ),
 //              landscapeImage1 = $.loadImage( landscapesImagesURL[1] ),
 //              landscapeImage2 = $.loadImage( landscapesImagesURL[2] ),
 //              landscapeImage3 = $.loadImage( landscapesImagesURL[3] ),
 //              landscapeImage4 = $.loadImage( landscapesImagesURL[4] ),
 //              landscapeImage5 = $.loadImage( landscapesImagesURL[5] ),
 //              landscapeImage6 = $.loadImage( landscapesImagesURL[6] ),
 //              landscapeImage7 = $.loadImage( landscapesImagesURL[7] ),
 //              landscapeImage8 = $.loadImage( landscapesImagesURL[8] ),
 //              landscapeImage9 = $.loadImage( landscapesImagesURL[9] ),
 //              landscapeImage10 = $.loadImage( landscapesImagesURL[10] ),
 //              landscapeImage11 = $.loadImage( landscapesImagesURL[11] ),
 //              landscapeImage12 = $.loadImage( landscapesImagesURL[12] ),
 //              landscapeImage13 = $.loadImage( landscapesImagesURL[13] ),
 //              landscapeImage14 = $.loadImage( landscapesImagesURL[14] ),
 //              landscapeImage15 = $.loadImage( landscapesImagesURL[15] ),
 //              landscapeImage16 = $.loadImage( landscapesImagesURL[16] ),
 //              landscapeImage17 = $.loadImage( landscapesImagesURL[17] ),
 //              landscapeImage18 = $.loadImage( landscapesImagesURL[18] );
          
 //          loadlandscapesPromise = $.Deferred();

 //          landscapeImage0 = loadlandscapesPromise.done(function (){ addlandscapesSource(0); });
 //          landscapeImage1 = landscapeImage0.done(function (){ addlandscapesSource(1); });
 //          landscapeImage2 = landscapeImage1.done(function (){ addlandscapesSource(2); });
 //          landscapeImage3 = landscapeImage2.done(function (){ addlandscapesSource(3); });
 //          landscapeImage4 = landscapeImage3.done(function (){ addlandscapesSource(4); });
 //          landscapeImage5 = landscapeImage4.done(function (){ addlandscapesSource(5); });
 //          landscapeImage6 = landscapeImage5.done(function (){ addlandscapesSource(6); });
 //          landscapeImage7 = landscapeImage6.done(function (){ addlandscapesSource(7); });
 //          landscapeImage8 = landscapeImage7.done(function (){ addlandscapesSource(8); });
 //          landscapeImage9 = landscapeImage8.done(function (){ addlandscapesSource(9); });
 //          landscapeImage10 = landscapeImage9.done(function (){ addlandscapesSource(10); });
 //          landscapeImage11 = landscapeImage10.done(function (){ addlandscapesSource(11); });
 //          landscapeImage12 = landscapeImage11.done(function (){ addlandscapesSource(12); });
 //          landscapeImage13 = landscapeImage12.done(function (){ addlandscapesSource(13); });
 //          landscapeImage14 = landscapeImage13.done(function (){ addlandscapesSource(14); });
 //          landscapeImage15 = landscapeImage14.done(function (){ addlandscapesSource(15); });
 //          landscapeImage16 = landscapeImage14.done(function (){ addlandscapesSource(16); });
 //          landscapeImage17 = landscapeImage14.done(function (){ addlandscapesSource(17); });
 //          landscapeImage18 = landscapeImage14.done(function (){ addlandscapesSource(18); });


 //          loadlandscapesPromise.resolve();

 //          function addlandscapesSource(landscapesImagesURLIndex){
 //            $( $slidinglandscapes[landscapesImagesURLIndex] ).attr( "src", landscapesImagesURL[ landscapesImagesURLIndex ] );
 //          }
 //    }

 //    function preloadActivitiesImages(){

 //          var loadactivitiesPromise, activitieImage = [],
 //              activitieImage0 = $.loadImage( activitiesImagesURL[0] ),
 //              activitieImage1 = $.loadImage( activitiesImagesURL[1] ),
 //              activitieImage2 = $.loadImage( activitiesImagesURL[2] ),
 //              activitieImage3 = $.loadImage( activitiesImagesURL[3] ),
 //              activitieImage4 = $.loadImage( activitiesImagesURL[4] ),
 //              activitieImage5 = $.loadImage( activitiesImagesURL[5] ),
 //              activitieImage6 = $.loadImage( activitiesImagesURL[6] ),
 //              activitieImage7 = $.loadImage( activitiesImagesURL[7] ),
 //              activitieImage8 = $.loadImage( activitiesImagesURL[8] ),
 //              activitieImage9 = $.loadImage( activitiesImagesURL[9] ),
 //              activitieImage10 = $.loadImage( activitiesImagesURL[10] ),
 //              activitieImage11 = $.loadImage( activitiesImagesURL[11] ),
 //              activitieImage12 = $.loadImage( activitiesImagesURL[12] ),
 //              activitieImage13 = $.loadImage( activitiesImagesURL[13] ),
 //              activitieImage14 = $.loadImage( activitiesImagesURL[14] ),
 //              activitieImage15 = $.loadImage( activitiesImagesURL[15] ),
 //              activitieImage16 = $.loadImage( activitiesImagesURL[16] ),
 //              activitieImage17 = $.loadImage( activitiesImagesURL[17] ),
 //              activitieImage18 = $.loadImage( activitiesImagesURL[18] );
 //              activitieImage19 = $.loadImage( activitiesImagesURL[19] );
 //              activitieImage20 = $.loadImage( activitiesImagesURL[20] );
 //              activitieImage21 = $.loadImage( activitiesImagesURL[21] );
 //              activitieImage22 = $.loadImage( activitiesImagesURL[22] );
 //              activitieImage23 = $.loadImage( activitiesImagesURL[23] );
 //              activitieImage24 = $.loadImage( activitiesImagesURL[24] );
 //              activitieImage25 = $.loadImage( activitiesImagesURL[25] );
 //              activitieImage26 = $.loadImage( activitiesImagesURL[26] );
 //              activitieImage27 = $.loadImage( activitiesImagesURL[27] );
 //              activitieImage28 = $.loadImage( activitiesImagesURL[28] );
 //              activitieImage29 = $.loadImage( activitiesImagesURL[29] );
 //              activitieImage30 = $.loadImage( activitiesImagesURL[30] );
 //              activitieImage31 = $.loadImage( activitiesImagesURL[31] );
 //              activitieImage32 = $.loadImage( activitiesImagesURL[32] );
 //              activitieImage33 = $.loadImage( activitiesImagesURL[33] );
 //              activitieImage34 = $.loadImage( activitiesImagesURL[34] );
 //              activitieImage35 = $.loadImage( activitiesImagesURL[35] );
 //              activitieImage36 = $.loadImage( activitiesImagesURL[36] );
 //              activitieImage37 = $.loadImage( activitiesImagesURL[37] );
 //              activitieImage38 = $.loadImage( activitiesImagesURL[38] );
 //              activitieImage39 = $.loadImage( activitiesImagesURL[39] );
 //              activitieImage40 = $.loadImage( activitiesImagesURL[40] );
 //              activitieImage41 = $.loadImage( activitiesImagesURL[41] );
 //              activitieImage42 = $.loadImage( activitiesImagesURL[42] );
 //              activitieImage43 = $.loadImage( activitiesImagesURL[43] );
 //              activitieImage44 = $.loadImage( activitiesImagesURL[44] );
 //              activitieImage45 = $.loadImage( activitiesImagesURL[45] );
 //              activitieImage46 = $.loadImage( activitiesImagesURL[46] );
 //              activitieImage47 = $.loadImage( activitiesImagesURL[47] );
 //              activitieImage48 = $.loadImage( activitiesImagesURL[48] );
 //              activitieImage49 = $.loadImage( activitiesImagesURL[49] );
 //              activitieImage50 = $.loadImage( activitiesImagesURL[50] );
 //              activitieImage51 = $.loadImage( activitiesImagesURL[51] );
 //              activitieImage52 = $.loadImage( activitiesImagesURL[52] );
 //              activitieImage53 = $.loadImage( activitiesImagesURL[53] );
 //              activitieImage54 = $.loadImage( activitiesImagesURL[54] );
 //              activitieImage55 = $.loadImage( activitiesImagesURL[55] );
 //              activitieImage56 = $.loadImage( activitiesImagesURL[56] );
 //              activitieImage57 = $.loadImage( activitiesImagesURL[57] );
 //              activitieImage58 = $.loadImage( activitiesImagesURL[58] );
 //              activitieImage59 = $.loadImage( activitiesImagesURL[59] );
 //              activitieImage60 = $.loadImage( activitiesImagesURL[60] );
 //              activitieImage61 = $.loadImage( activitiesImagesURL[61] );
 //              activitieImage62 = $.loadImage( activitiesImagesURL[62] );
 //              activitieImage63 = $.loadImage( activitiesImagesURL[63] );
 //              activitieImage64 = $.loadImage( activitiesImagesURL[64] );
 //              activitieImage65 = $.loadImage( activitiesImagesURL[65] );
 //              activitieImage66 = $.loadImage( activitiesImagesURL[66] );
 //              activitieImage67 = $.loadImage( activitiesImagesURL[67] );
          
 //          loadactivitiesPromise = $.Deferred();

 //          activitieImage0 = loadactivitiesPromise.done(function (){ addactivitiesSource(0); });
 //          activitieImage1 = activitieImage0.done(function (){ addactivitiesSource(1); });
 //          activitieImage2 = activitieImage1.done(function (){ addactivitiesSource(2); });
 //          activitieImage3 = activitieImage2.done(function (){ addactivitiesSource(3); });
 //          activitieImage4 = activitieImage3.done(function (){ addactivitiesSource(4); });
 //          activitieImage5 = activitieImage4.done(function (){ addactivitiesSource(5); });
 //          activitieImage6 = activitieImage5.done(function (){ addactivitiesSource(6); });
 //          activitieImage7 = activitieImage6.done(function (){ addactivitiesSource(7); });
 //          activitieImage8 = activitieImage7.done(function (){ addactivitiesSource(8); });
 //          activitieImage9 = activitieImage8.done(function (){ addactivitiesSource(9); });
 //          activitieImage10 = activitieImage9.done(function (){ addactivitiesSource(10); });
 //          activitieImage11 = activitieImage10.done(function (){ addactivitiesSource(11); });
 //          activitieImage12 = activitieImage11.done(function (){ addactivitiesSource(12); });
 //          activitieImage13 = activitieImage12.done(function (){ addactivitiesSource(13); });
 //          activitieImage14 = activitieImage13.done(function (){ addactivitiesSource(14); });
 //          activitieImage15 = activitieImage14.done(function (){ addactivitiesSource(15); });
 //          activitieImage16 = activitieImage14.done(function (){ addactivitiesSource(16); });
 //          activitieImage17 = activitieImage14.done(function (){ addactivitiesSource(17); });
 //          activitieImage18 = activitieImage14.done(function (){ addactivitiesSource(18); });
 //          activitieImage19 = activitieImage14.done(function (){ addactivitiesSource(19); });
 //          activitieImage20 = activitieImage14.done(function (){ addactivitiesSource(20); });
 //          activitieImage21 = activitieImage14.done(function (){ addactivitiesSource(21); });
 //          activitieImage22 = activitieImage14.done(function (){ addactivitiesSource(22); });
 //          activitieImage23 = activitieImage14.done(function (){ addactivitiesSource(23); });
 //          activitieImage24 = activitieImage14.done(function (){ addactivitiesSource(24); });
 //          activitieImage25 = activitieImage14.done(function (){ addactivitiesSource(25); });
 //          activitieImage26 = activitieImage14.done(function (){ addactivitiesSource(26); });
 //          activitieImage27 = activitieImage14.done(function (){ addactivitiesSource(27); });
 //          activitieImage28 = activitieImage14.done(function (){ addactivitiesSource(28); });
 //          activitieImage29 = activitieImage14.done(function (){ addactivitiesSource(29); });
 //          activitieImage30 = activitieImage14.done(function (){ addactivitiesSource(30); });
 //          activitieImage31 = activitieImage14.done(function (){ addactivitiesSource(31); });
 //          activitieImage32 = activitieImage14.done(function (){ addactivitiesSource(32); });
 //          activitieImage33 = activitieImage14.done(function (){ addactivitiesSource(33); });
 //          activitieImage34 = activitieImage14.done(function (){ addactivitiesSource(34); });
 //          activitieImage35 = activitieImage14.done(function (){ addactivitiesSource(35); });
 //          activitieImage36 = activitieImage14.done(function (){ addactivitiesSource(36); });
 //          activitieImage37 = activitieImage14.done(function (){ addactivitiesSource(37); });
 //          activitieImage38 = activitieImage14.done(function (){ addactivitiesSource(38); });
 //          activitieImage39 = activitieImage14.done(function (){ addactivitiesSource(39); });
 //          activitieImage40 = activitieImage14.done(function (){ addactivitiesSource(40); });
 //          activitieImage41 = activitieImage14.done(function (){ addactivitiesSource(41); });
 //          activitieImage42 = activitieImage14.done(function (){ addactivitiesSource(42); });
 //          activitieImage43 = activitieImage14.done(function (){ addactivitiesSource(43); });
 //          activitieImage44 = activitieImage14.done(function (){ addactivitiesSource(44); });
 //          activitieImage45 = activitieImage14.done(function (){ addactivitiesSource(45); });
 //          activitieImage46 = activitieImage14.done(function (){ addactivitiesSource(46); });
 //          activitieImage47 = activitieImage14.done(function (){ addactivitiesSource(47); });
 //          activitieImage48 = activitieImage14.done(function (){ addactivitiesSource(48); });
 //          activitieImage49 = activitieImage14.done(function (){ addactivitiesSource(49); });
 //          activitieImage50 = activitieImage14.done(function (){ addactivitiesSource(50); });
 //          activitieImage51 = activitieImage14.done(function (){ addactivitiesSource(51); });
 //          activitieImage52 = activitieImage14.done(function (){ addactivitiesSource(52); });
 //          activitieImage53 = activitieImage14.done(function (){ addactivitiesSource(53); });
 //          activitieImage54 = activitieImage14.done(function (){ addactivitiesSource(54); });
 //          activitieImage55 = activitieImage14.done(function (){ addactivitiesSource(55); });
 //          activitieImage56 = activitieImage14.done(function (){ addactivitiesSource(56); });
 //          activitieImage57 = activitieImage14.done(function (){ addactivitiesSource(57); });
 //          activitieImage58 = activitieImage14.done(function (){ addactivitiesSource(58); });
 //          activitieImage59 = activitieImage14.done(function (){ addactivitiesSource(59); });
 //          activitieImage60 = activitieImage14.done(function (){ addactivitiesSource(60); });
 //          activitieImage61 = activitieImage14.done(function (){ addactivitiesSource(61); });
 //          activitieImage62 = activitieImage14.done(function (){ addactivitiesSource(62); });
 //          activitieImage63 = activitieImage14.done(function (){ addactivitiesSource(63); });
 //          activitieImage64 = activitieImage14.done(function (){ addactivitiesSource(64); });
 //          activitieImage65 = activitieImage14.done(function (){ addactivitiesSource(65); });
 //          activitieImage66 = activitieImage14.done(function (){ addactivitiesSource(66); });
 //          activitieImage67 = activitieImage14.done(function (){ addactivitiesSource(67); });


 //          loadactivitiesPromise.resolve();

 //          function addactivitiesSource(activitiesImagesURLIndex){
 //            $( $slidingactivities[activitiesImagesURLIndex] ).attr( "src", activitiesImagesURL[ activitiesImagesURLIndex ] );
 //          }
 //    }

 //    function preloadMogambospringsImages(){

 //          var loadmogambospringsPromise, mogambospringImage = [],
 //              mogambospringImage0 = $.loadImage( mogambospringsImagesURL[0] ),
 //              mogambospringImage1 = $.loadImage( mogambospringsImagesURL[1] ),
 //              mogambospringImage2 = $.loadImage( mogambospringsImagesURL[2] ),
 //              mogambospringImage3 = $.loadImage( mogambospringsImagesURL[3] ),
 //              mogambospringImage4 = $.loadImage( mogambospringsImagesURL[4] ),
 //              mogambospringImage5 = $.loadImage( mogambospringsImagesURL[5] ),
 //              mogambospringImage6 = $.loadImage( mogambospringsImagesURL[6] ),
 //              mogambospringImage7 = $.loadImage( mogambospringsImagesURL[7] ),
 //              mogambospringImage8 = $.loadImage( mogambospringsImagesURL[8] ),
 //              mogambospringImage9 = $.loadImage( mogambospringsImagesURL[9] ),
 //              mogambospringImage10 = $.loadImage( mogambospringsImagesURL[10] ),
 //              mogambospringImage11 = $.loadImage( mogambospringsImagesURL[11] ),
 //              mogambospringImage12 = $.loadImage( mogambospringsImagesURL[12] );
          
 //          loadmogambospringsPromise = $.Deferred();

 //          mogambospringImage0 = loadmogambospringsPromise.done(function (){ addmogambospringsSource(0); });
 //          mogambospringImage1 = mogambospringImage0.done(function (){ addmogambospringsSource(1); });
 //          mogambospringImage2 = mogambospringImage1.done(function (){ addmogambospringsSource(2); });
 //          mogambospringImage3 = mogambospringImage2.done(function (){ addmogambospringsSource(3); });
 //          mogambospringImage4 = mogambospringImage3.done(function (){ addmogambospringsSource(4); });
 //          mogambospringImage5 = mogambospringImage4.done(function (){ addmogambospringsSource(5); });
 //          mogambospringImage6 = mogambospringImage5.done(function (){ addmogambospringsSource(6); });
 //          mogambospringImage7 = mogambospringImage6.done(function (){ addmogambospringsSource(7); });
 //          mogambospringImage8 = mogambospringImage7.done(function (){ addmogambospringsSource(8); });
 //          mogambospringImage9 = mogambospringImage8.done(function (){ addmogambospringsSource(9); });
 //          mogambospringImage10 = mogambospringImage9.done(function (){ addmogambospringsSource(10); });
 //          mogambospringImage11 = mogambospringImage10.done(function (){ addmogambospringsSource(11); });
 //          mogambospringImage12 = mogambospringImage11.done(function (){ addmogambospringsSource(12); });

 //          loadmogambospringsPromise.resolve();

 //          function addmogambospringsSource(mogambospringsImagesURLIndex){
 //            $( $slidingmogambosprings[mogambospringsImagesURLIndex] ).attr( "src", mogambospringsImagesURL[ mogambospringsImagesURLIndex ] );
 //          }
 //    }

 //    function preloadWeddingsImages(){

 //          var loadweddingsPromise, weddingImage = [],
 //              weddingImage0 = $.loadImage( weddingsImagesURL[0] ),
 //              weddingImage1 = $.loadImage( weddingsImagesURL[1] ),
 //              weddingImage2 = $.loadImage( weddingsImagesURL[2] ),
 //              weddingImage3 = $.loadImage( weddingsImagesURL[3] ),
 //              weddingImage4 = $.loadImage( weddingsImagesURL[4] ),
 //              weddingImage5 = $.loadImage( weddingsImagesURL[5] ),
 //              weddingImage6 = $.loadImage( weddingsImagesURL[6] ),
 //              weddingImage7 = $.loadImage( weddingsImagesURL[7] ),
 //              weddingImage8 = $.loadImage( weddingsImagesURL[8] ),
 //              weddingImage9 = $.loadImage( weddingsImagesURL[9] ),
 //              weddingImage10 = $.loadImage( weddingsImagesURL[10] ),
 //              weddingImage11 = $.loadImage( weddingsImagesURL[11] ),
 //              weddingImage12 = $.loadImage( weddingsImagesURL[12] ),
 //              weddingImage13 = $.loadImage( weddingsImagesURL[13] ),
 //              weddingImage14 = $.loadImage( weddingsImagesURL[14] ),
 //              weddingImage15 = $.loadImage( weddingsImagesURL[15] );
          
 //          loadweddingsPromise = $.Deferred();

 //          weddingImage0 = loadweddingsPromise.done(function (){ addweddingsSource(0); });
 //          weddingImage1 = weddingImage0.done(function (){ addweddingsSource(1); });
 //          weddingImage2 = weddingImage1.done(function (){ addweddingsSource(2); });
 //          weddingImage3 = weddingImage2.done(function (){ addweddingsSource(3); });
 //          weddingImage4 = weddingImage3.done(function (){ addweddingsSource(4); });
 //          weddingImage5 = weddingImage4.done(function (){ addweddingsSource(5); });
 //          weddingImage6 = weddingImage5.done(function (){ addweddingsSource(6); });
 //          weddingImage7 = weddingImage6.done(function (){ addweddingsSource(7); });
 //          weddingImage8 = weddingImage7.done(function (){ addweddingsSource(8); });
 //          weddingImage9 = weddingImage8.done(function (){ addweddingsSource(9); });
 //          weddingImage10 = weddingImage9.done(function (){ addweddingsSource(10); });
 //          weddingImage11 = weddingImage10.done(function (){ addweddingsSource(11); });
 //          weddingImage12 = weddingImage11.done(function (){ addweddingsSource(12); });
 //          weddingImage13 = weddingImage12.done(function (){ addweddingsSource(13); });
 //          weddingImage14 = weddingImage13.done(function (){ addweddingsSource(14); });
 //          weddingImage15 = weddingImage14.done(function (){ addweddingsSource(15); });

 //          loadweddingsPromise.resolve();

 //          function addweddingsSource(weddingsImagesURLIndex){
 //            $( $slidingweddings[weddingsImagesURLIndex] ).attr( "src", weddingsImagesURL[ weddingsImagesURLIndex ] );
 //          }
 //    }


  $roomsImages.cycle({
    autoHeightSpeed: 1000,
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
    pause: true,
    allowWrap: false,
    log: false,//, // set to true to display slider console logs
    // progressive: roomsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $restaurantsImages.cycle({
    autoHeightSpeed: 1000,
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
    // progressive: restaurantsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $landscapesImages.cycle({
    autoHeightSpeed: 1000,
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
    // progressive: landscapesImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $activitiesImages.cycle({
    autoHeightSpeed: 1000,
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
    // progressive: activitiesImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $mogambospringsImages.cycle({
    autoHeightSpeed: 1000,
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
    // progressive: mogambospringsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  $weddingsImages.cycle({
    autoHeightSpeed: 1000,
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
    // progressive: weddingsImgUrls
    //pauseOnHover: true
    //paused: true // while waiting for other images to finish loading then start slide show
  });

  // preloadRoomsImages();
  // preloadRestaurantsImages();
  // preloadLandscapesImages();
  // preloadActivitiesImages();
  // preloadMogambospringsImages();
  // preloadWeddingsImages();

  // $roomsImages.cycle('pause');
  // $restaurantsImages.cycle('pause');
  // $landscapesImages.cycle('pause');
  // $activitiesImages.cycle('pause');
  // $mogambospringsImages.cycle('pause');
  // $weddingsImages.cycle('pause');

  // $roomsImages.on("cycle-before", function(e, options, outgoing, incoming) {
  //   var currentrooms = $(incoming).attr("name");
  //   $roomsList.removeClass("active");
  //   $roomsList.filter("[name='" + currentrooms + "']").addClass("active");
  //   //$("#roomsCaption").find("p").html($(incoming).data("caption"));

  // });

  // $roomsList.first().addClass("active");

  // $roomsList.on("click", function(e) {
  //   var rooms = $(this).attr("name"),
  //       roomsIndex = $roomsImages.find("[name='" + rooms + "']").index();
  //   $roomsImages.cycle("goto", roomsIndex -3 );
  // });


      $('#roomsImages').apFullscreenModal({
        openSelector: '#open-rooms'
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
      $("#open-rooms").on("click", function() {

            $roomsImages.cycle('resume');
            // $roomsImages.goto(0);
      });

            // script to add more images at a later time
            // var images = [
            //     '<img src="http://malsup.github.io/images/p2.jpg">',
            //     '<img src="http://malsup.github.io/images/p3.jpg">',
            //     '<img src="http://malsup.github.io/images/p4.jpg">'
            // ];

            $('button').one('click', function() {
                for (var i=0; i < roomsImgUrls.length; i++) {
                    $roomsImages.cycle('add', roomsImgUrls[i]);
                }
                $(this).hide();
            })

});


// (function() {
//   'use strict';

//   var app = {
//     isLoading: true,
//     visibleCards: {},
//     selectedCities: [],
//     spinner: document.querySelector('.loader'),
//     cardTemplate: document.querySelector('.cardTemplate'),
//     container: document.querySelector('.main'),
//     addDialog: document.querySelector('.dialog-container'),
//     daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   };


//   /*****************************************************************************
//    *
//    * Event listeners for UI elements
//    *
//    ****************************************************************************/

//   document.getElementById('butRefresh').addEventListener('click', function() {
//     // Refresh all of the forecasts
//     app.updateForecasts();
//   });

//   document.getElementById('butAdd').addEventListener('click', function() {
//     // Open/show the add new city dialog
//     app.toggleAddDialog(true);
//   });

//   document.getElementById('butAddCity').addEventListener('click', function() {
//     // Add the newly selected city
//     var select = document.getElementById('selectCityToAdd');
//     var selected = select.options[select.selectedIndex];
//     var key = selected.value;
//     var label = selected.textContent;
//     if (!app.selectedCities) {
//       app.selectedCities = [];
//     }
//     app.getForecast(key, label);
//     app.selectedCities.push({key: key, label: label});
//     app.saveSelectedCities();
//     app.toggleAddDialog(false);
//   });


//   /*****************************************************************************
//    *
//    * Methods to update/refresh the UI
//    *
//    ****************************************************************************/

//   // Toggles the visibility of the add new city dialog.
//   app.toggleAddDialog = function(visible) {
//     if (visible) {
//       app.addDialog.classList.add('dialog-container--visible');
//     } else {
//       app.addDialog.classList.remove('dialog-container--visible');
//     }
//   };

//   // Updates a weather card with the latest weather forecast. If the card
//   // doesn't already exist, it's cloned from the template.
//   app.updateForecastCard = function(data) {
//     var dataLastUpdated = new Date(data.created);
//     var sunrise = data.channel.astronomy.sunrise;
//     var sunset = data.channel.astronomy.sunset;
//     var current = data.channel.item.condition;
//     var humidity = data.channel.atmosphere.humidity;
//     var wind = data.channel.wind;

//     var card = app.visibleCards[data.key];
//     if (!card) {
//       card = app.cardTemplate.cloneNode(true);
//       card.classList.remove('cardTemplate');
//       card.querySelector('.location').textContent = data.label;
//       card.removeAttribute('hidden');
//       app.container.appendChild(card);
//       app.visibleCards[data.key] = card;
//     }

//     // Verifies the data provide is newer than what's already visible
//     // on the card, if it's not bail, if it is, continue and update the
//     // time saved in the card
//     var cardLastUpdatedElem = card.querySelector('.card-last-updated');
//     var cardLastUpdated = cardLastUpdatedElem.textContent;
//     if (cardLastUpdated) {
//       cardLastUpdated = new Date(cardLastUpdated);
//       // Bail if the card has more recent data then the data
//       if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
//         return;
//       }
//     }
//     cardLastUpdatedElem.textContent = data.created;

//     card.querySelector('.description').textContent = current.text;
//     card.querySelector('.date').textContent = current.date;
//     card.querySelector('.current .icon').classList.add(app.getIconClass(current.code));
//     card.querySelector('.current .temperature .value').textContent =
//       Math.round(current.temp);
//     card.querySelector('.current .sunrise').textContent = sunrise;
//     card.querySelector('.current .sunset').textContent = sunset;
//     card.querySelector('.current .humidity').textContent =
//       Math.round(humidity) + '%';
//     card.querySelector('.current .wind .value').textContent =
//       Math.round(wind.speed);
//     card.querySelector('.current .wind .direction').textContent = wind.direction;
//     var nextDays = card.querySelectorAll('.future .oneday');
//     var today = new Date();
//     today = today.getDay();
//     for (var i = 0; i < 7; i++) {
//       var nextDay = nextDays[i];
//       var daily = data.channel.item.forecast[i];
//       if (daily && nextDay) {
//         nextDay.querySelector('.date').textContent =
//           app.daysOfWeek[(i + today) % 7];
//         nextDay.querySelector('.icon').classList.add(app.getIconClass(daily.code));
//         nextDay.querySelector('.temp-high .value').textContent =
//           Math.round(daily.high);
//         nextDay.querySelector('.temp-low .value').textContent =
//           Math.round(daily.low);
//       }
//     }
//     if (app.isLoading) {
//       app.spinner.setAttribute('hidden', true);
//       app.container.removeAttribute('hidden');
//       app.isLoading = false;
//     }
//   };


//   /*****************************************************************************
//    *
//    * Methods for dealing with the model
//    *
//    ****************************************************************************/

//   /*
//    * Gets a forecast for a specific city and updates the card with the data.
//    * getForecast() first checks if the weather data is in the cache. If so,
//    * then it gets that data and populates the card with the cached data.
//    * Then, getForecast() goes to the network for fresh data. If the network
//    * request goes through, then the card gets updated a second time with the
//    * freshest data.
//    */
//   app.getForecast = function(key, label) {
//     var statement = 'select * from weather.forecast where woeid=' + key;
//     var url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' +
//         statement;
//     // TODO add cache logic here
//     if ('caches' in window) {
      
//        * Check if the service worker has already cached this city's weather
//        * data. If the service worker has the data, then display the cached
//        * data while the app fetches the latest data.
       
//       caches.match(url).then(function(response) {
//         if (response) {
//           response.json().then(function updateFromCache(json) {
//             var results = json.query.results;
//             results.key = key;
//             results.label = label;
//             results.created = json.query.created;
//             app.updateForecastCard(results);
//           });
//         }
//       });
//     }

//     // Fetch the latest data.
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (request.readyState === XMLHttpRequest.DONE) {
//         if (request.status === 200) {
//           var response = JSON.parse(request.response);
//           var results = response.query.results;
//           results.key = key;
//           results.label = label;
//           results.created = response.query.created;
//           app.updateForecastCard(results);
//         }
//       } else {
//         // Return the initial weather forecast since no data is available.
//         app.updateForecastCard(initialWeatherForecast);
//       }
//     };
//     request.open('GET', url);
//     request.send();
//   };

//   // Iterate all of the cards and attempt to get the latest forecast data
//   app.updateForecasts = function() {
//     var keys = Object.keys(app.visibleCards);
//     keys.forEach(function(key) {
//       app.getForecast(key);
//     });
//   };

//   // TODO add saveSelectedCities function here
//   // Save list of cities to localStorage.
//   app.saveSelectedCities = function() {
//     var selectedCities = JSON.stringify(app.selectedCities);
//     localStorage.selectedCities = selectedCities;
//   };


//   app.getIconClass = function(weatherCode) {
//     // Weather codes: https://developer.yahoo.com/weather/documentation.html#codes
//     weatherCode = parseInt(weatherCode);
//     switch (weatherCode) {
//       case 25: // cold
//       case 32: // sunny
//       case 33: // fair (night)
//       case 34: // fair (day)
//       case 36: // hot
//       case 3200: // not available
//         return 'clear-day';
//       case 0: // tornado
//       case 1: // tropical storm
//       case 2: // hurricane
//       case 6: // mixed rain and sleet
//       case 8: // freezing drizzle
//       case 9: // drizzle
//       case 10: // freezing rain
//       case 11: // showers
//       case 12: // showers
//       case 17: // hail
//       case 35: // mixed rain and hail
//       case 40: // scattered showers
//         return 'rain';
//       case 3: // severe thunderstorms
//       case 4: // thunderstorms
//       case 37: // isolated thunderstorms
//       case 38: // scattered thunderstorms
//       case 39: // scattered thunderstorms (not a typo)
//       case 45: // thundershowers
//       case 47: // isolated thundershowers
//         return 'thunderstorms';
//       case 5: // mixed rain and snow
//       case 7: // mixed snow and sleet
//       case 13: // snow flurries
//       case 14: // light snow showers
//       case 16: // snow
//       case 18: // sleet
//       case 41: // heavy snow
//       case 42: // scattered snow showers
//       case 43: // heavy snow
//       case 46: // snow showers
//         return 'snow';
//       case 15: // blowing snow
//       case 19: // dust
//       case 20: // foggy
//       case 21: // haze
//       case 22: // smoky
//         return 'fog';
//       case 24: // windy
//       case 23: // blustery
//         return 'windy';
//       case 26: // cloudy
//       case 27: // mostly cloudy (night)
//       case 28: // mostly cloudy (day)
//       case 31: // clear (night)
//         return 'cloudy';
//       case 29: // partly cloudy (night)
//       case 30: // partly cloudy (day)
//       case 44: // partly cloudy
//         return 'partly-cloudy-day';
//     }
//   };

//   /*
//    * Fake weather data that is presented when the user first uses the app,
//    * or when the user has not saved any cities. See startup code for more
//    * discussion.
//    */
//   var initialWeatherForecast = {
//     key: '2459115',
//     label: 'New York, NY',
//     created: '2016-07-22T01:00:00Z',
//     channel: {
//       astronomy: {
//         sunrise: "5:43 am",
//         sunset: "8:21 pm"
//       },
//       item: {
//         condition: {
//           text: "Windy",
//           date: "Thu, 21 Jul 2016 09:00 PM EDT",
//           temp: 56,
//           code: 24
//         },
//         forecast: [
//           {code: 44, high: 86, low: 70},
//           {code: 44, high: 94, low: 73},
//           {code: 4, high: 95, low: 78},
//           {code: 24, high: 75, low: 89},
//           {code: 24, high: 89, low: 77},
//           {code: 44, high: 92, low: 79},
//           {code: 44, high: 89, low: 77}
//         ]
//       },
//       atmosphere: {
//         humidity: 56
//       },
//       wind: {
//         speed: 25,
//         direction: 195
//       }
//     }
//   };
//   // TODO uncomment line below to test app with fake data
//   app.updateForecastCard(initialWeatherForecast);
//   // TODO add startup code here

//   app.selectedCities = localStorage.selectedCities;
//   if (app.selectedCities) {
//     app.selectedCities = JSON.parse(app.selectedCities);
//     app.selectedCities.forEach(function(city) {
//       app.getForecast(city.key, city.label);
//     });
//   } else {
//     /* The user is using the app for the first time, or the user has not
//      * saved any cities, so show the user some fake data. A real app in this
//      * scenario could guess the user's location via IP lookup and then inject
//      * that data into the page.
//      */
//     app.updateForecastCard(initialWeatherForecast);
//     app.selectedCities = [
//       {key: initialWeatherForecast.key, label: initialWeatherForecast.label}
//     ];
//     app.saveSelectedCities();
//   }

//   // TODO add service worker code here
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//              .register('./service-worker.js')
//              .then(function() { console.log('Service Worker Registered'); });
//   }

// })();
