describe("Payments Test", function() {
  
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

  it('Testing submitPaymentInfo()', function () {

    expect(Object.keys(allPayments).length).toEqual(3);

    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment2'].billAmt).toEqual('400');
    expect(allPayments['payment3'].billAmt).toEqual('1572');

    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment2'].tipAmt).toEqual('35');
    expect(allPayments['payment3'].tipAmt).toEqual('20');

    expect(allPayments['payment1'].tipPercent).toEqual(20);
    expect(allPayments['payment2'].tipPercent).toEqual(9);
    expect(allPayments['payment3'].tipPercent).toEqual(1)
  });


  it('Testing createCurPayment()', function () {
    billAmtInput.value = 1572;
    tipAmtInput.value = 20;

    let payment = createCurPayment();

    expect(payment.billAmt).toEqual('1572');
    expect(payment.tipAmt).toEqual('20');
    expect(payment.tipPercent).toEqual(1);

    billAmtInput.value = '';
    tipAmtInput.value = '';

  });

  it('Testing appendPaymentTable() Displays 3 payments', function () {

    let curPaymentRows = document.querySelectorAll('#paymentTable tbody tr');
    expect(curPaymentRows.length).toEqual(3);

    let payment1_tds = curPaymentRows[0].querySelectorAll('td');
    expect(payment1_tds[0].innerText).toEqual('$100');
    expect(payment1_tds[1].innerText).toEqual('$20');
    expect(payment1_tds[2].innerText).toEqual('20%');

    let payment2_tds = curPaymentRows[1].querySelectorAll('td');
    expect(payment2_tds[0].innerText).toEqual('$400');
    expect(payment2_tds[1].innerText).toEqual('$35');
    expect(payment2_tds[2].innerText).toEqual('9%');

    let payment3_tds = curPaymentRows[2].querySelectorAll('td');
    expect(payment3_tds[0].innerText).toEqual('$1572');
    expect(payment3_tds[1].innerText).toEqual('$20');
    expect(payment3_tds[2].innerText).toEqual('1%');
  
  });


  it('Testing updateSummary()', function () {

    expect(summaryTds[0].innerHTML).toEqual('$2072');
    expect(summaryTds[1].innerHTML).toEqual('$75');
    expect(summaryTds[2].innerHTML).toEqual('10%');
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
