export const validateUserEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/

    cy.task('log', `validating the email address ${email} to be of a format any_string@any_string.any_string`)
    expect(email).to.match(emailRegex)
}