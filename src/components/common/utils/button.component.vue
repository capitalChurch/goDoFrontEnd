<template>
    <md-button :class="[{'md-raised': !flat}, {flat}, {'md-accent': color === 'accent'}, {'md-primary': color !== 'accent'}]" @click="handleClick">
        <Icon v-if="!!icon" class="icon">{{icon}}</Icon>
        <slot>none</slot>
    </md-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Icon from "@/components/common/utils/icon.component.vue";

    type colors = 'primary' | 'accent';

    @Component({
        name: 'ButtonComponent',
        components: {Icon}
    })
    export default class ButtonComponent extends Vue{
        @Prop({required: false})
        public flat!: boolean;

        @Prop({required: false})
        public icon!: string;

        @Prop({required: false})
        public color!: colors;

        public handleClick(){
            this.$emit('click');
        }
    }
</script>

<style lang="scss">
    .icon{
        padding-right: 8px;
    }

    .flat{
        span{
            text-transform: capitalize;
        }
    }

    .md-button{
        margin: 0;
    }
</style>
