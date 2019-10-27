<template>
    <FixedElements class="home">
        <CoverSection></CoverSection>
        <AboutSection></AboutSection>
        <PeaceSection></PeaceSection>
        <SupportSection></SupportSection>
        <PraySection></PraySection>
        <EventsSection></EventsSection>
        <NewsSection></NewsSection>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Menu from '@/components/common/menu.component.vue';
    import CoverSection from '@/components/home/cover.section.vue';
    import AboutSection from '@/components/home/about.section.vue';
    import PeaceSection from '@/components/home/peace.section.vue';
    import SupportSection from '@/components/home/support.section.vue';
    import PraySection from '@/components/home/pray.section.vue';
    import EventsSection from '@/components/home/events.section.vue';
    import NewsSection from '@/components/home/news.section.vue';
    import FixedElements from '@/components/common/fixed-elements.component.vue';

    @Component({
        name: 'HomePage',
        components: {
            FixedElements,
            NewsSection,
            EventsSection, PraySection, SupportSection, PeaceSection, AboutSection, CoverSection, Menu}
    })
    export default class HomePage extends Vue{
    }
</script>

<style lang="scss" scoped>

</style>
