// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./VerificationContract.sol";

contract Member {
    address private memberAddress;
    string private firstName;
    string private lastName;
    string private country;
    uint private passportNumber;
    string private physicalAddress;
    bool private isVerified;
    VerificationContract private verificationContract;

    constructor(address _memberAddress, string _firstName, string _lastName, string _country, uint _passportNumber) {
        memberAddress = _memberAddress;
        firstName = _firstName;
        lastName = _lastName;
        country = _country;
        passportNumber = _passportNumber;
        isVerified = false;
    }

    function isVerified() public view returns(bool){
        return isVerified;
    }

    

    function changeName(string memory newName) public onlyMember notVerified {
        name = newName;
    }

    function initiateVerification(string memory startVerification) public onlyMember notVerified {
        // Deploy new verification contract
        verificationContract = new VerificationContract(this, 3, 10);
    }

    modifier onlyMember {
        require(
            msg.sender == memberAddress,
            "Only the owning member is allowed to call this function."
        );
        _;
    }

    modifier notVerified {
        require(
            !isVerified,
            "You can not call this function after the member has been verified."
        );
        _;
    }
}
