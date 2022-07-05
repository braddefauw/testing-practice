const cipherRot13 = require('./caesarCipher');

test('caesar cipher', () => {
    expect(cipherRot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP")
});