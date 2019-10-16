<template>
    <md-icon>
        <slot></slot>
    </md-icon>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'IconComponent'
    })
    export default class IconComponent extends Vue{
    }
</script>

<style lang="scss">

</style>
