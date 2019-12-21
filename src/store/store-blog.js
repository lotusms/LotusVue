import Vue from "vue";
import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "../functions/function-show-error-message";

const state = {
  blogs: {},
  search: "",
  sort: "name"
};

const actions = {
  updateBlog({ dispatch }, payload) {
    dispatch("fbUpdateBlog", payload);
  },
  deleteBlog({ dispatch }, id) {
    dispatch("fbDeleteBlog", id);
  },
  addBlog({ dispatch }, blog) {
    let blogId = uid();
    let payload = {
      id: blogId,
      blog: blog
    };
    dispatch("fbAddBlog", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  setSort({ commit }, value) {
    commit("setSort", value);
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userBlogs = firebaseDb.ref("blogs/" + userId);

    //initial check for data
    userBlogs.once(
      "value",
      snapshot => {
        commit("setBlogsDownloaded", true);
      },
      error => {
        if (error) {
          showErrorMessage(error.message);
          this.$router.replace("/login");
        }
      }
    );

    // child added
    userBlogs.on("child_added", snapshot => {
      let blog = snapshot.val();

      let payload = {
        id: snapshot.key,
        blog: blog
      };

      commit("addBlog", payload);
    });

    //Child changed
    userBlogs.on("child_changed", snapshot => {
      let blog = snapshot.val();

      let payload = {
        id: snapshot.key,
        updates: blog
      };

      commit("updateBlog", payload);
    });

    // Child removed
    userBlogs.on("child_removed", snapshot => {
      let blogId = snapshot.key;
      commit("deleteBlog", blogId);
    });
  },
  fbAddBlog({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let blogRef = firebaseDb.ref("blogs/" + userId + "/" + payload.id);
    blogRef.set(payload.blog, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        console.log("Blog added!");
      }
    });
  },
  fbUpdateBlog({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let blogRef = firebaseDb.ref("blogs/" + userId + "/" + payload.id);
    blogRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        let keys = Object.keys(payload.updates);
        if (!(keys.includes("completed") && keys.length === 1)) {
          console.log("Blogk updated!");
        }
      }
    });
  },
  fbDeleteBlogk({}, blogId) {
    let userId = firebaseAuth.currentUser.uid;
    let blogRef = firebaseDb.ref("blogs/" + userId + "/" + blogId);
    blogRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        console.log("Blog deleted");
      }
    });
  }
};

const mutations = {
  updateBlog(state, payload) {
    Object.assign(state.blogs[payload.id], payload.updates);
  },
  deleteBlog(state, id) {
    Vue.delete(state.blogs, id);
  },
  addBlog(state, payload) {
    Vue.set(state.blogs, payload.id, payload.blog);
  },
  clearBlogs(state) {
    state.blogs = {};
  },
  setSearch(state, value) {
    state.search = value;
  },
  setSort(state, value) {
    state.sort = value;
  },
  setBlogsDownloaded(state, value) {
    state.blogsDownloaded = value;
  }
};

const getters = {
  blogs: state => {
    return state.blogs;
  },
  blogsSorted: state => {
    let blogsSorted = {},
      keysOrdered = Object.keys(state.blogs);

    keysOrdered.sort((a, b) => {
      let blogAProp = state.blogs[a][state.sort].toLowerCase(),
        blogBProp = state.blogs[b][state.sort].toLowerCase();
      if (blogAProp > blogBProp) return 1;
      else if (blogAProp < blogBProp) return -1;
      else return 0;
    });

    keysOrdered.forEach(key => {
      blogsSorted[key] = state.blogs[key];
    });

    return blogsSorted;
  },
  blogsFiltered: (state, getters) => {
    let blogSorted = getters.blogsSorted,
      blogsFiltered = {};
    if (state.search) {
      Object.keys(blogSorted).forEach(function(key) {
        let blog = blogSorted[key],
          blogNameLowerCase = blog.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase();
        if (blogNameLowerCase.includes(searchLowerCase)) {
          blogsFiltered[key] = blog;
        }
      });
      return blogsFiltered;
    }
    return blogSorted;
  },
  blogsTodo: (state, getters) => {
    let blogsFiltered = getters.blogsFiltered;
    let blogs = {};
    Object.keys(blogsFiltered).forEach(function(key) {
      let blog = blogsFiltered[key];
      if (!blog.completed) {
        blogs[key] = blog;
      }
    });
    return blogs;
  },
  blogsCompleted: (state, getters) => {
    let blogsFiltered = getters.blogsFiltered;
    let blogs = {};
    Object.keys(blogsFiltered).forEach(function(key) {
      let blog = blogsFiltered[key];
      if (blog.completed) {
        blogs[key] = blog;
      }
    });
    return blogs;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
