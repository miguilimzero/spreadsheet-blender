<template>
	<RadioGroup v-model="$root.project.blendingMethod">
		<div class="-space-y-px rounded-md bg-white shadow-sm dark:bg-gray-800">
			<RadioGroupOption
				as="template"
				v-for="(setting, settingIdx) in settings"
				:key="setting.name"
				:value="setting.value"
				v-slot="{ checked, active }"
			>
				<div
					:class="[
						settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
						settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
						checked ? 'z-10 border-primary-200 bg-primary-50 dark:bg-primary-900 dark:border-primary-500' : 'border-gray-200 dark:border-gray-500',
						'relative flex cursor-pointer border p-4 focus:outline-none',
					]"
				>
					<span
						:class="[
							checked ? 'border-transparent bg-primary-600' : 'border-gray-300 bg-white',
							active ? 'ring-2 ring-primary-500 ring-offset-2' : '',
							'mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-150 ease-in-out',
						]"
						aria-hidden="true"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-white" />
					</span>
					<span class="ml-3 flex flex-col">
						<RadioGroupLabel as="span" :class="[checked ? 'text-primary-900 dark:text-primary-100' : 'text-gray-900 dark:text-white', 'block text-sm font-medium']">
							{{ setting.name }}
						</RadioGroupLabel>
						<RadioGroupDescription as="span" :class="[checked ? 'text-primary-700 dark:text-primary-300' : 'text-gray-500 dark:text-gray-300', 'block text-sm']">
							{{ setting.description }}
						</RadioGroupDescription>
					</span>
				</div>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

export default {
	components: {
		RadioGroup,
		RadioGroupDescription,
		RadioGroupLabel,
		RadioGroupOption,
	},

	data: () => ({
		settings: [
			{ value: 'keep', name: 'Keep Missing Data', description: 'Keep rows that have missing data in certain columns' },
			{ value: 'remove', name: 'Remove Missing Data', description: 'Remove rows that have missing data in certain columns' },
		],
	}),
}
</script>
