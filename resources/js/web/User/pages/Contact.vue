<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-3 mt-2 mb-4">
        <section>
          <div>
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <div>
                      <h2>CONTACT US</h2>
                    </div>
                    <ValidationObserver v-slot="{ invalid }">
                      <form @submit.prevent="sendMail">
                        <div class="form-group">
                          <ValidationProvider rules="required" v-slot="{ errors }">
                            <input
                              type="text"
                              v-model="form.name"
                              class="form-control"
                              placeholder="Name*"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group">
                          <ValidationProvider rules="required|email" v-slot="{ errors }">
                            <input
                              type="email"
                              v-model="form.email"
                              class="form-control"
                              placeholder="Email*"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group">
                          <ValidationProvider rules="numeric" v-slot="{ errors }">
                            <input
                              type="text"
                              v-model="form.phone"
                              class="form-control"
                              placeholder="Phone"
                            />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group">
                          <ValidationProvider rules="required" v-slot="{ errors }">
                            <textarea
                              class="form-control"
                              v-model="form.message"
                              placeholder="Message"
                              rows="7"
                            ></textarea>
                            <span class="text-danger">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div>
                          <button
                            v-show="!loader"
                            type="submit"
                            class="btn btn-lg btn-primary"
                            :disabled="invalid"
                          >CONTACT US</button>
                          <img
                            v-show="loader"
                            src="/images/loader-primary.svg"
                            alt="Loader"
                            width="40"
                          />
                        </div>
                      </form>
                    </ValidationObserver>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, numeric } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required"
});
extend("email", {
  ...email,
  message: "Please enter valid email"
});
extend("numeric", {
  ...numeric,
  message: "Please enter valid phone no"
});
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      loader: false
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    sendMail() {
      this.loader = true;
      axios.post("/api/send-mail", this.form).then(({ data }) => {
        if (data.message !== "") {
          Toast.fire({
            type: "success",
            title: data.message
          });
          this.form = Object.assign({}, "");
          this.loader = false;
        } else {
          this.loader = false;
        }
      });
    }
  }
};
</script>