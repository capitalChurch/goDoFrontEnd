<template>
    <div class="coverSection">
        <div class="background">
            <img :src="actualImage.src" alt="Cover" :class="{actualImage: true, small: actualImage.isSmall, changingImage}"/>
            <img :src="nextImage.src" alt="next cover" :class="{nextImage: true, small: nextImage.isSmall, changingImage}"/>
        </div>
        <div class="feedBackContainer" v-if="imagesLoaded.length > 1">
            <div :class="{feedback: true, active: i.position === actualImage.position}" v-for="i in imagesLoaded"></div>
        </div>
        <h1>Seja a<br/>resposta para as necessidades do mundo.</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {loadImages} from "@/model/utils";

    interface loadedImage {
        position: number;
        src: string;
        isSmall: boolean;
    }

    @Component({
        name: "CoverSection",
        components: {}
    })
    export default class CoverSection extends Vue {
        public readonly srcImages: string[] = [
            "/static/images/guine.png",
            // "/static/images/coverCristolandia.png",
            // "/static/images/coverEspanha.png",
            // "/static/images/coverGuine.png"
        ];

        public actualPosition: number = 0;
        public changingImage: boolean = false;
        private images: loadedImage[] = this.srcImages.map((x, i) => ({
            position: i,
            src: "",
            isSmall: false
        }));

        public get imagesLoaded(): loadedImage[] {
            return this.images.filter(x => !!x.src);
        }

        public get actualImage(): loadedImage {
            return this.imagesLoaded[this.actualPosition] || {};
        }

        public get nextImage(): loadedImage {
            return this.imagesLoaded[this.nextPosition] || {};
        }

        private get nextPosition(): number {
            return (this.actualPosition + 1) % this.imagesLoaded.length;
        }

        public mounted() {
            setInterval(this.changePicture.bind(this), 5 * 1000);
            this.loadImages();
        }

        public loadImages() {
            this.srcImages.forEach((src, i) => {
                loadImages(src, (loadedSrc, sizeIndex) => {
                    const isSmall = sizeIndex === 0;
                    this.images = this.images.map((x, index) => {
                        if (i !== index) {
                            return x;
                        }

                        return {
                            position: index,
                            src: loadedSrc,
                            isSmall
                        };
                    });
                });
            });
        }

        public changePicture() {
            const {nextPosition} = this;
            if (this.actualPosition === nextPosition) {
                return;
            }

            this.changingImage = true;
            setTimeout(() => {
                this.actualPosition = nextPosition;
                this.changingImage = false;
            }, .65 * 1000);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .coverSection {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
        padding-bottom: $appBarHeight;
        padding-left: $paddingLeft;

        h1 {
            font-size: $h0FontSize;
            line-height: $h0FontSize;
            margin: 0;
            color: white;
            max-width: 680px;
            text-align: left;
            z-index: 2;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            height: 100%;
            width: 100%;

            .actualImage, .nextImage {
                overflow-x: hidden;
                position: absolute;
                top: 0;

                &.small {
                    filter: blur(1px);
                }

                &.changingImage {
                    transition: 650ms ease-in-out transform;
                }
            }

            .actualImage {
                left: 0;

                &.changingImage {
                    transform: translateX(-30%);
                }
            }

            .nextImage {
                left: 100%;

                &.changingImage {
                    transform: translateX(-100%);
                }
            }
        }

        .feedBackContainer{
            display: flex;
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99;

            .feedback{
                $size: 14px;
                width: $size;
                height: $size;
                border-radius: 50%;
                border: 2px white solid;
                margin: 4px;

                &.active{
                    background: white;
                }
            }
        }
    }
</style>
