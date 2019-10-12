<template>
    <div class="coverSection">
        <h1>Texto inicial da página!</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "CoverSection",
        components: {}
    })
    export default class CoverSection extends Vue {
    }
</script>

<style lang="scss" scoped>
</style>
