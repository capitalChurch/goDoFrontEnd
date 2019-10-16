<template>
    <div class="contactBarComponent">
        <span class="contact">Tire suas dúvidas</span>
        <div>
            <a href="https://www.instagram.com/igrejabcapital/"><Instagram /></a>
            <a href="https://www.facebook.com/igrejabcapital/"><Facebook /></a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Instagram from '@/components/common/utils/icons/instagram.vue';
    import Facebook from '@/components/common/utils/icons/facebook.vue';

    @Component({
        name: "ContactBarComponent",
        components: {Facebook, Instagram}
    })
    export default class ContactBarComponent extends Vue {
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
            color: $accentColor;
            font-weight: bold;
            cursor: pointer;
        }

        div {
            display: flex;
            flex-direction: column;
        }
    }
</style>
