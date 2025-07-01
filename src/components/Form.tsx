import './Form.css'

function Form() {
	return (
		<form action="" className="form">
			<fieldset className="inputs-container">
				<legend>
					Ingresa los datos para almacenar una nueva persona.
				</legend>
				<label htmlFor="name">Nombre</label>
				<input type="text" name="name" placeholder="Pedro Silva" />
				<label htmlFor="age">Edad</label>
				<input type="number" name="age" placeholder="32" />
				<label htmlFor="select"></label>
				<select name="select">
					<option value="">Elija una profesión</option>
					<option value="">Profesor</option>
					<option value="">Programador</option>
					<option value="">Carpintero</option>
					<option value="">Electricista</option>
					<option value="">Dentista</option>
					<option value="">Minero</option>
				</select>
				<textarea
					name="description"
					placeholder="Ingresa una descripción breve"
				></textarea>
				<label htmlFor="date"></label>
				<input type="date" name="date" />
			</fieldset>
			<button>Guardar</button>
		</form>
	)
}

export default Form
