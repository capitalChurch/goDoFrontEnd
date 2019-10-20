<template>
    <FixedElements :hide-footer="true" class="forgetPassword">
        <div class="information">
            <div class="title">esqueceu a sua senha?</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas eleifend justo. Curabitur eleifend in justo quis egestas. Sed eget viverra lacus.</div>
            <Field placeholder="e-mail" v-model="email" />
            <Button>enviar</Button>
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import Field from '@/components/common/utils/field.component.vue';
    import Button from '@/components/common/utils/button.component.vue';

    @Component({
        name: "ForgetPasswordPage",
        components: {Button, Field, FixedElements}
    })
    export default class ForgetPasswordPage extends Vue {
        public email: string = this.$route.params.email;

    }
</script>

<style lang="scss" scoped>
    @import "../../../theme";

    .forgetPassword{
        background: $yellowColor;
    }
</style>
