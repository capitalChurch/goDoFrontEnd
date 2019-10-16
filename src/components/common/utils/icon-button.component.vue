<template>
    <md-button :class="['md-icon-button', {'md-accent': !color}, color]" @click="handleClick">
        <md-icon>
            <slot v-if="!hide"></slot>
        </md-icon>
    </md-button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Color} from "@/components/common/types";

    @Component({
        name: 'IconButtonComponent'
    })
    export default class IconButtonComponent extends Vue{
        @Prop({required: false})
        public color!: Color;

        @Prop({required: false})
        public hide!: boolean;

        public handleClick(){
            this.$emit('click');
        }
    }
</script>

<style lang="scss">
    @import "../../../theme";

    .white .md-ripple .md-button-content i{
        color: white;
    }

    .primary .md-ripple .md-button-content i{
        color: $primaryColor;
    }

    .purple .md-ripple .md-button-content i{
        color: $darkPurpleColor;
    }
</style>
