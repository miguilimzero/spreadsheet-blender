<template>
    <div class="block">
        <TButtonWhite @click="$root.historyScreen = false"> <LogoutIcon class="w-4 h-4 mr-2" /> Back</TButtonWhite>
    </div>
</template>

<script>
import { LogoutIcon } from "@heroicons/vue/solid";

import TButtonWhite from "@/components/tailwind-components/TButtonWhite";

export default {
 components: {
    TButtonWhite,
    LogoutIcon,
  },
}
</script>