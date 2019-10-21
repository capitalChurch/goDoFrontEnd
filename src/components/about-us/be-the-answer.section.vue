<template>
    <div class="beTheAnswer">
        <div class="textContainer">
            <div class="title">Seja a resposta!</div>
            <div class="text">
                <p>Ser a resposta é o chamado de Deus para todos aqueles que o amam. É se colocar à disposição da mudança dentro de sua comunidade, país ou do mundo. Ser resposta para as necessidades do mundo é o nosso lema e ele carrega todo o nosso sentimento enquanto agência missionária.</p>
                <p>Queremos ser diferentes e fazer diferença. Desejamos impactar o planeta de maneira positiva, colocando Jesus no centro de todas as coisas. Sabemos que é por ele que encontramos força para continuar. Entendemos que não somos nada porque ele é tudo. Ele morreu, e pela sua morte encontramos vida. Ele ressuscitou, e pelo seu amor espalhamos as boas novas.</p>
                <p>Jesus é a solução e você é o representante dele na Terra. Cumpra sua missão. Seja a resposta!</p>
                <p>A igreja que eu vejo inclui os excluídos, acolhe os aflitos, socorre os necessitados, dedica-se com amor e graça a cuidar dos feridos e suprir as necessidades dos menos favorecidos.</p>
                <p>A igreja que eu vejo investe na preparação de líderes servos, que irão influenciar e conduzir pessoas a cumprirem os propósitos de Deus para suas vidas na Terra.</p>
            </div>
        </div>
        <div class="image">
            <LazyLoadImage src="/static/images/adolescenteBrincando.png" alt="Adolescente brincando na rua" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import LazyLoadImage from '@/components/common/utils/lazy-load-image.component.vue';

    @Component({
        name: "BeTheAnswerSection",
        components: {LazyLoadImage}
    })
    export default class BeTheAnswerSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .beTheAnswer{
        padding: $paddingMenu*2 0 $paddingMenu $paddingLeft;
        display: flex;
        justify-content: space-between;

        .textContainer{
            text-align: left;
            max-width: calc(400px + 10vw);

            .title{
                $fontSize: $h0FontSize;
                max-width: 80%;

                font-weight: 700;
                font-size: $fontSize;
                line-height: $fontSize;
                color: $primaryColor;
            }

            .text{
                font-weight: 200;
            }
        }

        .image img{
            min-width: 600px;
            max-width: 600px;
        }
    }
</style>
