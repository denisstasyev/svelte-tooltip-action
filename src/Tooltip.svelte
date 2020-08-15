<script>
	import { onMount, createEventDispatcher } from 'svelte'

	export let text = ''
	export let style = ''

	const dispatch = createEventDispatcher()
	const closeToolbar = () => dispatch('close')

	let toolbarNode

	onMount(() => {
		toolbarNode.addEventListener('mouseenter', closeToolbar)

		return () => {
			toolbarNode.removeEventListener('mouseenter', closeToolbar)
		}
	})
</script>

{#if text}
	<span class="tooltip" {style} bind:this={toolbarNode}>{text}</span>
{/if}

<style lang="scss">
	$x1: 4px;
	$x3: 12px;
	$color-bg: #ffffff;
	$color-text: #2c2d2e;
	$depth: 0 4px 32px 0 rgba(0, 16, 61, 0.32);

	@mixin font() {
		font-size: 13px;
		line-height: 20px;
		font-weight: 400;
		font-family: Helvetica, Arial, sans-serif;
	}

	@keyframes scaleup {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.tooltip {
		@include font;

		position: absolute;
		background-color: $color-bg;
		color: $color-text;
		border-radius: $x1;
		box-shadow: $depth;
		padding: $x1 $x3;
		white-space: nowrap;
		z-index: 1;

		animation: scaleup 0.2s;
	}
</style>
