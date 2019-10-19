<template>
    <FixedElements color="purple" class="peace">
        <TitleSection></TitleSection>
        <AcronymSection></AcronymSection>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import TitleSection from '@/components/peace/title.section.vue';
    import AcronymSection from '@/components/peace/acronym.section.vue';

    @Component({
        name: 'PeacePage',
        components: {AcronymSection, TitleSection, FixedElements}
    })
    export default class PeacePage extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .peace{
        padding: $marginTop $paddingLeft 0 $paddingLeft;
        background: $purpleColor;
    }
</style>
