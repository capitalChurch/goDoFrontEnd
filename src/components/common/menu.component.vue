<template>
    <div class="menuContainer">
        <div class="menu">
            <IconButton class="close" @click="handleClose">close</IconButton>
            <div class="links">
                <span>home</span>
                <div class="aboutLinks">
                    <span>Go&Do</span>
                    <span>ministérios</span>
                    <span>p.e.a.c.e</span>
                    <span>envolva-se</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import IconButton from "@/components/common/utils/icon-button.component.vue";

    @Component({
        name: "Menu",
        components: {IconButton}
    })
    export default class MenuComponent extends Vue {
        public handleClose() {
            this.$emit("onClose");
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .menuContainer {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 999;
        position: absolute;
        cursor: default;
        background: #{$blueColor}cc;

        .menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px;
            color: white;
            z-index: 10;

            .close {
                align-self: flex-end;
                margin-top: 16px;
                margin-bottom: 8vh;
            }

            .links {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                transform: translateX(25%);

                span {
                    font-size: $h2FontSize;
                    font-weight: bold;
                    padding: 16px 0;
                    cursor: pointer;

                    &:hover {
                        color: rgba(255, 255, 255, .8)
                    }
                }

                .aboutLinks {
                    padding: 16px 0 8px 0;

                    span {
                        font-size: $h4FontSize;

                        &:not(:last-child):after {
                            content: '|';
                            color: $primaryColor;
                            padding: 0 16px;
                        }
                    }
                }
            }
        }
    }
</style>
