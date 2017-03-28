<template>
    <ul class="news-list">
        <li v-for="(item, index) in news">
            {{ item.author }} - {{ item.description }}
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
                    self.news = response.articles;
                });
        }
    }
</script>

<style></style>