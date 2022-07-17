<template>
	<div class="block w-full py-10">
		<div class="space-y-4">
			<TCard v-for="project in $root.historyList" :key="project.historyHash">
				<div class="flex justify-between border-b px-6 py-4">
					<div class="flex items-center space-x-4">
						<div class="rounded-full bg-primary-100 p-2 text-primary-600">
							<DatabaseIcon class="h-5 w-5" />
						</div>

						<div class="flex items-center space-x-2">
							<h3 class="font-semibold">{{ project.name }}</h3>
							<p class="font-medium">-</p>
							<p class="font-medium">{{ project.lastEditAt.toLocaleString() }}</p>
						</div>
					</div>

					<div class="flex space-x-2">
						<TButtonPrimary @click="recoverProject(project.historyHash)">
							<FolderIcon class="mr-2 h-4 w-4" /> {{ $t('Open project') }}
						</TButtonPrimary>
						<TButtonWhite @click="deleteProject(project.historyHash)">
							<TrashIcon class="h-4 w-4" />
						</TButtonWhite>
					</div>
				</div>
				<div>
					<dl>
						<div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-500">{{ $t('Result File') }}</dt>
							<dd class="mt-1 sm:col-span-2 sm:mt-0">
								<span
									class="cursor-pointer text-sm font-medium text-primary-600 hover:text-primary-500"
									@click="openFile(project.resultFile)"
									v-if="project.resultFile"
								>
									{{ project.resultFile }}
								</span>
								<span class="text-sm font-medium text-gray-900" v-else> {{ $t('No result file generated yet!') }} </span>
							</dd>
						</div>
					</dl>

					<dl>
						<div class="border-t px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-500">{{ $t('Table Files') }}</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
									<li
										class="flex items-center justify-between py-2 pl-3 pr-4 text-sm"
										v-for="spreadsheetFile in project.spreadsheetList"
										:key="spreadsheetFile"
									>
										<div class="flex w-0 flex-1 items-center">
											<TableIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
											<span class="ml-2 w-0 flex-1 truncate"> {{ spreadsheetFile.path }} </span>
										</div>
										<div class="ml-4 flex-shrink-0">
											<span
												class="cursor-pointer font-medium text-primary-600 hover:text-primary-500"
												@click="openFile(spreadsheetFile.path)"
											>
												{{ $t('Open table') }}
											</span>
										</div>
									</li>
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</TCard>
		</div>

		<div class="block space-y-10" v-if="$root.historyList.length === 0">
			<div class="flex justify-center">
				<div class="rounded-full bg-orange-100 p-5">
					<ExclamationIcon class="h-10 w-10 text-orange-600" />
				</div>
			</div>

			<h2 class="text-center">{{ $t('No Projects Found') }}</h2>
			<p class="text-center">
				{{ $t("Apparently you haven't started any projects! Start a new project to see it listed on this page.") }}
			</p>
		</div>

		<p class="mt-10 text-center text-base" v-else>
			{{ $t('History page is limited to the last {number} projects added or edited!', { number: $root.historySizeLimit }) }}
		</p>
	</div>

	<TopRightButtonGroup>
		<TButtonWhite @click="$root.historyScreen = false"> <LogoutIcon class="mr-2 h-4 w-4" /> {{ $t('Back') }} </TButtonWhite>
	</TopRightButtonGroup>
</template>

<script>
import { LogoutIcon, FolderIcon, TrashIcon, TableIcon } from '@heroicons/vue/solid'

import { ExclamationIcon, DatabaseIcon } from '@heroicons/vue/outline'

import TopRightButtonGroup from '@/components/TopRightButtonGroup'

import TCard from '@/components/tailwind-components/TCard'
import TButtonPrimary from '@/components/tailwind-components/TButtonPrimary'
import TButtonWhite from '@/components/tailwind-components/TButtonWhite'

import { shell } from 'electron'

export default {
	components: {
		TopRightButtonGroup,
		TCard,
		TButtonPrimary,
		TButtonWhite,
		LogoutIcon,
		FolderIcon,
		TrashIcon,
		TableIcon,
		ExclamationIcon,
		DatabaseIcon,
	},

	methods: {
		deleteProject(historyHash) {
			this.$root.deleteProjectFromHistory(historyHash)
		},

		recoverProject(historyHash) {
			this.$root.project = this.$root.getProjectFromHistory(historyHash)

			this.$root.project.resultFile = '' // Do not recover result file to not move user to last page

			this.$root.historyScreen = false
		},

		openFile(path) {
			shell.showItemInFolder(path)
		},
	},
}
</script>
