function getHtmlData( pUrl ) {

	return $.ajax({
		cache: false,
		dataType: "HTML",
		type: "GET",
		url: pUrl
	//data: pData
	});
}

$( ".popupLink" ).on( "click", function( event ){

	event.preventDefault();

	var $thisElem = $( this ),
		popContainer = $thisElem.attr( "href" );

	if ( $( popContainer ).data( "loaded") ){

		showPopup( popContainer );

	} else {

		loadPopupData( $thisElem.data( "srcfile" ), popContainer );
	}
});

function loadPopupData( pUrl, pElemToPop ){

	getHtmlData( pUrl ).then( function ( htmlData ) {

		if ( htmlData.length ) {

			$( pElemToPop ).find(".popSudlanan").prepend( htmlData );

			$( pElemToPop ).data( "loaded", true );
			showPopup( pElemToPop );
		}
	},

		function (){ 
			alert( "Error Loading Data!" );
	}/*,
		function (){
			$( pElemToPop ).find("a.ui-btn").button().button("refresh");
		}*/
	);
}

function showPopup( pElemToPop ){

	$( pElemToPop ).popup( "open" );	
}

// Generic asynchronous cache function
$.createCache = function( requestFunction ){
	var cache = {};
	return function( key, callback ) {
		if ( !cache[ key ] ) {
			cache[ key ] = $.Deferred( function( defer ) {
				requestFunction( defer, key );
			}).promise();
		}
		return cache[ key ].done( callback );
	};
};

//Make sure the same image must be loaded once only, using generic asyncronous caache func. :)
$.loadImage = $.createCache(function( defer, url ){

	var image = new Image();
	function cleanUp() {
		image.onload = image.onerror = null; 
	}
	defer.then( cleanUp, cleanUp );
	image.onload = function() {
		defer.resolve( url );
	};
	image.onerror = defer.reject;
	image.src = url;
});

$.CheckThisDate = function ( checkArrivalDate, checkDepartureDate, startDateToCheck, endDateToCheck, requiredDays, requiredNightStays ){

	var cdate1From = [], cntFoundDate = 0, totalDaysToCheck = 0, totalStays = 0,

		d1 = startDateToCheck.split("/"),
		d1Year = d1[2], d1Month = d1[0], d1Day = d1[1],
		cdateFrom = new Date(d1Year, d1Month - 1 , d1Day ),

		d2 = endDateToCheck.split("/"),
		d2Year = d2[2], d2Month = d2[0], d2Day = d2[1],
		cdateTo = new Date(d2Year, d2Month - 1, d2Day );

		cdateTo.setDate( cdateTo.getDate() + 1 );
		totalDaysToCheck1 = Math.abs( cdateTo.getTime() - cdateFrom.getTime() ),
		totalDaysToCheck = Math.ceil( totalDaysToCheck1 / (1000 * 3600 * 24) );

		totalStays1 = Math.abs( checkDepartureDate.getTime() - checkArrivalDate.getTime() ),
		totalStays = Math.ceil( totalStays1 / (1000 * 3600 * 24) );

		checkDepartureDate.setDate( checkDepartureDate.getDate() - 1 ); // Departure date less 1 day, count Nights :)

	for ( var date1 = 0; date1 < totalDaysToCheck; date1++ ){

		cdate1From[ date1 ] = cdateFrom;

		if ( date1 !== 0 ){

			cdate1From[ date1 ].setDate(cdate1From[ date1 ].getDate() + 1 )
		}

		if ( cdate1From[ date1 ] >= checkArrivalDate && cdate1From[ date1 ] <= checkDepartureDate ){

			cntFoundDate = cntFoundDate + 1
		}
	}

	if ( cntFoundDate ){

		if ( requiredDays === "All" ){ // REquired all easter holidays date

			if ( cntFoundDate === totalDaysToCheck ) { // All dates found

				return true; // proceed
			} else {

				return false; // failed. 
			}

		} else if ( cntFoundDate >= requiredDays ){ // found date > = to required dates. valid

			return true;

		} else {

			if ( totalStays >= requiredNightStays ){ // for christmas, if crossing dates, only 1 peak date but guest stays 2 night or more, okay.

				return true;
			} else {

				return false;
			}
		}

	} else {

		return true; // No Date to Check found. proceed
	}	
}
