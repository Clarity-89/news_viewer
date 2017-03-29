<template>
    <ul class="news-list">
        <li v-for="(article, index) in news">
            <img :src="article.urlToImage"/>
            {{article.publishedAt}} - {{ article.author }}

            <a :href="article.url"><h2>{{article.title}}</h2></a>
            <p>{{ article.description }}</p>
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

<style></style>