export default function setColumnsNum( instance ) {

	const { container, items, columnsNum } = instance;

	const newColumnsNum = Math.round( ( container.clientWidth || 1 ) / ( items[ 0 ].offsetWidth || 1 ) );

	instance.columnsNum = newColumnsNum;

	instance.__changed = { ...instance.__changed, columnsNum: newColumnsNum !== columnsNum };
};