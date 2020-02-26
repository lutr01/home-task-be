import { Then } from 'cypress-cucumber-preprocessor/steps';

const userID = Math.floor(Math.random() * 10) + 1

Then(`I get users data and verify users email format is correct`, () => {
  const emailRegex = /\S+@\S+\.\S+/
  
  cy.task('log', `getting the data for the user ${userID}`)
  cy.request('users/' + userID).then(response => {
    const bdy = response.body

    cy.task('log', `printing to the console the address for the user ${userID}`)
    cy.task('log', bdy.address)

    cy.task('log', `validating the email address ${bdy.email} to be of a format any_string@any_string.any_string`)
    expect(bdy.email).to.match(emailRegex)
  })
});

Then(`I get users posts and verify fields formats`, () => {
  cy.task('log', `getting the posts for the user ${userID}`)
  cy.request('posts?userId=' + userID).then(response => {
    const bdy = response.body

    cy.get(bdy).each(post => {
      cy.task('log', `validating the id of the post ${post.id} for the user ${userID} to be a number`)
      expect(post.id).to.be.a('number')

      cy.task('log', `validating the title of the post ${post.id} for the user ${userID} to be a string`)
      expect(post.title).to.be.a('string')

      cy.task('log', `validating the body of the post ${post.id} for the user ${userID} to be a string`)
      expect(post.body).to.be.a('string')
    })
    
  })
});

Then(`I create a post with the valid data`, () => {
  const body = JSON.stringify({
    title: 'valid title',
    body: 'valid body',
    userId: userID
  })

  cy.task('log', `creating a post with valid body and title for the user ${userID}`)
  cy.request('POST', 'posts', body).then(response => {
    expect(response.status).to.equal(201)
    
    // here I would also send the get request to check if the post was created for the current user
  })
});
