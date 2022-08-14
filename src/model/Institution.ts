class InstitutionModel {
    constructor(name: string = '') {
        this.InstitutionName = name;
        this.Filters = new FilterModel();
    }

    public InstitutionName: string;
    public Filters:FilterModel;

}

class FilterModel {
    public Location:string = '';
    public Age:string = '';
}


export {
    InstitutionModel,
    FilterModel
} 