// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable {
    uint256 public constant INITIAL_CONSTANT = 42;
    uint256 private _stateVariable;

    function initialize(uint256 stateVariable) public initializer {
        _stateVariable = stateVariable;
    }

    function getStateVariable() public view returns (uint256) {
        return _stateVariable;
    }

    function setStateVariable(uint256 value) public {
        _stateVariable = value;
    }
}
