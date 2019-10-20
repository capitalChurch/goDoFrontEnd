<template>
    <img :alt="alt" ref="imageTag" :class="[{loading}, 'missionecas']">
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "LazyLoadImageComponent",
        components: {}
    })
    export default class LazyLoadImageComponent extends Vue {
        public loading: boolean = true;

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
            if(lstSrc.length <= index){
                this.loading = false;
                return;
            }

            const image = new Image();

            image.onload = () => {
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
