pragma solidity 0.6.6;

import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
import "./PokeToken.sol";

contract RandomNumberConsumer is VRFConsumerBase {

    PokeToken requestContract;

    bytes32 internal keyHash;
    uint256 internal fee;

    mapping (uint => uint) public randomNumber;
    mapping (bytes32 => uint) public requestIds;

    uint256 public most_recent_random;
        
    /**
     * Constructor inherits VRFConsumerBase
     * 
     * Network: Kovan
     * Chainlink VRF Coordinator address: 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9
     * LINK token address:                0xa36085F69e2889c224210F603D836748e7dC0088
     * Key Hash: 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4
     */
    constructor() 
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        ) public
    {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    /** 
     * Requests randomness from a user-provided seed
     */
    function getRandom(uint256 userProvidedSeed, uint256 tokenId, PokeToken addr) public {
        require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
        bytes32 _requestId = requestRandomness(keyHash, fee, userProvidedSeed);
        _setRequestContract(addr);
        requestIds[_requestId] = tokenId;
    }

    function _setRequestContract(PokeToken addr) {
        requestContract = addr;
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) external override {
        most_recent_random = randomness;
        uint tokenId = requestIds[requestId];
        randomNumber[tokenId] = randomness;
        requestContract.fulfill_random(randomness);
    }
}