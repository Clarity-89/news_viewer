<template>
    <ul class="news-list">
        <li v-for="(article, index) in news"
            class="mdl-card__wrapper">
            <div class="mdl-card mdl-card__custom mdl-shadow--2dp">
                <div class="mdl-card__media cover" v-bind:class="tallClass(index)"
                     v-bind:style="{'background-image': 'url('+ article.urlToImage +')'}"></div>

                {{article.publishedAt | time}} - {{ article.author }}

            <a :href="article.url">
                <h3 class="mdl-card__title-text">{{article.title}}</h3>
            </a>

                <div class="mdl-card__supporting-text">
                    <p>{{ article.description }}</p>
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        View Updates
                      </a>
                </div>
            </div>
        </li>
    </ul>

</template>

<script>
    import {config} from '../../config/local.env.js';
    import moment from 'moment';
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
                return index % 2 === 0 ? '' : '';
            }
        },

        filters: {
            time(value) {
                return moment(value).format('D.MM.YYYY');
            }
        },

        created() {
            let self = this;
            window.fetch(`https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=${config.apiKey}`)
                .then(response => response.json())
                .then(response => self.news = response.articles);
        }
    }
</script>

<style lang="scss">

    $img-height: 320px;

    .news-list {
        padding: 10em;

        column-count: 1;
        column-gap: 0;

        .mdl-card__wrapper {
            break-inside: avoid;

            .mdl-card__custom {
                margin-bottom: 1em;
                padding-bottom: 50px;

                .cover {
                    width: auto;
                    height: $img-height;
                    background-position: center;

                    &.tall {
                        height: $img-height * 1.5;
                    }
                }
                
                a {
                    text-decoration: none;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        color: #000;
                    }
                }
                
                .mdl-card {
                    &__actions {
                        position: absolute;
                        bottom: 0;
                        height: 50px;
                    }

                    &__title-text {
                        color: #000;
                        font-size: 1.2em;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        .news-list {
            column-count: 2;
        }
    }
    @media (min-width: 1200px) {
        .news-list {
            column-count: 3;
        }
    }

    @media (min-width: 1600px) {
        .news-list {
            column-count: 4;
        }
    }
</style>