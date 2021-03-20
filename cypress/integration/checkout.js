describe("Successfully checkout", () => {
    it("Checkout successfully", () => {
        cy.visit("http://localhost:8000");
        cy.get('#login').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get(".checkout-link").click();
        cy.url().should("include", "/checkout");
        cy.get('form');
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();
    });
});

describe("Fail to checkout", () => {
    it("Empty input", () => {
        cy.visit("http://localhost:8000");
        cy.get('#login').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get(".checkout-link").click();
        cy.url().should("include", "/checkout");
        cy.get('form');
        
        // cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        // cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        // cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        // cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        // cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        // cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click();
        
        cy.get('input[name="name"]').type("test").should("have.value", "test");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        // cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();
    });
    
    it("Required length of values", () => {
        
        cy.visit("http://localhost:8000");
        cy.get('#login').click();
        cy.get("form");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="password"]').type("00000000").should("have.value", "00000000");
        cy.get(".login").click();
        cy.get(".checkout-link").click();
        cy.url().should("include", "/checkout");
        cy.get('form');
        
        //"name" length must be at least 2 characters long
        cy.get('input[name="name"]').type("H").should("have.value", "H");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //"last name" length must be at least 2 characters long
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("H").should("have.value", "H");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //"address" length must be at least 5 characters long
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1St").should("have.value", "1St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //"city" length must be at least 5 characters long
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Sto").should("have.value", "Sto");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //"zip" must be less than or equal to 99999
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("1234567").should("have.value", "1234567");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //wrongly formmated mail address
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("testgmail.com").should("have.value", "testgmail.com");
        cy.get('input[name="phone"]').type("0760000000").should("have.value", "0760000000");
        cy.get('.payment').click().end();

        //phone number shorter than 10 digits
        cy.get(".checkout-link").click();
        cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
        cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
        cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
        cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
        cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
        cy.get('input[name="phone"]').type("0000000000").should("have.value", "0000000000");
        cy.get('.payment').click().end();

         //phone number longer than 10 digits
         cy.get('input[name="name"]').type("Hej").should("have.value", "Hej");
         cy.get('input[name="lastname"]').type("Hej").should("have.value", "Hej");
         cy.get('input[name="address"]').type("1234 Main St").should("have.value", "1234 Main St");
         cy.get('input[name="city"]').type("Stockholm").should("have.value", "Stockholm");
         cy.get('input[name="zip"]').type("12345").should("have.value", "12345");
         cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
         cy.get('input[name="phone"]').type("07600000000000").should("have.value", "07600000000000");
         cy.get('.payment').click().end();

    });
    
});