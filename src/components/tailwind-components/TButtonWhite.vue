<template>
	<button
		type="button"
		:class="[
			'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm',
			'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
			'transition-all duration-150 ease-in-out',
		]"
	>
		<slot />
	</button>
</template>

<script>
export default {}
</script>
