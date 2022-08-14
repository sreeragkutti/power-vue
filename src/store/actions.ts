import { FilterModel, InstitutionModel } from "@/model/Institution"

export const  AddFiler = (context: any, payload: { institutionModel :InstitutionModel,filterModel: FilterModel} ) => {
  context.commit('SET_INSTITUTIONAL_FILTER', payload );
}

export const  AddInstitutions = (context: any, payload: InstitutionModel[] ) => {
    context.commit('SET_INSTITUTION', payload );
  }

  export const  AddSelectedInstitutionName = (context: any, payload: string ) => {
    context.commit('SET_INSTITUTION_NAME', payload );
  }