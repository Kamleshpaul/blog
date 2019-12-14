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
                    <form method="post" data-form-title="CONTACT US">
                      <input type="hidden" data-form-email="true" />
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          required
                          placeholder="Name*"
                          data-form-field="Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          required
                          placeholder="Email*"
                          data-form-field="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="tel"
                          class="form-control"
                          name="phone"
                          placeholder="Phone"
                          data-form-field="Phone"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Message"
                          rows="7"
                          data-form-field="Message"
                        ></textarea>
                      </div>
                      <div>
                        <button type="submit" class="btn btn-lg btn-primary">CONTACT US</button>
                      </div>
                    </form>
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
export default {
  data() {
    return {};
  }
};
</script>