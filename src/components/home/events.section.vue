<template>
    <div class="eventsSection">
        <div class="title">Eventos</div>
        <div class="texts">
            <div class="title">Próximos eventos</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in dapibus auctor. </div>
        </div>
        <div class="event" v-for="e in events">
            <span class="day">{{e.day}}</span>
            <span class="month">{{e.month}}</span>
            <span class="title">{{e.title}}</span>
            <span class="text">{{e.text}}</span>
            <div class="action">
                <ButtonComponent>participar</ButtonComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import ButtonComponent from '@/components/common/utils/button.component.vue';

    interface event{
        day: number;
        month: string;
        title: string;
        text: string;
    }
    @Component({
        name: "EventsSection",
        components: {ButtonComponent}
    })
    export default class EventsSection extends Vue {
        public readonly events: event[] = [
            {day: 13, month: 'novembro', title: 'Encontro Ruah', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus, et maximus velit. Etiam ullamcorper eros in dapibus auctor. '},
            {day: 25, month: 'dezembro', title: 'Natal solidário', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. '}
        ];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    $horizontalPadding: $paddingMenu * 2;
    .eventsSection{
        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;
        background-color: $greenColor;
        color: white;
        text-align: left;
        display: flex;
        flex-wrap: wrap;

        >.title{
            $fontSize: $h0FontSize;

            width: 100%;
            font-size: $fontSize;
            line-height: $fontSize;
            font-weight: 700;
        }

        >*{
            padding: $paddingMenu/2 0;
        }

        .texts{
            width: 400px;
            .title{
                $fontSize: $h1FontSize;
                font-size: $fontSize;
                line-height: $fontSize * .8;
                font-weight: 700;
            }

            .text{
                padding-top: 16px;
                line-height: $normalFontSize * 1.3;
                font-weight: 200;
                max-width: 290px;
            }
        }

        .event{
            $horizontalPadding: 48px;
            $maxWidth: 280px;

            display: flex;
            flex-direction: column;
            padding: 16px $horizontalPadding;
            max-width: $maxWidth;
            position: relative;
            border-left: 1px solid #666666;

            &:nth-child(3){
                padding-left: 0;
                max-width: $maxWidth - $horizontalPadding;
                border-left: none
            }

            .day{
                $fontSize: $h2FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .month{
                $fontSize: $h5FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .title{
                margin-top: 16px;
                padding-top: 16px;

                $fontSize: $h3FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .text{
                max-width: 200px;

                margin-bottom: 54px;
            }

            .action{
                position: absolute;
                bottom: 16px;
            }
        }
    }
</style>
