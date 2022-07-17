<template>
	<button
		type="button"
		:class="[
			'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200',
			'hover:bg-gray-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-700 dark:hover:bg-gray-900',
			'transition-all duration-150 ease-in-out',
		]"
	>
		<slot />
	</button>
</template>

<script>
export default {}
</script>
