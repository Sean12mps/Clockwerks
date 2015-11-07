if ( typeof( Clockworks ) == 'undefined' && typeof( SuperClockworks ) == 'undefined' ) {


	(function(){
		

		'use strict';


		// 	Creating SuperClockworks Object
		window['SuperClockworks'] = function () {

			// 	Methods for instances
			$( window ).trigger( 'clockworks/prototype', [this] );

		};

		
		// 	Creating Clockworks Object
		window['Clockworks'] = function ( args ) {


			var self = this;


			window['SuperClockworks'].call( self );


			// 	Validate Arguments
			if ( self.validate( 'main_arguments', args ) ) {


				// 	Giving name to this object
				self.name = args['name'];


				// 	Adding main instances
				$( window ).trigger( 'clockworks/create', [ self, args ] );


				// 	Adding locales instances
				$( window ).trigger( ''+ self.name +'/create', [ self, args ] );


			}


		};


		// 	Built in validate methods
		window['Clockworks'].prototype.validate = function ( tag, args ) {
			

			switch( tag ) {


				case 'main_arguments':

					// 	False if args is not an object
					if ( typeof( args ) != 'object' ) { 

						console.log( 'arguments is not an object' );

						return false; 

					}

					// 	False if args does not contain property name
					if ( typeof( args['name'] ) == 'undefined' ) { 

						console.log( 'name is not defined' );

						return false; 

					}

					// 	False if args.name is not a string
					if ( typeof( args['name'] ) != 'string' ) { 

						console.log( 'name is not a string' );

						return false; 

					}

					break;
				// 	main_arguments - end
				

			}


			return true;


		};


	})();


}