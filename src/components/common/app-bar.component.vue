<template>
    <div class="appBarContainer">
        <div class="appBar">
            <div class="logoContainer">
                <Logo/>
            </div>
            <div class="actions">
                <Button v-if="!isLogged" @click="toggleLogged">Entrar</Button>
                <IconButton v-if="isLogged" @click="toggleLogged">notifications</IconButton>
                <Button :flat="true" icon="person_outline" v-if="isLogged" @click="toggleLogged">
                    {{userInfo.name}}
                </Button>
                <IconButton :hide="menuOpened" @click="openMenu">menu</IconButton>
            </div>
        </div>
        <Menu v-if="menuOpened" @onClose="closeMenu"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import IconButton from "@/components/common/utils/icon-button.component.vue";
    import Button from "@/components/common/utils/button.component.vue";
    import {GET_USER_INFO} from "@/model/store/constants";
    import {Person} from "@/model/types";
    import {Getter} from "vuex-class";
    import Icon from "@/components/common/utils/icon.component.vue";
    import Menu from "@/components/common/menu.component.vue";
    import Logo from "@/components/common/utils/icons/logo.vue";

    @Component({
        name: "AppBar",
        components: {Logo, Icon, IconButton, Button, Menu}
    })
    export default class AppBarComponent extends Vue {
        public isLogged: boolean = false;
        public menuOpened: boolean = false;

        @Getter(GET_USER_INFO)
        public userInfo!: Person;

        public toggleLogged() {
            this.isLogged = !this.isLogged;
        }

        public openMenu() {
            this.menuOpened = true;
        }

        public closeMenu() {
            this.menuOpened = false;
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

        z-index: 9;

        .appBar {
            display: flex;
            padding: $paddingMenu $paddingMenu $paddingMenu/4 $paddingMenu;
            justify-content: space-between;
            align-items: center;
            max-height: $appBarHeight;

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
