// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContractV2 is Initializable {
    uint256 public constant NEW_CONSTANT = 84;
    uint256 private _stateVariable;

    function initialize(uint256 stateVariable) public initializer {
        _stateVariable = stateVariable;
    }

    function getStateVariable() public view returns (uint256) {
        return _stateVariable;
    }

    function setStateVariable(uint256 value) public {
        _stateVariable = value * 2;
    }
}
