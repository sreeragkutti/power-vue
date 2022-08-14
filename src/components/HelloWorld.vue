<template>
  <div class="container">
    <div class="row">
      {{msg || 'No message'}}
    </div>
    <div class="row">
      <div class="col">
        <div class="row">Institutions</div>
        <div class="row">
          <institution v-for="i in institutionList" :key="i.InstitutionName" 
            :Name="i.InstitutionName"
            @institution_clicked="institution_clicked" />
        </div>
      </div>
      <div class="col">
        <div class="row">Data</div>
      </div>
      <div class="col">
        <div class="row">
          <button class="btn btn-primary" @click="get_filter">Get filters</button>
          <institutionFilter @apply_filter="apply_filter" :filterObj="filterObj" />
        </div>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { FilterModel, InstitutionModel } from '@/model/Institution';
import { Component, Prop, Vue } from 'vue-property-decorator';
import InstitutionFilter from './InstitutionFilter.vue';
import Institution from './institution.vue';
import store from '@/store';

@Component({
  components:{
    Institution,
    InstitutionFilter
  }
})
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  filterObj: FilterModel= new FilterModel();

  created(){
    store.dispatch('AddInstitutions',  [
      new InstitutionModel('CASN'),
      new InstitutionModel('Payyanur'),
      new InstitutionModel('Engg')
  ]);
    console.log(store.getters.getAllInstitutionData);
  }

  institutionList:InstitutionModel[]= [
      new InstitutionModel('CASN'),
      new InstitutionModel('Payyanur'),
      new InstitutionModel('Engg')
  ]

  institution_clicked(name: string){
    console.log(name);
    store.dispatch('AddSelectedInstitutionName', name);

    let i: InstitutionModel[] = store.getters.getAllInstitutionData;
    this.filterObj =  i.find(x => x.InstitutionName == name)?.Filters ?? new FilterModel();
  }

  apply_filter(filter: FilterModel){
    var obj: { name: string, filterModel: FilterModel} = {
      name: store.getters.getSelectedInstitutionName,
      filterModel: filter
    }

    store.dispatch('AddFiler', obj);
    console.log(filter);
  }

  get_filter(){
    console.log(store.getters.getAllInstitutionData);
  }
}
</script>

