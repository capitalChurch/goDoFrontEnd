<template>
    <div class="aboutSection">
        <h1>Go&Do</h1>

        <div class="text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
                Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                from a line in section 1.10.32.</p>
        </div>

        <div class="action">
            <Button color="accent">explorar</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Button from "@/components/common/utils/button.component.vue";

    @Component({
        name: "AboutSection",
        components: {Button}
    })
    export default class AboutSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .aboutSection {
        padding: ($paddingMenu * 4) (calc((100vw - #{$maxWidthBody}) / 2));
        background: $primaryColor;
        text-align: left;
        color: white;

        h1 {
            font-size: $h1FontSize;
            line-height: $h1FontSize;
            margin: 0;
        }

        .text {
            display: flex;
            flex-flow: column wrap;
            max-width: $maxWidthBody*.7;
            max-height: 290px;

            p {
                font-size: $normalFontSize;
                max-width: $maxWidthBody*.3;
                word-wrap: break-word;
                white-space: initial;
            }
        }
    }
</style>
