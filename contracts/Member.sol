// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./VerificationContract.sol";

contract Member {

    Ethentity public ethentity;
    address public memberAddress;
    string private firstName;
    string private lastName;

    string private country;
    string private passportNumber;
    string private physicalAddress;

    bool private isVerified = false;
    bool private verificationStarted = false;
    bool public isVerifier = false;
    VerificationContract private verificationContract;
    event VerificationContractDeployed(address indexed sender, string firstName, string lastName);

    constructor(Ethentity _ethentity, address _memberAddress, string memory _firstName, string memory _lastName, string memory _country, string memory _passportNumber) {
        ethentity = _ethentity;

        memberAddress = _memberAddress;
        firstName = _firstName;
        lastName = _lastName;
        country = _country;
        passportNumber = _passportNumber;
        isVerified = false;
    }

    function changeName(string calldata _firstName, string calldata _lastName) public onlyMember notVerified verificationNotInProgress {

        firstName = _firstName;
        lastName = _lastName;
    }

    function changeCountry(string calldata newCountry) public onlyMember notVerified verificationNotInProgress {
        country = newCountry;
    }

    function changePassportNumber(string calldata _newPassportNumber) public onlyMember notVerified verificationNotInProgress {
        passportNumber = _newPassportNumber;
    }

    function changePhysicalAddress(string calldata newPhysicalAddress) public onlyMember notVerified verificationNotInProgress {
        physicalAddress = newPhysicalAddress;
    }

    function initiateVerification() public onlyMember notVerified verificationNotInProgress payable {
        // Deploy new verification contract
        uint requiredWei = Constants.NUM_CHUNKS * Constants.VALIDATORS_PER_CHUNK * Constants.REWARD_WEI_PER_VERIFIER;

        require(
            msg.value == requiredWei,
            "You must send exactly the right amount of WEI."
        );

        verificationStarted = true;

        // Create our verification contract and lock in the ether
        verificationContract = (
            new VerificationContract
        ){value: msg.value}(ethentity, this, Constants.NUM_CHUNKS, Constants.VALIDATORS_PER_CHUNK);
        // Emit event verification contract deployed to update UI 
        emit VerificationContractDeployed(msg.sender, _firstName, _lastName);
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

    modifier verificationNotInProgress {
        require(
            !verificationStarted,
            "You can not call this function while verification is in progress."
        );
        _;
    }
}
