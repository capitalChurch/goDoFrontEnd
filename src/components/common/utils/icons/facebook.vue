<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.97 29.563" class="facebookContainer">
        <path id="Icon_Facebook" data-name="Icon Facebook" :class="[{accentColor: !color}, color]" d="M1871.8,882.881l-3.83-.006c-4.31,0-7.09,2.856-7.09,7.277v3.355h-3.85a0.6,0.6,0,0,0-.61.6v4.861a0.6,0.6,0,0,0,.61.6h3.85V911.84a0.6,0.6,0,0,0,.6.6h5.03a0.6,0.6,0,0,0,.6-0.6V899.574h4.51a0.6,0.6,0,0,0,.6-0.6l0.01-4.861a0.618,0.618,0,0,0-.18-0.426,0.607,0.607,0,0,0-.43-0.177h-4.51v-2.844c0-1.367.33-2.061,2.11-2.061h2.58a0.6,0.6,0,0,0,.61-0.6v-4.514A0.606,0.606,0,0,0,1871.8,882.881Z" transform="translate(-1856.44 -882.875)"/>
    </svg>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {Color} from "@/components/common/types";

    @Component({
        name: "Facebook",
        components: {}
    })
    export default class Facebook extends Vue {
        @Prop({required: false})
        public color!: Color;
    }
</script>

<style lang="scss" scoped>
    @import "../../../../theme";

    .facebookContainer{
        margin: 4px;
        height: 20px;
        filter: $shadowIcons;
    }
</style>
