<template>
    <div>
        <label :for="randomId" class="block text-sm font-medium text-gray-700">{{ label }}</label>

        <div class="mt-1">
            <input 
                :type="type" 
                :name="randomId" 
                :id="randomId" 
                :placeholder="placeholder" 
                @input="$emit('update:modelValue', $event.target.value)"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'type', 'placeholder'],

    computed: {
        randomId() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
    }
}
</script>