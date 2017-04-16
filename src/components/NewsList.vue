<template>
    <div>
        <ul class="news-list" v-if="!loading">
            <li v-for="(article, index) in news"
                class="mdl-card__wrapper">
                <div class="mdl-card mdl-card__custom mdl-shadow--2dp">
                    <div class="mdl-card__media cover"
                         v-bind:style="{'background-image': 'url('+ article.urlToImage +')'}"></div>

                    <div class="mdl-card__content">
                        <p class="mdl-card__date">{{article.publishedAt | time}}</p>
                        <p class="mdl-card__author">{{ article.author }}</p>

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
                </div>
            </li>
        </ul>
        <div class="loader-wrapper" v-if="loading">
            <div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
        </div>
    </div>
</template>

<script>
    import {config} from '../../config/local.env.js';
    import moment from 'moment';
    import eventHub from '../services/eventHub';

    export default {
        name: 'news-list',

        data() {
            return {
                news: [],
                loading: true
            }
        },

        methods: {
            tallClass(index) {
                return index % 2 === 0 ? '' : '';
            },

            getData(data) {
                let {list} = data;
                let news = [];
                let promises = [];
                this.loading = true;

                list.forEach(el => {
                    let promise = window.fetch(`https://newsapi.org/v1/articles?source=${el}&apiKey=${config.apiKey}`)
                        .then(response => response.json());
                    promises.push(promise);
                });

                Promise.all(promises)
                    .then(responses => {
                        news = responses.map(resp => resp.articles);

                        this.news = [].concat(...news);
                        this.loading = false;
                    });
            }
        },

        filters: {
            time(value) {
                value = value || new Date();
                return moment(value).format('D MMM YYYY');
            }
        },

        mounted() {
            let self = this;
            window.fetch(`https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=${config.apiKey}`)
                .then(response => response.json())
                .then(response => {
                    self.loading = false;
                    self.news = response.articles
                });
        },

        created(){
            eventHub.$on('send-list', this.getData);
        }
    }
</script>

<style lang="scss">
    $img-height: 320px;

    .news-list {
        padding: 0 10em;
        columns: 6 330px;
        column-gap: 25px;
        column-fill: auto;

        .mdl-card__wrapper {
            break-inside: avoid;

            .mdl-card__custom {
                margin-bottom: 2em;
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

                    &__title-text, &__author, &__date {
                        padding: 0 16px;
                    }

                    &__date {
                        margin: 10px auto;
                    }
                }
            }
        }
    }

    .loader-wrapper {
        display: flex;
        position: relative;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
    }
</style>