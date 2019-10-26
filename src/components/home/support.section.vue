<template>
    <div class="support">
        <div class="info">
            <div class="title">Apoie</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in dapibus auctor. Suspendisse fermentum euismod turpis sed condimentum. Duis dictum eget libero non gravida. Nam gravida metus eget enim scelerisque, vitae condimentum nulla auctor. Etiam eu justo dictum, condimentum turpis id, sollicitudin erat. Praesent sed lorem erat. Fusce ullamcorper bibendum vulputate.</div>
            <div class="action">
                <Button>explorar</Button>
            </div>
        </div>
        <div class="image">
            <LazyLoadImage src="/static/images/support.png" alt="Support" />
        </div>

        <div class="purpleShape">
            <LazyLoadImage src="/static/shapes/shapeP5.png " alt="Purple Shape" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Button from '@/components/common/utils/button.component.vue';
    import LazyLoadImage from '@/components/common/utils/lazy-load-image.component.vue';

    @Component({
        name: "SupportSection",
        components: {LazyLoadImage, Button}
    })
    export default class SupportSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    $horizontalPadding: $paddingMenu * 2;
    .support{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;

        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;

        .info{
            text-align: left;
            color: $purpleColor;

            .title{
                $fontSize: $h0FontSize;

                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .text{
                margin: $paddingMenu 0;
                max-width: 450px;
                font-weight: 200;
            }
        }

        .image{
            img{
                width: calc(300px + 15vw);
            }
        }

        .purpleShape{
            position: absolute;
            bottom: -30px;
            left: -10px;

            img{
                max-width: 10vw;
                position: relative;
            }
        }
    }
</style>
