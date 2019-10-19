<template>
    <div class="menuContainer">
        <div class="menu">
            <IconButton class="close" @click="handleClose">close</IconButton>
            <div class="links">
                <span v-for="item in menus" @click="openRoute(item)" :class="[{active: isActive(item)}]">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import IconButton from "@/components/common/utils/icon-button.component.vue";

    interface itemMenu {
        name: string;
        path: string;
    }

    @Component({
        name: "Menu",
        components: {IconButton}
    })
    export default class MenuComponent extends Vue {
        public readonly menus: itemMenu[] = [
            {name: "home", path: "/home"},
            {name: "go&do", path: "/aboutUs"},
            {name: "peace", path: "/peace"},
            {name: "envolva-se", path: "/getInvolved"},
        ];

        public handleClose() {
            this.$emit("onClose");
        }

        public openRoute(obj: itemMenu){
            this.$router.push(obj.path);
        }

        public isActive(obj: itemMenu){
            return window.location.hash === `#${obj.path}`;
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
        z-index: 11;
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
                    $fontSize: $h1FontSize;
                    font-size: $fontSize;
                    line-height: $fontSize;
                    font-weight: bold;
                    cursor: pointer;

                    &:hover {
                        color: rgba(255, 255, 255, .8)
                    }

                    &.active{
                        color: $yellowColor;
                        cursor: default;
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
