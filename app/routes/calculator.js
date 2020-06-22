import Route from '@ember/routing/route';
import  { inject } from '@ember/service';

const URL = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

export default Route.extend({

    // ajax: inject('ajax'),

    ajax: inject(),

    // ajaxCall: inject('ajax'),

    async model() {
      const data = await this.ajax.request(URL);
      return data;
    }
    /**
     * Whatever the model() returns when the promise is resolved, the data is set
     * as the `model` property in the corresponding controller of this route
     */
});
