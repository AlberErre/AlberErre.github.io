/*
 * Build.js - Retrieve data from smart contract from TLPcontract
 * @author Alber Erre <arblugo@gmail.com> <albererre.com>
 * LICENCE (MIT)
*/

  var TLPcontract;
  var userAccount;
  var lastMessage;
  var inputText;

  function startTLPspeaker() {
    // Ethereum contract instance
    TLPcontract = web3.eth.contract(ABI).at(address);
    console.log(TLPcontract);
    console.log("El Smart Contract debe estar encima de esto");
  }

  function _getMessage() {

    return new Promise (function (resolve, reject) {

      TLPcontract.showLastMessage(function (error, result) {
      if(!error) {
        lastMessage = result.c[0];
            resolve(lastMessage);
          }
      else {
        console.log(error);
          reject(error);
        }
      })
    });
  }

  function _addMessage() {

    // falta meter el evento para que lea del input
    // inputText = bla bla bla (event)

    return new Promise (function (resolve, reject) {
      TLPcontract.addMessage(inputText, function (error, result) {
      if(!error) {
            resolve(result);
          }
      else {
          reject(error);
        }
      })
    });
  }

  //remember to load this file as a server, not as a file (web3 has problems with this)
  window.addEventListener('load', function () {

    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    startTLPspeaker();

    // Jquery
    $("#messageTarget").html(_getMessage());

    // Refrescar el valor cada segundo (usando la Jquery)
    setInterval(function() {
      $("#messageTarget").html(_getMessage());
    }, 1000);  

  })




