import validations from './validations.json'

export const validatePostField = (fieldName, fieldValue) => {
    cy.task('log', `validating ${fieldName} to be a ${validations[fieldName]}`)
    expect(fieldValue).to.be.a(validations[fieldName])
}