# Brickolage

A tiny modern Masonry alternative, created with CSS3 flexbox + pure javascript. 
Based on an [elegant idea] by [Tobias Bjerrome Ahlin].

[Demo]

## Advantages:

  - Pure CSS3 flexbox layout. Number of columns is determined by item width.
  - Dependency-free. Written in pure javascript.
  - No direct DOM modifications except adding/removing grid separators and specifying item order CSS property by script.

### Setting up

1. Add a link to the css file in the *<head>* tag of your *index.html*:

```
<link rel="stylesheet" href="assets/brickolage.build.css">
```

2. Insert before your closing *<body>* tag add:

```
<script src="assets/brickolage.build.js"></script>
```

3. Add markup to your *index.html*:

```html
<ul class="brickolage--container">
	<li class="brickolage--item">
		...
	</li><!-- .brickolage--item -->

	<li class="brickolage--item">
		...
	</li><!-- .brickolage--item -->

	<li class="brickolage--item">
		...
	</li><!-- .brickolage--item -->
</ul><!-- .brickolage--container -->
```

4. Initialize script in your *app.js*:

```javascript
var fire = function() {
	var brcklg = new Brickolage();
}

( document.readyState === "complete" || ( document.readyState !== "loading" && ! document.documentElement.doScroll ) ) && fire() || document.addEventListener( "DOMContentLoaded", fire );
```

### Options

| Option | Description |
| ------ | ------ |
| container | Specify selector or raw element. Default: *".brickolage--container"* |
| item | Specify selector or elements (HTML collection). Default: *".brickolage--item"* |
| separatorClassName | Column separator className. Default: *"brickolage--separator"* |
| separatorTagName | Column separator tagName. Default: *"li"* |
| originalOrder | Determines order style. Default: *false* |

Be careful when changing default *container*, *item* and *separatorClassName* options, because of core styles.

**Specify script options**:

```javascript
new Brickolage( {
	container: "[data-brickolage]",
	originalOrder: true
} );
```

### Methods

| Method | Description |
| ------ | ------ |
| reLayout | Use to quickly update container height and items order. |
| reFresh | Trigger after the items were added or removed. Accepts new options. |
| destroy | Return elements to pre-initialized state. Callback function returns destroyed instance. |

**Call method after initialization**:

```javascript
brcklg.Method();
```

### Todos

 - Linting

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Demo]: <https://wpspade.com/brickolage>
   [elegant idea]: <https://tobiasahlin.com/blog/masonry-with-css>
   [Tobias Bjerrome Ahlin]: <https://tobiasahlin.com>
