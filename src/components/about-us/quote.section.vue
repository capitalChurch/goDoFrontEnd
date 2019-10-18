<template>
    <div class="quoteSection">
        <div class="image">
            <img src="../../assets/images/gilberto.png" alt="Pr. Gilberto Wegermann">
        </div>
        <div class="quote">
            <p>“Ele morreu, e pela sua morte encontramos vida. Ele ressuscitou, e pelo seu amor espalhamos as boas novas”.</p>
            <span>gilberto wegermann</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "QuoteSection",
        components: {}
    })
    export default class QuoteSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .quoteSection{
        margin-top: $paddingMenu;
        display: flex;
        align-items: center;
        margin-right: $paddingLeft;

        $heightSection: 500px;
        min-height: $heightSection;

        .image{
            z-index: 3;
            position: relative;
            left: -40px;
            img{
                max-height: $heightSection;
            }
        }

        .quote{
            max-width: 850px;
            text-align: left;
            padding-left: $paddingMenu;
            z-index: 3;

            p{
                $fontSize: $h2FontSize;
                font-weight: 600;
                font-size: $fontSize;
                line-height: $fontSize;
                color: $purpleColor;
                margin-bottom: 16px;
            }

            span{
                $fontSize: $h5FontSize;
                text-transform: uppercase;

                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 500;
                color: $primaryColor;
                padding-left: 16px;
            }
        }
    }
</style>
