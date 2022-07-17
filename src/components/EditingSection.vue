<template>
	<div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
		<div class="flex items-center space-x-4">
			<div class="rounded-full bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400">
				<AdjustmentsIcon class="h-6 w-6" />
			</div>

			<h4 class="font-semibold">{{ title }}</h4>
		</div>
		<div class="col-span-2">
			<slot />
		</div>
	</div>
</template>

<script>
import { AdjustmentsIcon } from '@heroicons/vue/outline'

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},

	components: {
		AdjustmentsIcon,
	},
}
</script>
