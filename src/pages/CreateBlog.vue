<template>
  <q-page>
    <div class="q-pa-xl full-width full-height column">
      <div class="col-xs-12">
        <h1
          class="heading text-secondary bottom-border text-center justify-center"
        >
          Create Blog
        </h1>
      </div>

      <div class="col-xs-12">
        <q-card class="my-card" square style>
          <div class="bg-grey-2">
            <q-card-section>
              <h2 class="green-text q-mb-none">New blog post</h2>
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
                  <label class="weight-bold">Permalink</label>
                  <q-input
                    filled
                    v-model="blogToSubmit.url"
                    label="Permalink"
                    hint="ex: my-great-post"
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
                <q-btn color="primary-alt" type="submit" label="Submit Post" />
              </q-form>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import Butter from "buttercms";
export const butter = Butter("96cab44371a94ebbf9835d99e990f10d47827a49");

export default {
  name: "CreateBlog",
  data() {
    return {
      imageUrl: null,
      blogToSubmit: {
        title: "",
        url: "",
        text: "",
        image: null,
        thumb: null,
        date: Date.now()
      }
    };
  },
  methods: {
    ...mapActions("blogs", ["addBlog"]),
    submitBlog() {
      this.addBlog(this.blogToSubmit);
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

<style lang="scss" scoped></style>
