describe("Successfully edit/remove products in the shopping cart", () => {
    it("Successfully edit products in the shopping cart", () => {
        cy.visit('http://localhost:8000');
        cy.get('#login').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get('.myCartBtn').click();
        cy.get('#604e25c125159f4e08d44568-plus').click();
        cy.get('.myCartBtn').click();
        cy.get('#604f154cc77ff165dcd2e3b9-minus').click();
        cy.get('.myCartBtn').click();
        cy.get('#604f201cc77ff165dcd2e3ba-remove').click();
        cy.get('.myCartBtn').click();
        cy.get('.checkout').click();
    });
});