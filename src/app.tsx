import { Button } from 'components/forms'
import { Grid } from 'components/layout'
import { AddIcon } from 'ui/icons'
import { Logo } from 'ui/logo'

const App = () => {
  return (
    <Grid>
      <aside>
        <div>
          <Logo />
        </div>

        <h4>Arquivos</h4>

        <div>
          <Button cta='Adicionar arquivo' icon={<AddIcon />} />
        </div>

        <nav>
          <ul>
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </nav>
      </aside>

      <div>Content</div>
    </Grid>
  )
}

export { App }
