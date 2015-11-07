var test = function ( obj, str ) {
	console.log( obj.name + ' ' + str );
};



var y = new Clockworks( {
	'name' : 'suls',
	'nodes': {
		'init' : function (obj) {
			test( this, 'init' );
		},
		'mods' 	: function (obj) {

			test( this, this.applyFilter( this.name + 'mods', 'mods' ) );
		},
		'exec'	: function () {
			test( this, this.applyFilter( this.name + 'exec', 'exec' ) );
		}
	},
	'locations' : {
		'body' 	: '.fly',
		'h1'	: '#clockwerks'
	}
} );


var x = new Clockworks( {
	'name' : 'teddy',
	'nodes': {
		'init' : function (obj) {
			test( this, 'init' );
		},
		'mods' 	: function (obj) {

			test( this, this.applyFilter( this.name + 'mods', 'mods' ) );
		},
		'exec'	: function () {
			test( this, this.applyFilter( this.name + 'exec', 'exec' ) );
		}
	},
	'locations' : {
		'body' 	: '.fly',
		'h1'	: '#clockwerks'
	}
} );

x.addFilter( 'teddymods', function ( args ) { 
	console.log($( 'p' ));
	return args + ' and the_b';

} );




// x.addAction( 'mods_1', function ( tag ) { 
// console.log(arguments);
// 	console.log( 'haia_1 ' + tag );

// }, 3 );

// x.addAction( 'mods_1', function ( tag ) { 

// 	console.log( 'haia_12 ' + tag );

// }, 1 );

// x.addAction( 'mods_2', function ( tag ) { 

// 	console.log( 'haia_2 ' + tag ); 

// }, 1 );

// x.addAction( 'mods_3', function () { 

// 	console.log('haia_3'); 

// } );

// jQuery(document).ready(function($) {
	
// 	console.log(x);
// });

