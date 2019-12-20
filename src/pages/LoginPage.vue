<template>
  <q-page padding style="display: flex; align-items: center;">
    <div
      class="q-pa-xl text-center column items-center justify-center"
      style="margin:0 auto"
    >
      <h1 class="heading">Admin Login</h1>
      <q-card class="auth-card">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import LoginRegister from "../components/auth/LoginRegister";
export default {
  name: "LoginPage",
  components: { LoginRegister },
  data() {
    return {
      tab: "login"
    };
  }
};
</script>

<style>
.auth-card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
