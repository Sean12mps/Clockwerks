// 	Add Variables
jQuery( window ).on( 'clockworks/create', function ( e, Clockworks, args ) {


	Clockworks.filters = {};


} );


// 	Add methods
jQuery( window ).on( 'clockworks/prototype', function ( e, Clockworks ) {


	// 	apply filter
	Clockworks.__proto__.applyFilter = function( tagName, defaults ){


		if ( typeof( this.filters[tagName] ) == 'undefined' ) {


			// 	use default
			return defaults;


		} else {


			// 	use filter
			var func = this.filters[tagName],
				val = func.apply( this, [defaults] );


			return val;


		}


	};


	// 	add filter
	Clockworks.__proto__.addFilter = function( tagName, value ){


		this.filters[tagName] = value;


	};


} );