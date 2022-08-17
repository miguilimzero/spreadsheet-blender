export default {
	data: () => ({
		historySizeLimit: 50,
		historyList: [],
	}),

	created() {
		this.updateHistoryList()
	},

	watch: {
		watchProjectChangeTrick() {
			if (this.project.historyHash === '') {
				return
			}

			this.updateProjectOnHistory(this.project)
		},
	},

	computed: {
		watchProjectChangeTrick() {
			// Trick used to watch multiple data with single handler
			return JSON.stringify([
				this.project.historyHash, 
				this.project.name, 
				this.project.spreadsheetList, 
				this.project.resultFile,
				this.project.levinstheinStrength,
				this.project.blendingMethod
			])
		},
	},

	methods: {
		updateHistoryList() {
			this.historyList = this.getRawHistory()
		},

		// History manipulation
		appendProjectToHistory(project) {
			let historyList = this.getRawHistory()

			const newHistoryHash = this.generateNewHistoryHash()

			project.historyHash = newHistoryHash
			project.lastEditAt = new Date()

			historyList.unshift(project)

			this.saveRawHistory(historyList.slice(0, this.historySizeLimit - 1)) // Limit to X elements

			return newHistoryHash
		},

		updateProjectOnHistory(project) {
			let historyList = this.getRawHistory()

			project.lastEditAt = new Date()

			historyList[this.findProjectArrayKey(project.historyHash)] = project

			historyList.sort((a, b) => new Date(b.lastEditAt).getTime() - new Date(a.lastEditAt).getTime())

			this.saveRawHistory(historyList)
		},

		deleteProjectFromHistory(historyHash) {
			let historyList = this.getRawHistory()

			delete historyList[this.findProjectArrayKey(historyHash)]

			this.saveRawHistory(historyList)
		},

		getProjectFromHistory(historyHash) {
			let historyList = this.getRawHistory()

			return historyList.filter(project => project.historyHash === historyHash)[0]
		},

		// Local storage manipulation
		getRawHistory() {
			const result = localStorage.getItem('historyList')

			if (!result) {
				return []
			}

			return JSON.parse(result)
		},

		saveRawHistory(historyList) {
			localStorage.setItem('historyList', JSON.stringify(historyList.filter(x => x)))

			this.updateHistoryList()
		},

		// Helpers
		generateNewHistoryHash() {
			return Math.random().toString(16).substring(2, 14)
		},

		findProjectArrayKey(historyHash) {
			let historyList = this.getRawHistory()

			for (let i = 0; i < historyList.length; i++) {
				const project = historyList[i]

				if (project.historyHash === historyHash) {
					return i
				}
			}

			return -1
		},
	},
}
