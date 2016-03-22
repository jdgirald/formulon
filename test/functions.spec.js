/* global describe it */

'use strict'

const expect = require('chai').expect

import * as functions from '../src/functions'
import { buildLiteralFromJs } from '../src/utils'

// Math Operators and  Functions

describe('add', () => {
  it('adds correctly', () => {
    expect(functions.sf$add(buildLiteralFromJs(1), buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(3))
  })
})

describe('subtract', () => {
  it('subtracts correctly', () => {
    expect(functions.sf$subtract(buildLiteralFromJs(10), buildLiteralFromJs(100))).to.deep.eq(buildLiteralFromJs(-90))
  })
})

describe('multiply', () => {
  it('multiplies correctly', () => {
    expect(functions.sf$multiply(buildLiteralFromJs(7), buildLiteralFromJs(8))).to.deep.eq(buildLiteralFromJs(56))
  })
})

describe('divide', () => {
  it('divides correctly', () => {
    expect(functions.sf$divide(buildLiteralFromJs(10), buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(5))
  })
})

describe('exponentiate', () => {
  it('exponentiates correctly', () => {
    expect(functions.sf$exponentiate(buildLiteralFromJs(2), buildLiteralFromJs(5))).to.deep.eq(buildLiteralFromJs(32))
  })
})

// Logical Operators and Functions

describe('and', () => {
  it('both true', () => {
    expect(functions.sf$and(buildLiteralFromJs(true), buildLiteralFromJs(true))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('false and true', () => {
    expect(functions.sf$and(buildLiteralFromJs(false), buildLiteralFromJs(true))).to.deep.eq(buildLiteralFromJs(false))
  })

  it('true and false', () => {
    expect(functions.sf$and(buildLiteralFromJs(true), buildLiteralFromJs(false))).to.deep.eq(buildLiteralFromJs(false))
  })

  it('both false', () => {
    expect(functions.sf$and(buildLiteralFromJs(false), buildLiteralFromJs(false))).to.deep.eq(buildLiteralFromJs(false))
  })
})

describe('or', () => {
  it('both true', () => {
    expect(functions.sf$or(buildLiteralFromJs(true), buildLiteralFromJs(true))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('false and true', () => {
    expect(functions.sf$or(buildLiteralFromJs(false), buildLiteralFromJs(true))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('true and false', () => {
    expect(functions.sf$or(buildLiteralFromJs(true), buildLiteralFromJs(false))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('both false', () => {
    expect(functions.sf$or(buildLiteralFromJs(false), buildLiteralFromJs(false))).to.deep.eq(buildLiteralFromJs(false))
  })
})

describe('not', () => {
  it('true', () => {
    expect(functions.sf$not(buildLiteralFromJs(true))).to.deep.eq(buildLiteralFromJs(false))
  })

  it('false', () => {
    expect(functions.sf$not(buildLiteralFromJs(false))).to.deep.eq(buildLiteralFromJs(true))
  })
})

describe('if', () => {
  it('true', () => {
    expect(functions.sf$if(buildLiteralFromJs(true), buildLiteralFromJs('first'), buildLiteralFromJs('second'))).to.deep.eq(buildLiteralFromJs('first'))
  })
  it('false', () => {
    expect(functions.sf$if(buildLiteralFromJs(false), buildLiteralFromJs('first'), buildLiteralFromJs('second'))).to.deep.eq(buildLiteralFromJs('second'))
  })
})

// Math Functions

describe('abs', () => {
  it('positive value', () => {
    expect(functions.sf$abs(buildLiteralFromJs(10))).to.deep.eq(buildLiteralFromJs(10))
  })

  it('negative value', () => {
    expect(functions.sf$abs(buildLiteralFromJs(-20))).to.deep.eq(buildLiteralFromJs(20))
  })
})

describe('ceiling', () => {
  it('fix value', () => {
    expect(functions.sf$ceiling(buildLiteralFromJs(10))).to.deep.eq(buildLiteralFromJs(10))
  })

  it('positive low value', () => {
    expect(functions.sf$ceiling(buildLiteralFromJs(0.1))).to.deep.eq(buildLiteralFromJs(1))
  })

  it('positive high value', () => {
    expect(functions.sf$ceiling(buildLiteralFromJs(999.9))).to.deep.eq(buildLiteralFromJs(1000))
  })

  it('negative low value', () => {
    expect(functions.sf$ceiling(buildLiteralFromJs(-0.1))).to.deep.eq(buildLiteralFromJs(-0))
  })

  it('negative high value', () => {
    expect(functions.sf$ceiling(buildLiteralFromJs(-999.9))).to.deep.eq(buildLiteralFromJs(-999))
  })
})

describe('exp', () => {
  it('Integer Literal', () => {
    expect(functions.sf$exp(buildLiteralFromJs(10))).to.deep.eq(buildLiteralFromJs(22026.46579480671))
  })
})

describe('distance', () => {})

describe('floor', () => {
  it('fix value', () => {
    expect(functions.sf$floor(buildLiteralFromJs(10))).to.deep.eq(buildLiteralFromJs(10))
  })

  it('positive low value', () => {
    expect(functions.sf$floor(buildLiteralFromJs(0.1))).to.deep.eq(buildLiteralFromJs(0))
  })

  it('positive high value', () => {
    expect(functions.sf$floor(buildLiteralFromJs(999.9))).to.deep.eq(buildLiteralFromJs(999))
  })

  it('negative low value', () => {
    expect(functions.sf$floor(buildLiteralFromJs(-0.1))).to.deep.eq(buildLiteralFromJs(-1))
  })

  it('negative high value', () => {
    expect(functions.sf$floor(buildLiteralFromJs(-999.9))).to.deep.eq(buildLiteralFromJs(-1000))
  })
})

describe('geolocation', () => {})

describe('ln', () => {
  it('Integer Literal', () => {
    expect(functions.sf$ln(buildLiteralFromJs(5))).to.deep.eq(buildLiteralFromJs(1.6094379124341003))
  })

  it('e', () => {
    expect(functions.sf$ln(buildLiteralFromJs(Math.E))).to.deep.eq(buildLiteralFromJs(1))
  })
})

describe('log', () => {
  it('Integer Literal', () => {
    expect(functions.sf$log(buildLiteralFromJs(7))).to.deep.eq(buildLiteralFromJs(0.8450980400142568))
  })

  it('10', () => {
    expect(functions.sf$log(buildLiteralFromJs(10))).to.deep.eq(buildLiteralFromJs(1))
  })
})

describe('max', () => {
  it('2 elements', () => {
    expect(functions.sf$max(buildLiteralFromJs(1), buildLiteralFromJs(1000))).to.deep.eq(buildLiteralFromJs(1000))
  })

  it('5 elements', () => {
    expect(
      functions.sf$max(
        buildLiteralFromJs(-7),
        buildLiteralFromJs(2),
        buildLiteralFromJs(-8),
        buildLiteralFromJs(-100),
        buildLiteralFromJs(10)
      )).to.deep.eq(buildLiteralFromJs(10))
  })
})

describe('min', () => {
  it('2 elements', () => {
    expect(functions.sf$min(buildLiteralFromJs(1), buildLiteralFromJs(1000))).to.deep.eq(buildLiteralFromJs(1))
  })

  it('5 elements', () => {
    expect(
      functions.sf$min(
        buildLiteralFromJs(-7),
        buildLiteralFromJs(2),
        buildLiteralFromJs(-8),
        buildLiteralFromJs(-100),
        buildLiteralFromJs(10)
      )).to.deep.eq(buildLiteralFromJs(-100))
  })
})

describe('mod', () => {
  it('positive number without remainder', () => {
    expect(functions.sf$mod(buildLiteralFromJs(10), buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(0))
  })

  it('positive number with remainder', () => {
    expect(functions.sf$mod(buildLiteralFromJs(10), buildLiteralFromJs(3))).to.deep.eq(buildLiteralFromJs(1))
  })

  it('negative number without remainder', () => {
    expect(functions.sf$mod(buildLiteralFromJs(-15), buildLiteralFromJs(3))).to.deep.eq(buildLiteralFromJs(-0))
  })

  it('negative number with remainder', () => {
    expect(functions.sf$mod(buildLiteralFromJs(-15), buildLiteralFromJs(6))).to.deep.eq(buildLiteralFromJs(-3))
  })
})

describe('round', () => {
  it('positive number round up to full number', () => {
    expect(functions.sf$round(buildLiteralFromJs(1.5), buildLiteralFromJs(0))).to.deep.eq(buildLiteralFromJs(2))
  })

  it('positive number round down to full number', () => {
    expect(functions.sf$round(buildLiteralFromJs(1.2345), buildLiteralFromJs(0))).to.deep.eq(buildLiteralFromJs(1))
  })

  it('negative number round up to full number', () => {
    expect(functions.sf$round(buildLiteralFromJs(-1.5), buildLiteralFromJs(0))).to.deep.eq(buildLiteralFromJs(-2))
  })

  it('positive number round up to 2 digits', () => {
    expect(functions.sf$round(buildLiteralFromJs(225.49823), buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(225.50))
  })

  it('positive number down to 2 digits', () => {
    expect(functions.sf$round(buildLiteralFromJs(-225.495), buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(-225.50))
  })
})

describe('sqrt', () => {
  it('square number', () => {
    expect(functions.sf$sqrt(buildLiteralFromJs(121))).to.deep.eq(buildLiteralFromJs(11))
  })

  it('non square number', () => {
    expect(functions.sf$sqrt(buildLiteralFromJs(2))).to.deep.eq(buildLiteralFromJs(1.4142135623730951))
  })
})

// Text Functions

describe('begins', () => {
  it('begins with', () => {
    expect(functions.sf$begins(buildLiteralFromJs('a string'), buildLiteralFromJs('a'))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('does not begin with', () => {
    expect(functions.sf$begins(buildLiteralFromJs('a string'), buildLiteralFromJs('b'))).to.deep.eq(buildLiteralFromJs(false))
  })
})

describe('br', () => {
  it('returns newline', () => {
    expect(functions.sf$br()).to.deep.eq(buildLiteralFromJs('\n'))
  })
})

describe('contains', () => {
  it('contains', () => {
    expect(functions.sf$contains(buildLiteralFromJs('a string'), buildLiteralFromJs('string'))).to.deep.eq(buildLiteralFromJs(true))
  })

  it('does not contain', () => {
    expect(functions.sf$contains(buildLiteralFromJs('a string'), buildLiteralFromJs('integer'))).to.deep.eq(buildLiteralFromJs(false))
  })
})

describe('left', () => {
  it('returns correct string', () => {
    expect(functions.sf$left(buildLiteralFromJs('12345'), buildLiteralFromJs(3))).to.deep.eq(buildLiteralFromJs('123'))
  })

  it('returns correct string for negative input', () => {
    expect(functions.sf$left(buildLiteralFromJs('12345'), buildLiteralFromJs(-1))).to.deep.eq(buildLiteralFromJs(''))
  })
})

describe('len', () => {
  it('returns correct length', () => {
    expect(functions.sf$len(buildLiteralFromJs('12345'))).to.deep.eq(buildLiteralFromJs(5))
  })
})

describe('lower', () => {
  it('returns correct string', () => {
    expect(functions.sf$lower(buildLiteralFromJs('MYCOMPANY.COM'))).to.deep.eq(buildLiteralFromJs('mycompany.com'))
  })
})

describe('lpad', () => {
  it('no pad string given', () => {
    expect(functions.sf$lpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(20))).to.deep.eq(buildLiteralFromJs('my_company.com'))
  })

  it('string longer than padded length', () => {
    expect(functions.sf$lpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(14), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('my_company.com'))
  })

  it('padded length longer than string', () => {
    expect(functions.sf$lpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(15), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('zmy_company.com'))
  })

  it('padded length shorter than string', () => {
    expect(functions.sf$lpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(2), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('my'))
  })
})

describe('mid', () => {
  it('returns correct string', () => {
    expect(functions.sf$mid(buildLiteralFromJs('12345'), buildLiteralFromJs(2), buildLiteralFromJs(3))).to.deep.eq(buildLiteralFromJs('234'))
  })
})

describe('rpad', () => {
  it('no pad string given', () => {
    expect(functions.sf$rpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(20))).to.deep.eq(buildLiteralFromJs('my_company.com'))
  })

  it('string longer than padded length', () => {
    expect(functions.sf$rpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(14), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('my_company.com'))
  })

  it('padded length longer than string', () => {
    expect(functions.sf$rpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(15), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('my_company.comz'))
  })

  it('padded length shorter than string', () => {
    expect(functions.sf$rpad(buildLiteralFromJs('my_company.com'), buildLiteralFromJs(2), buildLiteralFromJs('z'))).to.deep.eq(buildLiteralFromJs('my'))
  })
})

describe('trim', () => {
  it('no trailing spaces', () => {
    expect(functions.sf$trim(buildLiteralFromJs('a string'))).to.deep.eq(buildLiteralFromJs('a string'))
  })

  it('trailing spaces', () => {
    expect(functions.sf$trim(buildLiteralFromJs('a string '))).to.deep.eq(buildLiteralFromJs('a string'))
  })

  it('leading spaces', () => {
    expect(functions.sf$trim(buildLiteralFromJs('  a string'))).to.deep.eq(buildLiteralFromJs('a string'))
  })

  it('trailing and leading spaces', () => {
    expect(functions.sf$trim(buildLiteralFromJs('  a string  '))).to.deep.eq(buildLiteralFromJs('a string'))
  })
})

describe('right', () => {
  it('returns correct string', () => {
    expect(functions.sf$right(buildLiteralFromJs('12345'), buildLiteralFromJs(3))).to.deep.eq(buildLiteralFromJs('345'))
  })

  it('returns correct string for negative input', () => {
    expect(functions.sf$left(buildLiteralFromJs('12345'), buildLiteralFromJs(-1))).to.deep.eq(buildLiteralFromJs(''))
  })
})

describe('upper', () => {
  it('returns correct string', () => {
    expect(functions.sf$upper(buildLiteralFromJs('mycompany.com'))).to.deep.eq(buildLiteralFromJs('MYCOMPANY.COM'))
  })
})
