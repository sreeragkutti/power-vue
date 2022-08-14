<template>
    <div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Location</span>
            <input type="text" class="form-control" placeholder="Username" v-model="filterObj.Location" />
        </div>
         <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Age</span>
            <input type="text" class="form-control" placeholder="Username" v-model="filterObj.Age" />
        </div>
        <button class="btn btn-danger" @click="apply_filter">Apply filter</button>
    </div>
</template>
<script lang="ts">
import { FilterModel } from '@/model/Institution';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name:'institutionFilter'
})
export default class InstitutionFilter extends Vue{
    @Prop() filterObj!: FilterModel;

    apply_filter(){
        let filter: FilterModel = new FilterModel();
        filter.Age = this.filterObj.Age;
        filter.Location =this.filterObj.Location;

        this.$emit('apply_filter', filter);
    }
}
</script>