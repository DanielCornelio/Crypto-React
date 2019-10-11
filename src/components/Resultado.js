import React, { Component } from 'react';

class Resultado extends Component {

    mostrarResultado = () =>{
        const monedaCotizada = this.props.monedaCotizada;
        const {name, quotes} = this.props.cotizacion;
        if(!name) return null;
        const {price, percent_change_1h, percent_change_24h} = quotes[monedaCotizada];
        return(
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">
                        <p><span className="font-wight-bold">El precio de {name} en {monedaCotizada} es de:</span>$ {(price).toFixed(2)}</p>
                        <p><span className="font-wight-bold">Porcentaje Ultima Hora:</span>{percent_change_1h}%</p>
                        <p><span className="font-wight-bold">Porcentaje Ultimas 24 Horas:</span>{percent_change_24h}%</p>
                    </h2>
                </div>
            </div>
        )
    }
    render() { 
        return (  
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
        );
    }
}
 
export default Resultado;