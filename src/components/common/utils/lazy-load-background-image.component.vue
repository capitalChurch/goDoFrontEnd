<template>
    <div ref="backgroundImage" :class="[{loading: loadingSecond}]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";
    import LazyLoadImage from '@/components/common/utils/lazy-load-image.component.vue';
    import {loadImages} from "@/model/utils";

    @Component({
        name: "LazyLoadBackgroundImageComponent",
        components: {LazyLoadImage}
    })
    export default class LazyLoadBackgroundImageComponent extends Vue {
        public loadingSecond: boolean = false;

        @Prop({required: true})
        public src!: string;

        @Prop({required: true})
        public alt!: string;

        public created(){
            this.lazyLoadImage();
        }

        @Watch('src')
        private lazyLoadImage(){
            const {src} = this;

            loadImages(src, (imageSrc, index) => {
                this.loadingSecond = index === 0;
                const el = (this.$refs.backgroundImage as any);
                el.style.backgroundImage = `url(${imageSrc})`;
            });
        }
    }
</script>

<style lang="scss" scoped>
    .loading {
        filter: blur(0.5px);
    }
</style>
