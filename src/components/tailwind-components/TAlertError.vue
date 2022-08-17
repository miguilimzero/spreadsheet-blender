<template>
	<div class="rounded-md border border-red-400 bg-red-50 p-4 transition-all duration-150 ease-in-out">
		<div class="flex">
			<div class="flex-shrink-0">
				<XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
			</div>
			<div class="ml-3">
				<h3 class="text-sm font-medium text-red-800">{{ title }}</h3>
				<p class="mt-2 text-sm text-red-700">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XCircleIcon,
	},

	props: {
		title: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},
	},
}
</script>
