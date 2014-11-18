describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};
    var cloneObj = function (source, target) {
        var item;
        for (item in source) {
            if (source.hasOwnProperty(item)) {
                target[item] = source[item];
            }
        }
    }
	
	  cloneObj(expected, obj);
	
    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
