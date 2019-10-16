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
            <Button>explorar</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Button from '@/components/common/utils/button.component.vue';

    interface peaceText{
        title: string;
        text: string;
    }

    @Component({
        name: "PeaceSection",
        components: {Button}
    })
    export default class PeaceSection extends Vue {
        public texts: peaceText[] = [
            {title: 'Plantar igrejas', text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            {title: 'Educar a próxima geração', text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            {title: 'Assistir os pobres', text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            {title: 'Cuidar dos doentes', text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            {title: 'Equipar líderes', text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        ];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .peaceSection{
        background: $blueColor;
        color: white;
        padding: $paddingMenu*2 $paddingLeft;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .header{
            h1{
                margin: 0;
                font-size: $h1FontSize;
                line-height: $h1FontSize;
            }
        }

        .texts{
            display: flex;
            align-items: flex-end;
            padding: $paddingMenu 0;

            .textContainer{
                text-align: left;
                display: flex;
                flex-direction: column;
                padding: 0 16px;

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
            margin: 32px 0;
        }
    }
</style>
