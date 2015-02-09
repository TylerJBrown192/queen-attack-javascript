describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagonally in line with each other', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it('is true if the horizontal coordinates are equal', function() {
    expect(queenAttack([1, 4], [1, 2])).to.equal(true);
  });

  it('is true if the vertical coordinates are equal', function() {
    expect(queenAttack([1, 4], [2, 4])).to.equal(true);
  });

  it('is true if the ascending diagonal coordinates have equivalent spacing', function() {
    expect(queenAttack([1, 1], [4, 4])).to.equal(true);
  });

  it('is true if the decending diagonal coordinates have equivalent spacing', function() {
    expect(queenAttack([3,4], [1,2])).to.equal(true);
  });
});
