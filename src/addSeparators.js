import removeSeparators from "./removeSeparators";

export default function addSeparators( instance, opts ) {

	const { container, items, separators, columnsNum } = instance;

	removeSeparators( instance );

	const tagName = opts.separatorTagName || items[ 0 ].tagName.toLowerCase();

	for ( let i = 0; i < columnsNum - 1; i++ ) {

		const separator = document.createElement( tagName );

		separator.className = opts.separatorClassName;

		separator.style.order = i + 1;

		container.appendChild( separator );

		instance.separators[ i ] = separator;
	}
}