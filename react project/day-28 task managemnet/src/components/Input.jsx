
const Input = ({label, placeholder, type, register, errors}) => {

  return (
    <div className="flex gap-2">
      <label>{label}: </label>
      <input className="px-2 py-1 outline-none border-1 border-zinc-400 rounded-md text-sm" type={type} placeholder={placeholder} {...register(label, { required: true})}/>

      {/* {errors.label && <p>Last name is required.</p>}  */}
    </div>
  );
};

export default Input;
