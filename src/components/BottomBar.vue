<template>
    <div class="fixed bottom-0 flex w-screen justify-between border-t bg-white px-6 py-4 dark:bg-gray-800">
		<TButtonWhite @click="$root.resetApp()"> <BanIcon class="mr-2 h-4 w-4" /> {{ $t('Cancel') }} </TButtonWhite>
		<TButtonPrimary @click="$root.finishProject()"> <CheckCircleIcon class="mr-2 h-4 w-4" /> {{ $t('Finish') }} </TButtonPrimary>
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