<template>
    <div class="slider">
        <img :src="actualImage.src" alt="image" :class="{actualImage: true, small: actualImage.isSmall, changingImage}"/>
        <img :src="nextImage.src" alt="next image" :class="{nextImage: true, small: nextImage.isSmall, changingImage}"/>

        <div class="feedBackContainer" v-if="imagesLoaded.length > 1">
            <div :class="{feedback: true, active: i.position === actualImage.position}" v-for="i in imagesLoaded"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {loadImages} from "@/model/utils";

    interface loadedImage {
        position: number;
        src: string;
        isSmall: boolean;
    }

    @Component({
        name: "SliderComponent",
        components: {}
    })
    export default class SliderComponent extends Vue {
        @Prop({required: true})
        public srcImages!: string[];

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

    .slider {
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
</style>
