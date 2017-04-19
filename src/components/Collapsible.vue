<template>
    <li>
        <div class="collapsible-header" @click="toggle(category)">
            {{category | cap}}
        </div>
        <div class="collapsible-body" v-bind:class="{active: open}">
            <ul class="collapsible-body__list">
                <li v-for="(v, k) in content" :key="k" @click="setFilter(category, k)">{{k | cap}}</li>
            </ul>
        </div>
    </li>
</template>

<script>
    import eventHub from '../services/eventHub';

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
            toggle(category) {
                console.log('got cat', category)
                this.open = !this.open;
            },

            setFilter(category, filter) {
                eventHub.$emit('set-filter', {parent: category, filter: filter});
            }
        },

        created() {
            // console.log('cats', this.category, this.content)
        }
    }
</script>

<style lang="scss">
    @import "../scss/variables";

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
        max-height: 0;
        border-bottom: 1px solid $collapsible-border-color;
        box-sizing: border-box;
        z-index: 6;
        background-color: $collapsible-body-background-color;
        overflow: hidden;
        transition: max-height .7s ease-in-out;

        &.active {
            max-height: 3000px;
            transition: max-height .7s ease-in-out;
        }

        &__list {
            padding: 0;

            li {
                padding: .7em 1.7em;
                border-bottom: 1px solid $sidenav-border-color;

                &:hover {
                    cursor: pointer;
                    background-color: darken($collapsible-body-background-color, 10%);
                }
            }
        }
    }
</style>