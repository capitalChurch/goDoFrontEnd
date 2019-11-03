<template>
    <img :alt="alt" ref="imageTag" :class="[{loading: loadingSecond}]">
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {loadImages} from '@/model/utils';

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

        public created() {
            const {src} = this;

            loadImages(src, (imageSrc, index) => {
                this.loadingSecond = index === 0;
                const el = (this.$refs.imageTag as any);
                el.src = imageSrc;
            });
        }
    }
</script>

<style lang="scss" scoped>
    .loading {
        filter: blur(4px);
    }
</style>
