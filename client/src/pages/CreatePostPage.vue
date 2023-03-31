<template>
    <div class="container">
        <wizard-component
            :steps="steps"
            :current-step="currentStep"
        >
        </wizard-component>
        <component
            :is="currentForm"
            @submit="nextStep"
        >
        </component>
    </div>
</template>

<script setup lang="ts">
import {router} from "@/router"
import WizardComponent from "@/components/UI/WizardComponent.vue";
import {computed, markRaw, reactive, ref} from "vue";
import FirstForm from "@/components/partyCreateForms/FirstForm.vue";
import SecondForm from "@/components/partyCreateForms/SecondForm.vue";
import ThirdForm from "@/components/partyCreateForms/ThirdForm.vue";
import { createParty } from "@/api";
import { CreatePartyRequest } from "@/dto/CreatePartyRequest";

const steps = reactive([
    { id:1, title: 'Название и описание' },
    { id:2, title: 'Место и время' },
    { id:3, title: 'Еще немного' },
])
let currentStep = ref(1)

const partyModel = reactive<CreatePartyRequest>({})
function nextStep(model) {
    Object.assign(partyModel, model)
    if ( steps[currentStep.value] ) {
        currentStep.value += 1
    } else {
        router.push({path: '/all', replace: true})
        createParty<CreatePartyRequest>(partyModel);
    }
}

const forms: {
    [key: number]: typeof FirstForm | typeof SecondForm | typeof ThirdForm
} = {
    1: markRaw(FirstForm),
    2: markRaw(SecondForm),
    3: markRaw(ThirdForm)
}
const currentForm = computed(() => {
    return forms[currentStep.value]
})


</script>

<style scoped>
.container {
    max-width: 600px;
    width: 100%;
}
</style>
