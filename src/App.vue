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

    html, body {
        height: 100%;
        width: 100%;
    }

    body, #app::before {
        background: url("http://i.imgur.com/fNKwItH.jpg") 0 / cover fixed;
        /*width: 102%;*/
        /*height: 102%;*/
    }

    #app {
        /*height: 115%;*/
        /*width: 115%;*/

        position: relative;
        //overflow: auto;

        &::before {
            margin: -30px;
            // background: url("http://i.imgur.com/fNKwItH.jpg") 0 / cover fixed;
            content: '';
            position: fixed;
            top: -2%;
            right: -2%;
            left: -2%;
            bottom: -2%;
            -webkit-filter: blur(20px);
            -moz-filter: blur(20px);
            -o-filter: blur(20px);
            -ms-filter: blur(20px);
            filter: blur(20px);
            z-index: -1;
        }
    }

    li {
        list-style: none;
    }
</style>
