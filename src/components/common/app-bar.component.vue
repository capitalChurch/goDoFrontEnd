<template>
    <div class="appBar">
        <div class="logoContainer">
            <div class="logoFake">
                <span>Logo</span>
            </div>
        </div>
        <div class="actions">
            <Button v-if="!isLogged" @click="toggleLogged">Entrar</Button>
            <IconButton v-if="isLogged" @click="toggleLogged">notifications</IconButton>
            <Button :flat="true" icon="person_outline" v-if="isLogged" @click="toggleLogged">
                <span>{{userInfo.name}}</span>
            </Button>
            <IconButton>menu</IconButton>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import IconButton from '@/components/common/utils/icon-button.component.vue';
    import Button from '@/components/common/utils/button.component.vue';
    import {GET_USER_INFO} from "@/model/store/constants";
    import {Person} from '@/model/types';
    import {Getter} from 'vuex-class';
    import Icon from '@/components/common/utils/icon.component.vue';

    @Component({
        name: 'AppBar',
        components:{Icon, IconButton, Button }
    })
    export default class AppBarComponent extends Vue{
        public isLogged: boolean = false;

        @Getter(GET_USER_INFO)
        public userInfo!: Person;

        public toggleLogged(){
            this.isLogged = !this.isLogged;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme.scss";

    .appBar{
        display: flex;
        padding: 32px;
        justify-content: space-between;
        align-items: center;

        .actions{
            display: flex;
            align-items: center;
        }

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
