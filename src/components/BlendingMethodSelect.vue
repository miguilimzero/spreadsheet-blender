<template>
  <RadioGroup v-model="selected">
    <div class="bg-white dark:bg-gray-800 rounded-md shadow-sm -space-y-px">
      <RadioGroupOption as="template" v-for="(setting, settingIdx) in settings" :key="setting.name" :value="setting" v-slot="{ checked, active }">
        <div :class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200 dark:border-gray-500', 'relative border p-4 flex cursor-pointer focus:outline-none']">
          <span :class="[checked ? 'bg-primary-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center transition-all ease-in-out duration-150']" aria-hidden="true">
            <span class="rounded-full bg-white w-1.5 h-1.5" />
          </span>
          <span class="ml-3 flex flex-col">
            <RadioGroupLabel as="span" :class="[checked ? 'text-primary-900' : 'text-gray-900', 'block text-sm font-medium']">
              {{ setting.name }}
            </RadioGroupLabel>
            <RadioGroupDescription as="span" :class="[checked ? 'text-primary-700' : 'text-gray-500', 'block text-sm']">
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
  { name: 'Maintain Missing Data', description: 'Only members of this project would be able to access' },
  { name: 'Blend Missing Data', description: 'Only members of this project would be able to access' },
  { name: 'Remove Missing Data', description: 'Only members of this project would be able to access' },
],

selected: null,
    }),

    created() {
        this.selected = this.settings[0]
    }
}
</script>