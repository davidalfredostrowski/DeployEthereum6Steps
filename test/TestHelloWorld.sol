pragma solidity >=0.5.0;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts//HelloWorld.sol";

contract TestHelloWorld {
	function testItGreets() public {
		HelloWorld helloWorld = HelloWorld(DeployedAddresses.HelloWorld());
		string memory greeting = helloWorld.getGreeting();
		Assert.equal(greeting, "Hello World", "It should greet me with Hello World.");
	}
}

