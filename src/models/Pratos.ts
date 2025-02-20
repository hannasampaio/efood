class Pratos {
  imagem: string
  destaque?: boolean
  categoria: string
  nome: string
  nota: string
  info: string
  id: number
  link: string

  constructor(
    imagem: string,
    destaque: boolean,
    categoria: string,
    nome: string,
    nota: string,
    info: string,
    id: number,
    link: string
  ) {
    this.imagem = imagem
    this.destaque = destaque
    this.categoria = categoria
    this.nome = nome
    this.nota = nota
    this.info = info
    this.id = id
    this.link = link
  }
}

export default Pratos
