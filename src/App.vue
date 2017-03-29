<template>
    <div id="app">
        <NewsList></NewsList>
    </div>
</template>

<script>
    import '../node_modules/material-design-lite/material.js';
    import NewsList from './components/NewsList.vue'

    export default {
        name: 'app',
        components: {
            NewsList
        }
    }
</script>

<style lang="scss">
    @import "../node_modules/material-design-lite/material.min.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
