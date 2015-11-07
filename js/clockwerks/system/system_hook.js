jQuery( window ).on( 'clockworks/create', function ( e, Clockworks, args ) {

	Clockworks.nodes = {
		'init' : [],
		'mods' : [],
		'exec' : [],
	};

} );


jQuery( window ).on( 'clockworks/create', function ( e, Clockworks, args ) {

	var Instance 	= Clockworks,
		Nodes 		= Instance.nodes,
		EventName 	= Instance.name + '/create';


	if ( args.hasOwnProperty( 'nodes' ) ) {


		if ( args.nodes.hasOwnProperty( 'init' ) ) {

			Instance.addAction( 'init', args.nodes['init'], 1 );

		}


		if ( args.nodes.hasOwnProperty( 'mods' ) ) {

			Instance.addAction( 'mods', args.nodes['mods'], 1 );

		}


		if ( args.nodes.hasOwnProperty( 'exec' ) ) {

			Instance.addAction( 'exec', args.nodes['exec'], 1 );

		}


	}


	$( window ).on( EventName, function () {

		Instance.doAction( 'init', [Instance,'sec','thir'] );

	} );


	jQuery( document ).ready( function ( $ ) {
		
		Instance.doAction( 'mods', [Instance,'sec','thir'] );

	} );


	jQuery( window ).on( 'load', function () {
		
		Instance.doAction( 'exec', [Instance,'sec','thir'] );

	} );


} );


jQuery( window ).on( 'clockworks/prototype', function ( e, Clockworks ) {


	// 	addAction
	Clockworks.__proto__.addAction = function( nodeName, action, argsLeng ){


		var actionModel = {
			'actions' 	: action,
			'args' 		: ( typeof( argsLeng ) == 'undefined' ? 0 : argsLeng )
		};


		if ( this.nodes.hasOwnProperty( nodeName ) ) {

			this.nodes[nodeName].push( actionModel );

		} else {

			this.nodes[nodeName] = [];

			this.nodes[nodeName].push( actionModel );
			
		}


	};


	// 	doAction
	Clockworks.__proto__.doAction = function( nodeName, arguments ){


		var tempArgs = ( typeof( arguments ) == 'object' ? arguments : [] );

		if ( this.nodes.hasOwnProperty( nodeName ) ) {

			for ( var i = 0; i < this.nodes[nodeName].length; i++ ) {
// console.log(this);
				var func = this.nodes[nodeName][i].actions,
					args = this.nodes[nodeName][i].args,
					argument = [];
// console.log(args);
				for ( var j = 0; j < args; j++ ) {
					argument.push( tempArgs[j] );
				}

				func.apply( this, argument );
				
			}

		} else {

			return false;

		}


	};

	
} );