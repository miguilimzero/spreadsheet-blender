<template>
	<div>
		<label :for="randomId" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" v-if="label">{{ label }}</label>
		<select
			:id="randomId"
			:name="randomId"
			@input="$emit('update:modelValue', $event.target.value)"
			class="
				block
				w-full
				pl-3
				pr-10
				py-2
				text-base
				border-gray-300
				dark:border-gray-600
				focus:outline-none focus:ring-primary-500 focus:border-primary-500
				sm:text-sm
				rounded-md
				dark:bg-gray-800 dark:text-white
			"
		>
			<slot />
		</select>
	</div>
</template>

<script>
export default {
	props: {
		modelValue: {
			type: String,
			required: true,
		},

		label: {
			type: String,
			required: false,
		},
	},

	computed: {
		randomId() {
			return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		},
	},
}
</script>
