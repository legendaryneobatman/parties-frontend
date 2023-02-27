<template>
    <div class="wizard">
        <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="wizard__step"
        >
            <div
                class="wizard__circle"
                :class="{ 'wizard__circle--active': index+1 === currentStep }"
            >
                {{ step.id }}
            </div>
            <div class="wizard__title text">
                {{ step.title }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

defineProps({
    steps: { type: Array, required: true },
    currentStep: { type: Number, required: true }
})

</script>

<style scoped lang="scss">
.wizard {
    display: flex;
    position: relative;
    justify-content: space-between;
    &__step {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5px;
        &:not(:last-child) {
            margin-right: 30px;
            .wizard__circle {
                &:after {
                    content:'';
                    width: calc(100% + 170px);
                    height: 4px;
                    position: absolute;
                    background-color: #A7D3AE;
                    left: 100%;
                }
            }
        }
    }
    &__circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #A7D3AE;
        &--active {
            width: 60px;
            height: 60px;
            font-size: 32px;
            font-weight: bold;
        }
    }
    &__title {
      max-width: 100px;
      text-align: center;
    }
}

</style>
