<template>
  <div>
    <div
      class="fit row justify-start items-start content-start"
      id="blogContent"
    >
      <div
        class="col-xs-12 col-sm-6 col-md-4"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <div class="q-mb-lg q-px-lg">
          <q-card class="my-card" square style>
            <a :href="`#/${blog.url}`">
              <div class="ms-thumbnail ms-thumbnail-diagonal">
                <img :src="blog.image" :alt="blog.title" />
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h5 class="green-text ms-thumbnail-caption-title">
                      {{ blog.title }}
                    </h5>
                  </div>
                </figcaption>
              </div>
            </a>
            <div class="bg-grey-2">
              <q-card-section>
                <h5 class="green-text q-mb-none">{{ blog.title }}</h5>
                <div class="text-subtitle1 date-section q-mt-none">
                  <q-icon
                    size="5"
                    name="calendar_today"
                    color="primary"
                    class="icon"
                  />
                  {{ blog.date | niceDate }}
                </div>
              </q-card-section>

              <q-card-section v-html="blog.text">...</q-card-section>

              <q-card-section>
                <q-btn
                  color="primary-alt full-width"
                  label="Read More"
                  :to="`/${blog.url}`"
                />
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <!-- <ul class="row justify-center no-bullet">
      <li>
        <a href="#" @click="showPrev">
          <q-icon name="chevron_left" size="sm" />
        </a>
      </li>
      <li v-for="pageNumber in totalPages">
        <a
          href="#"
          @click="setPage(pageNumber)"
          :class="{
            current: currentPage === pageNumber,
            last:
              pageNumber == totalPages &&
              Math.abs(pageNumber - currentPage) > 3,
            first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3
          }"
          >{{ pageNumber }}</a
        >
      </li>
      <li>
        <a href="#" @click="showNext">
          <q-icon name="chevron_right" size="sm" />
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { date } from "quasar";
export default {
  name: "Blog",
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM Do, YYYY");
    }
  },
  data() {
    return {
      currentPage: 0,
      itemsPerPage: 2,
      resultCount: 0
    };
  },
  computed: {
    ...mapGetters("blogs", ["blogs"]),
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    isStartPage: function() {
      return this.currentPage == 0;
    },
    isEndPage: function() {
      return this.currentPage * this.itemsPerPage >= this.links.length;
    }
  },
  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },
    paginate: function() {
      if (!this.links || this.links.length != this.links.length) {
        return;
      }
      this.resultCount = this.links.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.links.slice(index, index + this.itemsPerPage);
    },
    showPrev: function() {
      if (this.isStartPage) return;
      this.currentPage--;
    },
    showNext: function() {
      if (this.isEndPage) return;
      this.currentPage++;
    }
  },
  created: function() {
    this.setPage(1);
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}
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
    font-size: 12px;
    margin-right: 5px;
  }
  span {
    font-size: 13px;
  }
}

.no-bullet {
  list-style-type: none;
  li {
    a {
      min-width: 2em;

      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
      position: relative;
      outline: 0;
      border: 0;
      vertical-align: middle;
      padding: 0;
      font-size: 14px;
      line-height: 1.715em;
      text-decoration: none;
      color: inherit;
      background: transparent;
      font-weight: 500;
      text-transform: uppercase;
      text-align: center;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      padding: 7px;
      border-radius: 3px;
      margin: 0 5px;
      &.current {
        color: #ffffff !important;
        background: $primary !important;
      }
    }
  }
}
</style>
