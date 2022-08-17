<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<TransitionRoot as="template" :show="modelValue">
		<Dialog as="div" class="relative z-10" @close="$emit('update:modelValue', false)">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			</TransitionChild>

			<div class="fixed z-10 inset-0 overflow-y-auto">
				<div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel
							class="
								relative
								bg-white
                                dark:bg-gray-800
								rounded-lg
								px-4
								pt-5
								pb-4
								text-left
								overflow-hidden
								shadow-xl
								transform
								transition-all
								sm:my-8 sm:max-w-lg sm:w-full sm:p-6
							"
						>
							<div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
								<TButtonIcon @click="$emit('update:modelValue', false)">
									<XIcon class="w-5 h-5" />
								</TButtonIcon>
							</div>
							<div class="sm:flex sm:items-start">
								<div
									class="
										mx-auto
										flex-shrink-0 flex
										items-center
										justify-center
										h-12
										w-12
										rounded-full
										bg-primary-100
                                        dark:bg-primary-900
										sm:mx-0 sm:h-10 sm:w-10
									"
								>
									<PencilAltIcon class="h-6 w-6 text-primary-600 dark:text-primary-300" aria-hidden="true" />
								</div>
								<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<DialogTitle as="h3" class="text-lg leading-6 font-medium">
										Spreadsheet Options
									</DialogTitle>
									<div class="mt-2 space-y-5">
										<p>
											In this modal you can edit the options of how this table should be processed by the program.
										</p>

										<!-- <div class="flex items-center justify-between space-x-8">
											<div class="flex-grow flex flex-col">
												<h5 class="text-sm">First Column Is Header</h5>
												<p class="text-sm">Select this option if the first column is column names instead of table values.</p>
											</div>

											<TToggle v-model="$parent.firstColumnIsHeader" />
										</div>

										<hr /> -->

										<div class="space-y-4">
											<div>
												<h5>Columns List</h5>
												<p>Columns detected in the spreadsheet.</p>
											</div>

											<div class="space-y-4">
												<div class="flex items-center justify-between space-x-8" v-for="(columnName, index) in columnHeaders" :key="index">
													<div class="flex-grow flex items-center space-x-2">
														<p class="text-sm">{{ index + 1 }}.</p>
														<h4 class="text-sm">{{ columnName }}</h4>
														<!-- <TButtonIcon>
															<PencilIcon class="w-4 h-4" />
														</TButtonIcon> -->
													</div>

													<div class="flex-shrink flex flex-col">
														<TToggle :modelValue="false" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { 
	PencilAltIcon, 
	XIcon,
	// PencilIcon
} from '@heroicons/vue/outline'

import TButtonIcon from '@/components/tailwind-components/TButtonIcon'
import TToggle from '@/components/tailwind-components/TToggle'

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },

		spreadsheetData: {
			type: Object,
			required: true,
		}
    },

	components: {
		Dialog,
		DialogPanel,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
		PencilAltIcon,
		TButtonIcon,
		TToggle,
		XIcon,
		// PencilIcon,
	},

	computed: {
		columnHeaders() {
			if(this.$parent.firstColumnIsHeader) {
				return this.spreadsheetData[0]
			}

			return Array.from(
				{ length: (this.spreadsheetData[0].length-1) - 0 + 1 }, 
				(_, i) => `Column ${i + 1}`
			)
		}
	},
}
</script>