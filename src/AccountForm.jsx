import FormWrapper from "./FormWrapper";
export default function AccountForm ({email,password,updateFields})
{
    return (
        <FormWrapper title="Account Details">
        <label> Email</label>
        <input type="email" autoFocus required value={email} onChange={(e)=>updateFields({email:e.target.value})}></input>
        <label> Password</label>
        <input type="password" required value={password} onChange={(e)=>updateFields({password:e.target.value})}></input>
        </FormWrapper>
    );
}