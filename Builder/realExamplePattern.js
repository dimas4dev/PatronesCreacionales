import React, { useState, useEffect } from 'react';

/**
 * Un Hook personalizado que implementa el patrón Builder para construir un formulario dinámicamente.
 * Permite añadir campos, validaciones y un botón de envío al formulario.
 *
 * @returns {Object} Métodos y propiedades para construir el formulario.
 */
const useFormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [validations, setValidations] = useState([]);
  const [submitButton, setSubmitButton] = useState(null);

  useEffect(() => {
    // Efecto para realizar acciones adicionales cada vez que el formulario se actualiza.
    console.log('Formulario actualizado');
  }, [fields, validations, submitButton]);

  const addField = (field) => {
    setFields((currentFields) => [...currentFields, field]);
  };

  const addValidation = (validation) => {
    setValidations((currentValidations) => [...currentValidations, validation]);
  };

  const setSubmitButtonComponent = (button) => {
    setSubmitButton(button);
  };

  return { fields, validations, submitButton, addField, addValidation, setSubmitButtonComponent };
};

/**
 * Componente Form que renderiza el formulario construido.
 * Toma los campos y el botón de envío configurados a través del Hook useFormBuilder.
 *
 * @param {Array} fields - Los campos del formulario a renderizar.
 * @param {JSX.Element} submitButton - El botón de envío del formulario.
 * @returns {JSX.Element} El formulario construido.
 */
const Form = ({ fields, submitButton }) => {
  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>{field}</div>
      ))}
      {submitButton}
    </form>
  );
};

/**
 * Componente DynamicForm que utiliza useFormBuilder para construir y mostrar un formulario.
 * Este es un ejemplo de cómo implementar y utilizar el patrón Builder en una aplicación React con Hooks.
 *
 * @returns {JSX.Element} El componente de formulario dinámico.
 */
const DynamicForm = () => {
  const { fields, submitButton, addField, setSubmitButtonComponent } = useFormBuilder();

  // Configuración inicial del formulario
  useEffect(() => {
    addField(<input type="text" placeholder="Nombre de usuario" key="username" />);
    addField(<input type="password" placeholder="Contraseña" key="password" />);
    setSubmitButtonComponent(<button type="submit" key="submit">Enviar</button>);
  }, [addField, setSubmitButtonComponent]);

  return <Form fields={fields} submitButton={submitButton} />;
};

export default DynamicForm;
