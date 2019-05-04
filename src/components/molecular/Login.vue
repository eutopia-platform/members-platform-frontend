<template>
  <div>
    <Input
      type="email"
      name="email"
      placeholder="Email"
      @valueChange="updateVal"
    />
    <Input
      type="password"
      name="password"
      placeholder="Password"
      @valueChange="updateVal"
    />
    <Button @click="submit">Login</Button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    updateVal(data) {
      // data == { name: value } E.g. { "email": "john.doe@vue.js" }
      // This method only works because the Input components have the same names as the variables in data
      this[data.name] = data.value
    },
    submit() {
      const data = {
        email: this.email,
        password: this.password,
      }
      //Currently I haven't figured out how to reset password Input.
      this.$emit('submit', data)
    },
  },
}
</script>
