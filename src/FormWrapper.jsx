export default function FormWrapper({title,children})
{
  return (
    <>
      <h1 style={{margin:0,marginBottom:"1rem",textAlign:"center"}}>{title}</h1>
      <div style={{display:"grid",gap:"1rem .5rem",justifyContent:"flex-start", gridTemplateColumns:"auto minmax(auto,400px)"}}>{children}</div>
    </>
  );
}