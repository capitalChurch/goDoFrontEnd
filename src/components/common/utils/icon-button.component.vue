<template>
    <md-button :class="['md-icon-button', {'md-primary': !color}, color]" @click="handleClick">
        <md-icon>
            <slot v-if="!hide"></slot>
        </md-icon>
    </md-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    type colors = 'white';
    @Component({
        name: 'IconButtonComponent'
    })
    export default class IconButtonComponent extends Vue{
        @Prop({required: false})
        public color!: colors;

        @Prop({required: false})
        public hide!: boolean;

        public handleClick(){
            this.$emit('click');
        }
    }
</script>

<style lang="scss">
    .white .md-ripple .md-button-content i{
        color: white;
    }
</style>
