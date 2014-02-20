describe('factorial', function() {
  it('returns an error message for a negative number', function() {
    factorial(-1).should.equal('Please Enter a Positive Integer');
  });

  it('returns an error message for a decimal', function() {
    factorial(.25).should.equal('Please Enter a Positive Integer');
  });

  it('returns 1 for 0', function() {
    factorial(0).should.equal(1);
  });

  it('returns 120 for 5', function() {
    factorial(5).should.equal(120);
  });
  it('returns 3628800 for 10', function() {
    factorial(10).should.equal(3628800);
  });
});
