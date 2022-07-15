<template>
	<div class="block w-full py-10">
		<div class="space-y-4">
			<TCard v-for="project in $root.historyList" :key="project.historyHash">
				<div class="flex justify-between px-6 py-6">
					<div class="block">
						<div class="mb-4 flex items-center space-x-2">
							<h3 class="font-bold">{{ project.name }}</h3>
							<p class="font-medium">-</p>
							<p class="font-medium">{{ project.lastEditAt.toLocaleString() }}</p>
						</div>

						<p class="mb-1">Source files ({{ project.tableFiles.length }} tables):</p>
						<div class="mb-4 grid space-y-2">
							<TBadge class="flex items-center" size="sm" v-for="fileName in project.tableFiles" :key="fileName">
								<TableIcon class="mr-1 h-5 w-5" /> {{ fileName }}
							</TBadge>
						</div>

						<p class="mb-1">Destination file:</p>
						<TBadge class="flex items-center" color="gray" v-if="project.resultFile === ''">
							<ArchiveIcon class="mr-1 h-5 w-5" /> No result file generated yet!
						</TBadge>
						<TBadge class="flex items-center" v-else> <TableIcon class="mr-1 h-5 w-5" /> {{ project.resultFile }} </TBadge>
					</div>

					<div class="grid content-between">
						<TButtonPrimary @click="recoverProject(project.historyHash)">
							<RewindIcon class="mr-2 h-4 w-4" /> Recover project
						</TButtonPrimary>

						<TButtonWhite @click="deleteProject(project.historyHash)">
							<TrashIcon class="mr-2 h-4 w-4" /> Delete from history
						</TButtonWhite>
					</div>
				</div>
			</TCard>
		</div>

		<div class="block space-y-10" v-if="$root.historyList.length === 0">
			<div class="flex justify-center">
				<div class="rounded-full bg-orange-100 p-5">
					<ExclamationIcon class="h-10 w-10 text-orange-600" />
				</div>
			</div>

			<h2 class="text-center">No Projects Found</h2>
			<p class="text-center">Apparently you haven't started any projects! Start a new project to see it listed on this page.</p>
		</div>

		<p class="mt-10 text-center text-base" v-else>
			History page is limited to the last {{ $root.historySizeLimit }} projects added or edited!
		</p>
	</div>

	<TopRightButtonGroup>
		<TButtonWhite @click="$root.historyScreen = false"> <LogoutIcon class="mr-2 h-4 w-4" /> Back </TButtonWhite>
	</TopRightButtonGroup>
</template>

<script>
import { LogoutIcon, RewindIcon, TrashIcon, TableIcon, ArchiveIcon } from '@heroicons/vue/solid'

import { ExclamationIcon } from '@heroicons/vue/outline'

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
		ArchiveIcon,
		ExclamationIcon
	},

	methods: {
		deleteProject(historyHash) {
			this.$root.deleteProjectFromHistory(historyHash)
		},

		recoverProject(historyHash) {
			const projectData = this.$root.getProjectFromHistory(historyHash)

			this.$root.historyHash = projectData.historyHash
			this.$root.projectName = projectData.name
			this.$root.tableFiles = projectData.tableFiles
			this.$root.resultFile = '' // Do not recover result file to not move user to last page

			this.$root.historyScreen = false
		},
	},
}
</script>
