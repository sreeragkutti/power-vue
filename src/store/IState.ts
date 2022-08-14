import { InstitutionModel } from '@/model/Institution';


export interface IState {
  InstitutionList: InstitutionModel[];
  selectedInstitution: string
}

export const state: IState = {
  InstitutionList: [new InstitutionModel()],
  selectedInstitution: ''
}
