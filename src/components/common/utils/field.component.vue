<template>
    <div class="fieldComponent">
        <input
            :type="obscureText ? 'password' : 'text'"
            :placeholder="placeholder"
            v-model="valueInput"
            :class="[{transparentBackground}]"
            @change="emitNewValue()">
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";

    @Component({
        name: "FieldComponent",
        components: {}
    })
    export default class FieldComponent extends Vue {
        public valueInput: string = "";

        @Prop({required: true})
        public value!: string;

        @Prop({required: true})
        public placeholder!: string;

        @Prop({required: false})
        public obscureText!: boolean;

        @Prop({required: false})
        public transparentBackground!: boolean;

        public created(){
            this.updateInput();
        }

        @Watch("value")
        private updateInput() {
            this.valueInput = this.value;
        }

        public emitNewValue() {
            this.$emit("input", this.valueInput);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../theme";

    .fieldComponent {
        padding: 8px 2px;
        width: 100%;

        input {
            width: inherit;
            padding: calc(8px + .4vw);

            &::placeholder {
                color: $purpleColor;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 4px;
            }

            font-weight: 700;
            color: $purpleColor;
            outline: none;
            border: 2px solid $purpleColor;
            border-radius: 4px;

            &.transparentBackground{
                background: transparent;
            }
        }
    }
</style>
