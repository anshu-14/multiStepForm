import FormWrapper from "./FormWrapper";

export default function UserForm({firstname,lastname,age,updateFields})
{
  
  return (
    <FormWrapper title="User Details">
      <label> First Name</label>
      <input type="text" autoFocus required value={firstname} onChange={(e)=>updateFields({firstname:e.target.value})}></input>
      <label> Last Name</label>
      <input type="text" required value={lastname} onChange={(e)=>updateFields({lastname:e.target.value})}></input>
      <label> Age</label>
      <input type="number" min={14} max={100} required value={age} onChange={(e)=>updateFields({age:e.target.value})}></input>
      </FormWrapper>
  );
}