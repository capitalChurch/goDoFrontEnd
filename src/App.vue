<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "theme";
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
        primary: $primaryColor,
        accent: $accentColor
    ));

    @import "~vue-material/dist/theme/all";

    .app {
        font-family: Biotif, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    @font-face {
        font-family: Biotif;
        font-weight: 200;
        src: local("Biotif Book"), url("./assets/fonts/Biotif-Book.ttf") format('truetype');
    }

    @font-face {
        font-family: Biotif;
        font-weight: 300;
        src: local("Biotif Regular"), url("./assets/fonts/Biotif-Regular.ttf") format('truetype');
    }

    @font-face {
        font-family: Biotif;
        font-weight: 400;
        src: local("Biotif Medium"), url("./assets/fonts/Biotif-Medium.ttf") format('truetype');
    }

    @font-face {
        font-family: Biotif;
        font-weight: 500;
        src: local("Biotif Bold"), url("./assets/fonts/Biotif-Bold.ttf") format('truetype');
    }

    @font-face {
        font-family: Biotif;
        font-weight: 600;
        src: local("Biotif Extra Bold"), url("./assets/fonts/Biotif-ExtraBold.ttf") format('truetype');
    }

    @font-face {
        font-family: Biotif;
        font-weight: 700;
        src: local("Biotif Black"), url("./assets/fonts/Biotif-Black.ttf") format('truetype');
    }


    path{
        &.white{
            fill: white;
        }

        &.purple{
            fill: $darkPurpleColor;
        }

        &.accentColor{
            fill: $accentColor;
        }
    }
</style>
