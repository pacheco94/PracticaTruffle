//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
/*
simple smart contract that reads message and retrieves it
*/
contract ganache{

//direccion de owner del contrato
address public owner;

//direccion del smart contract
address public smartContract;


//variable del mensaje
string public message = "";

//evento nuevo contrato
event NewContract(address _owner, address _smartContract);

//evento de publicacion del mesaje
event newMenssage(string _message);

//constructor del smart contract
constructor(){
    owner = msg.sender;
    smartContract = address(this);
    emit NewContract(owner, smartContract);
}

//funcion para obtener el mensaje
function sendMessage(string memory _message) public {
    message = _message;
    emit newMenssage(message);
}

//funcion para obtener el mensaje
function getMessage() public view returns(string memory){
    return message;
}
}