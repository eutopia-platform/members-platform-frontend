const ALLOW_EVALUATED = true

/*
  ASSERTION FUNCTION - exception will be raised on failure
  if condition is passed as function, it will not be evaluated in production mode
  failure message is optional
*/
export const assert =
  process.env.NODE_ENV === 'development'
    ? (expr, msg) => {
        if (!ALLOW_EVALUATED && typeof expr !== 'function')
          throw new Error('assert of evaluated expressions is deactivated')
        if (typeof expr === 'function' ? !expr() : !expr)
          throw new Error(
            msg ||
              'assertion failed' +
                (typeof expr === 'function' ? `: ${expr}` : '')
          )
      }
    : () => true
