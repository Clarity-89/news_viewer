<template>
    <li>
        <div class="collapsible-header" v-on:click="toggle">
            {{category | cap}}
        </div>
        <div class="collapsible-body" v-bind:class="{active: open}">
            <p v-for="(v, k) in content" :key="k">{{k | cap}}</p>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'collapsible',
        props: ['category', 'content'],

        data() {
            return {
                open: false
            }
        },

        filters: {
            cap(str) {
                if (str) {
                    return str[0].toUpperCase() + str.slice(1, str.length);
                }
            }
        },

        methods: {
            toggle() {
                this.open = !this.open;
            }
        },

        created() {
            console.log('cats', this.category, this.content)
        }
    }
</script>

<style lang="scss">
    @import "../variables";

    .collapsible-header {
        display: block;
        cursor: pointer;
        min-height: $collapsible-height;
        line-height: $collapsible-line-height;
        padding: 0 1rem;
        background-color: transparent;
        border-bottom: 1px solid $collapsible-border-color;
        z-index: 6;

        i {
            width: 2rem;
            font-size: 1.6rem;
            line-height: $collapsible-line-height;
            display: block;
            float: left;
            text-align: center;
            margin-right: 1rem;
        }
    }

    .collapsible-body {
        display: none;
        border-bottom: 1px solid $collapsible-border-color;
        box-sizing: border-box;
        padding: 2rem;
        z-index: 6;

        &.active {
            display: block;
        }
    }
</style>