<template>
  <div>
    <div class="mini-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-text">
              <p>
                © 2019
                <a href="/">Blog</a>. All rights reserved. Created by
                <a
                  target="_blank"
                  href="https://kamleshpaul.com"
                >Kamlesh Paul</a>
              </p>
            </div>
            <div class="go_top">
              <span class="icon-arrow-up"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.mini-footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #192027;
  text-align: center;
  padding: 5px 0;
  color:#fff;
}
</style>