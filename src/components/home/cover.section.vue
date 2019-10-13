<template>
    <div class="coverSection">
        <h1>Seja a<br />resposta para as necessidades do mundo.</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "CoverSection",
        components: {}
    })
    export default class CoverSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .coverSection{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
        padding-bottom: $appBarHeight;
        padding-left: calc((100vw - #{$maxWidthBody}) / 2);

        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100vw;
            max-height: 100vh;
            height: 100%;
            width: 100%;
            background-image: url("../../assets/images/guine.png");
            background-size: cover;
            z-index: 0;
            filter: brightness(.6);
        }

        h1{
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
