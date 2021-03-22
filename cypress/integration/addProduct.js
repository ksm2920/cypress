describe("Successfully load all products", () => {
    it("Load all products successfully", () => {
        cy.visit("http://localhost:8000");
        cy.get("#bottom");
        cy.get('.loadMore').click();
        cy.get('.loadMore').click().end();
    });
});

describe("Successfully add a product to the shopping cart", () => {
    it("Add a product successfully from index page", () => {
        cy.visit('http://localhost:8000');
        cy.get('#604f154cc77ff165dcd2e3b9-btn').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.url().should("include", "");
        cy.get('#604f154cc77ff165dcd2e3b9-btn').click();
        cy.get('#604e255c25159f4e08d44566-btn').click();
        cy.get('#604f201cc77ff165dcd2e3ba-btn').click();
        cy.get('#604f154cc77ff165dcd2e3b9-btn').click();
        cy.get('.myCartBtn').click();
        cy.contains("My Shopping Cart:").end();
    });

    it("Add a product successfully from the product-detail page", () => {
        cy.visit('http://localhost:8000');
        cy.get('#604e25c125159f4e08d44568-name').click();
        cy.get('.buybtn').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get('#604e25c125159f4e08d44568-name').click();
        cy.get('.buybtn').click();
        cy.get('.myCartBtn').click();
        cy.contains("My Shopping Cart:").end();
    });
});


