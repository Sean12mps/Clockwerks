// 	Add Variables
jQuery( window ).on( 'clockworks/create', function ( e, Clockworks, args ) {



	// 	Check if location is enabled
	if ( typeof( args['locations'] ) != 'undefined' ) {


		var Instance 	= Clockworks,
			EventName 	= Instance.name + '/create',
			locations 	= args['locations'],
			elements 	= [],
			query,
			temp;


		jQuery( document ).ready( function ( $ ) {


			var runHere = true;
			

			for ( var tag in locations ) {


				query = tag + locations[tag];


				temp = document.querySelectorAll( query );


				if ( temp.length == 0 ) {

					runHere = false;

				}


			}


			if ( ! runHere ) {

				for ( var nodeName in Instance.nodes ) {


					Instance.nodes[nodeName].length = 0;


				}

			}


		} );


	}


} );