import { Grid } from 'components/layout'
import { Sidebar } from 'components/layout/sidebar/sidebar'

const App = () => {
  return (
    <Grid>
      <Sidebar />
      <div>Content</div>
    </Grid>
  )
}

export { App }
