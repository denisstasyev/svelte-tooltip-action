import Tooltip from './Tooltip.svelte'

const tooltip = (node, { text = '', style = '' }) => {
	let component = null
	let isOpened = false
	let isDestroyed = false

	function attachTooltip() {
		if (!isOpened) {
			component = new Tooltip({
				target: node,
				props: { text, style },
			})
			isDestroyed = false
			component.$on('close', removeTooltip)
		}
		isOpened = true
	}

	function removeTooltip() {
		if (!isDestroyed) {
			component.$destroy()
			isDestroyed = true
		}
	}

	function onMouseLeave() {
		removeTooltip()
		isOpened = false
	}

	node.addEventListener('mouseenter', attachTooltip)
	node.addEventListener('mouseleave', onMouseLeave)

	return {
		destroy() {
			node.removeEventListener('mouseenter', attachTooltip)
			node.removeEventListener('mouseleave', onMouseLeave)
		},
	}
}

export default tooltip
