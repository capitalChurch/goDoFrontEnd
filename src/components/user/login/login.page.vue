<template>
    <FixedElements :hide-footer="true" color="purple" class="login">
        <div class="information">
            <div class="title">Login</div>
            <div class="fields">
                <Field :transparent-background="true" v-model="model.email" placeholder="e-mail"/>
                <Field :transparent-background="true" :obscure-text="true" v-model="model.password" placeholder="senha"/>
            </div>
            <div class="actions">
                <div class="secondary">
                    <span class="forgot" @click="openForgetPass()">esqueci minha senha</span>
                    <span class="create">Não possui cadastro?</span>
                </div>
                <div class="primary">
                    <Button :size="'large'">entrar</Button>
                </div>
            </div>
            <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur
                eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in
                dapibus auctor. Suspendisse fermentum euismod turpis sed condimentum. Duis dictum eget libero non
                gravida.
            </div>
        </div>
        <div class="yellowShape">
            <img src="/static/shapes/shapeY5.png" alt="Yellow Shape">
        </div>
        <div class="redShape">
            <img src="/static/shapes/shapeR4.png" alt="Red Shape">
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from "@/components/common/fixed-elements.component.vue";
    import Field from "@/components/common/utils/field.component.vue";
    import Button from "@/components/common/utils/button.component.vue";
    import {changeRoute} from "@/main";
    import {routeEnum} from '@/model/types';

    interface loginModel {
        email: string;
        password: string;
    }

    @Component({
        name: "LoginPage",
        components: {Button, Field, FixedElements}
    })
    export default class LoginPage extends Vue {
        public model: loginModel = {
            email: "",
            password: ""
        };

        public openForgetPass(){
            changeRoute(routeEnum.ForgetPassword, this.model.email);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../theme";

    .login {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;

        .information {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            padding: 32px;
            >*{
                position: relative;
                z-index: 1;
            }

            .title{
                $fontSize: $h0FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
                margin: 16px 0;

                color: $blueColor;
            }

            .actions{
                display: flex;
                justify-content: space-between;
                padding: 16px 0 8px;
                .secondary{
                    span{
                        display: block;
                        cursor: pointer;
                    }

                    .forgot{
                        color: $primaryColor;
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        font-size: $normalFontSize;
                        &:hover{
                            font-weight: 500;
                        }
                    }

                    .create{
                        color: $blueColor;
                        font-weight: 600;
                        font-size: $h6FontSize;

                        &:hover{
                            color: #{$blueColor}aa;
                        }
                    }
                }
            }

            .text{
                font-weight: 200;
                font-size: $normalFontSize;
                line-height: normal;
            }
        }

        .yellowShape, .redShape{
            position: absolute;
            width: calc(200px + 15vw);
            z-index: 0;

            &.yellowShape{
                bottom: 0;
                left: 0;
            }

            &.redShape{
                top: 0;
                right: 0;
            }
        }
    }
</style>
