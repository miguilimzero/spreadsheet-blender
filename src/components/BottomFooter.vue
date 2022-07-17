<template>
	<div class="fixed bottom-0 flex w-screen justify-center py-6">
		<p>
			© Copyright 2022 -
			<span class="cursor-pointer font-medium" @click="$root.aboutScreen = true">{{ $t('All rights reserved.') }}</span>
		</p>
	</div>
</template>

<script>
export default {}
</script>
