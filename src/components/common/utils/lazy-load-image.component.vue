<template>
    <img :alt="alt" ref="imageTag">
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "LazyLoadImageComponent",
        components: {}
    })
    export default class LazyLoadImageComponent extends Vue {
        @Prop({required: true})
        public srcSmall!: string;

        @Prop({required: true})
        public srcFull!: string;

        @Prop({required: false})
        public srcMedium!: string;

        @Prop({required: true})
        public alt!: string;

        public created(){
            const {srcSmall, srcMedium, srcFull} = this;
            const images = [srcSmall, srcMedium, srcFull].filter(x => !!x);
            this.loadImages(images);
        }

        public loadImages(lstSrc: string[], index: number = 0): void{
            if(lstSrc.length <= index)
                return;

            const image = new Image();

            image.onload = () => {
                const el = (this.$refs.imageTag as any);
                el.src = lstSrc[index];
                this.loadImages(lstSrc, ++index);
            };

            image.src = lstSrc[index];
        }
    }
</script>

<style lang="scss" scoped>
</style>
