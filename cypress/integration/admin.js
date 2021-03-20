describe("Successfully add a product to the admin product-list", () => {
    it("Successfully add a product to product-list", () => {
        cy.visit("http://localhost:8000");
        cy.get('#login').click();
        cy.get("form");
        cy.get('input[name="email"]').type("admin@gmail.com").should("have.value", "admin@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get("form");
        cy.get('input[name="name"]').type("DROTTNING");
        cy.get('input[name="description"]').type("The royal jam is made from raspberries and blueberries in perfect proportions to highlight both berries. The family's favorite for pancakes and waffles.");
        cy.get('input[name="price"]').type("60");
        cy.get('input[name="content"]').type("52 g raspberries and blueberries, 42 g sugar, pectin");
        cy.get('input[name="image"]').click();
    });
});