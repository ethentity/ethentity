// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "./Member.sol";
import "./Chunk.sol";

contract VerificationContract {
    Member private prover;
    uint private numChunks;
    Chunk[] private chunks;
}
