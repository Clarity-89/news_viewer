<template>
    <div class="mdl-layout__drawer mdl-layout__drawer--custom">
        <span class="mdl-layout-title">Filter</span>
        <nav class="mdl-navigation">
            <a v-for="(val, key) in filters" class="mdl-navigation__link" href="">
                <p>Sort by: {{key}}</p>
                <button id="demo-menu-lower-left"
                        class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">more_vert</i>
                </button>
                <p v-for="(v, k) in val" class="mdl-menu__item">{{k}}</p>
                <!--<ul class="mdl-menu mdl-menu&#45;&#45;bottom-left mdl-js-menu mdl-js-ripple-effect"-->
                    <!--for="demo-menu-lower-left">-->
                    <!--<li v-for="(v, k) in val" class="mdl-menu__item">{{k}}</li>-->
                <!--</ul>-->
            </a>
        </nav>
    </div>
</template>

<script>
    import {config} from '../../config/local.env.js';
    export default {
        name: 'sidebar',
        data() {
            return {
                sources: [],
                filters: {category: {}, name: {}, language: {}, country: {}}
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
                console.log('filters', filters);
                this.filters = filters;
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