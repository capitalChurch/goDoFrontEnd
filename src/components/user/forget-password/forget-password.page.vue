<template>
    <FixedElements :hide-footer="true" class="forgetPassword">
        <div class="information">
            <div class="title">Esqueceu a sua senha?</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus.</div>
            <Field placeholder="e-mail" v-model="email" />
            <Button size="large" class="button">enviar</Button>
        </div>
        
        <div class="blueShape">
            <img src="/static/shapes/shapeB4.png" alt="Blue Shape">
        </div>
        
        <div class="purpleShape">
            <img src="/static/shapes/shapeP4.png" alt="Purple Shape">
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import Field from '@/components/common/utils/field.component.vue';
    import Button from '@/components/common/utils/button.component.vue';

    @Component({
        name: "ForgetPasswordPage",
        components: {Button, Field, FixedElements}
    })
    export default class ForgetPasswordPage extends Vue {
        public email: string = "";

        public created(){
            this.email = this.$route.params.email;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../theme";

    .forgetPassword{
        background: $yellowColor;
        min-height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;

        .information{
            display: flex;
            flex-direction: column;

            max-width: 500px;
            padding: 32px;
            color: $purpleColor;

            >*{
                position: relative;
                z-index: 1;
            }

            .title{
                $fontSize: $h1FontSize;
                font-size: $fontSize;
                line-height: $fontSize * .9;
                font-weight: 600;
            }

            .text{
                padding: 16px 0;
                font-weight: 200;
                font-size: $normalFontSize;
            }

            .button{
                align-self: flex-end;
                margin: 16px 0;
            }
        }

        .purpleShape, .blueShape{
            position: absolute;
            width: calc(240px + 25vw);
            z-index: 0;

            &.purpleShape{
                bottom: 0;
                right: 0;
            }

            &.blueShape{
                top: -13%;
                left: 10%;
            }
        }
    }
</style>
