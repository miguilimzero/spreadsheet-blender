export default {
    data: () => ({
        historySizeLimit: 50,
    }),

    computed: {
        historyList() {
            return this.getRawHistory()
        },
    },

    watch: {

    },

    methods: {
        // History manipulation
        appendProjectToHistory(name, tableFiles, resultFile) {
            let historyList = this.getRawHistory()

            historyList.unshift({
                historyHash: this.generateNewHistoryHash(),
                name: name,
                tableFiles: tableFiles,
                resultFile: resultFile,
                lastEditAt: new Date(),
            })

            this.saveRawHistory(historyList.slice(0, this.historySizeLimit - 1)) // Limit to X elements
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

            this.saveRawHistory(historyList)
        },

        deleteProjectFromHistory(historyHash) {
            let historyList = this.getRawHistory()

            delete historyList[this.findProjectArrayKey(historyHash)]

            this.saveRawHistory(historyList)
        },

        getProjectFromHistory(historyHash) {
            let historyList = this.getRawHistory()

            return historyList.filter((project) => project.historyHash === historyHash)[0]
        },

        // Local storage manipulation
        getRawHistory() {
            return localStorage.getItem('historyList') || []
        },

        saveRawHistory(historyList) {
            localStorage.setItem('historyList', historyList)
        },

        // Helpers
        generateNewHistoryHash() {
            return Math.random().toString(16).substring(2, 14)
        },

        findProjectArrayKey(historyHash) {
            let historyList = this.getRawHistory()

            for (let i = 0; i < historyList.length; i++) {
                const project = historyList[i];
                
                if(project.historyHash === historyHash) {
                    return i
                }
            }

            return -1
        },
    }
}