<template>
  <div>
    <TopBanner img="resume.jpg" title="Resume / Curriculum" />

    <v-container fluid>
      <v-row>
        <v-spacer class="d-none d-md-flex"></v-spacer>
        <v-col cols="12" lg="6" xs="12" align-self="center">
          <ResumeSection
            v-for="(section, section_idx) in sections"
            :key="section_idx"
            :section-title="section.name"
          >
            <v-card
              v-for="(subsection, subsection_idx) in section.subsections"
              :key="subsection_idx"
              elevation="0"
              class="pa-0 ma-1 rounded-0"
              color="transparent"
            >
              <v-card-title class="py-0 secondary--text">
                {{ subsection.name }}
                <a v-if="subsection.link" :href="subsection.link" class="ml-3">
                  <v-icon>mdi-link</v-icon>
                </a>
              </v-card-title>
              <div
                v-for="(topic, subsub_idx) in subsection.topics"
                :key="subsub_idx"
              >
                <v-card-subtitle class="font-weight-bold py-1 accent--text">
                  {{ topic.name }}
                </v-card-subtitle>
                <v-card-text class="py-0">
                  <ul class="py-0">
                    <li
                      v-for="(point, point_idx) in topic.points"
                      :key="point_idx"
                    >
                      {{ point }}
                    </li>
                  </ul>
                </v-card-text>
              </div>
            </v-card>
          </ResumeSection>

          <ResumeSection section-title="Publications">
            <Bibliography />
          </ResumeSection>
        </v-col>
        <v-spacer class="d-none d-md-flex"></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import sections from '@/assets/resume-sections.json'
import Bibliography from '~/components/Bibliography.vue'
import ResumeSection from '~/components/ResumeSection.vue'
export default {
  components: { Bibliography, ResumeSection, ResumeSection },
  data() {
    // const showCard = new Array(sections.sections.length + 1).fill(ref(false))
    return {
      sections: sections.sections,
      showCard: [false, false, false, false, false, false, false],
    }
  },
  mounted() {
    const bibtexScript = document.createElement('script')
    bibtexScript.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.min.js'
    )
    document.head.appendChild(bibtexScript)
  },
  methods: {
    flipShow(index) {
      this.$set(this.showCard, index, !this.showCard[index])
    },
  },
}
</script>

<style scoped>
.border-primary {
  border-color: var(--v-primary-base) !important;
  border-style: solid !important;
  border-width: 1px !important;
}
</style>
