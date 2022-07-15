<template>
    <button :class="[baseClasses, textClasses, roundedClasses, disabledClasses, (background) ? backgroundClasses : '']">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'gray',
        },
        background: {
            type: Boolean,
            default: true,
        },
        rounded: {
            type: String,
            default: 'full'
        },
    },

    computed: {
        baseClasses() {
            return 'p-1 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition ease-in-out duration-150'
        },
        disabledClasses() {
            const disabled = (typeof this.$attrs.disabled === 'undefined')
                ? false
                : (String(this.$attrs.disabled) !== 'false')
            return disabled
                ? 'cursor-not-allowed opacity-75'
                : 'cursor-pointer'
        },
        textClasses() {
            return {
                'gray': `text-gray-400 hover:text-gray-500 focus:text-gray-500 focus:ring-gray-500`
            }[this.color] || ''
        },
        backgroundClasses() {
            return {
                'gray': `hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-25`
            }[this.color] || ''
        },
        roundedClasses() {
            return {
                none: 'rounded-none',
                sm: 'rounded-sm',
                default: 'rounded',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                '2xl': 'rounded-2xl',
                '3xl': 'rounded-3xl',
                'full': 'rounded-full'
            }[this.rounded]
        }
    },
}
</script>