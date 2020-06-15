<template>
    <div class="newsSection">
        <div class="title">Notícias</div>
        <div class="news" v-for="n in allNews">
            <div class="title">{{n.title}}</div>
            <div class="text">{{n.text}}</div>
        </div>
        <div class="yellowShape">
            <LazyLoadImage src="static/shapes/shapeY6.png" alt="Yellow Shape"/>
        </div>
        <div class="blueShape">
            <LazyLoadImage src="static/shapes/shapeB3.png" alt="Blue Shape"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import LazyLoadImage from "@/components/common/utils/lazy-load-image.component.vue";

    interface news {
        title: string;
        text: string;
    }

    @Component({
        name: "NewsSection",
        components: {LazyLoadImage}
    })
    export default class NewsSection extends Vue {
        public readonly allNews: news[] = [
            {
                title: "Tufão no Japão",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non gravida quam. Nunc ornare ultricies ultricies. Fusce in elit ut magna dapibus dictum id eget leo. Donec congue leo ac eleifend convallis. Nulla sit amet auctor tortor. In hendrerit sem suscipit arcu eleifend, at maximus ex blandit. Proin eu turpis in mauris mollis viverra ut at arcu. Pellentesque rhoncus sagittis ex rhoncus tempus. Praesent tempus lacus vel nulla faucibus, a hendrerit mi accumsan."
            },
            {
                title: "Tufão no Japão",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non gravida quam. Nunc ornare ultricies ultricies. Fusce in elit ut magna dapibus dictum id eget leo. Donec congue leo ac eleifend convallis. Nulla sit amet auctor tortor. In hendrerit sem suscipit arcu eleifend, at maximus ex blandit. Proin eu turpis in mauris mollis viverra ut at arcu. Pellentesque rhoncus sagittis ex rhoncus tempus. Praesent tempus lacus vel nulla faucibus, a hendrerit mi accumsan."
            },
        ];
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    $horizontalPadding: $paddingMenu * 2;
    .newsSection {
        position: relative;
        padding: $horizontalPadding 0 $horizontalPadding $paddingLeft;
        display: flex;
        flex-wrap: wrap;
        text-align: left;

        > * {
            z-index: 1;
        }

        > .title {
            $fontSize: $h0FontSize;

            width: 100%;
            color: $primaryColor;

            font-size: $fontSize;
            line-height: $fontSize;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .news {
            $horizontalPadding: 48px;
            $maxWidth: 350px;

            color: $purpleColor;
            display: flex;
            flex-direction: column;
            margin: 16px 0;

            max-width: $maxWidth;
            padding: 16px $horizontalPadding;
            border-left: 1px solid $purpleColor;

            &:nth-child(2) {
                padding-left: 0;
                max-width: $maxWidth - $horizontalPadding;
                border-left: none
            }

            .title {
                $fontSize: $h2FontSize;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 600;

                padding-bottom: 16px;
            }

            .text {
                font-size: $normalFontSize;
                line-height: $normalFontSize * 1.4;
                font-weight: 200;
            }
        }

        .yellowShape, .blueShape {
            position: absolute;
            z-index: -1;
        }

        .yellowShape {
            left: 0;
            top: 50%;

            transform: translate(-20%, -50%);
            img {
                max-width: calc(300px + 15vw);
            }
        }

        .blueShape {
            z-index: 1;
            right: 80px;
            top: 0;
            transform: translateY(-20%);

            img{
                max-width: calc(200px + 5vw);
            }
        }
    }
</style>
