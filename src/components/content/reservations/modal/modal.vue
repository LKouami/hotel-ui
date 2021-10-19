<template>
    <div>
        
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Nme"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            :type="time"
            
          ></b-form-input>
          <b-form-input :id="2" type="date"></b-form-input>
          <VueCtkDateTimePicker v-model="test" :dark="false" />
        </b-form-group>
      </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
export default Vue.extend({
    name: "Modal",
    data(){
        return {
            test: ''
        }
    }
})
</script>