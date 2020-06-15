<template>
    <img :alt="alt" ref="imageTag" :class="[{loading: loadingSecond}]">
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "LazyLoadImageComponent",
        components: {}
    })
    export default class LazyLoadImageComponent extends Vue {
        public loadingSecond: boolean = false;

        @Prop({required: true})
        public src!: string;

        @Prop({required: true})
        public alt!: string;

        public created(){
            const {src} = this;

            const images = ['Small', 'Medium', ''].map(s => src.replace(/\./, `${s}.`));
            this.loadImages(images);
        }

        public loadImages(lstSrc: string[], index: number = 0): void{
            if(lstSrc.length <= index)
                return;

            const image = new Image();

            image.onload = () => {
                this.loadingSecond = index === 0;
                const el = (this.$refs.imageTag as any);
                el.src = lstSrc[index];
                this.loadImages(lstSrc, ++index);
            };

            image.onerror = () => this.loadImages(lstSrc, ++index);

            image.src = lstSrc[index];
        }
    }
</script>

<style lang="scss" scoped>
    .loading{
        filter: blur(4px);
    }
</style>
