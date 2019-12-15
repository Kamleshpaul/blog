<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Web Setting</h5>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="update">
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="logo" class>Website Name</label>
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <input
                          v-model="settings.web_name"
                          placeholder="Website Name"
                          type="text"
                          class="form-control"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="logo" class>Logo</label>
                      <input @change="processFile($event)" accept="image/*" type="file" />
                    </div>
                    <div class="position-relative form-group">
                      <img :src="settings.logo" width="100" />
                    </div>
                  </div>
                </div>

                <div class="text-right">
                  <button class="mt-2 btn btn-primary" :disabled="invalid">Update</button>
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
import { required } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";

import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        websiteName: "",
        logo: ""
      }
    };
  },
  computed: {
    ...mapState("websetting", ["settings"])
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    update() {
      this.form.websiteName = this.settings.web_name;
      this.form.logo = this.settings.logo;
      this.$store.dispatch("websetting/store", this.form);
    },
    processFile(event) {
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = ({ target }) => {
        this.settings.logo = target.result;
      };

      reader.readAsDataURL(file);
    }
  },
  mounted() {}
};
</script>

<style>
</style>