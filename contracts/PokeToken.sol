pragma solidity 0.6.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract PokeToken is ERC721, Ownable, VRFConsumerBase {

	bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public most_recent_random;
    mapping (uint => uint) public randomNumber;

    using Counters for Counters.Counter;
    Counters.Counter private _randomIds;
    uint256[] availableCards;

    // Here we store each card owner
    mapping(uint256 => address) ownedCards;

    constructor() public ERC721("PokeToken", "PKTK") VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        ) {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK

    	for(uint i = 1; i <= 151 ; i++ ) {
            availableCards.push(i);
        }

        _setBaseURI("https://cryptopokes.herokuapp.com/api/token/");
    }

    /** 
     * Requests randomness from a user-provided seed
     */
    function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee, userProvidedSeed);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        most_recent_random = randomness;
        randomNumber[_randomIds.current()] = randomness;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _setBaseURI(baseURI);
    }

    function awardItem(address player, uint256 userProvidedSeed) public returns (uint256) {
    	require(availableCards.length != 0);
    	_randomIds.increment();
    	getRandomNumber(userProvidedSeed)

        require(randomNumber[_randomIds.current()] > 0, "random-not-found");
        uint256 currentRandom = randomNumber[_randomIds.current()] % availableCards.length;

        uint256 newTokenId = availableCards[currentRandom];

        availableCards[currentRandom] = availableCards[availableCards.length - 1];
        availableCards.pop();

        _mint(player, newTokenId);
        _setTokenURI(newTokenId, Strings.fromUint256(newTokenId));

        ownedCards[newTokenId] = player;

        return newTokenId;
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "PokeTokens: URI query for nonexistent token");
        return string(abi.encodePacked(baseTokenURI(), Strings.fromUint256(tokenId)));
    }

    function baseTokenURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    function getOwner(uint256 tokenId) view public returns (address) {
        return ownedCards[tokenId];
    }

    function isOwned(uint256 tokenId) view public returns (bool) {
        return getOwner(tokenId) != address(0);
    }

    function getCardsAmountLeft() view public returns (uint256) {
        return availableCards.length;
    }

    function getAvailableCards() view public returns (uint256[] memory) {
        return availableCards;
    }

}