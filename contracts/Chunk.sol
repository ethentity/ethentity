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

    constructor(uint _maxNumValidators) {
        maxNumValidators = _maxNumValidators;
    }

    function joinValidators() {

    }

    modifier notFinished {
        require(
            !isFinished,
            "You cannot call this function after the chunk verification process has finished."
        );
        _;
    }
}
