<template>
	<button
		type="button"
		:class="[
			'inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm',
			'hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-700 dark:hover:bg-primary-500',
			'transition-all duration-150 ease-in-out',
		]"
	>
		<slot />
	</button>
</template>

<script>
export default {}
</script>
