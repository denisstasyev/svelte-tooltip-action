# svelte-tooltip-action

Simple beautiful tooltip in the form of Svelte 3 action

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

Please note that not all components can be overlaid with a tooltip because the `target` Svelte property is used under the hood:

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

Also do not put CSS `overflow: hidden` on parent HTML tags (in case of your tooltip will go over parents) and check CSS `z-index`.

## License

MIT &copy; [Denis Stasyev](https://github.com/denisstasyev)
