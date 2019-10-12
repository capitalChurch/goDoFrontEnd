<template>
    <md-button class="md-icon-button md-primary" @click="handleClick">
        <md-icon>
            <slot></slot>
        </md-icon>
    </md-button>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'IconButtonComponent'
    })
    export default class IconButtonComponent extends Vue{
        public handleClick(){
            this.$emit('click');
        }
    }
</script>

<style lang="scss" scoped>

</style>
