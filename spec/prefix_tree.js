/* global prefix_tree, describe, it, expect, should */

describe('prefix_tree', function() {
  var prefix_tree;
  
  beforeEach(function() {
    prefix_tree = new PrefixTree();
  });

  it('should have methods named "addWords" and "findWords", and a property named "words", "prefix" and "children', function() {
    expect(prefix_tree.addWords).to.be.a("function");
    expect(prefix_tree.findWords).to.be.a("function");
    expect(prefix_tree.hasOwnProperty("words")).to.equal(true);
    expect(prefix_tree.hasOwnProperty("prefix")).to.equal(true);
    expect(prefix_tree.hasOwnProperty("children")).to.equal(true);
  });

  it('should have properties named "words", "prefix" and "children"', function() {
    expect(prefix_tree.hasOwnProperty("words")).to.equal(true);
    expect(prefix_tree.hasOwnProperty("prefix")).to.equal(true);
    expect(prefix_tree.hasOwnProperty("children")).to.equal(true);
  });

  it('should be able to add words to the tree', function() {
    prefix_tree.addWords('A');
    expect(prefix_tree.children[0].value).to.equal('A');
  });

  it('should return true if the tree contain the word', function(){
    prefix_tree.addWords('nova');
    expect(prefix_tree.findWords('no')).to.equal(true);
  });

  it('should return false for a word that it does not contain', function(){
    prefix_tree.addWords('RAA');
    expect(prefix_tree.findWords('nova')).to.equal(false);
  });

  it('should only add 1 letter per depth', function() {
    prefix_tree.addWords('RAA');
    expect(prefix_tree.children[0].children[0].value).to.equal('A');
  });

  it('should only add 1 letter per depth', function() {
    prefix_tree.addWords('RAA');
    expect(prefix_tree.children[0].children[0].value).to.equal('RA');
  });
});

