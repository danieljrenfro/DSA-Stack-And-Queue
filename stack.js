class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    let displayedStack = 'Top:';
    let tempNode = this.top;

    while (tempNode !== null) {
      displayedStack += ` ${tempNode.data},`;

      tempNode = tempNode.next;
    }
      
    displayedStack += ' null';
    
    return displayedStack;
  }
}

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseString = '';
  let stringStack = new Stack();
  
  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i]);
  }

  let tempNode = stringStack.top;

  while (tempNode !== null) {
    reverseString += tempNode.data;
    tempNode = tempNode.next;
  }

  if (reverseString === string) {
    return true;
  } else {
    return false;
  }
}

/*
console.log(is_palindrome('Danny :Boy,'));
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
*/

function parenthesesMatch1(string) {
  // Instantiate a new stack and assign it to a variable.
  const stack = new Stack();

  // Begin looping through the string
  for (let i = 0; i < string.length; i++) {
    // Assign the character at 'i' to a variable, called char.
    const char = string.charAt(i);
    // if char === an open parenthesis execute the block of code
    if (char === '(') {
      // push that open parenthesis onto the stack
      stack.push(char);
    } 
    // otherwise, if char equals a closing parenthesis execute the code block
    else if (char === ')') {
      // candidate is being set to whatever value is at the top of the stack.
      const candidate = stack.peek();
      // if candidate isn't a truthy value, meaning an open parenthesis, 
      if (!candidate) {
        // return false, which means that it is not a valid expression.
        return false;
      }
      // remove the item off of the top of the stack. This is resetting the stack.
      stack.pop();
    }
  }

  // if stack.peek returns a truthy value still, return false. 
  if (stack.peek()) {
    return false;
  }
  // otherwise, we are return true. The expression is valid.
  return true;
}

function parenthesisMatch2(string) {
  // instantiate a new stack to the variable, stack.
  const stack = new Stack();

  // instantiate an object to the variable, brackets. This object contains keys and values of opening and closing brackets.
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  // instantiate a variable and assign the value to be an array of the Object brackets' keys.
  const openBrackets = Object.keys(brackets);
  // instantiate a variable and assign the value to be an array of the Object bracket' values.
  const closeBrackets = Object.values(brackets);

  // begin looping through the string
  for (let i = 0; i < string.length; i++) {
    // capture the value of the charAt(i) of the string
    const char = string.charAt(i);
    // basically, if it's an open bracket, then push that to the stack.
    if (openBrackets.includes(char)) {
      stack.push(char);
    }
    // otherwise, if it's a closing bracket, see what value is at the top of the stack. if the current character doesn't matche the value of brackets[candidate] which would return one of three closing brackets then return false, it's not a true expression.
    else if (closeBrackets.includes(char)) {
      const candidate = stack.peek();
      if (brackets[candidate] !== char) {
        return false;
      }
      // otherwise, if they do match then remove the top of the stack.
      stack.pop();
    }
  }

  // if after all the looping there are still open bracket values in the stack, then you should return false. It is not a valid expression.
  if (stack.peek()) {
    return false;
  }

  // otherwise, you are returning true. It is a valid expression.
  return true;
}

function parenthesisMatch3(string) {
  const stack = new Stack();

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const openBrackets = Object.keys(brackets);
  const closeBrackets = Object.keys(brackets);

  const quotes = ['"', "'"];

  let inQuotes = false;

  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    if (quotes.includes(char)) {
      if (inQuotes) {
        const candidate = stack.peek();
        if (candidate === char) {
          stack.pop();
          inQuotes = false;
        }
      }
      else {
        stack.push(char);
        inQuotes = true;
      }
    }
    else if (openBrackets.includes(char) && !inQuotes) {
      stack.push(char);
    }
    else if (closeBrackets.includes(char) && !inQuotes) {
      const candidate = stack.peek();
      if (brackets[candidate] !== char) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.peek()) {
    return false;
  }
  return true;
}

function main() {
  let stack = new Stack();
  let emptyStack = new Stack();

  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  
  /*
  console.log('emptyStack.display', emptyStack.display());
  console.log('stack.display before pop', stack.display());
  */

  stack.pop();

  /*
  console.log('stack.display after pop', stack.display());
  console.log('emptyStack.isEmpty: ', emptyStack.isEmpty());
  console.log('stack.isEmpty: ', stack.isEmpty());
  console.log('Peek Empty: ', emptyStack.peek());
  console.log('Peek: ', stack.peek());
  console.log(stack);
  */
}

main();