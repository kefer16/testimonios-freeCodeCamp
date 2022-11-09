import logo from "./logo.svg";
import "./App.css";
import { Testimonio } from "./componentes/Testimonio";
import { testimonios } from "./json/Testiminio";

function App() {
	return (
		<div className="App">
			<div className="contenedor-principal">
				<h1>Esto es lo que dicen nuestros ex alumnos sobre freeCodeCamp:</h1>

				{testimonios.map((testimonio) => (
					<Testimonio
						key = {testimonio.nombre}
						nombre={testimonio.nombre}
						pais={testimonio.pais}
						imagen={testimonio.imagen}
						cargo={testimonio.cargo}
						empresa={testimonio.empresa}
						testimonio={testimonio.testimonio}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
