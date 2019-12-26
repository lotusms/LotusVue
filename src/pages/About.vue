<template>
  <q-page>
    <div class="q-pa-xl full-width full-height column">
      <div>
        <h1
          class="heading text-secondary bottom-border text-center justify-center"
        >
          {{ heading }}
        </h1>
        <p class="pre-formatted">{{ text }}</p>
      </div>
      <div class="full-width row justify-around items-start">
        <div class="col-xs-12 col-sm-4">
          <q-card dark square class="q-ma-sm my-card">
            <div class="q-px-xl q-pt-xl text-center">
              <q-avatar size="240px" class="statements">
                <img src="../assets/vision.svg" alt="Vision Statement" />
              </q-avatar>
            </div>

            <q-card-section>
              <h4 class="green-text text-center">Our Vision</h4>
            </q-card-section>

            <q-card-section>
              <ul>
                <li>
                  To be the most trusted, and leading digital marketing & web
                  design company at the forefront of a new era in human
                  engagement.
                </li>
                <li>
                  To lead both new and standing businesses to new grounds and
                  the pinnacle of success.
                </li>
                <li>
                  To maximize client input, long-term relationships, and
                  partnerships that will guarantee services equal to none.
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-4">
          <q-card dark square class="q-ma-sm my-card">
            <div class="q-px-xl q-pt-xl text-center">
              <q-avatar size="240px" class="statements">
                <img src="../assets/mission.svg" alt="Mission Statement" />
              </q-avatar>
            </div>

            <q-card-section>
              <h4 class="green-text text-center">Our Mission</h4>
            </q-card-section>

            <q-card-section>
              <ul>
                <li>
                  To improve by inspiring and stimulating business owners to
                  achieve their goals and by offering the binding catalyst
                  between them and their consumers.
                </li>
                <li>
                  To help our clients succeed in associating with their
                  communities of interest through our ability to provide
                  integrated marketing solutions and our insight into consumer
                  behavior.
                </li>
                <li>
                  To service selflessly and with a consumers-first attitude,
                  thus passing along the ideology that customer service
                  continues to be the strongest ally to a solid organization of
                  service.
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-4">
          <q-card dark square class="q-ma-sm my-card">
            <div class="q-px-xl q-pt-xl text-center">
              <q-avatar size="240px" class="statements">
                <img src="../assets/cores.svg" alt="Core Values" />
              </q-avatar>
            </div>

            <q-card-section>
              <h4 class="green-text text-center">Core Values</h4>
            </q-card-section>

            <q-card-section>
              <ul>
                <li>
                  Commitment – We are bound professionally and wholeheartedly to
                  our relationship with our clients. 100% customer satisfaction
                  is always a goal.
                </li>
                <li>
                  Consideration – We believe everyone deserves a fighting
                  chance. Large or small, we can service any business equally.
                </li>
                <li>
                  Concern – Our client’s needs and concerns are our needs and
                  concerns. No one will take care of your company’s name as we
                  will.
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      heading: "Certified Web Designers & Usability Experts",
      text:
        "We are a team of web designers, graphic designers, and web marketing experts located in Harrisburg, Pennsylvania. Since the nature of our business is so flexible, we can conduct business outside of our local area, state, and even country. Whether you are a small independent business owner starting to brand a product or an established business or corporation, we can offer web design and web marketing services at an affordable and comfortable rate and payment plan.\n\n LOTUS Marketing Solutions LLC is a veteran-owned and operated business and a 100% customer satisfaction freelancing Web Design Company. LOTUS’s unparalleled quality provided by its web designers and graphic designers, as well as customer service, has gained the interest of many local and remote businesses alike. Within a short period of time, LOTUS Marketing Solutions LLC grew to service businesses nationwide and overseas.\n\n In our endless effort to grow and provide a flawless product we have added other services in addition to our web design and marketing services. This includes: branding services, web maintenance services, On-Page SEO, and more. Simply give us a call and we will discuss your needs and negotiate a solution that will be fitting to your marketing plans and budget."
    };
  },
  meta: {
    // sets document title
    title: "About Us",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Our team possesses web designers, graphic designers, and SEO writers with over 10 years of experience in the field. We successfully overhaul dozens of website designs every year and our web designs are always modern, responsive, and engaging."
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
