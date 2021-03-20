describe("Successfully register", () => {
    it("Register successfully", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="email"]').type("Hej@domain.com").should("have.value", "Hej@domain.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get('.register').click();
        cy.url().should("include", "/").end();
    });
});

describe("Fail to register", () => {
    
    it("Empty input", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".register").click();
        cy.contains("not allowed to be empty").end();

        cy.get('input[name="name"]').type("hello");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".register").click();
        cy.contains("not allowed to be empty").end();

        cy.get('input[name="name"]').type("hello");
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get(".register").click();
        cy.contains("not allowed to be empty").end();
    });

     it("Name is too short", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="name"]').type("h");
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".register").click();
        cy.contains("length").end();    
    });

    it("email has a wrong fommat", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="name"]').type("hello");
        cy.get('input[name="email"]').type("hellogmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".register").click();
        cy.contains("@").end();    
    });

    it("password is too short", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="name"]').type("hello");
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("0000");
        cy.get(".register").click();
        cy.contains("length").end();    
    });

    it("already member", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get('input[name="name"]').type("Sumi");
        cy.get('input[name="email"]').type("ksm2920@gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".register").click();
        cy.contains("already").end();    
    });

});

describe("Hyperlink functionality",() => {
    it("Can link to login form", () => {
        cy.visit("http://localhost:8000/register");
        cy.get("form");
        cy.get(".login ").click();
        cy.url().should("include", "login").end();
    });
});

