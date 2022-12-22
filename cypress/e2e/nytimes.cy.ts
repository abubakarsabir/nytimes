describe('NewyorkTimes Navigation', () => {
    context('Resolution', () => {
        beforeEach(() => {
            cy.viewport(1440, 900)
        })
        it('use requests to navigation bar links', {
            retries: {
                runMode: 2,
                openMode: 1,
            },
        }, () => {

            const pages = ['World', 'Politics', 'N.Y.', 'Business', 'Opinion', 'Tech', 'Science', 'Health'
                , 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Magazine', 'Games', 'The Athletic', 'Cooking'
                , 'Wirecutter']


            cy.visit('https://www.nytimes.com');

            pages.forEach(page => {

                cy
                    .contains(page).click({ force: true })
                    .then((page) => {
                        cy.request(page.prop('href')).its('status')
                        .should('eq',200)
                        .should('not.eq',404)
                })
                cy.go('back')

            })

        });
    })
})