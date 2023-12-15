describe('Funcionalidad de Login', () => {

  //Prueba 1
  it('Mi aplicación carga con mi menú aside', () => {
    //Arrange: Setup del estado de mi app
    cy.visit('/')

    //Act: Interacciones con la app o ejecutar accione
    cy.get('h1')
    .contains('Categorias') //Assert: Verificamos que tenemos el comportamiento esperado
  })

  //Prueba 2
  it('Probar Login como CUSTOMER', ()=>{
    cy.intercept('POST', 'https://ecommerce-fake-store-su3i.onrender.com/login').as('login')

    //Arrange
    cy.visit('/login')

    //Act
    cy.performLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')

    //Assert
    cy.url().should('eq', 'http://localhost:5173/')
    cy.get('span[id="userName"]').contains('Dr.')

  })

  it('Cuando haga logout me lleve a la pagina de Home y muestre link de Ingresa', ()=>{
    cy.intercept('POST', 'https://ecommerce-fake-store-su3i.onrender.com/login').as('login')

    //Arrange
    cy.visit('/login')

    //Act
    cy.performLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')

    cy.get('nav > div > ul li:last').click()

    //Assert
    cy.url().should('eq', 'http://localhost:5173/')
    cy.get('nav > div > ul li:nth-child(2)').should('have.text', 'Ingresa')

  })


})