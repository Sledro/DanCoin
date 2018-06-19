pragma solidity ^0.4.11;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract ExampleToken is StandardToken {
    string public name = "Dan Token"; 
    string public symbol = "DAN";
    uint8 public constant decimals = 18;
    uint256 public constant initialSupply = 100000000 * (10 ** uint256(decimals));
    uint256 totalSupply_;

    /**
    * @dev Constructor that gives msg.sender all of existing tokens.
    */
    function ExampleToken() public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
        Transfer(0x0, msg.sender, initialSupply);
    }

    /**
    * @dev total number of tokens in existence
    */
    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }
}