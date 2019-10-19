<template>
    <div class="acronymComponent">
        <div class="letter">{{letter}}</div>
        <div class="text">{{text}}</div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "AcronymComponent",
        components: {}
    })
    export default class AcronymComponent extends Vue {
        @Prop({required: true})
        public letter!: string;

        @Prop({required: true})
        public text!: string;
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .acronymComponent{
        display: flex;
        padding: $paddingMenu $paddingMenu*2 $paddingMenu 0;
        .letter{
            text-align: center;
            $fontSize: $h0FontSize * 2.4;
            font-size: $fontSize;
            line-height: $fontSize;
            font-weight: 700;
            text-transform: uppercase;
            width: 130px;
        }
        .text{
            padding: 0 $paddingMenu;
            max-width: 400px;
        }
    }
</style>
