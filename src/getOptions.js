import defaults from "./defaults";

export default function getOptions( options ) {

	let _options = { ...defaults };

	if ( !! options && typeof options === "object" ) {

		_options = {
			..._options,
			...options
		};
	}

	return _options;
};