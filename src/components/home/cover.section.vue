<template>
    <div class="coverSection">
        <h1>Texto inicial da página!</h1>
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
        height: calc(100vh - #{$appBarHeight});
        padding-bottom: $appBarHeight;

        h1{
            font-size: $h0FontSize;
            line-height: $h0FontSize;
            margin: 0;
            color: $primaryColor;
            max-width: 370px;
            text-align: left;
        }
    }
</style>
