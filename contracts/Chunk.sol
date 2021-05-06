// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";

contract Chunk {
    struct VerificationDecision {
        bool verified;
        bool submitted;
    }

    VerificationContract private verificationContract;
    Member[] private validators;
    mapping(Member => VerificationDecision) private decisions;
    string private chunkData;
    bool private isVerified;
    bool private isFinished;
    uint maxNumValidators;
    uint currentNumValidators;

    constructor(uint _maxNumVerifiers) {
        maxNumValidators = _maxNumVerifiers;
    }

    function joinValidators() public {
        // Make sure the sender is registered as a validator
        bool isRegisteredAsEthentityVerifier = false;

        Member member = verificationContract.ethentity().getMemberFromAddress(msg.sender);
        if (address(member) != address(0)) {
            // The member exists, check that they are a validator
            if (member.isValidator()) {
                isRegisteredAsEthentityVerifier = true;
            }
        }

        require(
            isRegisteredAsEthentityVerifier,
            "You must be registered as an Ethentity validator to join this verification."
        );

        // Allow a verifier to join the list of verifiers
        bool isAlreadyVerifier = verificationContract.isMemberAlreadyVerifier(member);

        require(
            !isAlreadyVerifier,
            "You can not become a validator multiple times for the same validation contract."
        );

        // TODO: ALl clear, add the member as a validator
    }

    modifier notFinished {
        require(
            !isFinished,
            "You cannot call this function after the chunk verification process has finished."
        );
        _;
    }
}
