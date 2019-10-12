<template>
    <div class="home">
        <h3>esta é a home</h3>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Menu from '@/components/common/menu.component.vue';
    import AppBar from '@/components/common/app-bar.component.vue';

    @Component({
        name: 'HomePage',
        components: {AppBar, Menu}
    })
    export default class HomePage extends Vue{
    }
</script>

<style lang="scss" scoped>

</style>
