describe('Payments Tests', function() {
    describe('submitPaymentInfo', function(){
      it('should add a new payment to allPayments and update the tables', function(){
        
        const billAmtInput = document.createElement('input');
        billAmtInput.setAttribute('id', 'billAmt');
        billAmtInput.value = '50';

        const tipAmtInput = document.createElement('input');
        tipAmtInput.setAttribute('id', 'tipAmt');
        tipAmtInput.value = '10';

        const paymentForm = document.createElement('form');
        paymentForm.setAttribute('id', 'paymentForm');
        paymentForm.appendChild(billAmtInput);
        paymentForm.appendChild(tipAmtInput);

        const paymentTbody = document.createElement('tbody');

        const summaryTds = [
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
        ];

        const allPayments = {};
        const paymentId = 0;

        submitPaymentInfo = function(evt){
          submitPaymentInfo(evt);
        };
        
        submitInfo(new Event('submit', {bubbles: true})); 
        expect(Object.keys(allPayments). length).toEqual(1);
        expect(Object.keys(allPayments)[0]).toEqual('payment0');
        expect(allPayments['payment0'].billAmt).toEqual('50');
        expect(allPayments['payment0'].tipAmt).toEqual('10');
      })
    })
  });
  