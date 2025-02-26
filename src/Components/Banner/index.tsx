import { ItalianaBanner, NomeRestaurante, CategoriaPrato } from './styles'

const Presentation = () => (
  <ItalianaBanner>
    <div className="container">
      <CategoriaPrato>Italiana</CategoriaPrato>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </div>
  </ItalianaBanner>
)

export default Presentation
