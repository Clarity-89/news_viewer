<template>
    <div class="mdl-layout__drawer mdl-layout__drawer--custom">
        <span class="mdl-layout-title">Sort by:</span>
        <ul class="collapsible" data-collapsible="accordion">
            <collapsible v-for="(val, key) in filters" v-bind:category="key" v-bind:content="val"></collapsible>
        </ul>
    </div>
</template>

<script>
    import Collapsible from 'Collapsible.vue';
    import {config} from '../../config/local.env.js';
    export default {
        name: 'sidebar',

        data() {
            return {
                sources: [],
                filters: {category: {}, name: {}, language: {}, country: {}},
                active: ''
            }
        },

        methods: {
            constructFilters(data) {
                let {filters} = this;
                for (let filter of Object.keys(filters)) {
                    data.forEach(el => {
                        filters[filter][el[filter]] = filters[filter][el[filter]] || [];
                        filters[filter][el[filter]].push(el.id)
                    });
                }
                this.filters = filters;
            },

            switchActive(key) {
                this.active = key;
            },

            isActive(key) {
                return key === this.active;
            }
        },

        filters: {
            cap(str) {
                return str[0].toUpperCase() + str.slice(1, str.length);
            }
        },

        created() {
            let self = this;
            window.fetch(`https://newsapi.org/v1/sources?Key=${config.apiKey}`)
                .then(response => response.json())
                .then(response => self.sources = response.sources)
                .then(() => self.constructFilters(self.sources));
        }
    }
</script>

<style lang="scss">
    $collapsible-height: 3rem !default;
    $collapsible-line-height: $collapsible-height !default;
    $collapsible-header-color: #fff !default;
    $collapsible-border-color: #ddd !default;
    $sidenav-padding: 16px !default;

    .collapsible {
        border-top: 1px solid $collapsible-border-color;
        border-right: 1px solid $collapsible-border-color;
        border-left: 1px solid $collapsible-border-color;
        margin: .5rem 0 1rem 0;
        z-index: 6;
        padding: 0;
        border-right: none;
        border-left: none;
    }

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

        .active {
            display: block;
        }
    }

    // sideNav collapsible styling
    .side-nav,
    .side-nav.fixed {

        .collapsible {
            border: none;
            box-shadow: none;

            li {
                padding: 0;
            }
        }

        .collapsible-header {
            background-color: transparent;
            border: none;
            line-height: inherit;
            height: inherit;
            padding: 0 $sidenav-padding;

            &:hover {
                background-color: rgba(0, 0, 0, .05);
            }
            i {
                line-height: inherit;
            }
        }

        .collapsible-body {
            border: 0;
            background-color: $collapsible-header-color;

            li a {
                padding: 0 (7.5px + $sidenav-padding) 0 (15px + $sidenav-padding);
            }
        }

    }

    // Popout Collapsible

    .collapsible.popout {
        border: none;
        box-shadow: none;
        > li {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            // transform: scaleX(.92);
            margin: 0 24px;
            transition: margin .35s cubic-bezier(0.250, 0.460, 0.450, 0.940);
        }
        > li.active {
            box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
            margin: 16px 0;
            // transform: scaleX(1);
        }
    }
</style>