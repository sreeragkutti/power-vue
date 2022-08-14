import { InstitutionModel } from "@/model/Institution"
import { IState } from "./IState"

export const getAllInstitutionData = (state: IState):InstitutionModel[] => {
    return state.InstitutionList;
}

export const getSelectedInstitutionName = (state: IState ):string => {
    return state.selectedInstitution;
}
