import React, { useState, useEffect } from "react";
import { createPokemon, getPokemonList } from "../services/pokemon";
import Input from "../ui/input";
import InputRange from "../ui/inputRange";
import RangeSlider from 'react-bootstrap-range-slider';
import './pokemon.css'


export default function Pokemon(): JSX.Element {

    const [ pokemons, setPokemons]  = useState([])
    const [ pokemon, setPokemon]    = useState({
        name:"",
        image:"",
        attack:0,
        defense:0,
        type:""
    })
    //(const [ value, setValue ] = useState(0); 

 
    useEffect(() => {
        getPokemonList().then( data  => {
            setPokemons( data )
        })
    },[])

    const changeInput = ( evt:any ) => {
       
        setPokemon({
            ...pokemon,
            [evt.target.name]: evt.target.value
        })

        console.log( pokemon )
    }

    const changeRangeSlider = ( evt:any ) => {
        
       
        setPokemon({
            ...pokemon,
            [evt.target.id]: evt.target.value,
        
     
        })
        console.log(pokemon);

        
    }


    const create = () => {
         createPokemon( pokemon ).then( req => {
            
            getPokemonList().then( data  => {
                setPokemons( data )
            })
         })
    }

    const eliminar = (evt:any) => {
        console.log(evt);
        /*deletePokemon( pokemon ).then( req => {
           
           getPokemonList().then( data  => {
               setPokemons( data )
           })
        })*/
   }

    const update = ( evt:any ) =>  {
            console.log( evt )
    }

  return (
    <>
    <div className="content">
        <div className="row">
            <h1>Listado de pokemon</h1>
        </div>
        <div className="row">
                <div className="col-6">
                    <input type="text"   placeholder="Buscar"/>
                    <button type="button">Buscar</button>
                </div>
           
        </div>
        
        <div className="row">
            <div className="col-6">

                <table className="table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            pokemons.map( (pokemon:any) => {
                                return (
                                    // <TRPokemon key={pokemon.id} pokemon={pokemon}  />
                                    <tr key={pokemon.id}>
                                            <td>{pokemon.name}</td>
                                            <td>
                                                <img src={pokemon.image} width={70} />
                                            </td>
                                            <td>{pokemon.attack}</td>
                                            <td>{pokemon.defense}</td>
                                            <td>
                                            <button type="button" className="btn btn-primary"  onClick={ update}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                             <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg> 
                                            </button>
                                            <button type="button" className="btn btn-danger" name={pokemon.id} onClick={ eliminar}>
                                            <svg xmlns="http://www.w3.org/2000/svg" name={pokemon.id} width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                            </button>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-6">
                
                <form className="content">
                    <h4>Nuevo Pokemon</h4>
                    <Input label='Nombre'  name="name" onChange= {changeInput} />
                    <Input label='Imagen'  name="image"  onChange= {changeInput} />
  

                        <label>Seleccione un tipo: </label>

                        <select name="type" onChange= {changeInput} >
                        <option value="fire">Fuego</option>
                        <option value="water">Agua</option>
                         <option value="normal">Normal</option>
                        <option value="bug">Insecto</option>
                         <option value="poison">Veneno</option>
                        </select>

                    <div className="mb-6">
            <label className="form-label">Ataque</label>
                    <RangeSlider id="attack" value={pokemon.attack} onChange={changeRangeSlider} step={1} />
                    </div>
             <div className="mb-6">
        <label className="form-label">Defensa</label>
                <RangeSlider id="defense" value={pokemon.defense} onChange={changeRangeSlider} step={1} />
                </div> 

       
<div className="container">     
 <div className="row" >
        <div className="col-md-8">
        <button type="button"  className="btn btn-outline-primary" onClick={create}>GUARDAR</button>
       
        </div>
        <div className="col-md-4">
        <button type="button"   className="btn btn-outline-danger" onClick={eliminar}>CANCELAR</button>
        </div>
      </div>
</div>


                </form>
    
                </div>
                
        </div>
    </div>
</>


  );
}
 