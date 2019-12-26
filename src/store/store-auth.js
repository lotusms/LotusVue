import { firebaseAuth } from "boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "../functions/function-show-error-message";

const state = {
  loggedIn: false
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  }
};

const actions = {
  registerUser({}, payload) {
    Loading.show();
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response);
        this.$router.push("/create-blog");
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        // this.$router.push("/create-blog").catch(err => {});
        dispatch("blogs/fbReadData", null, { root: true });
      } else {
        commit("blogs/clearTasks", null, { root: true });
        commit("blogs/setTasksDownloaded", false, { root: true });
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/").catch(err => {});
      }
    });
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
