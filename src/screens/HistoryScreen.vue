<template>
	<div class="block w-full">
		<hr class="mb-4" />

		<div class="mx-auto -mt-[88px] flex h-screen items-center justify-center" v-if="$root.historyList.length === 0">
			<div class="block space-y-10">
				<div class="flex justify-center">
					<div class="rounded-full bg-orange-100 dark:bg-orange-900 p-5">
						<ExclamationIcon class="h-10 w-10 text-orange-600 dark:text-orange-300" />
					</div>
				</div>

				<h2 class="text-center">{{ $t('No Projects Found') }}</h2>
				<p class="text-center">
					{{ $t("Apparently you haven't started any projects! Start a new project to see it listed on this page.") }}
				</p>
			</div>
		</div>

		<template v-else>
			<div class="space-y-4">
				<ProjectCard v-for="project in $root.historyList" :key="project.historyHash" />
			</div>

			<p class="my-10 text-center text-base">
				{{ $t('History page is limited to the last {number} projects added or edited!', { number: $root.historySizeLimit }) }}
			</p>
		</template>
	</div>
</template>

<script>
import { ExclamationIcon } from '@heroicons/vue/outline'

import ProjectCard from '@/components/ProjectCard'

export default {
	components: {
		ExclamationIcon,

		ProjectCard,
	},
}
</script>
