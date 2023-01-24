import assert from "node:assert";
import { When, Then } from "@cucumber/cucumber";

function sayHello() {
  return "hello";
}

When("the greeter says hello", function () {
  this.whatIHeard = sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
