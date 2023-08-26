import { http } from './config'

export default {
  listar: () => {
    return http.get('products')
  },
  salvar: (produto) => {
    return http.post('products', produto)
  },
  atualizar: (produto) => {
    return http.put('products', produto)
  },
  apagar: (produto) => {
    return http.delete('products', { data: produto })
  }
}
