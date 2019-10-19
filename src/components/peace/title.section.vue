<template>
    <div class="titleSection">
        <div class="title">P.E.A.C.E</div>
        <div class="text">
            <p>O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.</p>
            <p>Além de significar paz, em inglês, o PEACE é um acróstico cujas iniciais significam plantar igrejas, equipar líderes, assistir os pobres, cuidar dos doentes e educar a próxima geração. Assim, nossa ação não se limita a um tempo específico, mas, por meio dela, o nome de Jesus é exaltado em todos os lugares, para sempre.</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "TitleSection",
        components: {}
    })
    export default class TitleSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .titleSection{
        text-align: left;
        margin-top: $paddingMenu;
        color: white;
        max-width: 500px;

        .title{
            $fontSize: $h0FontSize;
            font-size: $fontSize;
            line-height: $fontSize;
            font-weight: 700;
            margin: $paddingMenu 0;
        }

        .text{
            font-weight: 200;
        }
    }
</style>
