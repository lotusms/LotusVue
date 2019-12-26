<template>
  <q-page>
    <div class="q-pa-xl full-width full-height column">
      <div class="row">
        <div class="col-xs-12">
          <h1
            class="heading text-secondary bottom-border text-center justify-center"
          >
            Create Blog
          </h1>
        </div>
      </div>
      <div class="full-width row justify-start items-start content-start">
        <div class="col-xs-12 col-md-8">
          <q-card class="my-card q-ma-sm" square style>
            <div class="bg-grey-2">
              <q-card-section>
                <h2 class="green-text q-mb-none">Add New Post</h2>
              </q-card-section>

              <q-card-section>
                <q-form @submit.prevent="submitBlog">
                  <div class="column q-mb-lg">
                    <label class="weight-bold">Title</label>
                    <q-input
                      filled
                      dense
                      v-model="blogToSubmit.title"
                      hint="The post title"
                      class="col"
                      :rules="[val => !!val || 'Field is required']"
                    />
                  </div>

                  <div class="column q-mb-lg">
                    <label class="weight-bold">Upload Image</label>
                    <div class="row">
                      <q-btn
                        color="primary-alt"
                        class="q-mr-lg"
                        @click="onPickFile()"
                        >Upload</q-btn
                      >
                      <q-input
                        filled
                        v-model="blogToSubmit.image"
                        type="file"
                        style="display:none"
                        ref="fileInput"
                        accept=".jpg, image/*"
                        @change="onFilePicked"
                      />
                      <img :src="blogToSubmit.image" alt="file uploaded" />
                    </div>
                  </div>

                  <div class="column q-mb-lg">
                    <label class="weight-bold">Upload Thumbnail</label>
                    <div class="row">
                      <q-btn
                        color="primary-alt"
                        class="q-mr-lg"
                        @click="onPickThumb()"
                        >Upload</q-btn
                      >
                      <q-input
                        filled
                        v-model="blogToSubmit.thumb"
                        type="file"
                        style="display:none"
                        ref="thumbInput"
                        accept=".jpg, image/*"
                        @change="onThumbPicked"
                      />
                      <img :src="blogToSubmit.thumb" alt="thumbnail uploaded" />
                    </div>
                  </div>

                  <div class="column q-mb-lg">
                    <label class="weight-bold">Excerpt</label>
                    <q-input
                      filled
                      v-model="blogToSubmit.excerpt"
                      label="Excerpt"
                      hint="Sneek peak to the content"
                      class="col"
                      :rules="[val => !!val || 'Field is required']"
                    />
                  </div>

                  <div class="column q-mb-lg">
                    <label class="weight-bold">Post Content</label>
                    <q-editor
                      v-model="blogToSubmit.text"
                      class="col"
                      :toolbar="[
                        ['bold', 'italic', 'strike', 'underline'],
                        [
                          {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
                          },
                          {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                              'size-1',
                              'size-2',
                              'size-3',
                              'size-4',
                              'size-5',
                              'size-6',
                              'size-7'
                            ]
                          }
                        ],
                        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                        ['viewsource']
                      ]"
                    />
                  </div>
                  <q-btn
                    color="primary-alt"
                    type="submit"
                    label="Submit Post"
                  />
                </q-form>
              </q-card-section>
            </div>
          </q-card>
        </div>

        <div class="col-xs-12 col-md-4">
          <q-card class="my-card q-ma-sm" square style>
            <div class="bg-grey-2">
              <q-card-section>
                <h2 class="green-text q-mb-none">Current Posts</h2>
              </q-card-section>

              <q-card-section>
                <q-list separator>
                  <q-item
                    v-for="(blog, index) in blogs"
                    :key="index"
                    clickable
                    v-ripple
                    exact
                  >
                    <q-item-section avatar>
                      <q-avatar>
                        <img
                          :src="blog.thumb"
                          :alt="blog.title"
                          class="avatar"
                        />
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label lines="2">{{ blog.title }}</q-item-label>
                    </q-item-section>
                    <q-item-section side top class="date-section">
                      <q-icon
                        size="25"
                        name="edit"
                        color="primary"
                        class="icon"
                      />
                      <q-icon
                        size="15"
                        name="delete_forever"
                        color="negative"
                        class="icon"
                        @click="removeBlog(blog)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { uid } from "quasar";
import MixinGetPosts from "../mixins/get-posts";
import { date } from "quasar";
import { firebaseDb, firebaseAuth } from "../boot/firebase";

let blogRef = firebaseDb.ref("blogs");

let keyId = blogRef.key;

let blogRef2 = firebaseDb.ref("blogs" + keyId);

export default {
  name: "CreateBlog",
  mixins: [MixinGetPosts],
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM Do, YYYY");
    }
  },
  data() {
    return {
      // id: this.id,
      imageUrl: null,
      blogToSubmit: {
        title: "",
        url: "",
        text: "",
        excerpt: "",
        image: null,
        thumb: null,
        blog_id: uid(),
        date: Date.now()
      },
      blogs: []
    };
  },
  // props: ["blog", "id"],
  methods: {
    // ...mapActions("blogs", ["deleteBlog"]),
    addBlog() {
      blogRef.push(this.blogToSubmit);
      this.blogToSubmit.title = "";
      this.blogToSubmit.text = "";
      this.blogToSubmit.excerpt = "";
      this.blogToSubmit.image = "";
      this.blogToSubmit.thumb = "";
      this.blogToSubmit.blog_id = "";
      this.blogToSubmit.date = "";
    },
    clearFields() {
      this.blogToSubmit.title = "";
      this.blogToSubmit.url = "";
      this.blogToSubmit.text = "";
      this.blogToSubmit.excerpt = "";
      this.blogToSubmit.image = null;
      this.blogToSubmit.thumb = null;
    },
    submitBlog() {
      this.addBlog();
      this.clearFields();
    },
    removeBlog: function(blog) {
      console.log(blog);
      blogRef2.remove();
    },
    onPickFile() {
      this.$refs.fileInput.$el.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Not a valid file");
      }

      const fileReader = new FileReader();

      fileReader.addEventListener("load", () => {
        this.blogToSubmit.image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.blogToSubmit.image = files[0];
    },
    onPickThumb() {
      this.$refs.thumbInput.$el.click();
    },
    onThumbPicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Not a valid file");
      }

      const fileReader = new FileReader();

      fileReader.addEventListener("load", () => {
        this.blogToSubmit.thumb = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.blogToSubmit.thumb = files[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.date-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .avatar {
    border: 2px solid $accent;
    img {
      border: 2px solid $accent;
    }
  }
  .icon {
    font-size: 20px;
    margin-left: 8px;
  }
  span {
    font-size: 13px;
  }
}
</style>
