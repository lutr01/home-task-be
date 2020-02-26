export const getUserData = userID => {
    return new Cypress.Promise(resolve => {
        cy.task('log', `getting the data for the user ${userID}`)
        cy.request('users/' + userID).then(response => {
        resolve(response.body)
        })
    })
}