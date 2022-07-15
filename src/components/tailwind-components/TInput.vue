<template>
	<div>
		<label :for="randomId" class="block text-sm font-medium text-gray-700">{{ label }}</label>

		<div class="mt-1">
			<input
				v-bind="$attrs"
				:type="type"
				:name="randomId"
				:id="randomId"
				:placeholder="placeholder"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				:class="[
					'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
					'dark:border-gray-600 dark:bg-gray-800 dark:text-white',
					'transition-all duration-150 ease-in-out',
				]"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: false,
		},

		type: {
			type: String,
			required: true,
		},

		placeholder: {
			type: String,
			required: false,
		},

		modelValue: {
			type: String,
			required: true,
		},
	},

	computed: {
		randomId() {
			return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		},
	},
}
</script>
