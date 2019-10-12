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
        public routes = allRoutes.slice(1);

        public changeRoute(route: RouteConfig){
            this.$router.push(route.path);
        }

        public getLabelRoute(path: string): string{
            return path.replace('/', '');
        }
    }
</script>

<style lang="scss" scoped>
    ul li{
        cursor: pointer;

        &:hover{
            font-weight: bold;
        }
    }
</style>
