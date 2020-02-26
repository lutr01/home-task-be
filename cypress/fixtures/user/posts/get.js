export const getPostsForTheUser = userID => {
    return new Cypress.Promise(resolve => {
        cy.task('log', `getting the posts for the user ${userID}`)
        cy.request('posts?userId=' + userID).then(response => {
            resolve(response.body)
        })
    })
}