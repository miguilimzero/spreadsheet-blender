<template>
	<div class="block"></div>

	<div class="fixed bottom-0 flex w-screen justify-between border-t bg-white px-4 py-2">
		<TButtonWhite @click="$root.tableFiles = []"> <BanIcon class="mr-2 h-4 w-4" /> Cancel </TButtonWhite>
		<TButtonPrimary @click="$root.resultFile = 'x'"> <CheckCircleIcon class="mr-2 h-4 w-4" /> Finish </TButtonPrimary>
	</div>
</template>

<script>
import { BanIcon, CheckCircleIcon } from '@heroicons/vue/solid'

import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		TButtonPrimary,
		TButtonWhite,
		BanIcon,
		CheckCircleIcon,
	},
}
</script>
