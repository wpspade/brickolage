import instanceDefaults from "./instanceDefaults";
import clearStyles from "./clearStyles";
import removeSeparators from "./removeSeparators";

export default function reset( instance, guid, instances ) {

	clearStyles( instance );

	removeSeparators( instance );

	instances[ guid ] = { ...instance, ...instanceDefaults };
}