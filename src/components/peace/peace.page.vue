<template>
    <FixedElements color="purple" class="peace">
        <TitleSection></TitleSection>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import TitleSection from '@/components/peace/title.section.vue';

    @Component({
        name: 'PeacePage',
        components: {TitleSection, FixedElements}
    })
    export default class PeacePage extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .peace{
        padding-top: $marginTop;
        background: $purpleColor;
    }
</style>
