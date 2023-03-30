// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract wallet {
    string public name = "wallet"; //read
    uint num;

    function set_num(uint _num) public {
        num = _num;
    }

    //read
    function get_value() public view returns (uint) {
        return num;
    }

    function send_ether_contract() public payable {}

    //read
    function contract_balance() public view returns (uint) {
        return address(this).balance;
    }

    function send_ether_user(address _user) public payable {
        payable(_user).transfer(msg.value);
    }

    //read
    function account_balance(address _account) public view returns (uint) {
        return (_account).balance;
    }
}
