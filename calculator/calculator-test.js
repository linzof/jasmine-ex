
it('should calculate the monthly rate correctly - test 1', function () {
  principal = 50000;
  payments = 5*12;
  interest = 2.4/12/100;
  var k = Math.pow(1 + interest, payments);
  let monthlyPayment = principal*k*interest / (k-1);
  let result = monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  expect(result).toBe('885.17');
});


it('should calculate the monthly rate correctly - test 2', function () {
  principal = 10000;
  payments = 5*12;
  interest = 2.4/12/100;
  var k = Math.pow(1 + interest, payments);
  let monthlyPayment = principal*k*interest / (k-1);
  let result = monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  expect(result).toBe('177.03');
});

it('should calculate the monthly rate correctly - test 3', function () {
  principal = 52564;
  payments = 5*12;
  interest = 2.4/12/100;
  var k = Math.pow(1 + interest, payments);
  let monthlyPayment = principal*k*interest / (k-1);
  let result = monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  expect(result).toBe('930.56');
});


it("should return a result with 2 decimal places", function() {
  principal = 52564;
  payments = 5*12;
  interest = 2.4/12/100;
  var k = Math.pow(1 + interest, payments);
  let monthlyPayment = principal*k*interest / (k-1);
  let result = monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  expect(result.toString()).toMatch(/^\d+\.\d\d$/);
});
