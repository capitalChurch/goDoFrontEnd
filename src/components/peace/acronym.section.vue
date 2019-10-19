<template>
    <div class="acronymSection">
        <AcronymComponent />
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import AcronymComponent from '@/components/peace/acronym.component.vue';

    interface eachLetter{
        letter: string;
        text: string;
    }

    @Component({
        name: "AcronymSection",
        components: {AcronymComponent}
    })
    export default class AcronymSection extends Vue {
        public readonly letters: eachLetter[] = [
            {letter: 'p', }
        ];
    }
</script>

<style lang="scss" scoped>
</style>
