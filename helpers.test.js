describe("Helpers Test", function() {
  
  beforeEach(function () {

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    billAmtInput.value = 400;
    tipAmtInput.value = 35;
    submitPaymentInfo();

    billAmtInput.value = 1572;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('Testing sumPaymentTotal()', function () {

    expect(sumPaymentTotal('tipAmt')).toEqual(75);
    expect(sumPaymentTotal('billAmt')).toEqual(2072);
    expect(sumPaymentTotal('tipPercent')).toEqual(30);
  });



  it('Testing calculateTipPercent()', function () {
    expect(calculateTipPercent(100,10)).toEqual(10);
    expect(calculateTipPercent(455,25)).toEqual(5);
    expect(calculateTipPercent(777,80)).toEqual(10);
  });

  it('Testing appendTd()', function () {

    let newTr = document.createElement('tr');
    const value = '5';
    appendTd(newTr, value)
    let td = newTr.querySelector('td');
    expect(td.innerText).toEqual(value);
  });


  it('Testing appendDeleteBtn()', function () {

    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr)
    let td = newTr.querySelector('td');
    expect(td.innerText).toEqual('X');
  });


  afterEach(function() {
    allPayments = {};
    paymentId = 0;

    let payments = paymentTbody.querySelectorAll('tr');
    payments.forEach(payment => {
      payment.remove();
    });

    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';

  });

});
