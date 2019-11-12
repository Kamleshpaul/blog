<template>
  <header id="header">
    <!-- NAV -->
    <div id="nav">
      <!-- Top Nav -->
      <div id="nav-top">
        <div class="container">
          <!-- social -->
          <ul class="nav-social">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <!-- /social -->

          <!-- logo -->
          <div class="nav-logo">
            <a href="index.html" class="logo">
              <img src="img/logo.png" alt />
            </a>
          </div>
          <!-- /logo -->

          <!-- search & aside toggle -->
          <div class="nav-btns">
            <button class="aside-btn">
              <i class="fa fa-bars"></i>
            </button>
            <button class="search-btn">
              <i class="fa fa-search"></i>
            </button>
            <div id="nav-search">
              <form>
                <input class="input" name="search" placeholder="Enter your search..." />
              </form>
              <button class="nav-close search-close">
                <span></span>
              </button>
            </div>
          </div>
          <!-- /search & aside toggle -->
        </div>
      </div>
      <!-- /Top Nav -->

      <!-- Main Nav -->
      <div id="nav-bottom">
        <div class="container">
          <!-- nav -->
          <ul class="nav-menu">
            <li class="has-dropdown">
              <a href="index.html">Home</a>
              <div class="dropdown">
                <div class="dropdown-body">
                  <ul class="dropdown-list">
                    <li>
                      <a href="category.html">Category page</a>
                    </li>
                    <li>
                      <a href="blog-post.html">Post page</a>
                    </li>
                    <li>
                      <a href="author.html">Author page</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacts</a>
                    </li>
                    <li>
                      <a href="blank.html">Regular</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="has-dropdown megamenu">
              <a href="#">Lifestyle</a>
              <div class="dropdown tab-dropdown">
                <div class="row">
                  <div class="col-md-2">
                    <ul class="tab-nav">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Lifestyle</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Fashion</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">Health</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">Travel</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-10">
                    <div class="dropdown-body tab-content">
                      <!-- tab1 -->
                      <div id="tab1" class="tab-pane fade in active">
                        <div class="row">
                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-10.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Travel</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Sed ut perspiciatis, unde omnis iste natus error sit</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->

                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-13.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Travel</a>
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->

                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-12.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->
                        </div>
                      </div>
                      <!-- /tab1 -->

                      <!-- tab2 -->
                      <div id="tab2" class="tab-pane fade in">
                        <div class="row">
                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-5.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Postea senserit id eos, vivendo periculis ei qui</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->

                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-8.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Fashion</a>
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Sed ut perspiciatis, unde omnis iste natus error sit</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->

                          <!-- post -->
                          <div class="col-md-4">
                            <div class="post post-sm">
                              <a class="post-img" href="blog-post.html">
                                <img src="img/post-9.jpg" alt />
                              </a>
                              <div class="post-body">
                                <div class="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 class="post-title title-sm">
                                  <a
                                    href="blog-post.html"
                                  >Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a>
                                </h3>
                                <ul class="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- /post -->
                        </div>
                      </div>
                      <!-- /tab2 -->

                      <!-- /tab3 tab4 .. -->
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="has-dropdown megamenu">
              <a href="#">Fashion</a>
              <div class="dropdown">
                <div class="dropdown-body">
                  <div class="row">
                    <div class="col-md-3">
                      <h4 class="dropdown-heading">Categories</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                        <li>
                          <a href="#">Technology</a>
                        </li>
                        <li>
                          <a href="#">Health</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <h4 class="dropdown-heading">Lifestyle</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                        <li>
                          <a href="#">Health</a>
                        </li>
                      </ul>
                      <h4 class="dropdown-heading">Technology</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <h4 class="dropdown-heading">Fashion</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                        <li>
                          <a href="#">Technology</a>
                        </li>
                      </ul>
                      <h4 class="dropdown-heading">Travel</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Healtth</a>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <h4 class="dropdown-heading">Health</h4>
                      <ul class="dropdown-list">
                        <li>
                          <a href="#">Technology</a>
                        </li>
                        <li>
                          <a href="#">Fashion</a>
                        </li>
                        <li>
                          <a href="#">Health</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
          </ul>
          <!-- /nav -->
        </div>
      </div>
      <!-- /Main Nav -->

      <!-- Aside Nav -->
      <div id="nav-aside">
        <ul class="nav-aside-menu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li class="has-dropdown">
            <a>Categories</a>
            <ul class="dropdown">
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="contact.html">Contacts</a>
          </li>
          <li>
            <a href="#">Advertise</a>
          </li>
        </ul>
        <button class="nav-close nav-aside-close">
          <span></span>
        </button>
      </div>
      <!-- /Aside Nav -->
    </div>
    <!-- /NAV -->
  </header>
</template>

<script>
export default {};
</script>
