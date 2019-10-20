<template>
    <md-button :class="[{'md-raised': !flat}, {flat}, {[styleClass]: true}, {[size || 'normal']: true}]" @click="handleClick">
        <Icon v-if="!!icon" class="icon">{{icon}}</Icon>
        <slot>none</slot>
    </md-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Icon from "@/components/common/utils/icon.component.vue";

    type color = "primary" | "accent";
    type size = "large" | "normal";

    @Component({
        name: "ButtonComponent",
        components: {Icon}
    })
    export default class ButtonComponent extends Vue {
        @Prop({required: false})
        public flat!: boolean;

        @Prop({required: false})
        public icon!: string;

        @Prop({required: false})
        public color!: color;

        @Prop({required: false})
        public size!: size;

        public handleClick() {
            this.$emit("click");
        }

        public get styleClass(): string {
            if (this.flat || this.color === "accent") {
                return "md-accent";
            }

            return "md-primary";
        }
    }
</script>

<style lang="scss">
    @import "../../../theme";

    .icon {
        padding-right: 8px;
    }

    .flat {
        text-transform: capitalize;
    }

    .md-button.md-raised {
        text-transform: lowercase;
        font-size: $h6FontSize;
        border-radius: 0;

        margin: 0;

        &.normal .md-ripple .md-button-content {
            padding: 0 24px;
        }

        &.large {
            height: 30px;
            .md-ripple .md-button-content {
                padding: 0 56px;
                line-height: $h6FontSize * .5;
            }
        }
    }
</style>
