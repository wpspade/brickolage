import setColumnsNum from "./setColumnsNum";
import setSorted from "./setSorted";
import setHeight from "./setHeight";
import applyContainerStyles from "./applyContainerStyles";
import applyItemsStyles from "./applyItemsStyles";
import addSeparators from "./addSeparators";
import reset from "./reset";

export default function run( instance, guid, t ) {

	setColumnsNum( instance );

	if ( instance.columnsNum < 2 ) {

		if ( instance.__changed.columnsNum && instance.sortedOrder.length ) {

			reset( instance, guid, t.instances );
		}

		return;
	}

	setSorted( instance, t.options );

	setHeight( instance );

	applyContainerStyles( instance );

	if ( instance.__changed.sortedOrder ) {

		applyItemsStyles( instance );

		if ( instance.__changed.columnsNum ) {

			addSeparators( instance, t.options );
		}
	}
};