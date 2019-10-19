<template>
    <div class="shapeText" @click="handleClick">
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

        public handleClick(){
            this.$emit('click');
        }
    }
</script>

<style lang="scss">
    @import "../../theme";
    .shapeText{
        position: relative;
        display: inline-block;
        cursor: pointer;
        padding: 0 16px;

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

            text-transform: lowercase;
        }

        .shape{
            img{
                height: 150px;
            }
        }
    }
</style>
