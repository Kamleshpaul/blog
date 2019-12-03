<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form container">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="login">
                <div class="inner-container">
                  <div class="input-containe">
                    <ValidationProvider rules="required|email" v-slot="{ errors }">
                      <input type="email" class="input-place" v-model="email" />
                      <br />
                      <span class="text-white">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <label class="label">Email</label>
                  </div>

                  <div class="input-containe">
                    <ValidationProvider rules="required|min:6" v-slot="{ errors }">
                      <input type="password" class="input-place" v-model="password" />
                      <br />
                      <span class="text-white">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <label class="label">Password</label>
                  </div>

                  <div class="input-containe">
                    <input type="submit" vlaue="Login" :disabled="invalid" />
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, min } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This field is must an email"
});

extend("min", {
  ...min,
  message: "This field is must  have min 6 "
});
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store.dispatch("users/userLogin", { email, password });
    }
  }
};
</script>

<style scoped>
.inner-container {
  background: #3f6ad8 none repeat scroll 0 0;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  margin: 100px auto;
  max-width: 500px;
  padding: 50px;
  text-align: center;
  transition: all 300ms linear 0s;
}
.inner-container:hover {
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 40px;
}
.input-containe {
  margin: 20px 0;
  position: relative;
}
.input-containe input[type="text"] {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #6d8cda;
  border-color: currentcolor currentcolor #aaaaaa;
  border-image: none;
  border-style: none none solid;
  border-width: medium medium 2px;
  height: 40px;
  padding: 0 9px;
  width: 100%;
}
.input-containe label {
  color: #fff;
  font-size: 16px;
  left: -1px;
  position: absolute;
  top: 8px;
  transition: all 300ms linear 0s;
}
.input-place:focus ~ label,
.input-place:valid ~ label {
  font-size: 9px;
  top: 0;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.6;
}

input:focus::-moz-placeholder {
  color: transparent;
}
.input-containe::after {
  background: #fff none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transition: all 300ms ease 0s;
  width: 0;
}
.input-containe.active::after {
  width: 100%;
}
.input-containe.active label {
  font-size: 12px;
  left: 2px;
  opacity: 1;
  top: -1px;
}
input[type="submit"] {
  background-color: #ffffff;
  border: 2px solid #112967;
  border-radius: 5px;
  color: #112967;
  margin-top: 20px;
  padding: 7px;
  width: 160px;
}
input[type="submit"]:disabled {
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #112967;
  border-radius: 5px;
  color: #fff;
  margin-top: 20px;
  padding: 7px;
  width: 160px;
}
</style>