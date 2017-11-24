import jsc from 'jsverify'

global.property = jsc.property
const any = {}
global.any = any
any.naturalNumber = jsc.nat
any.boolean = jsc.bool
