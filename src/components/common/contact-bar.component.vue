<template>
    <div class="contactBarComponent">
        <span :class="['contact', {accentColor: !color}, color]" @click="openContact()">Tire suas dúvidas</span>
        <div>
            <a href="https://www.instagram.com/igrejabcapital/"><Instagram :color="color" /></a>
            <a href="https://www.facebook.com/igrejabcapital/"><Facebook :color="color" /></a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import Instagram from '@/components/common/utils/icons/instagram.vue';
    import Facebook from '@/components/common/utils/icons/facebook.vue';
    import {Color} from "@/components/common/types";

    @Component({
        name: "ContactBarComponent",
        components: {Facebook, Instagram}
    })
    export default class ContactBarComponent extends Vue {
        @Prop({required: false})
        public color!: Color;

        public openContact(): void{
            this.$router.push('/contact');
        }
    }
</script>z

<style lang="scss" scoped>
    @import "../../theme";

    .contactBarComponent {
        z-index: 3;
        position: fixed;
        bottom: $paddingMenu;
        right: $paddingMenu;

        display: flex;
        flex-direction: column;

        $marginIcons: 4px;
        $paddingHorizontalIcons: 8px;

        .contact {
            text-align: right;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            font-size: $normalFontSize;
            line-height: $normalFontSize + ($paddingHorizontalIcons * 2) + ($marginIcons * 2);
            padding-top: 8px;
            font-weight: bold;
            cursor: pointer;

            &.accentColor{
                color: $accentColor;
            }

            &.purple{
                color: $darkPurpleColor;
            }
        }

        div {
            display: flex;
            flex-direction: column;
        }
    }
</style>
