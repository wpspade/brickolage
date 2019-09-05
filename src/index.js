/*!
 * Brickolage v.1.0.0
 * A tiny Masonry script alernative, based on CSS3 flexbox layout.
 *
 * Author: Y. Zadziarkouski aka wpSpade
 * 
 * The author of the original idea is Tobias Bjerrome Ahlin.
 * Article: https://tobiasahlin.com/blog/masonry-with-css/
 *
 * License MIT
 *
 * Copyright 2019 wpSpade
 * https://themeforest.net/user/wpSpade
 */

import "./style.scss";

import init from "./init";
import run from "./run";
import reset from "./reset";

export default class Brickolage {

	constructor( options ) {

		[
			"reLayout",
			"reFresh",
			"destroy"
		].map( func => this[ func ] = this[ func ].bind( this ) );

		[ this.options, this.instances ] = init( options );

		this.reLayout();

		window.addEventListener( "resize", this.reLayout );

		return this;
	}

	reLayout( callback ) {

		const { options, instances } = this;

		if ( ! instances.length ) return;

		instances.map( ( instance, guid ) => {

			run( instance, guid, this );

			if ( typeof callback == "function" ) {

				callback( instance, guid );
			}
		} );
	}

	reFresh( callback, newOptions ) {

		[ this.options, this.instances ] = init( newOptions );

		if ( typeof callback == "function" ) {

			callback();
		}
	}

	destroy( callback ) {

		const { instances, reLayout } = this;

		if ( ! instances.length ) return;

		window.removeEventListener( "resize", reLayout );

		instances.map( ( instance, guid ) => {

			instance.container.classList.remove( "brickolage--initialized" );

			reset( instance, guid, instances );

			delete instances[ guid ];

			if ( typeof callback == "function" ) {

				callback( instance, guid );
			}
		} );
	}
}