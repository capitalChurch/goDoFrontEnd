<template>
    <div class="appBar">
        <div class="logoContainer">
            <div class="logoFake">
                <span>Logo</span>
            </div>
        </div>
        <div class="actions">
            <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'AppBar',
        components:{ }
    })
    export default class AppBarComponent extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme.scss";

    .appBar{
        display: flex;
        .logoFake{
            $size: 70px;

            position: relative;
            background: $primaryColor;
            color: white;
            width: $size;
            height: $size;
            border-radius: 50%;
            span{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
    }
</style>
