describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    billAmtInput.value = 400;
    tipAmtInput.value = 35;
    submitPaymentInfo();

    billAmtInput.value = 1572;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    serverNameInput.value = names[0];
    submitServerInfo();
    serverNameInput.value = names[1];
    submitServerInfo();
    serverNameInput.value = names[2];
    submitServerInfo();



  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    expect(Object.keys(allServers).length).toEqual(3);
    
    for (let index = 0; index < names.length; index++) {          
      expect(allServers['server' + (index+1)].serverName).toEqual(names[index]);
    }

  });


  it('Display 3 Severs with their tip', function () {
    updateServerTable();
    let servers = serverTbody.querySelectorAll('tr');

    expect(servers.length).toEqual(3);

    for (let index = 0; index < servers.length; index++) {
      let tr = servers[index];
      let tdList = tr.querySelectorAll('td');

      expect(tdList[0].innerText).toEqual(names[index]);
      expect(tdList[1].innerText).toEqual('$25.00');
      expect(tdList[2].innerText).toEqual('X');
    }
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    let servers = serverTbody.querySelectorAll('tr');
    servers.forEach(server => {
      server.remove();
    });

    allPayments = {};
    paymentId = 0;

    let payments = paymentTbody.querySelectorAll('tr');
    payments.forEach(payment => {
      payment.remove();
    });
  });
});
