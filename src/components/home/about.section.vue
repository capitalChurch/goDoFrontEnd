<template>
    <div class="aboutSection">
        <div class="info">
            <h1>Go&Do</h1>

            <div class="text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. </p>
                <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
                    Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                    popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                    from a line in section 1.10.32.</p>
            </div>

            <div class="action">
                <Button>explorar</Button>
            </div>
        </div>
        <div class="image">
            <img src="../../assets/images/bissau.png" alt="Pr. Gilberto e Thuka Wegerman">
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

    $horizontalPadding: $paddingMenu * 4;
    .aboutSection {
        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;
        background: $yellowColor;
        text-align: left;
        color: white;
        display: flex;
        max-width: 100vw;
        justify-content: space-between;
        position: relative;

        .info{
            h1 {
                font-size: $h1FontSize;
                line-height: $h1FontSize;
                margin: 0;
            }

            .text {
                p {
                    font-size: $normalFontSize;
                    max-width: 350px;
                    padding-right: 16px;
                }
            }
        }

        .image{
            position: relative;

            img{
                position: absolute;
                right: 3vw * 2;
                bottom: $paddingMenu * 5 * -1;
                max-width: calc(450px + 10vw);
            }
        }

        .action{
            margin: 32px 0;
        }
    }
</style>
