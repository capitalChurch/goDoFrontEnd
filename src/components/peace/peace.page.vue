<template>
    <div class="peaceContainer">
        <FixedElements color="purple" class="peace">
            <TitleSection></TitleSection>
            <AcronymSection></AcronymSection>
        </FixedElements>
        <div class="shapeBlue">
            <img src="../../assets/shapes/shapeB3.png" alt="Shape Blue">
        </div>
        <div class="shapeYellow">
            <img src="../../assets/shapes/shapeY4.png" alt="Shape Yellow">
        </div>
        <div class="shapeRed">
            <img src="../../assets/shapes/shapeR3.png" alt="Shape Red">
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from "@/components/common/fixed-elements.component.vue";
    import TitleSection from "@/components/peace/title.section.vue";
    import AcronymSection from "@/components/peace/acronym.section.vue";

    @Component({
        name: "PeacePage",
        components: {AcronymSection, TitleSection, FixedElements}
    })
    export default class PeacePage extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .shapeBlue {
        z-index: 2;
        position: absolute;
        top: 0;
        left: calc(100px + 40%);
        width: calc(200px + 10vw);
    }

    .shapeYellow{
        z-index: 2;
        position: absolute;
        top: 35vh;
        right: 0;
        width: calc(80px + 10vw);
    }

    .shapeRed{
        z-index: 0;
        position: absolute;
        left: 0;
        bottom: 0;

        width: calc(480px + 15vw);
    }

    .peace {
        padding: $marginTop $paddingLeft 0 $paddingLeft;
        background: $purpleColor;
    }
</style>
