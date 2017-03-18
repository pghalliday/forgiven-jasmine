/* eslint-disable no-invalid-this */
import '../support/common';

const greet = ({greeting, person}) => `${greeting} ${person}`;

given.eventually('forgiven-mocha')
.and(function() {
  this.greeting = 'hello';
}, function() {
  delete this.greeting;
})
.and(function() {
  this.person = 'pete';
}, function() {
  delete this.person;
})
.then(function() {
  greet(this).should.eql('hello pete');
})
.then.eventually(function() {
  greet(this).should.eql('hello pete');
})
.then.just(function() {
  greet(this).should.eql('hello pete');
})
.end();

given.just('forgiven-mocha')
.and(function() {
  this.greeting = 'hello';
}, function() {
  delete this.greeting;
})
.and(function() {
  this.person = 'pete';
}, function() {
  delete this.person;
})
.then(function() {
  greet(this).should.eql('hello pete');
})
.then.eventually(function() {
  greet(this).should.eql('hello pete');
})
.then.just(function() {
  greet(this).should.eql('hello pete');
})
.end();

given('forgiven-mocha')
.and(function() {
  this.greeting = 'hello';
}, function() {
  delete this.greeting;
})
.and(function() {
  this.person = 'pete';
}, function() {
  delete this.person;
})
.then(function() {
  greet(this).should.eql('hello pete');
})
.then.eventually(function() {
  greet(this).should.eql('hello pete');
})
.then.just(function() {
  greet(this).should.eql('hello pete');
})
.end();
