var zip = require("./zip.js").zip

test('zip function should exist', () =>{
    zip([],[]);
});
test('zip should return an array', () =>{
    var result = zip([],[]);
    expect(Array.isArray(result)).toBeTruthy();
});
test('zip should return a single array containing each item from two single item arrays',() =>{
    var result = zip(['a'],['b']);
    expect(result).toEqual(['a','b']);
});

test("zipped array items should be same type as input arrays", () =>{

});

test("When the first array is shorter than the second array, return the correct zipped array that contains all elements from the first array",() =>{
    var result = zip(['hello','world'], [3,5,7,11,13]);
    var expected = ['hello',3,'world',5];
    expect(result).toEqual(expected);
});

