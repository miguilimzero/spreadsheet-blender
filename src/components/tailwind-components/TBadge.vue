<template>
	<span :class="['rounded-md text-sm font-semibold', sizeClasses, colorClasses]">
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'md',
		},

		color: {
			type: String,
			default: 'primary',
		},
	},

	computed: {
		colorClasses() {
			return (
				{
					primary: 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300',
					green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
					gray: 'bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300',
				}[this.color] || ''
			)
		},

		sizeClasses() {
			return (
				{
					sm: 'px-1 py-0.5',
					md: 'px-2 py-1',
					lg: 'px-3 py-2',
				}[this.size] || ''
			)
		},
	},
}
</script>
