<template>
    <div class="app">
        <AppBar></AppBar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppBar from "@/components/common/app-bar.component.vue";

    @Component({
        components: {AppBar},
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "theme";
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
        primary: $primaryColor,
        accent: #000
    ));

    @import "~vue-material/dist/theme/all";

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
