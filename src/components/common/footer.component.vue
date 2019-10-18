<template>
    <div class="footer">
        &copy; Go&Do. All rights reserved.
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "FooterComponent",
        components: {}
    })
    export default class FooterComponent extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .footer{
        display: flex;
        align-items: center;
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        max-width: 100%;

        padding-left: $paddingLeft;
        text-align: left;
        height: $paddingMenu * 2;
        background: $purpleColor;
        color: white;
    }
</style>
