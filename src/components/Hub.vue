import {routeEnum} from "@/model/types";
<template>
    <div class="hub">
        Esta é uma pagina que só será vista em tempo de desenvolvimento para acompanhamento de todos as paginas que já estão sendo desenvolvidas

        <ul>
            <li v-for="route in routes" @click="changeRoute(route)">{{getLabelRoute(route.path)}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {allRoutes, changeRoute} from "@/main";
    import {routeEnum, routes} from "@/model/types";

    @Component({
        name: 'HubPage'
    })
    export default class HubPage extends Vue{
        public routes: routes[] = allRoutes.slice(1).filter(x => x.path.indexOf(':') === -1);

        public changeRoute(route: routes){
            changeRoute(route.id);
        }

        public getLabelRoute(path: string): string{
            const p = path.replace('/', '');
            return p.replace(/\//g, ' ');
        }

        public created(){
            if(!window.location.href.includes('goanddo'))
                return;

            changeRoute(routeEnum.Home);
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
