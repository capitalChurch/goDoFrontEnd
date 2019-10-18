<template>
    <div class="wrapper">
        <AppBar :color="color"></AppBar>
        <slot/>
        <ContactBar :color="color"/>
        <div class="logoChurch">
            <ChurchLogo :color="color"/>
        </div>
        <Footer/>
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
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .logoChurch{
        z-index: 3;
        position: fixed;
        bottom: $paddingMenu;
        left: $paddingMenu;

        img{
            width: 25px;
        }
    }
</style>
