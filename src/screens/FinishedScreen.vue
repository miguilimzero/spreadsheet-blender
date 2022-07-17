<template>
<div class="mx-auto flex h-screen items-center justify-center -mt-[70px]">
	<div class="block space-y-10">
		<div class="flex justify-center">
			<div class="rounded-full bg-green-100 p-5">
				<CheckIcon class="h-10 w-10 text-green-600" />
			</div>
		</div>

		<div class="space-y-4">
			<h1 class="text-center">{{ $t('Merge Completed') }}</h1>
			<p class="text-center">
				{{ $t('Congratulations you merged all selected spreadsheets. You can find the result in the path below:') }}
			</p>
		</div>

		<div class="flex justify-center">
			<TBadge @click="openFolder()"> {{ $root.project.resultFile }} </TBadge>
		</div>

		<div class="flex justify-center space-x-2">
			<TButtonWhite @click="$root.resetApp()">
				<RefreshIcon class="mr-2 h-4 w-4" /> {{ $t('Blend other spreadsheets') }}
			</TButtonWhite>
			<TButtonPrimary @click="openResultFile()"> <ArchiveIcon class="mr-2 h-4 w-4" /> {{ $t('Open result file') }} </TButtonPrimary>
		</div>
	</div>
</div>
</template>

<script>
import { RefreshIcon, ArchiveIcon } from '@heroicons/vue/solid'
import { CheckIcon } from '@heroicons/vue/outline'

import TBadge from '@/components/tailwind-components/TBadge'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

import { shell } from 'electron'

export default {
	components: {
		TBadge,
		TButtonPrimary,
		TButtonWhite,
		RefreshIcon,
		CheckIcon,
		ArchiveIcon,
	},

	methods: {
		openResultFile() {
			shell.showItemInFolder(this.$root.project.resultFile)
		},
	},
}
</script>
