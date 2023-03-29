const { addFilter } = require('govuk-prototype-kit').views

/* ------------------------------------------------------------------
  add your methods to the filters obj below this comment block:
  @example:

  addFilter('sayHi', function(name) {
      return 'Hi ' + name + '!'
  }

  Which in your templates would be used as:

  {{ 'Paul' | sayHi }} => 'Hi Paul'

  Notice the first argument of your filters method is whatever
  gets 'piped' via '|' to the filter.

  Filters can take additional arguments, for example:

  addFilter('sayHi', function (name,tone) {
    return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
  }

  Which would be used like this:

  {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
  {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

  For more on filters and how to write them see the Nunjucks
  documentation.

------------------------------------------------------------------ */

addFilter('toMonth', function(x){
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (x > 0){ return months[x - 1]; // returns date as per month
  } else {
    return x ;
  }})
    
/* ----------------------------------------------------------------
  Allows you to pluralise nouns.

  Example
    Where numberPassengers is a number variable. Then the following line
    will show 'passenger' if there is only 1 passenger, or 'passengers'
    if there's 0 or more than 1 passenger.

    "passenger" + numberPassengers | pluralise('','s')
  ------------------------------------------------------------------ */
addFilter('pluralise', function(number, singular, plural){
  if (number === 1 || number === '1')
  {
    return singular;
  } else {
    return plural;
  }})

/* ----------------------------------------------------------------
  Allows you to add the possessive apostrophe to variables.

  Example
    {{ "Sam Jones" | possessive }} => Sam Jones'
    {{ "Alex Smith" | possessive }} => Alex Smith's

  Code example
    {{ personName | possessive }}
  ------------------------------------------------------------------ */
addFilter('possessive', function(noun){
  if (noun) {
    if (noun.charAt(noun.length - 1) === 's')
    {
      return noun + '\'';
    } else {
      return noun + '\'s';
    }
  } else {
    return noun
  }})

/* ----------------------------------------------------------------
  Allows you to return true or false if your data is in an array.

  Example
  {{ data["myarraydata"] | inArray(value) }}
    => retuns true if found in the array
    => returns false if not found in the array

  Code example - for showing default checked on checkboxes
  {{ "checked" if data["myDataArray"] | inArray("String to search in array") }}
  ------------------------------------------------------------------ */
addFilter('inArray', function(array, value){
  if(array == undefined){
    // No array has been defined, exit the function.
    return false;
  }
  let i = 0;
  let len = array.length
  let isInArray = false;
  while(i<len) {
    if(array[i] == value) {
      // Is in the array, set the variable and exit the loop.
      isInArray = true;
      break;
    }
    i++
  }
  return isInArray;
})

/* ----------------------------------------------------------------
  Allows you to add a leading zero for times.

  Example
    {{ "1" | padZeros }} => 01
    {{ "12" | padZeros }} => 12

  Code example
    {{ data['event-time-hour'] | padZeros }}
  ------------------------------------------------------------------ */
addFilter('homeOffice.padZero', function(digit){
  if (digit.length == 1) {
    return `0${digit}`
  } else {
    return digit
  }})