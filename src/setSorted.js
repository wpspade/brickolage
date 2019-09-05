function getSorted( { columnsNum, items }, isOriginalOrder ) {

	const sorted = Array.from( { length: columnsNum }, () => [] ),
		_heights = Array.from( { length: columnsNum }, () => 0 );

	let i = 0;

	items.filter( item => !! item )
	.map( ( item, index ) => {

		const itemHeight = item.offsetHeight || 1;

		if ( isOriginalOrder ) {

			sorted[ i ].push( index );

			_heights[ i ] += itemHeight;

			if ( i < columnsNum - 1 ) {
				i += 1;
			} else {
				i = 0;
			}

		} else {

			const minHeight = Math.min( ..._heights ),
				n = _heights.indexOf( minHeight );

			sorted[ n ].push( index );

			_heights[ n ] += itemHeight;
		}
	} );

	return [ _heights, sorted ];
}

export default function setSorted( instance, opts ) {

	const sorted = [ ...instance.sortedOrder ];

	[ instance.heights, instance.sortedOrder ] = getSorted( instance, !! opts.originalOrder );

	instance.__changed = { ...instance.__changed, sortedOrder: JSON.stringify( sorted ) !== JSON.stringify( instance.sortedOrder ) };
}