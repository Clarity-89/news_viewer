<template>
    <div id="app">
        <div class="mdl-layout mdl-js-layout">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation -->
                    <nav class="mdl-navigation">
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer mdl-layout__drawer--custom">
                <span class="mdl-layout-title">Filter</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                </nav>
            </div>
            <div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button">
                <i class="material-icons"></i>
            </div>
            <main class="mdl-layout__content">
                <NewsList></NewsList>
            </main>
        </div>


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
    $sidebar-width: 400px;

    body, #app::before {
        background: url("assets/background2.jpg");
    }

    .mdl-layout__container {
        position: static;
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

    /* Custom styles for MDL sidebar */
    .mdl-layout__drawer.mdl-layout__drawer--custom {
        color: #fff;
        background: none;
        background: rgba(0, 0, 0, 0.3);
        width: $sidebar-width;
        -webkit-transform: translateX(-$sidebar-width);
        transform: translateX(-$sidebar-width);

        &::before {
            content: '';
            position: absolute;
            background: url('http://theiphonewalls.com/wp-content/uploads/2013/05/Dark-Blue.jpg') 0 / cover;
            top: -20px;
            left: -20px;
            right: 0;
            bottom: 0;
            width: 500px;
            filter: blur(20px);
        }

        &.is-visible {
            transform: translateX(0);
        }
    }

    .mdl-layout__obfuscator.is-visible {
        opacity: 0;
    }
</style>
