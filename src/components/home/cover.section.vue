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


        h1{
            font-size: $h0FontSize;
            line-height: $h0FontSize;
            margin: 0;
            color: $primaryColor;
            max-width: 680px;
            text-align: left;
        }
    }
</style>
