<template>
    <div class="wrapper">
        <AppBar :color="color"></AppBar>
        <slot/>
        <ContactBar :color="color"/>
        <div class="logoChurch" @click="openWebSiteChurch()">
            <ChurchLogo :color="color"/>
        </div>
        <Footer v-if="!hideFooter"/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import AppBar from "@/components/common/app-bar.component.vue";
    import ContactBar from '@/components/common/contact-bar.component.vue';
    import ChurchLogo from '@/components/common/utils/icons/churchLogo.vue';
    import Footer from '@/components/common/footer.component.vue';
    import {Color} from "@/components/common/types";

    @Component({
        name: "FixedElementsComponent",
        components: {Footer, ChurchLogo, ContactBar, AppBar}
    })
    export default class FixedElementsComponent extends Vue {
        @Prop({required: false})
        public color!: Color;

        @Prop({required: false})
        public hideFooter!: boolean;

        public openWebSiteChurch(){
            window.location.assign("http://www.igrejacapital.org.br/#/");
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .logoChurch{
        z-index: 12;
        position: fixed;
        bottom: $paddingMenu;
        left: $paddingMenu;
        cursor: pointer;

        img{
            width: 25px;
        }
    }
</style>
