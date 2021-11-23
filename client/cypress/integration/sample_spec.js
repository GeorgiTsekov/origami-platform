describe('Pages scenarios', () => {
    it('Home page', () => {
        cy.visit('http://localhost:3000')
        cy.get('h1').contains('Publications')
    })
    it('Register page', () => {
        cy.visit('http://localhost:3000/register')
        cy.get('h1').contains('Register')
    })
    it('Login page', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('h1').contains('Login')
        cy.get('#username').type('Gosho123')
        cy.get('#password').type('Gosho123')
        cy.get('button').click()
        cy.get('header [data-test-id="link-Profile"]')
    })
    it('should render home page and navigate to login page', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('header [data-test-id="link-Login"]').click()
        cy.get('h1').contains('Login')
    })
})