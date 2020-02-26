import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getUserData } from '../../fixtures/user/user-data/get';
import { validateUserEmail } from '../../fixtures/user/user-data/validation';
import { getPostsForTheUser } from '../../fixtures/user/posts/get';
import { validatePostField } from '../../fixtures/user/posts/validate';
import { createValidPostForTheUser } from '../../fixtures/user/posts/create';

const userID = Math.floor(Math.random() * 10) + 1

Then(`I get users data and verify users email format is correct`, () => {
  getUserData(userID).then(data => {
    cy.task('log', `printing to the console the address for the user ${userID}`)
    cy.task('log', data.address)
    validateUserEmail(data.email)
  })
});

Then(`I get users posts and verify fields formats`, () => {
  getPostsForTheUser(userID).then(posts => {
    cy.get(posts).each(post => {
      cy.task('log', `validating data of the post ${post.id} for the user ${userID}`)
      validatePostField('id', post.id)
      validatePostField('title', post.title)
      validatePostField('body', post.body)
    })
  })
});

Then(`I create a post with the valid data`, () => {
  cy.task('log', `creating a post with valid body and title for the user ${userID}`)
  createValidPostForTheUser(userID).then(status => {
    expect(status).to.equal(201)
    
    // here I would also send the get request to check if the post was created for the current user
  })
});
