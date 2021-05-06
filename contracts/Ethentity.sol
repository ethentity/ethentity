// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";
import "hardhat/console.sol";

contract Ethentity {
    mapping(address => Member) private members;

    event Register(Member);

    function register(string _firstName, string _lastName, string _country, uint _passportNumber) public returns(Member) {
        // Make sure this address hasn't registered yet
        require(
            address(members[msg.sender]) == address(0),
            "Address already registered."
        );

        Member newMember = new Member(msg.sender, _firstName, _lastName, _country, _passportNumber);
        members[msg.sender] = newMember;

        emit Register(newMember);

        return newMember;
    }

    function isMember(address _memberAddress) public view returns(bool){
        if(members[_memberAddress]){
            return true;
        }
        else{
            return false;
        }
    }
}
