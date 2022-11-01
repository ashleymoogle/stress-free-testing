<script setup lang="ts">
import { useToggle } from '@vueuse/core'
const props = defineProps<{
  initial: boolean
}>()

const emit = defineEmits<{
  (name: 'toggle', value: boolean): void
}>()

const [watching, _toggle] = useToggle(props.initial)

const toggle = () => {
  const newValue = !watching.value
  _toggle(newValue)
  emit('toggle', newValue)
}
</script>

<template>
  <button 
  @click="toggle()"
  class="inline-flex items-center text-blue-500 border-blue-500 py-1 px-2 border-1 rounded">
    <span class="inline-flex mr-1">
      <i-mdi-heart v-if="watching"/>
      <i-mdi-heart-outline v-else/>
    </span>
    {{ watching ? 'Unwatch' : 'Watch' }}
  </button>
</template>