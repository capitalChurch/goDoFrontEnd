<template>
    <FixedElements color="purple" class="aboutUs">
        <BeTheAnswer />
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import BeTheAnswer from '@/components/about-us/be-the-answer.section.vue';
    import FixedElements from '@/components/common/fixed-elements.component.vue';

    @Component({
        name: 'AboutUsPage',
        components: {FixedElements, BeTheAnswer}
    })
    export default class AboutUsPage extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .aboutUs{
        margin-top: calc(#{$paddingMenu} + 60px)
    }
</style>
