<template>
	<TAlertError
		title="Invalid File Type"
		description="Please select a valid spreadsheet file. Supported formats: XLSX, CSV."
		v-show="showElement"
	/>
</template>

<script>
import TAlertError from '@/components/tailwind-components/TAlertError'

export default {
	components: {
		TAlertError,
	},

	data: () => ({
		showElement: false,
	}),

	methods: {
		show() {
			this.showElement = true

			setTimeout(() => (this.showElement = false), 5000)
		},
	},
}
</script>
