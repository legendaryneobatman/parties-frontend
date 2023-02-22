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
import FirstForm from "@/components/partyForms/FirstForm.vue";
import SecondForm from "@/components/partyForms/SecondForm.vue";
import ThirdForm from "@/components/partyForms/ThirdForm.vue";

const steps = reactive([
    { id:1, title: 'Первый' },
    { id:2, title: 'Второй' },
    { id:3, title: 'Третий' },
])
let currentStep = ref(1)

const partyModel = reactive({})
function nextStep(model) {
    Object.assign(partyModel, model)
    if ( steps[currentStep.value] ) {
        currentStep.value += 1
    } else {
        router.push({path: '/party', replace: true})
        console.log('create post request (partyModel)')

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
