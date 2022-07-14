<template>
    <span :class="['rounded-md cursor-pointer text-sm font-semibold', sizeClasses, colorClasses]">
        <slot />
    </span>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md',
        },

        color: {
            type: String,
            default: 'indigo',
        }
    },

    computed: {
        colorClasses() {
            return {
                'indigo': 'bg-indigo-100 text-indigo-600',
                'gray': 'bg-gray-100 text-gray-600'
            }[this.color] || ''
        },

        sizeClasses() {
            return {
                'sm': 'px-1 py-0.5',
                 'md': 'px-2 py-1',
                  'lg': 'px-3 py-2',
            }[this.size] || ''
        },
    }
}
</script>
