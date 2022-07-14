<template>
	<div class="block w-full space-y-2">
		<TCard>
			<div class="flex justify-between px-8 py-6">
				<div class="block">
					<div class="mb-4 flex items-center space-x-2">
						<h3 class="font-bold">Untitled Blend</h3>
						<p class="font-medium">-</p>
						<p class="font-medium">2022-07-14 16:45:32</p>
					</div>

					<p class="mb-1">Source files (4 tables):</p>
					<div class="mb-4 grid space-y-2">
						<TBadge class="flex items-center"  size="sm" v-for="i in [1, 2, 3, 4]" :key="i">
							<TableIcon class="w-5 h-5 mr-1" /> C:\Users\Rafaela\Area de Trabalho\Minhas Planinhas\PlaninhaRaw{{ i }}.csv
						</TBadge>
					</div>

					<p class="mb-1">Destination file:</p>
					<TBadge class="flex items-center"> <TableIcon class="w-5 h-5 mr-1" /> C:\Users\Rafaela\Area de Trabalho\Minhas Planinhas\PlaninhaFinal.csv </TBadge>
					<TBadge class="flex items-center" color="gray"> <ArchiveIcon class="w-5 h-5 mr-1" /> No result file generated yet! </TBadge>
				</div>

				<div class="grid content-between">
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
import { LogoutIcon, RewindIcon, TrashIcon, TableIcon, ArchiveIcon } from '@heroicons/vue/solid'

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
		TableIcon,
		ArchiveIcon
	},
}
</script>
