export default function clearStyles( { container, items } ) {

	container.style.height = null;

	items.map( item => item.style.order = null );
}