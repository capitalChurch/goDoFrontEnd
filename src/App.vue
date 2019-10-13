<template>
    <div class="app">
        <AppBar></AppBar>
        <div class="bodyApp">
            <router-view></router-view>
        </div>
        <ContactBar />
        <div class="logoChurch">
            <ChurchLogo />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppBar from "@/components/common/app-bar.component.vue";
    import ContactBar from '@/components/common/contact-bar.component.vue';
    import ChurchLogo from '@/components/common/utils/churchLogo.vue';

    @Component({
        components: {ChurchLogo, ContactBar, AppBar},
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "theme";
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
        primary: $primaryColor,
        accent: white
    ));

    @import "~vue-material/dist/theme/all";

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .logoChurch{
            position: fixed;
            bottom: $paddingMenu;
            left: $paddingMenu;

            img{
                width: 25px;
            }
        }
    }
</style>
