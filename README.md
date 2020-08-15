# svelte-tooltip-action

[![NPM version](https://img.shields.io/npm/v/svelte-tooltip-action.svg?style=flat)](https://www.npmjs.com/package/svelte-tooltip-action) [![NPM downloads](https://img.shields.io/npm/dm/svelte-tooltip-action.svg?style=flat)](https://www.npmjs.com/package/svelte-tooltip-action) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Simple beautiful tooltip in the form of Svelte 3 action

![example](https://user-images.githubusercontent.com/25938785/90321786-a6179900-df55-11ea-8a77-0e0aff9e32c1.gif)

## :cake: Features

This is Svelte's action to create some small minimalistic tooltips.

- Easy to use (an implementation through the Svelte action :boom:)
- Light size
- Customizable :fire:

## Install

```bash
npm i svelte-tooltip-action
```

## Usage

```html
<script>
  import tooltip from 'svelte-tooltip-action'

  ...

  const text = 'Some extra text here (advice)'
</script>

<div use:tooltip={{ text, style: 'left: 0; bottom: -24px;' }}>
  Your awesome content here (for example, buttons)
</div>
```

## API

### Parameters

| Name  | Type   | Default      | Description     |
| ----- | ------ | ------------ | --------------- |
| text  | string | empty string | Tooltip's text  |
| style | string | empty string | Your custom CSS |

## Why my overlap not working?

- Check CSS `position: relative` on your `<div />` (on `<div />` with `use:tooltip`)
- Also do not put CSS `overflow: hidden` on parent HTML tags (in case of your tooltip will go over parents)
- Please note that not all components can be overlaid with a tooltip because the `target` Svelte property is used under the hood:

```js
new Tooltip({
  target: node,
  props: { text, style },
})
```

This property has some limitations. For example you cannot use it on `<img/>`, but you can wrap the image, so the tooltip will work:

```html
<div use:tooltip={{text: 'Hi'}}>
  <img src='...' alt='...'/>
</div>
```

- Check CSS `z-index`

## License

MIT &copy; [Denis Stasyev](https://github.com/denisstasyev)
