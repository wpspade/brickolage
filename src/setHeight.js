export default function setHeight( instance ) {

	instance.height = Math.max( ...instance.heights ) + 5;
}