<template>
    <div>
        <button type="button" class="btn btn-outline-primary" @click="institution_click">{{Name}}</button>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name:'institution'
})
export default class Institution extends Vue{
    @Prop() Name!: string

    institution_click(){
        this.$emit('institution_clicked', this.Name);
    }
    
}
</script>