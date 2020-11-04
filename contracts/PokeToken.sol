pragma solidity ^0.6.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PokeToken is ERC721, Ownable {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    uint256[] ownedCards;
    // Here we store each card owner
    mapping(uint256 => address) owners;

    constructor() public ERC721("PokeToken", "PKTK") {

        _setBaseURI("https://cryptopokes.herokuapp.com/api/token/");
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        _setBaseURI(baseURI);
    }

    function awardItem(address player) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, fromUint256(newItemId));
        
        owners[newItemId] = player;
        ownedCards.push(newItemId);

        return newItemId;
    }
    
    /* These should be OnlyOwer */
    function awardSpecialItem(uint256 winnerIndex, uint256 newItemId) public returns (uint256) {

        address player = owners[winnerIndex];

        _mint(player, newItemId);
        _setTokenURI(newItemId, fromUint256(newItemId));
        
        owners[newItemId] = player;
        ownedCards.push(newItemId);

        return newItemId;
    }
    
    function isOwned(uint256 tokenId) view public returns (bool) {
        return ownerOf(tokenId) != address(0);
    }

    function fromUint256(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        uint256 index = digits - 1;
        temp = value;
        while (temp != 0) {
            buffer[index--] = byte(uint8(48 + temp % 10));
            temp /= 10;
        }
        return string(buffer);
    }
}