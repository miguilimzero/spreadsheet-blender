<template>
    <div class="block">
        <SelectSpreedsheetButton @click="selectFirstSpreedsheet()">
            Select a new Spreadsheet Table
        </SelectSpreedsheetButton>
    </div>

    <TopRightButtonGroup>
        <TButtonWhite>
            <UsaFlag class="w-5 h-5 mr-2" v-if="$root.language === 'US'" />
            <BrazilFlag class="w-5 h-5 mr-2" v-if="$root.language === 'BR'" />

            Language
        </TButtonWhite>

        <TButtonWhite @click="$root.historyScreen = true">
            <ClockIcon class="w-4 h-4 mr-2" /> History
        </TButtonWhite>
    </TopRightButtonGroup>
</template>

<script>
import { ClockIcon } from '@heroicons/vue/solid'
import TopRightButtonGroup from '@/components/TopRightButtonGroup'
import SelectSpreedsheetButton from '@/components/SelectSpreedsheetButton'

import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

import UsaFlag from '@/components/country-flags/UsaFlag'
import BrazilFlag from '@/components/country-flags/BrazilFlag'

export default {
    components: {
        TopRightButtonGroup, SelectSpreedsheetButton, 
        
        ClockIcon, TButtonWhite,

        UsaFlag, BrazilFlag,
    },

    methods: {
        selectFirstSpreedsheet() {
            this.$root.tableFiles = ['x']
        }
    },
}
</script>