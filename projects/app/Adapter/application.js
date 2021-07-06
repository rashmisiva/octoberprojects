import DS from 'ember-data';  
// import ENV from 'projects/config/environment';  
export default DS.RESTAdapter.extend({  
    https: '//api.october.eu',

    pathForType() {
        return 'projects';
    }

});  

