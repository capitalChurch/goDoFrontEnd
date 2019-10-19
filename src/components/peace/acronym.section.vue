<template>
    <div class="acronymSection">
        <AcronymComponent v-for="({letter, text}) in letters" :text="text" :letter="letter" />
        <div class="shapeGreen">
            <img src="../../assets/shapes/shapeG3.png" alt="Shape Green">
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import AcronymComponent from '@/components/peace/acronym.component.vue';

    interface eachLetter{
        letter: string;
        text: string;
    }

    @Component({
        name: "AcronymSection",
        components: {AcronymComponent}
    })
    export default class AcronymSection extends Vue {
        public readonly letters: eachLetter[] = [
            {letter: 'p', text: 'O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.'},
            {letter: 'e', text: 'O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.'},
            {letter: 'a', text: 'O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.'},
            {letter: 'c', text: 'O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.'},
            {letter: 'e', text: 'O Plano P.E.A.C.E é a uma estratégia espiritual que aderimos dentro de nossos movimentos e projetos missionários. Por meio desse plano, buscamos apresentar Jesus através da transformação da realidade social, econômica e educacional do Brasil e dos países onde nossos projetos se encontram.'}
        ];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .acronymSection{
        margin-top: $marginTop;
        display: flex;
        flex-flow: row wrap;

        text-align: left;
        padding: $marginTop 0;
        color: white;

        position: relative;

        .shapeGreen{
            z-index: 1;
            position: absolute;

            width: calc(240px + 10vw);

            top: -30px;
            right: 15%;
        }
    }
</style>
