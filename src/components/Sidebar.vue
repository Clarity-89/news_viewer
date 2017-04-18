<template>
    <div class="mdl-layout__drawer mdl-layout__drawer--custom">
        <span class="mdl-layout-title">Sort by:
            <button class="mdl-button mdl-js-button mdl-button--icon close-sidebar" @click="closeSidebar">
                <i class="material-icons">clear</i>
            </button>
        </span>

        <ul class="collapsible" data-collapsible="accordion">
            <collapsible v-for="(val, key) in filters" v-bind:category="key" v-bind:content="val"
                         :key="key"></collapsible>
        </ul>
    </div>
</template>

<script>
    import Collapsible from './Collapsible.vue';
    import {config} from '../../config/local.env.js';
    import eventHub from '../services/eventHub';
    export default {
        name: 'sidebar',
        components: {Collapsible},

        data() {
            return {
                sources: [],
                filters: {category: {}, name: {}, language: {}, country: {}},
                open: false
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

            selectFilter(data) {
                let {parent, filter} = data;
                let filterList = this.filters[parent][filter];

                eventHub.$emit('send-list', {list: filterList});
                this.closeSidebar();
            },

            closeSidebar() {
                // Direct DOM manipulation since that's how sidebar's is-visible class is set by MDL
                document.getElementsByClassName('mdl-layout__drawer--custom')[0].classList.remove('is-visible');
            }
        },

        mounted() {
            let self = this;

            window.fetch(`https://newsapi.org/v1/sources?Key=${config.apiKey}`)
                .then(response => response.json())
                .then(response => self.sources = response.sources)
                .then(() => self.constructFilters(self.sources));
        },

        created() {
            eventHub.$on('set-filter', this.selectFilter);
        }

    }
</script>

<style lang="scss">
    @import "../variables";

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

    /* Custom styles for MDL sidebar */
    .mdl-layout__drawer.mdl-layout__drawer--custom {
        color: #fff;
        background: none;
        background: rgba(0, 0, 0, 0.3);
        width: $sidebar-width;
        -webkit-transform: translateX(-$sidebar-width);
        transform: translateX(-$sidebar-width);

        &::before {
            content: '';
            position: absolute;
            background: url('http://theiphonewalls.com/wp-content/uploads/2013/05/Dark-Blue.jpg') 0 / cover;
            top: -20px;
            left: -20px;
            right: 0;
            bottom: 0;
            width: 500px;
            filter: blur(20px);
        }

        &.is-visible {
            transform: translateX(0);
        }

        .close-sidebar {
            position: absolute;
            right: .5em;
            top: .7em;
        }
    }

    .mdl-layout__obfuscator.is-visible {
        opacity: 0;
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