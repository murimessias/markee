import marked from 'marked'

// Styles
import * as S from './article-styles'
import 'highlight.js/styles/tomorrow-night-bright.css'

// Marked configs using HighlightJS
import('highlight.js').then((hljs) => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

// Types & Props
type ArticleProps = {
  content: string
}

const Article = ({ content }: ArticleProps) => (
  <S.ArticleWrapper dangerouslySetInnerHTML={{ __html: marked(content) }} />
)

export { Article }
