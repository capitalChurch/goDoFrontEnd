<template>
    <div class="hub">
        Esta é uma pagina que só será vista em tempo de desenvolvimento para acompanhamento de todos as paginas que já estão sendo desenvolvidas

        <ul>
            <li v-for="i in routes" @click="changeRoute(i)">{{getLabelRoute(i.path)}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {allRoutes} from "@/main";
    import {RouteConfig} from 'vue-router';

    @Component({
        name: 'HubPage'
    })
    export default class HubPage extends Vue{
        public routes = allRoutes.slice(1).filter(x => x.path.indexOf(':') === -1);

        public changeRoute(route: RouteConfig){
            this.$router.push(route.path);
        }

        public getLabelRoute(path: string): string{
            return path.replace('/', '');
        }

        public created(){
            if(window.location.hostname.indexOf('goando') !== -1)
                this.$router.push('/home');
        }
    }
</script>

<style lang="scss" scoped>
    .hub{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ul li{
            cursor: pointer;
            padding: 8px;

            &:hover{
                font-weight: bold;
            }
        }
    }
</style>
