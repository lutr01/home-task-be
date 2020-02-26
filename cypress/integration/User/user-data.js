import { Then } from "cypress-cucumber-preprocessor/steps";

const userID = Math.floor(Math.random() * 10) + 1

Then(`I get users data and verify users email format is correct`, () => {
  // cy.task("log", userID + " from get user data")
});

Then(`I get users posts and verify fields formats`, () => {
  // cy.task("log", userID + " from get user posts")
});

Then(`I create a post with the valid data`, () => {
  // cy.task("log", userID + " from make user post")
});
