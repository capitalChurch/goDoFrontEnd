import {routeEnum} from "@/model/types";
<template>
    <div class="appBarContainer">
        <div class="appBar">
            <div @click="openHome()" class="goAndDoLogoContainer">
                <Logo :color="color"/>
            </div>
            <div class="actions">
                <IconButton :hide="menuOpened" @click="openMenu" :color="color">menu</IconButton>
            </div>
        </div>
        <Menu v-if="menuOpened" @onClose="closeMenu"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import IconButton from "@/components/common/utils/icon-button.component.vue";
    import Button from "@/components/common/utils/button.component.vue";
    import {GET_USER_INFO} from "@/model/store/constants";
    import {Person, routeEnum} from "@/model/types";
    import {Getter} from "vuex-class";
    import Icon from "@/components/common/utils/icon.component.vue";
    import Menu from "@/components/common/menu.component.vue";
    import Logo from "@/components/common/utils/icons/logo.vue";
    import {Color} from "@/components/common/types";
    import {changeRoute} from "@/main";

    @Component({
        name: "AppBar",
        components: {Logo, Icon, IconButton, Button, Menu}
    })
    export default class AppBarComponent extends Vue {
        public isLogged: boolean = false;
        public menuOpened: boolean = false;

        @Getter(GET_USER_INFO)
        public userInfo!: Person;

        @Prop({required: true})
        public color!: Color;

        public toggleLogged() {
            this.isLogged = !this.isLogged;
        }

        public openMenu() {
            this.menuOpened = true;
        }

        public closeMenu() {
            this.menuOpened = false;
        }

        public openHome(){
            changeRoute(routeEnum.Home);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme.scss";

    .appBarContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;

        z-index: 10;

        .appBar {
            display: flex;
            padding: $paddingMenu $paddingMenu $paddingMenu/4 $paddingMenu;
            justify-content: space-between;
            align-items: center;
            max-height: $appBarHeight;

            .goAndDoLogoContainer{
                z-index: 12;
                cursor: pointer;
            }

            .actions {
                display: flex;
                align-items: center;

                > * {
                    margin: 0 8px;
                }
            }
        }
    }
</style>
