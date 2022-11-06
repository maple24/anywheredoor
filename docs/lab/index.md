## using vue

<h2>{{ page }}</h2>

## Using vue components

<myButton />

## escaping

::: v-pre
`{{ This will be displayed as-is }}`
:::

<script setup>
import { useData } from 'vitepress'
import myButton from '../../components/button.vue'
const { page } = useData()
</script>
