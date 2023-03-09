import assert from "node:assert";
import { When, Then } from "@cucumber/cucumber";
import { TEST_VAR } from "../veriables";

function sayHello() {
  return "hello";
}

When("the greeter says hello", function () {
  console.log(TEST_VAR);
  this.whatIHeard = sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
