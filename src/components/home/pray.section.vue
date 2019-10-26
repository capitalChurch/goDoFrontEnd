<template>
    <div class="praySection">
        <div class="titleSection">
            <div class="title">Ore por</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in dapibus auctor. </div>
        </div>
        <div class="country">
            <div class="name">Brasil</div>
            <div class="texts">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in dapibus auctor.</p>
                <p>Suspendisse fermentum euismod turpis sed condimentum. Duis dictum eget libero non gravida. Nam gravida metus eget enim scelerisque, vitae condimentum nulla auctor. Etiam eu justo dictum, condimentum turpis id, sollicitudin erat. Praesent sed lorem erat. Fusce ullamcorper bibendum vulputate.</p>
            </div>
        </div>
        <div class="action">
            <Button color="blue">explorar</Button>
        </div>
        <div class="image">
            <LazyLoadImage src="/static/shapes/world.png" alt="World Shpa" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import LazyLoadImage from '@/components/common/utils/lazy-load-image.component.vue';
    import Button from '@/components/common/utils/button.component.vue';

    @Component({
        name: "PraySection",
        components: {Button, LazyLoadImage}
    })
    export default class PraySection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    $horizontalPadding: $paddingMenu * 2;
    .praySection{
        color: white;
        text-align: left;
        background: $primaryColor;
        position: relative;
        overflow: hidden;

        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;

        .titleSection{
            padding: $paddingMenu 0;
            .title{
                $fontSize: $h0FontSize;
                font-size: $fontSize;
                line-height: $fontSize;

                font-weight: 700;
            }

            .text{
                padding: $paddingMenu 0;
                max-width: calc(340px + 10vw);
            }
        }

        .country{
            .name{
                $fontSize: $h2FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .texts{
                max-width: calc(460px + 10vw);
                display: flex;

                >*{
                    width: 50%;
                    padding-right: 16px;
                }
            }
        }

        .action{
            padding: $paddingMenu 0;
        }

        .image{
            position: absolute;
            bottom: 0;
            right: 0;

            transform: translate(50%, 20%);
            img{
                max-width: calc(500px + 20vw);
            }
        }
    }
</style>
