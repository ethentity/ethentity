// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

library Constants {
    uint constant NUM_CHUNKS = 3;
    uint constant VALIDATORS_PER_CHUNK = 10;
    uint constant REWARD_WEI_PER_VERIFIER = 6250000000000000;  // 0.00625 ETH
    uint constant NUM_BLOCKS_VERIFICATION_PERIOD = 5760;  // Approx 24 hours
}
