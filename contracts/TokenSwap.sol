// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwap {
    IERC20 public tokenA;
    IERC20 public tokenB;
    address public owner;

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
        owner = msg.sender;
    }

    function swapAtoB(uint256 amount) public {
        require(tokenA.transferFrom(msg.sender, address(this), amount), "Transfer of TokenA failed");
        require(tokenB.transfer(msg.sender, amount), "Transfer of TokenB failed");
    }

    function swapBtoA(uint256 amount) public {
        require(tokenB.transferFrom(msg.sender, address(this), amount), "Transfer of TokenB failed");
        require(tokenA.transfer(msg.sender, amount), "Transfer of TokenA failed");
    }
}
