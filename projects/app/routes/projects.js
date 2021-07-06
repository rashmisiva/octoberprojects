import Ember from 'ember';  
  
export default Ember.extend({  
    model() {         
        return this.store.findAll('projects')          
       }  
}); 