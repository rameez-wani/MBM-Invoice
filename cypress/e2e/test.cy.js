describe('Login', () => {


    it('Upload Multiple invoices!', () => {
        cy.visit("http://ok.f2wdev.eu")
        cy.wait(1000);
        cy.get('.MuiSelect-select').click();
        cy.contains('Englisch').click();
        cy.get('.MuiDialogActions-root > .MuiButton-outlined').click();
        cy.wait(2000);
        cy.get("#emailaddress").type("rj@yopmail.com");
        cy.get("#password").type("Admin@123");
        cy.wait(1000);
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.visit("http://ok.f2wdev.eu/invoices")
        cy.wait(8000);


        cy.get('.link.common-invoice-ref-59').then(($elements) => {

            Cypress._.each($elements, (el, index) => {

                cy.get('.link.common-invoice-ref-59').eq(index).click();
                cy.wait(5000);

                cy.go('back');
                cy.wait(5000);


                cy.get('.link.common-invoice-ref-59').should('exist');
            })


        })
    })
})
