<template>
	<div class="block w-full space-y-2">
		<TCard>
			<div class="flex justify-between px-8 py-6">
				<div class="block">
					<div class="mb-6 flex items-center space-x-2">
						<h3 class="font-bold">Untitled Blend</h3>
						<p class="font-medium">-</p>
						<p class="font-medium">2022-07-14 16:45:32</p>
					</div>

					<p>Source files:</p>
					<div class="mb-4 grid space-y-2">
						<TBadge size="sm" v-for="i in [1, 2, 3, 4]" :key="i">
							C:\Users\Rafaela\Area de Trabalho\Minhas Planinhas\PlaninhaRaw{{ i }}.csv
						</TBadge>
					</div>

					<p>Destination file:</p>
					<TBadge> C:\Users\Rafaela\Area de Trabalho\Minhas Planinhas\PlaninhaFinal.csv </TBadge>
					<TBadge color="gray"> No result file generated yet </TBadge>
				</div>

				<div class="block">
					<TButtonPrimary> <RewindIcon class="mr-2 h-4 w-4" /> Recover project </TButtonPrimary>

					<TButtonWhite> <TrashIcon class="mr-2 h-4 w-4" /> Delete from history </TButtonWhite>
				</div>
			</div>
		</TCard>
	</div>

	<TopRightButtonGroup>
		<TButtonWhite @click="$root.historyScreen = false"> <LogoutIcon class="mr-2 h-4 w-4" /> Back </TButtonWhite>
	</TopRightButtonGroup>
</template>

<script>
import { LogoutIcon, RewindIcon, TrashIcon } from '@heroicons/vue/solid'

import TopRightButtonGroup from '@/components/TopRightButtonGroup'

import TCard from '@/components/tailwind-components/TCard'
import TBadge from '@/components/tailwind-components/TBadge'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

export default {
	components: {
		TopRightButtonGroup,
		TCard,
		TBadge,
		TButtonPrimary,
		TButtonWhite,
		LogoutIcon,
		RewindIcon,
		TrashIcon,
	},
}
</script>
