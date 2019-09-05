import getOptions from "./getOptions";
import getInstances from "./getInstances";

export default function init( opts ) {

	const options = getOptions( opts ),
		instances = getInstances( options );

	if ( !! instances.length ) {

		instances.map( instance => instance.container.classList.add( "brickolage--initialized" ) );
	}

	return [ options, instances ];
}