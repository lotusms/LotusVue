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
              <q-form @submit.prevent="submitForm">
                <div class="column q-mb-lg">
                  <label class="weight-bold">Title</label>
                  <q-input
                    filled
                    dense
                    v-model="title"
                    hint="The post title"
                    class="col"
                    :rules="[val => !!val || 'Field is required']"
                  />
                </div>
                <div class="column q-mb-lg">
                  <label class="weight-bold">Permalink</label>
                  <q-input
                    filled
                    type="url"
                    v-model="url"
                    label="Permalink"
                    hint="ex: my-great-post"
                    class="col"
                    :rules="[val => !!val || 'Field is required']"
                  />
                </div>

                <div class="column q-mb-lg">
                  <label class="weight-bold">Upload Image</label>
                  <q-uploader
                    url="http://localhost:4444/upload"
                    label="Image Size"
                    multiple
                    class="col"
                    accept=".jpg, image/*"
                    style="max-width: 300px"
                  />
                </div>

                <div class="column q-mb-lg">
                  <label class="weight-bold">Post Content</label>
                  <q-editor
                    v-model="text"
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
import Butter from "buttercms";
export const butter = Butter("96cab44371a94ebbf9835d99e990f10d47827a49");

export default {
  name: "CreateBlog",
  data() {
    return {
      title: "",
      url: "",
      text: ""
    };
  },
  methods: {
    add(name) {
      const edit = this.$refs.editor;
      this.$refs.token.hide();
      edit.caret.restore();
      edit.runCmd(
        "insertHTML",
        `&nbsp;<div class="editor_token row inline items-center" contenteditable="false">&nbsp;<span>${name}</span>&nbsp;<i class="q-icon material-icons cursor-pointer" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">close</i></div>&nbsp;`
      );
      edit.focus();
    }
  }
};
</script>

<style lang="scss" scoped></style>
