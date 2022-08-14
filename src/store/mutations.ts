import { FilterModel, InstitutionModel } from "@/model/Institution"
import { IState } from "./IState"

export const SET_INSTITUTIONAL_FILTER = (state: IState, payload: { name: string,filterModel: FilterModel}) => {
    let index = state.InstitutionList.findIndex(x=>x.InstitutionName == payload.name);

    if(index == -1) return;

    state.InstitutionList[index].Filters.Age = payload.filterModel.Age
    state.InstitutionList[index].Filters.Location = payload.filterModel.Location;

}
export const SET_INSTITUTION = (state: IState, payload: InstitutionModel[]) => {
    state.InstitutionList = payload;
}

export const SET_INSTITUTION_NAME = (state: IState, payload: string) => {
    state.selectedInstitution = payload;
}