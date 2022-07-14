<template>
  <div class="block space-y-10">
    <div class="flex justify-center">
      <div class="p-5 rounded-full bg-green-100">
        <CheckIcon class="w-10 h-10 text-green-600" />
      </div>
    </div>

    <div class="space-y-4">
      <h1 class="text-center">Merge Completed</h1>
      <p class="text-center">
        Congratulations you merged all selected tables. You can find the result
        in the directory below:
      </p>
    </div>

    <div class="flex justify-center">
      <TBadge>
        C:\Users\Rafaela\Área de Trabalho\Minhas Planinhas\Resultado.csv
      </TBadge>
    </div>

    <div class="flex justify-center space-x-2">
      <TButtonWhite>
        <FolderIcon class="w-4 h-4 mr-2" /> Open target folder
      </TButtonWhite>
      <TButtonPrimary
        @click="
          $root.tableFiles = [];
          $root.resultFile = '';
        "
      >
        <RefreshIcon class="w-4 h-4 mr-2" /> Blend other spreedsheats
      </TButtonPrimary>
    </div>
  </div>
</template>

<script>
import { RefreshIcon, FolderIcon } from "@heroicons/vue/solid";
import { CheckIcon } from "@heroicons/vue/outline";


import TBadge from "@/components/tailwind-components/TBadge";
import TButtonPrimary from "@/components/tailwind-components/TButtonPrimary";
import TButtonWhite from "@/components/tailwind-components/TButtonWhite";

export default {
  components: {
    TBadge,
    TButtonPrimary,
    TButtonWhite,
    RefreshIcon,
    CheckIcon,
    FolderIcon,
  },
};
</script>
