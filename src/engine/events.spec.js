import * as Events from './events'

const snakeToCamel = SNAKE_CASE =>
    SNAKE_CASE.toLowerCase().replace(/_(.)/g, (_,x) => x.toUpperCase() )

Object.keys(Events).forEach( eventName => {
    describe(eventName,  () => {
        it('returns an object with a .type key and one key for each parameter', 
            () => 
                expect(
                    Events[eventName].length
                ).toBe(
                    Object.keys(
                        Events[eventName]()
                    ).length
                    - 1 // for .type key
                )
        )

        it('has a name which case-matches the .type of the event it creates', 
            () =>
                expect(
                    snakeToCamel(
                        Events[eventName]().type
                    )
                ).toBe(
                    eventName
                )
        )        
    })
})