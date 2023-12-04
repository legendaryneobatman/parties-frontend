import PartyGeneralForm from "@/components/party-creation/forms/PartyGeneralForm.vue";
import PartyAdditionalForm from "@/components/party-creation/forms/PartyAdditionalForm.vue";
import ThirdForm from "@/components/party-creation/forms/ThirdForm.vue";

export interface IFormField {
  label: string,
  value: string,
}

export type IPartyGeneralForm = Record<'title' | 'subtitle' | 'text', IFormField>
export interface IPartyAdditionalForm {
  date: {
    label: string,
    value: string[],
  },
  address: IFormField
}
export interface IPartyForm {
  component: typeof PartyGeneralForm | typeof PartyAdditionalForm | typeof ThirdForm,
  title: string,
}


