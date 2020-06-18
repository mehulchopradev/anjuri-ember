import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    firstNo: 10,
    secondNo: 20,
    ans: 30,
    operation: '+',
    isAnsVisible: true,

    isCalcDisabled: computed('firstNo', 'secondNo', function () {
       const { firstNo, secondNo } = this;
       return  isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));
    }),

    actions: {
        onCalculate() {
            const { firstNo, secondNo, operation } = this;
            
            const ifirstNo = parseInt(firstNo);
            const isecondNo = parseInt(secondNo);

            let ans;
            if (operation === '+') {
                ans = ifirstNo + isecondNo;
            } else if (operation === '-') {
                ans = ifirstNo - isecondNo;
            } else {
                ans = ifirstNo * isecondNo;
            }

            this.set('isAnsVisible', true);
            this.set('ans', ans); // should sync up with the view

        },

        onOperationChange(op) {
            this.set('operation', op); // should sync up with the view
        },

        onClearAns() {
            this.set('isAnsVisible', false);
        }
    }
});
