import { Grid } from 'components/layout'
import { Content } from 'components/layout/content/content'
import { Sidebar } from 'components/layout/sidebar/sidebar'

const App = () => {
  return (
    <Grid>
      <Sidebar />
      <Content />
    </Grid>
  )
}

export { App }
