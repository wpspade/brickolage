export default function applyItemsStyles( { sortedOrder, items, height } ) {

	sortedOrder.map( ( col, i ) => col.map( num => items[ num ].style.order = i + 1 ) );
}