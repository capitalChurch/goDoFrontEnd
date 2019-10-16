<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="instagramContainer" viewBox="0 0 27.97 27.969">
        <path id="Icon_Instagram" data-name="Icon Instagram" class="instagram"
              d="M1869.26,926.03h-10.49a8.738,8.738,0,0,0-8.74,8.74v10.489a8.739,8.739,0,0,0,8.74,8.741h10.49a8.739,8.739,0,0,0,8.74-8.741V934.77A8.738,8.738,0,0,0,1869.26,926.03Zm6.12,19.229a6.129,6.129,0,0,1-6.12,6.119h-10.49a6.129,6.129,0,0,1-6.12-6.119V934.77a6.129,6.129,0,0,1,6.12-6.118h10.49a6.129,6.129,0,0,1,6.12,6.118v10.489Zm-11.37-12.237a6.993,6.993,0,1,0,7,6.993A6.992,6.992,0,0,0,1864.01,933.022Zm0,11.363a4.371,4.371,0,1,1,4.38-4.37A4.382,4.382,0,0,1,1864.01,944.385Zm7.52-13.517a1.63,1.63,0,1,1-1.63,1.63A1.63,1.63,0,0,1,1871.53,930.868Z"
              transform="translate(-1850.03 -926.031)"/>
    </svg>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "Instagram",
        components: {}
    })
    export default class Instagram extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../../../theme";

    .instagramContainer {
        margin: 4px;
        height: 20px;
        filter: $shadowIcons;

        .instagram {
            fill: $accentColor;
        }
    }
</style>
