<template>
	<div>
		<label :for="randomId" class="block text-sm font-medium text-gray-700">{{ label }}</label>

		<div class="mt-1">
			<input
				:type="type"
				:name="randomId"
				:id="randomId"
				:placeholder="placeholder"
				@input="$emit('update:modelValue', $event.target.value)"
				:class="[
					'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
					'transition-all duration-150 ease-in-out',
				]"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: ['label', 'type', 'placeholder'],

	computed: {
		randomId() {
			return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		},
	},
}
</script>
