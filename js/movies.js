//irar lidar com os dados dos filmes conter a logica
export class moviesData{
  constructor(root){
    this.root = document.querySelector(root)
    this.update()
  }
}
//classe que ira fazer a parte visual do html 
export class moviesview extends moviesData{
  constructor(root){
    super(root);

    console.log(this.root)
  }
  //atualiza todo o visual do modal..
  update(){
    const modal = this.root.querySelector('.modal-movies')
    document.querySelectorAll('.card').forEach((card) => {
      card.remove()
    });
  }
}
