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

    mapping(address => uint) private stakes;

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

    function stake(address payable _verificationContract) public payable{
        // sends _stakeAmount ether in wei (10^^-18 of an ether) to this contract
        (bool sent, bytes memory data) = _verificationContract.call{value: msg.value}("");
        require(sent, "Failed to send ether");
        // keeps track of staker address and amount
        stakes[msg.sender] = msg.value;
    }

    function returnStake(address payable _staker) public {
        (bool sent, bytes memory data) = _staker.call{stakes[_staker]}("");
        require(sent, "Failed to send ether");
    }

    function getStakeAmount(address _staker) public view returns(uint){
        return stakes[_staker];
    }
}
