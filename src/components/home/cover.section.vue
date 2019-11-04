<template>
    <div class="coverSection">
        <Slider :src-images="srcImages"></Slider>
        <h1 ref="title">Seja a<br/>resposta para as necessidades do mundo.</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Slider from '@/components/common/slider.component.vue';
    @Component({
        name: "CoverSection",
        components: {Slider}
    })
    export default class CoverSection extends Vue {
        public readonly srcImages: string[] = [
            "/static/images/guine.png",
            "/static/images/coverCristolandia.png",
            "/static/images/coverEspanha.png",
            "/static/images/coverGuine.png"
        ];

        public created(){
            this.subscribeToScroll();
        }

        public subscribeToScroll(lastX: number = window.scrollX, lastY: number = window.scrollY){

            setTimeout(() => requestAnimationFrame(() => this.subscribeToScroll()),300);
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

    }
</style>
