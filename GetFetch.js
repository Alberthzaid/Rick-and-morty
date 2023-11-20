const Personajes = async(url)=>{
    const Dato = await fetch(url)
    const respuesta = await Dato.json()
    return respuesta
}

export {Personajes}