<template>

</template>

<script>
    import NewsItem from './NewsItem.vue';

    export default {
        name: 'news-list',
        components: NewsItem,
        data() {
            return {
                news: [],
                sources: []
            }
        }
    }
</script>

<style lang="scss">


</style>