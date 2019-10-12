<template>
    <div class="appBar">
        <div class="logoContainer">
            <div class="logoFake">Logo</div>
        </div>
        <div class="actions">

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'AppBar'
    })
    export default class AppBarComponent extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme.scss";

    .appBar{
        display: flex;
        .logoFake{
            background: $primaryColor;
        }
    }
</style>
