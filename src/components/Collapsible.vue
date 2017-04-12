<template>
    <li>
        <div class="collapsible-header" v-bind:class="{active: isActive}" v-on:click="switchActive(key)">
            {{key | cap}}
                </div>
        <div v-bind="val" class="collapsible-body">
            <p v-for="(v, k) in filters[key]">{{k | cap}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'collapsible',
        props: ['category', 'content']
    }
</script>