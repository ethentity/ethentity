// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";
import "./Chunk.sol";

contract VerificationContract {
    Member private prover;
    uint private numChunks;
    uint private validatorsPerChunk;
    Chunk[] private chunks;

    constructor(Member _prover, uint _numChunks, uint _validatorsPerChunk) {
        prover = _prover;
        numChunks = _numChunks;
        validatorsPerChunk = _validatorsPerChunk;

        for (uint i = 0; i < numChunks; i++) {
            chunks.push(new Chunk());
        }
    }
}
