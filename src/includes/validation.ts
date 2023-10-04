import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as notOneOf
} from '@vee-validate/rules'

export default {
  install(app: any) {
    app.component('veeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('confirmed', confirmed)
    defineRule('not_one_of', notOneOf)

    configure({
      generateMessage: (ctx) => {
        const messages: { [key: string]: string } = {
          required: `The Field ${ctx.field} is reqired`,
          min: `The Field ${ctx.field} is too short`,
          max: `The Field ${ctx.field} is too long`,
          alpha_spaces: `The Field ${ctx.field} can have alphabet and spaces`,
          email: `The Field ${ctx.field} must be valid email`
        }

        const ruleName = ctx.rule?.name ?? 'unknown' // Use a default value if ctx.rule or ctx.rule.name is undefined

        const message = messages[ruleName] ? messages[ruleName] : 'Invalid'

        return message
      },
      validateOnBlur:true,
      validateOnChange:true,
      validateOnInput:false,
      validateOnModelUpdate:true,
    })
  }
}
