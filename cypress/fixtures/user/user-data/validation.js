export const validateUserEmail = email => {
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/

    cy.task('log', `validating the email address ${email} to be of a correct format`)
    expect(email).to.match(emailRegex)
}