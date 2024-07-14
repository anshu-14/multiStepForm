import FormWrapper from "./FormWrapper";
export default function AddressForm({city,street,area,updateFields})
{
    return(
        <FormWrapper title="Address Details">
        <label> City</label>
        <input type="text" autoFocus required value={city} onChange={(e)=>updateFields({city:e.target.value})}></input>
        <label> Street</label>
        <input type="text" required value={street} onChange={(e)=>updateFields({street:e.target.value})}></input>
        <label> Area</label>
        <input type="text" required value={area} onChange={(e)=>updateFields({area:e.target.value})}></input>
      </FormWrapper>
    );
}