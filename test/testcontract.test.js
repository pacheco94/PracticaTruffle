const {expect} = require('chai');
const {expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const mensaje = artifacts.require('ganache');

contract('mensaje',accounts => {
     //variables para el test
     let name = 'george';

    console.log('Accounts:', accounts);
    beforeEach(async ()=> {
        this.instance = await mensaje.new({from: accounts[0]});
    })
   //testing the owner of the contract
    it('Should be the owner', async ()=> {
        const _owner = await this.instance.owner.call();
        expect(_owner, accounts[0]);
    })

    //testing the empty message var
    it('The message variable must be empty', async ()=> {
        let message = await this.instance.getMessage();
        expect(message,'');
    })
    
    //testing sendMessage function
    it('Should have string', async ()=> {
        const result = await this.instance.sendMessage("george");
        expect(result, name, 'Name should be equial to let');
    })

    //testing the event inside function sendMessage
    it('Should emit event', async ()=> {
        const receipt = await this.instance.sendMessage("george");
        expectEvent(receipt, 'newMenssage');
    })

    //testing getMessage function
    it('Should had the same string', async ()=>{
        const result = await this.instance.getMessage();
        expect(this.instance.sendMessage('george'), result, 'Same value')
    })
    
    

})
