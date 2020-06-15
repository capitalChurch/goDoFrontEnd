<template>
    <FixedElements :hide-footer="true" class="contact">
        <div class="texts">
            <div class="title">Contato</div>
            <div class="text">Se tem o desejo de fazer parte do Go&Do e/ou tirar dúvidas sobre os projetos, entre em contato com a gente. Ficaremos felizes em ajudar!</div>
            <div class="info">
                <div class="titleInfo">Sede do Go&Do</div>
                <div class="address">SCES Trecho 2 | Conjunto 52 | Lote 40 70200-002 | Brasília - DF</div>
                <div class="phone">61 3272 0847</div>
                <div class="email">goanddo@igrejacapital.org.br</div>
            </div>
        </div>
        <div class="maps">
            <iframe
                    frameborder="0" style="border:0"
                    :src="mapUrl" allowfullscreen>
            </iframe>
        </div>
        <div class="blueShape">
            <img src="static/shapes/shapeB4.png" alt="Blue Shape">
        </div>
        <div class="purpleShape">
            <img src="static/shapes/shapeP3.png" alt="Purple Shape">
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import {googleApiKey} from "@/main";

    @Component({
        name: 'ContactPage',
        components: {FixedElements}
    })
    export default class ContactPage extends Vue{
        public get mapUrl(): string{
            return `https://www.google.com/maps/embed/v1/view?key=${googleApiKey}&center=-15.8151904,-47.8447909&zoom=14`
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .contact{
        color: white;
        background: $yellowColor;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: flex-end;

        min-height: 100vh;

        $fontSizeTitle: $h0FontSize;
        .texts{
            position: relative;
            z-index: 1;
            width: 340px;
            text-align: left;
            padding-right: 32px;

            .title{
                font-size: $fontSizeTitle;
                line-height: $fontSizeTitle;
                font-weight: 700;
            }

            .text{
                text-align: justify;
                padding-bottom: 16px;
            }

            .info{
                background: $primaryColor;
                padding: 24px;

                .titleInfo{
                    $fontSize: $h4FontSize;
                    font-weight: 500;

                    font-size: $fontSize;
                    line-height: $fontSize;
                }

                .address{
                    margin-bottom: 24px;
                    margin-right: 16px;
                    font-size: $normalFontSize;
                    font-weight: 200;
                }

                .phone{
                    $fontSize: $subtitleFontSize;
                    font-size: $fontSize;
                    line-height: $fontSize;
                    font-weight: 700;
                }

                .email{
                    font-weight: 300;
                    font-size: $h6FontSize;
                }
            }
        }

        .maps{
            position: relative;
            z-index: 1;
            margin-top: $fontSizeTitle * .8;
            iframe{
                width: 460px;
                height: 300px;
            }
        }

        .blueShape, .purpleShape{
            z-index: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        .blueShape{
            top: 0;
            width: calc(400px + 15vw);
        }

        .purpleShape{
            bottom: 0;
            width: calc(400px + 35vw);
        }
    }
</style>
