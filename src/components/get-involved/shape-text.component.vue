<template>
    <div class="shapeText">
        <div class="text" :style="style">{{text}}</div>
        <div class="shape"><slot></slot></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "ShapeTextComponent",
        components: {}
    })
    export default class ShapeTextComponent extends Vue {
        @Prop({required: true})
        public text!: string;

        @Prop({required: false})
        public textAlignment!: string;

        @Prop({required: false})
        public width!: number;

        public get style(){
            return {
                maxWidth: `${(this.width || 120)}px`,
                textAlign: this.textAlignment || 'center'
            };
        }
    }
</script>

<style lang="scss">
    @import "../../theme";
    .shapeText{
        position: relative;
        display: inline-block;

        .text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            color: white;
            font-size: $h3FontSize;
            line-height: $h3FontSize;
            font-weight: 600;
            overflow-wrap: break-word;
        }

        .shape{
            img{
                height: 150px;
            }
        }
    }
</style>
