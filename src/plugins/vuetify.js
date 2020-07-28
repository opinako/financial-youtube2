import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import  vueGoogleCharts from 'vue-google-charts';

Vue.use(vueGoogleCharts);
Vue.use( Vuetify );

export default new Vuetify( {
    icons: {
        iconfont: 'fa || md',
    },
} );