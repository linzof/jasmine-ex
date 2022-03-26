describe('PAYMENTS.JS FILE TESTS', function(){

    describe('updateSummary() Tests (with setup and tear-down)', function(){
      beforeEach(function(){
        //arrange logic
        let paymentTotal = 5000;
        allServers = ['jim','jan','jay','jacob','olilbean']
        let numberOfPayments = allServers;
        result = paymentTotal / numberOfPayments;
      },
      afterEach(function(){
        paymentTotal = '';
        allServers = [];
        numberOfPayments = '';
      })
      );
    it('should equal to 500 per server', function(){
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(5);
      expect(result).toEqual(result);
    })

   

    });
  
    describe('createCurPayment() Tests (with setup and tear-down)', function(){
      //arrange logic
      const testCases = [
        {billAmt: 15, tipAmt:5, result:3},
        {billAmt: 110, tipAmt:55, result:2},
        {billAmt: 72, tipAmt:8, result:9},
        {billAmt: 200, tipAmt:20, result:10},
        {billAmt: 300, tipAmt:20, result:15},
        {billAmt: 400, tipAmt:20, result:20},
        {billAmt: 500, tipAmt:20, result:25}
      ];
      testCases.forEach((test,index)=> {
      it(`should divide ${test.billAmt} by ${test.tipAmt} correctly to equal ${test.result} (testcase: ${index + 1})`, ()=> {
        expect(test.billAmt / test.tipAmt ).toEqual(test.result)
      })
    });
    afterEach(function(){
        const testCases =[];
      })
    });
  
    describe('appendPaymentTable(curPayment) tests', ()=>{
        
    });
   
    it('should payment update #paymentTable on appendPaymentTable()', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');

      });  
  });
  
  it('should not create payment with empty input on createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });
  
  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentId = 0;
    allPayments = {};
    testCases=[];
  });
  
  