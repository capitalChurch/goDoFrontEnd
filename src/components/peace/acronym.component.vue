<template>
    <div class="acronymComponent">
        <div class="letter">{{letter}}</div>
        <div class="texts">
            <p v-for="text in texts">{{text}}</p>
        </div>
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
        public texts!: string[];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .acronymComponent{
        display: flex;
        padding: $paddingMenu $paddingMenu $paddingMenu 0;

        position: relative;
        z-index: 9;

        .letter{
            text-align: center;
            $fontSize: $h0FontSize * 2;
            font-size: $fontSize;
            line-height: $fontSize;
            font-weight: 700;
            text-transform: uppercase;
            width: 130px;
        }

        .texts{
            padding: 0 $paddingMenu;
            max-width: 320px;
            font-weight: 200;

            height: 240px;

            p:first-child{
                margin-top: 0;
            }
        }
    }
</style>
