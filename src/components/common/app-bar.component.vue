<template>
    <div class="appBar">
        <div class="logoContainer">
            <div class="logoFake">
                <span>Logo</span>
            </div>
        </div>
        <div class="actions">
            <Button>Entrar</Button>
            <IconButton>menu</IconButton>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import IconButton from '@/components/common/icon-button.component.vue';
    import Button from '@/components/common/button.component.vue';

    @Component({
        name: 'AppBar',
        components:{IconButton, Button }
    })
    export default class AppBarComponent extends Vue{
    }
</script>

<style lang="scss" scoped>
    @import "../../theme.scss";

    .appBar{
        display: flex;
        padding: 32px;
        justify-content: space-between;
        align-items: center;

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
