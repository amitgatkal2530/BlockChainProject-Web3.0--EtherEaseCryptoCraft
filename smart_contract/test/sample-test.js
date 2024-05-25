const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    // Get the Greeter contract factory
    const Greeter = await ethers.getContractFactory("Greeter");

    // Deploy the Greeter contract
    const greeter = await Greeter.deploy("Hello, world!");

    // Wait for the contract deployment to be completed
    await greeter.deployed();

    // Test the initial greeting
    expect(await greeter.greet()).to.equal("Hello, world!");

    // Change the greeting
    await greeter.setGreeting("Hola, mundo!");

    // Test the updated greeting
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});