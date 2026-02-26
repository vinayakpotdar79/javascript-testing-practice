import { describe,it,expect } from "vitest";
import { loadDeck } from "../src/async";
describe('async testing',()=>{

    it('resolves test',async()=>{
        expect(loadDeck()).toBeInstanceOf(Promise)

        await expect(loadDeck()).resolves.toBeDefined()
    })
    
    it('rejects test',async()=>{
        expect(loadDeck()).toBeInstanceOf(Promise)
        expect(loadDeck("hmm")).rejects.toThrowError(/not found/i)//error message should contain "not found" (case-insensitive)
    })

      // check it resolves to the correct structure
  it('resolves a { suits[4], values[13] } deck', async () => {
    const deck = await loadDeck()

    expect(typeof deck).toBe('object')

    expect(deck).toHaveProperty('suits')//property -> object
    expect(deck).toHaveProperty('values')

    // expect(typeof (deck.suits)).toBe('array')//this doesn't work because typeof an array is "object" in JavaScript, so we use Array.isArray() to check if it's an array
    expect(Array.isArray(deck.suits)).toBe(true)//isArray is a method to check if the value is an array or not
    expect(Array.isArray(deck.values)).toBe(true)
    
    //instead of the above 3 lines, we can use the following line to check if the deck has the correct structure and types of properties
    expect(deck).toEqual(
      expect.objectContaining({
        suits: expect.any(Array),
        values: expect.any(Array),
      })
    )
    expect(deck.suits).toHaveLength(4)
    expect(deck.values).toHaveLength(13)
  })
})
