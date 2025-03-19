describe('temolate spec',()=>{
    it('passes',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[id="username"]').type('student')
        cy.get('[id="password"]').type('Password123')
        cy.get('[id="submit"]').click()
        //cy.wait(3000)
        //cy.screenshot()
        cy.get('[class="wp-block-button aligncenter is-style-fill"]').click()

    })

})