<template>
    <div class="aboutSection">
        <div class="info">
            <h1>Go&Do</h1>

            <div class="text">
                <p>O Go&Do é uma agência missionária que, com os olhos em Jesus, busca espalhar o amor dele por tosos os cantos 
                do mundo. Entendemos que fomos chamados para o ide e, portanto, nos movemos para todo lugar, levando a bandeira 
                de Cristo, que é a resposta para todas as coisas e todas as pessoas</p>
                <p>Hoje, atuamos em diferentes países e projetos, atendendo diversas faixas etárias, públicos e etinias. Contamos
                atualmente, com iniciativas nacionais e internacionais que, ainda que com abordagens diferentes, convergem para o
                mesmo alvo: Jesus</p>
            </div>

            <div class="action">
                <Button>explorar</Button>
            </div>
        </div>
        <div class="image">
            <img src="../../assets/images/bissau.png" alt="Pr. Gilberto e Thuka Wegerman">
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Button from "@/components/common/utils/button.component.vue";

    @Component({
        name: "AboutSection",
        components: {Button}
    })
    export default class AboutSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    $horizontalPadding: $paddingMenu * 2;
    .aboutSection {
        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;
        background: $yellowColor;
        text-align: left;
        color: white;
        display: flex;
        max-width: 100vw;
        justify-content: space-between;
        position: relative;

        .info{
            h1 {
                font-size: $h1FontSize;
                line-height: $h1FontSize;
                margin: 0;
            }

            .text {
                p {
                    font-size: $normalFontSize;
                    max-width: 350px;
                    padding-right: 16px;
                }
            }
        }

        .image{
            z-index: 3;
            position: relative;

            img{
                position: absolute;
                right: 3vw * 2;
                bottom: $paddingMenu * 3 * -1;
                max-width: calc(450px + 10vw);
            }
        }

        .action{
            margin: 32px 0;
        }
    }
</style>
