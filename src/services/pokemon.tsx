import axios from "axios";
import Swal from 'sweetalert2';

export async function getPokemonList(){
    return await axios
    .get(`https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1` )
    .then(async (res:any) => {
      console.log(res);
      return await res.data;
    })
    .catch(async (err:any) => {
      return await err;
    });
}

export async function createPokemon( body:any ){
  console.log(body.type);
  return await axios
  .post(`https://pokemon-pichincha.herokuapp.com/pokemons`, {

    "attack": body.attack,
    "defense": body.defense,
    "hp": 50,
    "idAuthor": 1,
    "image": body.image,
    "name": body.name,
    "type": body.type
  })
  .then(async (res:any) => {
    if(!res.data)
    {
    

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha orcurrido un error!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else{
      Swal.fire(
        'Pokemon Ingresado Existosamente!',
        'Aceptar!',
        'success'
      )
    }

    return await res.data;
  })
  .catch(async (err:any) => {
    return await err;
  });
}

 