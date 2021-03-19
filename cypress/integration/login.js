describe("Hyperlink functionality",() => {
    it("Can link to registration form", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get(".register ").click();
        cy.url().should("include", "register").end();
    });

    it("Can link to reset password form", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get(".password ").click();
        cy.url().should("include", "reset").end();
    });
});

describe("Login form", () => {
    it("Can sign in", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("ksm2920@gmail.com").should("have.value", "ksm2920@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.url().should("include", "").end();
    });
    
    it("Can't sign in with wrong credentials", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        //wrong password
        cy.get('input[name="email"]').type("ksm2920@gmail.com")
        cy.get('input[name="password"]').type("1111111111");
        cy.get(".login").click();
        //short password
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("0000");
        cy.get(".login").click();
        //not user
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".login").click().end();
    });
});