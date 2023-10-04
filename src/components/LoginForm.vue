<template>
   <form >
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
</template>
<script lang="ts">


export default {
  name: 'LoginForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:25|alpha_spaces',
        email: 'required|email',
        age: 'required|min_value:5|max_value:135',
        password: 'required|min:3|max:25',
        confirmed_password: 'confirmed:@password',
        country: 'required|not_one_of:Canada',
        tos: ''
      },
      userData: {
        country: 'USA'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_varient: 'bg-blue-500',
      reg_alert_msg: 'Please wait! your acount is being creating'
    }
  },
  methods: {
    register(values: object) {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_varient = 'bg-green-500'
      this.reg_alert_msg = 'done'
      console.log(values)
    }
  }
}
</script>