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
    import ChurchLogo from '@/components/common/utils/icons/churchLogo.vue';

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
        accent: $accentColor
    ));

    @import "~vue-material/dist/theme/all";

    .app {
        font-family: Biotif, Arial, sans-serif;
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
</style>
