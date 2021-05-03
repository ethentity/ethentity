// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./VerificationContract.sol";

contract Member {
    address private memberAddress;
    string private name;
    string private country;
    string private passportNumber;
    string private physicalAddress;
    bool private isVerified = false;
    VerificationContract private verificationContract;

    constructor(address _memberAddress) {
        memberAddress = _memberAddress;
    }

    function changeName(string memory newName) public onlyMember notVerified {
        name = newName;
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
