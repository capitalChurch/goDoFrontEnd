<template>
    <div class="peaceSection">
        <div class="header">
            <h1>PEACE&reg;</h1>
        </div>
        <div class="texts">
            <div class="textContainer" v-for="t in texts">
                <span class="title">{{t.title}}</span>
                <span class="text">{{t.text}}</span>
            </div>
        </div>
        <div class="action">
            <Button @click="openPeacePage()">explorar</Button>
        </div>
        <div class="yellowShape">
            <img src="/static/shapes/amarelo.png" alt="Yellow Shape">
        </div>
        <div class="redShape">
            <img src="/static/shapes/vermelho.png" alt="Red Shape">
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Button from "@/components/common/utils/button.component.vue";
    import {changeRoute} from "@/main";
    import {routeEnum} from '@/model/types';

    interface peaceText{
        title: string;
        text: string;
    }

    @Component({
        name: "PeaceSection",
        components: {Button}
    })
    export default class PeaceSection extends Vue {
        public readonly texts: peaceText[] = [
            {title: 'Plantar igrejas', text: 'A plantação de igrejas é a forma de espalhá-lo por todos os lugares' },
            {title: 'Equipar líderes', text: 'Autoridade para ensinar é uma das marcas da passagem de Jesus pela Terra.' },
            {title: 'Assistir os pobres', text: 'Jesus não fechou os olhos para as pessoas em situação de pobreza.' },
            {title: 'Cuidar dos doentes', text: 'Esse é o quarto ponto do nosso plano.' },
            {title: 'Educar a próxima geração', text: 'Nos comprometemos a equipar líderes servos.' }
        ];

        public openPeacePage(){
            changeRoute(routeEnum.Peace);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .peaceSection{
        position: relative;
        background: $blueColor;
        color: white;
        padding: $paddingMenu*2 $paddingLeft;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        overflow: hidden;

        .header{
            z-index: 2;
            h1{
                margin: 0;
                font-size: $h1FontSize;
                line-height: $h1FontSize;
            }
        }

        .texts{
            z-index: 2;
            display: flex;
            align-items: flex-end;
            padding: $paddingMenu 0;

            .textContainer{
                text-align: left;
                display: flex;
                flex-direction: column;
                padding: 0 16px;
                width: 20%;

                span.title{
                    padding-top: 32px;
                    max-height: 35vh;
                    font-size: $h3FontSize;
                    line-height: $h3FontSize;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg) translateX(50%);
                    align-self: center;
                }

                span.text{
                    align-self: flex-start;
                    text-align: left;
                    justify-content: left;
                }
            }
        }

        .action{
            z-index: 2;
            margin: 32px 0;
        }

        .yellowShape{
            z-index: 1;
            position: absolute;
            top: 16px;
            left: -10vw;

            img{
                width: calc(400px + 15vw) ;
            }
        }

        .redShape{
            z-index: 1;
            position: absolute;
            right: -5vw;
            bottom: -10vw;

            img{
                width: calc(200px + 15vw);
            }
        }
    }
</style>
