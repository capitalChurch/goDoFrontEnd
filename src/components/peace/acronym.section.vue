<template>
    <div class="acronymSection">
        <AcronymComponent v-for="({letter, texts}) in letters" :texts="texts" :letter="letter"/>
        <div class="shapeGreen">
            <img src="../../assets/shapes/shapeG3.png" alt="Shape Green">
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import AcronymComponent from "@/components/peace/acronym.component.vue";

    interface eachLetter {
        letter: string;
        texts: string[];
    }

    @Component({
        name: "AcronymSection",
        components: {AcronymComponent}
    })
    export default class AcronymSection extends Vue {
        public readonly letters: eachLetter[] = [
            {
                letter: "p",
                texts: [
                    'Sendo Jesus o antídoto para a cegueira espiritual, a plantação de igrejas é a forma de espalhá-lo por todos os lugares.',
                    '"Falando novamente ao povo, Jesus disse:  Eu sou a luz do mundo. Quem me segue, nunca andará em trevas, mas terá a luz da vida”.',
                    '(João 8:12)',
                ]
            },
            {
                letter: "e",
                texts: [
                    'Jesus chamou, cuidou e mentoreou pessoas dispostas a servir e, por isso, nos comprometemos a equipar líderes servos.',
                    '“E disse Jesus: Sigam-me, e eu os farei pescadores de homens”.',
                    '(Marcos 1:17)',
                ]
            },
            {
                letter: "a",
                texts: [
                    'Jesus não fechou os olhos para as pessoas em situação de pobreza. Pelo contrário, se identificou e ofereceu ajuda. Assim, precisamos fazer o mesmo.',
                    '"Pois vocês conhecem a graça de nosso Senhor Jesus Cristo que, sendo rico, se fez pobre por amor de vocês, para que por meio de sua pobreza vocês se tornassem ricos".',
                    '(2 Coríntios 8:9)',
                ]
            },
            {
                letter: "c",
                texts: [
                    'Jesus curou doentes e estendeu a mão para os enfermos. O que podemos fazer se não oferecer ajuda para os que precisam? Esse é o quarto ponto do nosso plano.',
                    '"Jesus foi por toda a Galiléia, ensinando nas sinagogas deles, pregando as boas novas do Reino e curando todas as enfermidades e doenças entre o povo. Notícias sobre ele se espalharam por toda a Síria, e o povo lhe trouxe todos os que estavam padecendo vários males e tormentos: endemoninhados, epiléticos e paralíticos; e ele os curou”.',
                    '(Mateus 4:23-24)',
                ]
            },
            {
                letter: "e",
                texts: [
                    'Autoridade para ensinar é uma das marcas da passagem de Jesus pela Terra. Seguindo seu exemplo, buscamos instruir as pessoas que precisam de auxílio educacional.',
                    '"Quando Jesus acabou de dizer essas coisas, as multidões estavam maravilhadas com o seu ensino, porque ele as ensinava como quem tem autoridade, e não como os mestres da lei."',
                    '(Mateus 7:28-29)',
                ]
            }
        ];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .acronymSection {
        margin-top: $marginTop;
        display: flex;
        flex-flow: row wrap;

        text-align: left;
        padding: $marginTop 0;
        color: white;

        position: relative;

        .shapeGreen {
            z-index: 1;
            position: absolute;

            width: calc(240px + 10vw);

            top: -30px;
            right: 15%;
        }
    }
</style>
