<template>
	<Listbox v-model="$root.currentTheme">
		<ListboxButton class="flex h-8 w-8 items-center justify-center rounded-lg">
			<LightIcon class="h-5 w-5 fill-gray-400 hover:fill-gray-500 dark:hidden" />
			<DarkIcon class="hidden h-5 w-5 fill-gray-200 hover:fill-gray-100 dark:block" />
		</ListboxButton>

		<ListboxOptions
			class="absolute top-full z-10 right-1/2 -mr-3 mt-3 w-36 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5"
		>
			<ListboxOption v-for="theme in themes" :key="theme" :value="theme.value" v-slot="{ active, selected }" as="template">
				<div
					:class="[
						'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
						{
							'text-primary-500': selected,
							'text-slate-900 dark:text-white': active && !selected,
							'text-slate-700 dark:text-slate-400': !active && !selected,
							'bg-slate-100 dark:bg-slate-900/40': active,
						},
					]"
				>
					<component
						:is="theme.icon"
						:class="['h-4 w-4', selected ? 'fill-primary-400 dark:fill-primary-400' : 'fill-slate-400']"
					/>
					<div class="ml-3">{{ theme.name }}</div>
				</div>
			</ListboxOption>
		</ListboxOptions>
	</Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

import DarkIcon from './theme-icons/DarkIcon'
import LightIcon from './theme-icons/LightIcon'
import SystemIcon from './theme-icons/SystemIcon'

export default {
	components: {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,

		DarkIcon,
		LightIcon,
		SystemIcon,
	},

	computed: {
		themes() {
			return [
				{ name: this.$t('Light'), value: 'light', icon: LightIcon },
				{ name: this.$t('Dark'), value: 'dark', icon: DarkIcon },
				{ name: this.$t('System'), value: 'system', icon: SystemIcon },
			]
		},
	},
}
</script>
