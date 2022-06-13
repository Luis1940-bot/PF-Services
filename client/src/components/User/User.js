import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/action";
import * as yup from "yup";
import "../User/User.css";

const initialValues = {
  email: "",
  password: "",
  name: "",
  surname: "",
  phone: "",
  address: "",
  age: 0,
  document: "",
  phone2: "",
  state: "",
  city: "",
  country: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Es necesario llenar este campo")
    .email("El email no es válido"),
  password: yup
    .string()
    .required("Es necesario llenar este campo.")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      " La contraseña debe ser alfanumérica de min 8 Caracteres."
    ),
  name: yup.string().required("Es necesario llenar este campo"),
  surname: yup.string().required("Es necesario llenar este campo"),
  phone: yup.string().required("Es necesario llenar este campo."),
  address: yup.string().required("Es necesario llenar este campo."),
  age: yup.number().required("Es necesario llenar este campo."),
  document: yup.string().required("Es necesario llenar este campo."),
  phone2: yup.string().required("Es necesario llenar este campo."),
  state: yup.string().required("Es necesario llenar este campo."),
  city: yup.string().required("Es necesario llenar este campo."),
  country: yup.string().required("Es necesario llenar este campo."),
});

const UserRegister = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(signIn(values));
      alert("Felicidades ");
    },
    validationSchema,
  });

  return (
    <form
      className="sign-form"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="sign-spaces">
        <label className="sign-label">Nombre*:</label>
        <input
          className="inputs"
          id="name"
          type="text"
          placeholder="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="sign-error">{formik.errors.name}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Apellido*:</label>
        <input
          className="inputs"
          id="surname"
          type="text"
          placeholder="Apellido"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <span className="sign-error">{formik.errors.surname}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Edad*:</label>
        <input
          className="inputs"
          id="age"
          type="text"
          placeholder="Edad"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? (
          <span className="sign-error">{formik.errors.age}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Email*:</label>
        <input
          className="inputs"
          id="email"
          type="text"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="sign-error">{formik.errors.email}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Contraseña*:</label>
        <input
          className="inputs"
          id="password"
          type="text"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="sign-error">{formik.errors.password}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Celular*:</label>
        <input
          className="inputs"
          id="phone"
          type="text"
          placeholder="Celular"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <span className="sign-error">{formik.errors.phone}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Celular Altenativo:</label>
        <input
          className="inputs"
          id="phone2"
          type="text"
          placeholder="Celular Alternativo"
          value={formik.values.phone2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone2 && formik.errors.phone2 ? (
          <span className="sign-error">{formik.errors.phone2}</span>
        ) : null}
      </div>

      <div className="sign-spaces">
        <label className="sign-label">Doc. de Identificación*:</label>
        <input
          className="inputs"
          id="document"
          type="text"
          placeholder="DNI"
          value={formik.values.document}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.document && formik.errors.document ? (
          <span className="sign-error">{formik.errors.document}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Dirección*:</label>
        <input
          className="inputs"
          id="address"
          type="text"
          placeholder="Dirección"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <span className="sign-error">{formik.errors.address}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Ciudad*:</label>
        <input
          className="inputs"
          id="city"
          type="text"
          placeholder="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <span className="sign-error">{formik.errors.city}</span>
        ) : null}
      </div>
      <div className="sign-spaces">
        <label className="sign-label">Estado*:</label>
        <input
          className="inputs"
          id="state"
          type="text"
          placeholder="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.state && formik.errors.state ? (
          <span className="sign-error">{formik.errors.state}</span>
        ) : null}
      </div>

      <div className="sign-space">
        <label className="sign-label">País*:</label>
        <input
          className="inputs"
          id="country"
          type="text"
          placeholder="País"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.country && formik.errors.country ? (
          <span className="sign-error">{formik.errors.country}</span>
        ) : null}
      </div>
      <div className="sign-button">
        <button
          className="principalButton"
          type="submit"
          disabled={formik.errors}
        >
          Registra tu Usuario
        </button>
      </div>
    </form>
  );
};
export default UserRegister;
