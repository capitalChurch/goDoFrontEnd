<template>
    <div class="projectsContainer">
        <div class="wave">
            <img src="../../assets/shapes/blueWave.png" alt="Wave">
        </div>
        <div class="greenShape">
            <img src="../../assets/shapes/green.png" alt="Green Shape">
        </div>
        <div class="projects">
            <div class="title">Ministérios</div>
            <div class="texts">
                <p>Ser a resposta é o chamado de Deus para todos aqueles que o amam. É se colocar à disposição da
                    mudança dentro de sua comunidade, país ou do mundo. Ser resposta para as necessidades do mundo é o
                    nosso lema e ele carrega todo o nosso sentimento enquanto agência missionária.</p>
                <p>Queremos ser diferentes e fazer diferença. Desejamos impactar o planeta de maneira positiva,
                    colocando Jesus no centro de todas as coisas. Sabemos que é por ele que encontramos força para
                    continuar. Entendemos que não somos nada porque ele é tudo. Ele morreu, e pela sua morte encontramos
                    vida. Ele ressuscitou, e pelo seu amor espalhamos as boas novas.</p>
                <p>Jesus é a solução e você é o representante dele na Terra. Cumpra sua missão. Seja a resposta!</p>
                <p>A igreja que eu vejo inclui os excluídos, acolhe os aflitos, socorre os necessitados, dedica-se com
                    amor e graça a cuidar dos feridos e suprir as necessidades dos menos favorecidos.</p>
                <p>A igreja que eu vejo investe na preparação de líderes servos, que irão influenciar e conduzir pessoas
                    a cumprirem os propósitos de Deus para suas vidas na Terra.</p>
            </div>
            <Button>envolva-se</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Button from '@/components/common/utils/button.component.vue';

    @Component({
        name: "ProjectsSection",
        components: {Button}
    })
    export default class ProjectsSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .projectsContainer {
        position: relative;
        margin-top: $paddingMenu*2;

        .projects {
            background: $blueColor;
            padding-bottom: $paddingMenu * 4;
            padding-left: $paddingLeft;
            color: white;
            text-align: left;

            .title{
                $fontSize: $h0FontSize;
                padding-top: 8px;
                font-size: $fontSize;
                line-height: $fontSize * .8;
                font-weight: 600;
            }

            .texts{
                padding: $paddingMenu 0;
                max-height: 400px;
                display: flex;
                flex-flow: column wrap;
                align-content: flex-start;
                p{
                    margin-right: $paddingMenu*2;
                    max-width: 20vw;
                }
            }
        }

        .wave {
            z-index: 1;
            position: absolute;
            top: 0;
            transform: translateY(calc(-100% + 1px));

            img {
                width: 100vw;
            }
        }

        .greenShape{
            z-index: 1;
            position: absolute;
            top: 0;
            right: 32px;
            transform: translateY(-80%);

            img{
                max-height: 30vw;
            }
        }
    }
</style>
