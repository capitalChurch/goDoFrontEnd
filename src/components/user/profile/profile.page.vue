<template>
    <div class="profile">
        Está é a pagina que tem as informações do usuário
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'ProfilePage'
    })
    export default class ProfilePage extends Vue {
    }
</script>

<style lang="scss" scoped>

</style>
