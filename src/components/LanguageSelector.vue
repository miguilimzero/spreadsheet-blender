<template>
	<Listbox v-model="$root.currentLanguage">
		<ListboxButton class="flex h-8 w-8 items-center justify-center rounded-lg">
			<component :is="currentLanguageIcon" class="h-5 w-5" />
		</ListboxButton>

		<ListboxOptions
			class="absolute top-full z-10 right-1/2 mt-3 -mr-3 w-36 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5"
		>
			<ListboxOption
				v-for="language in languages"
				:key="language"
				:value="language.value"
				v-slot="{ active, selected }"
				as="template"
			>
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
					<component :is="language.icon" class="h-4 w-4" />
					<div class="ml-3">{{ language.name }}</div>
				</div>
			</ListboxOption>
		</ListboxOptions>
	</Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

import BrazilFlag from './country-flags/BrazilFlag'
import UsaFlag from './country-flags/UsaFlag'
import SpainFlag from './country-flags/SpainFlag'

export default {
	components: {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
	},

	computed: {
		currentLanguageIcon() {
			return this.languages.find(language => language.value === this.$root.currentLanguage).icon
		},

		languages() {
			return [
				{ name: 'Português', value: 'pt', icon: BrazilFlag },
				{ name: 'English', value: 'en', icon: UsaFlag },
				{ name: 'Español', value: 'es', icon: SpainFlag },
			]
		},
	},
}
</script>
