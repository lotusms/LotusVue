<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="full-width row wrap justify-start items-start">
        <div class="col-xs-12 col-md-8">
          <div class="q-ma-md">
            <blog-post
              :title="title"
              :date="date"
              :image="image"
              :text="text"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="q-ma-md">
            <sidebar-menu />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import SidebarMenu from "../../components/blog/SidebarMenu";
import BlogPost from "../../components/blog/BlogPost";
export default {
  name: "BlogPage",
  components: {
    SidebarMenu,
    BlogPost
  },
  data() {
    return {
      title: "Confirmation Dialogs. Ugh...",
      date: "13 Mar 2017",
      image: "Undo-Dialog.jpg",
      text:
        '<h4>Confirm or Undo?</h4>	<p>Confirmation messages is a concept that has been in every UX Engineer\'s crosshairs for many years. And for the most part, the concept has been slowly evolving and pointing in the right direction. Of course, there were a few hiccups along the process, such as Windows Vista excessive amount of confirmation dialogs. Especially positive confirmations, where the user must physically confirm an action they intended to do. This had numerous negative feedback from users all over the world.<br/><br/>Although I agree that confirmation dialogs protect the application\'s integrity when an accidental deletion or click has occurred, it is completely unnecessary to reiterate to the user that his positive action was successful. There are exceptions to this rule, of course, however, they would be considered the exception, rather than the rule.<br/><br/>A more user-friendly way to ask for confirmation in a way that it is neutral, less invasive, and more intuitive is to allow for "Undo" in a timed element. When you provide the user with an "Undo" timed link, you are respecting his human intentions to either delete or create, meanwhile creating a safety net with an option to undo that action in case it was a mistake.</p><h4>Reading Material</h4><a href="http://ux.stackexchange.com/questions/71960/deletion-confirm-or-undo-which-is-the-better-option-and-why" target="_blank">Deletion: Confirm or Undo? Which is the better option and why?</a>'
    };
  }
};
</script>

<style></style>
