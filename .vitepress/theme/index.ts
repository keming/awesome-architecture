import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Quiz from './components/Quiz.vue'
import ArchExplorer from './components/ArchExplorer.vue'
import DecisionCard from './components/DecisionCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
    app.component('ArchExplorer', ArchExplorer)
    app.component('DecisionCard', DecisionCard)
  },
}
