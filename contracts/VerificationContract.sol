// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";
import "./Chunk.sol";
import "./Constants.sol";
import "./Ethentity.sol";

contract VerificationContract {
    Ethentity public ethentity;
    Member private prover;
    uint private numChunks;
    uint private validatorsPerChunk;
    Chunk[] private chunks;
    uint private expirationBlock;
    bool private verificationInProgress;
    Member[] public verifiersInAllChunks;

    constructor(Ethentity _ethentity, Member _prover, uint _numChunks, uint _validatorsPerChunk) payable {
        ethentity = _ethentity;
        prover = _prover;
        numChunks = _numChunks;
        validatorsPerChunk = _validatorsPerChunk;

        verificationInProgress = true;
        expirationBlock = block.number + Constants.NUM_BLOCKS_VERIFICATION_PERIOD;

        // Initialize our chunks
        for (uint i = 0; i < numChunks; i++) {
            chunks.push(new Chunk(validatorsPerChunk));
        }
    }

    function isMemberAlreadyVerifier(Member member) public view returns(bool) {
        bool isAlreadyVerifier = false;

        for (uint i = 0; i < verifiersInAllChunks.length; i++) {
            Member previousValidator = verifiersInAllChunks[i];
            if (previousValidator == member) {
                isAlreadyVerifier = true;
            }
        }

        return isAlreadyVerifier;
    }
}
