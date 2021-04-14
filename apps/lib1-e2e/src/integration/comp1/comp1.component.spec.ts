describe('lib1', () => {
  beforeEach(() => cy.visit('/iframe.html?id=comp1component--primary'));

  it('should render the component', () => {
    cy.get('sb-comp1').should('exist');
  });
});
