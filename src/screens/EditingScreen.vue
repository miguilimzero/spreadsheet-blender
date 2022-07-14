<template>
  <div class="block"></div>

  <div
    class="
      fixed
      bottom-0
      w-screen
      px-4
      py-2
      border-t
      bg-white
      flex
      justify-between
    "
  >
    <TButtonWhite @click="$root.tableFiles = []"> <BanIcon class="w-4 h-4 mr-2" /> Cancel </TButtonWhite>
    <TButtonPrimary @click="$root.resultFile = 'x'"> <CheckCircleIcon class="w-4 h-4 mr-2" /> Finish </TButtonPrimary>
  </div>
</template>

<script>
import { BanIcon, CheckCircleIcon } from "@heroicons/vue/solid";

import TButtonPrimary from "@/components/tailwind-components/TButtonPrimary";
import TButtonWhite from "@/components/tailwind-components/TButtonWhite";

export default {
  components: {
    TButtonPrimary,
    TButtonWhite,
    BanIcon,
    CheckCircleIcon
  },
};
</script>