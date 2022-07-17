<template>
	<div class="flex justify-between py-4 px-6">
		<div class="flex items-center space-x-4">
			<h2
				class="cursor-pointer font-bold tracking-tighter"
				v-if="$root.project.spreadsheetList.length === 0"
				@click="$root.aboutScreen = true"
			>
				Spreadsheet Blender
			</h2>

			<template v-else>
				<TInput container-class="-my-1.5" type="text" v-model="$root.project.name" v-if="editingTitle" />
				<h2 v-else>{{ $root.project.name }}</h2>

				<TButtonIcon @click="editingTitle = !editingTitle">
					<CheckIcon class="h-6 w-6" v-if="editingTitle" />
					<PencilIcon class="h-6 w-6" v-else />
				</TButtonIcon>
			</template>
		</div>

		<div class="flex items-center space-x-4">
			<div class="relative">
				<LanguageSelector />
			</div>

			<div class="relative">
				<ThemeSelector />
			</div>

			<TButtonWhite @click="$root.aboutScreen = false" v-if="$root.aboutScreen">
				<LogoutIcon class="mr-2 h-4 w-4" /> {{ $t('Back') }}
			</TButtonWhite>

			<TButtonWhite @click="$root.historyScreen = false" v-else-if="$root.historyScreen">
				<LogoutIcon class="mr-2 h-4 w-4" /> {{ $t('Back') }}
			</TButtonWhite>

			<TButtonWhite @click="$root.historyScreen = true" v-else-if="$root.project.spreadsheetList.length === 0">
				<ClockIcon class="mr-2 h-4 w-4" /> {{ $t('History') }}
			</TButtonWhite>
		</div>
	</div>
</template>

<script>
import { LogoutIcon, ClockIcon } from '@heroicons/vue/solid'
import { CheckIcon, PencilIcon } from '@heroicons/vue/outline'

import ThemeSelector from '@/components/ThemeSelector'
import LanguageSelector from '@/components/LanguageSelector'

import TInput from '@/components/tailwind-components/TInput'
import TButtonIcon from '@/components/tailwind-components/TButtonIcon'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		ThemeSelector,
		LanguageSelector,

		LogoutIcon,
		ClockIcon,
		CheckIcon,
		PencilIcon,
		TInput,
		TButtonIcon,
		TButtonWhite,
	},

	data: () => ({
		editingTitle: false,
	}),
}
</script>
