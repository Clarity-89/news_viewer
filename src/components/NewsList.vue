<template>
    <ul class="news-list mdl-grid">
        <li v-for="(article, index) in news"
            class="mdl-card mdl-card__custom mdl-shadow--2dp mdl-cell mdl-cell--2-col">
            <div class="mdl-card__media cover" v-bind:class="tallClass(index)"
                 v-bind:style="{'background-image': 'url('+ article.urlToImage +')'}"></div>

            {{article.publishedAt}} - {{ article.author }}

            <a :href="article.url">
            <h2 class="mdl-card__title-text">{{article.title}}</h2>
        </a>
            <div class="mdl-card__supporting-text">
                <p>{{ article.description }}</p>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    View Updates
                  </a>
            </div>
        </li>
    </ul>

</template>

<script>
    import {config} from '../../config/local.env.js';

    export default {
        name: 'news-list',

        data() {
            return {
                news: [],
                sources: []
            }
        },

        methods: {
            tallClass(index) {
                return index % 2 === 0 ? 'tall' : '';
            }
        },

        created() {
            let self = this;
            window.fetch(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=${config.apiKey}`)
                .then(response => response.json())
                .then(response => {
                    console.log('resp', response)
                    self.news = response.articles
                });
        }
    }
</script>

<style lang="scss">

    $img-height: 320px;

    .news-list {
        padding: 0 7em;
        .mdl-card__custom {
            margin-bottom: 1em;

            .cover {
                width: auto;
                height: $img-height;
                background-position: center;

                &.tall {
                    height: $img-height * 1.5;
                }
            }
        }

    }
</style>