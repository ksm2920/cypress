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

describe("Successfully login", () => {
    it("Can sign in", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("ksm2920@gmail.com").should("have.value", "ksm2920@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.url().should("include", "").end();
    });
});

describe("Fail to login", () => {
    it("Empty input", () => {
        //Empty email
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".login").click();
        cy.contains("not allowed to be empty").end();
        
        //Empty password
        cy.get('input[name="email"]').type("ksm2920@gmail.com");
        cy.get(".login").click();
        cy.contains("not allowed to be empty").end();
    });

    it("wrong password", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("ksm2920@gmail.com");
        cy.get('input[name="password"]').type("111111111");
        cy.get(".login").click();
        cy.contains("password").end();    
    });

    it("email wrongly formatted", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("ksm2920gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".login").click();
        cy.contains("@").end();    
    });

    it("password is too short", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("ksm2920@gmail.com");
        cy.get('input[name="password"]').type("0000");
        cy.get(".login").click();
        cy.contains("length").end();    
    });

    it("Not user", () => {
        cy.visit("http://localhost:8000/login");
        cy.get("form");
        cy.get('input[name="email"]').type("hello@gmail.com");
        cy.get('input[name="password"]').type("00000000");
        cy.get(".login").click();
        cy.contains("sign up").end();    
    });
});