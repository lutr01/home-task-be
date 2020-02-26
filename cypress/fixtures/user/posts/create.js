export const createValidPostForTheUser = userID => {
    const body = JSON.stringify({
        title: 'valid title',
        body: 'valid body',
        userId: userID
      })

    return new Cypress.Promise(resolve => {
        cy.request('POST', 'posts', body).then(response => {
            resolve(response.status)
        })
    })     
}