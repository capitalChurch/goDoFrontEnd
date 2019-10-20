import {routeEnum} from "@/model/types";
import {routeEnum} from "@/model/types";
import {routeEnum} from "@/model/types";
import {routeEnum} from "@/model/types";
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
    import {routeEnum} from "@/model/types";
    import {allRoutes, changeRoute} from "@/main";

    interface itemMenu {
        name: string;
        idRoute: routeEnum;
    }

    @Component({
        name: "Menu",
        components: {IconButton}
    })
    export default class MenuComponent extends Vue {
        public readonly menus: itemMenu[] = [
            {name: "home", idRoute: routeEnum.Home},
            {name: "go&do", idRoute: routeEnum.AboutUs},
            {name: "peace", idRoute: routeEnum.Peace},
            {name: "envolva-se", idRoute: routeEnum.GetInvolved},
        ];

        public handleClose() {
            this.$emit("onClose");
        }

        public openRoute(obj: itemMenu){
            changeRoute(obj.idRoute);
        }

        public isActive(obj: itemMenu){
            const route = allRoutes.findOrFirst(x => x.id === obj.idRoute);
            return window.location.hash === `#${route.path}`;
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
