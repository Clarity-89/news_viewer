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

    body, #app::before {
        background: url("assets/background.jpg") 0 / cover;
    }

    #app {
        position: relative;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.3);

        &::before {
            margin: -30px;
            content: '';
            position: fixed;
            top: -2%;
            right: -2%;
            left: -2%;
            bottom: -2%;
            -webkit-filter: blur(20px);
            -ms-filter: blur(20px);
            filter: blur(20px);
            z-index: -1;
        }
    }

    li {
        list-style: none;
    }
</style>
