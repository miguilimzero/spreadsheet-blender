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
            if(this.historyHash === '') {
                return
            }

            this.updateProjectOnHistory(this.historyHash, this.projectName, this.tableFiles, this.resultFile)
        },
    },

    computed: {
        watchProjectChangeTrick() {
            // Trick used to watch multiple data with single handler
            return JSON.stringify([this.historyHash, this.projectName, this.tableFiles, this.resultFile])
        }
    },

	methods: {
        updateHistoryList() {
            this.historyList = this.getRawHistory()
        },

		// History manipulation
		appendProjectToHistory(name, tableFiles, resultFile) {
			let historyList = this.getRawHistory()

			const newHistoryHash = this.generateNewHistoryHash()

			historyList.unshift({
				historyHash: newHistoryHash,
				name: name,
				tableFiles: tableFiles,
				resultFile: resultFile,
				lastEditAt: new Date(),
			})

			this.saveRawHistory(historyList.slice(0, this.historySizeLimit - 1)) // Limit to X elements

			return newHistoryHash
		},

		updateProjectOnHistory(historyHash, name, tableFiles, resultFile) {
			let historyList = this.getRawHistory()

			historyList[this.findProjectArrayKey(historyHash)] = {
				historyHash: historyHash,
				name: name,
				tableFiles: tableFiles,
				resultFile: resultFile,
				lastEditAt: new Date(),
			}

            // TODO: Reorder by lastEditAt

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
