<template>
    <div class="acronymComponent">
        <div class="letter">{{letter}}</div>
        <div class="text">{{text}}</div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        name: "AcronymComponent",
        components: {}
    })
    export default class AcronymComponent extends Vue {
        @Prop({required: true})
        public letter!: string;

        @Prop({required: true})
        public text!: string;
    }
</script>

<style lang="scss" scoped>
</style>
