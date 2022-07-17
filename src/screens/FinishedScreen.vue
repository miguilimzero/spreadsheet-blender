<template>
	<div class="block space-y-10">
		<div class="flex justify-center">
			<div class="rounded-full bg-green-100 p-5">
				<CheckIcon class="h-10 w-10 text-green-600" />
			</div>
		</div>

		<div class="space-y-4">
			<h1 class="text-center">Merge Completed</h1>
			<p class="text-center">Congratulations you merged all selected tables. You can find the result in the directory below:</p>
		</div>

		<div class="flex justify-center">
			<TBadge> {{ $root.project.resultFile }} </TBadge>
		</div>

		<div class="flex justify-center space-x-2">
			<TButtonWhite @click="$root.resetApp()"> <RefreshIcon class="mr-2 h-4 w-4" /> Blend other spreedsheats </TButtonWhite>
			<TButtonPrimary> <FolderIcon class="mr-2 h-4 w-4" /> Open target folder </TButtonPrimary>
		</div>
	</div>
</template>

<script>
import { RefreshIcon, FolderIcon } from '@heroicons/vue/solid'
import { CheckIcon } from '@heroicons/vue/outline'

import TBadge from '@/components/tailwind-components/TBadge'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		TBadge,
		TButtonPrimary,
		TButtonWhite,
		RefreshIcon,
		CheckIcon,
		FolderIcon,
	},
}
</script>
