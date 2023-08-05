export const getVehiculosFachada = async ()=> {
return getVehiculos
}

export const getVehiculoFachada = async ()=> {
    return getVehiculo
    }
    

const getVehiculos = async ()=> {
    const data  = await fetch('http://localhost:8080/API/v1.0/Inventario/vehiculos').then(r=>r.json())
    return data
}

const getVehiculo = async (placa)=> {
    const data  = await fetch(`http://localhost:8080/API/v1.0/Inventario/vehiculos/${placa}`).then(r=>r.json())
    return data
}