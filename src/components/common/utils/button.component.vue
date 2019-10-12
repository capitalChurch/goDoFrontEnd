<template>
    <md-button :class="[{'md-raised': !flat}, {flat}, 'md-primary']" @click="handleClick">
        <Icon v-if="!!icon" class="icon">{{icon}}</Icon>
        <slot>none</slot>
    </md-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Icon from "@/components/common/utils/icon.component.vue";

    @Component({
        name: 'ButtonComponent',
        components: {Icon}
    })
    export default class ButtonComponent extends Vue{
        @Prop({required: false})
        public flat!: boolean;

        @Prop({required: false})
        public icon!: string;

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
</style>
