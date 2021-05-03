// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";
import "hardhat/console.sol";

contract Ethentity {
    mapping(address => Member) private members;

    function register() public returns(Member) {
        // Make sure this address hasn't registered yet
        require(
            address(members[msg.sender]) != address(0),
            "Address already registered."
        );

        Member newMember = new Member(msg.sender);
        return newMember;
    }
}
