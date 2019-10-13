<template>
    <div class="contactBarComponent">
        <span class="contact">Tire suas dúvidas</span>
        <div>
            <span class="circle">f</span>
            <span class="circle">i</span>
            <span class="circle">y</span>
            <span class="circle">t</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "ContactBarComponent",
        components: {}
    })
    export default class ContactBarComponent extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .contactBarComponent {
        position: fixed;
        bottom: $paddingMenu;
        right: $paddingMenu;

        display: flex;
        flex-direction: column;

        $marginIcons: 4px;
        $paddingHorizontalIcons: 8px;

        .contact {
            writing-mode: sideways-lr;
            text-orientation: mixed;
            font-size: $normalFontSize;
            line-height: $normalFontSize + ($paddingHorizontalIcons * 2) + ($marginIcons * 2);
            padding-bottom: 8px;
            color: $primaryColor;
            font-weight: bold;

            &:after{
                color: $negativePrimaryColor;
                mix-blend-mode: difference;
            }
        }

        div {
            display: flex;
            flex-direction: column;

            .circle {
                margin: $marginIcons;
                border: 3px $primaryColor solid;
                border-radius: 50%;
                padding: 2px $paddingHorizontalIcons;
                color: $primaryColor;
            }
        }
    }
</style>
