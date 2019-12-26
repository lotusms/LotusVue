import Vue from "vue";
import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "../functions/function-show-error-message";

const state = {
  blogs: {}
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
  fbReadData({ commit }) {
    let userBlogs = firebaseDb.ref("blogs/");

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
    let blogRef = firebaseDb.ref("blogs/" + payload.id);
    blogRef.set(payload.blog, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        console.log("Blog added!");
      }
    });
  },
  fbUpdateBlog({}, payload) {
    let blogRef = firebaseDb.ref("blogs/" + payload.id);
    blogRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        let keys = Object.keys(payload.updates);
        if (!(keys.includes("completed") && keys.length === 1)) {
          console.log("Blog updated!");
        }
      }
    });
  },
  fbDeleteBlog({}, state, blogId, payload) {
    let userId = firebaseAuth.currentUser.uid;
    console.log(userId);
    let blogRef = firebaseDb.ref("blogs/" + payload.id);
    // let blogRef = firebaseDb.ref("blogs/" + userId + "/" + blogId);
    // blogRef.remove(error => {
    //   if (error) {
    //     showErrorMessage(error.message);
    //   } else {
    //     console.log("Blog deleted");
    //   }
    // });
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
  setBlogsDownloaded(state, value) {
    state.blogsDownloaded = value;
  }
};

const getters = {
  blogs: state => {
    return state.blogs;
  }
  // blogsSorted: state => {
  //   let blogsSorted = {};
  //   let keysOrdered = Object.keys(state.blogs);

  //   keysOrdered.sort((a, b) => {
  //     let blogAProp = state.blogs[a].date;
  //     let blogBProp = state.blogs[b].date;
  //     if (blogAProp > blogBProp) return 1;
  //     else if (blogAProp < blogBProp) return -1;
  //     else return 0;
  //   });

  //   keysOrdered.forEach(key => {
  //     blogsSorted[key] = state.blogs[key];
  //   });

  //   return blogsSorted;
  // },
  // loadBlog: (state, getters) => {
  //   let blogPost = Object.keys(state.blogs)[key];
  //   console.log(blogPost);
  // let blogSorted = getters.blogsSorted;
  // blogPost.forEach(function(key) {
  //   let blog = blogSorted[key];
  //   blog[key] = blog;
  // });
  // return blogPost;
  // // return blogId => {
  //   return Object.keys(state.blogsSorted).find(blog => {
  //     return blog.id === blogId;
  //   });
  // };
  // },
  // blogsFiltered: (state, getters) => {
  //   let blogSorted = getters.blogsSorted,
  //     blogsFiltered = {};
  //   if (state.search) {
  //     Object.keys(blogSorted).forEach(function(key) {
  //       let blog = blogSorted[key],
  //         blogNameLowerCase = blog.name.toLowerCase(),
  //         searchLowerCase = state.search.toLowerCase();
  //       if (blogNameLowerCase.includes(searchLowerCase)) {
  //         blogsFiltered[key] = blog;
  //       }
  //     });
  //     return blogsFiltered;
  //   }
  //   return blogSorted;
  // }
  // blogsTodo: (state, getters) => {
  //   let blogsFiltered = getters.blogsFiltered;
  //   let blogs = {};
  //   Object.keys(blogsFiltered).forEach(function(key) {
  //     let blog = blogsFiltered[key];
  //     if (!blog.completed) {
  //       blogs[key] = blog;
  //     }
  //   });
  //   return blogs;
  // },
  // blogsCompleted: (state, getters) => {
  //   let blogsFiltered = getters.blogsFiltered;
  //   let blogs = {};
  //   Object.keys(blogsFiltered).forEach(function(key) {
  //     let blog = blogsFiltered[key];
  //     if (blog.completed) {
  //       blogs[key] = blog;
  //     }
  //   });
  //   return blogs;
  // }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
