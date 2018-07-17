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
        lastMessage = result[2];
        console.log(lastMessage);
            resolve(lastMessage);
          }
      else {
        console.log(error);
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

    // Jquery para leer ultimo mensaje
    $("#messageTarget").html("Cargando mensaje...");

    // Refrescar el valor cada segundo usando setInterval en la Jquery
    setInterval(function() {
      _getMessage();
      $("#messageTarget").html(lastMessage);
    }, 1000);  

    // Jquery para enviar info al blockchain (Click al button)
    $("#trigger").click(function() {
            TLPcontract.addMessage($("#inputText").val(), function (error, result) {
              if(!error) {
                console.log("Mensaje enviado al blockchain!");
                return true;
              } else {
                console.log("Algo ha fallado al enviar el mensaje");
              }
            });
        });

  })

