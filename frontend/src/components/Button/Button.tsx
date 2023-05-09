

function Button ({text, paddingY, paddingX, marginTop}){

     return (
        <button type="submit" className={`rounded-full border-1 py-${paddingY} px-${paddingX} mt-${marginTop} bg-amber-500 hover:bg-amber-300`}>{text}</button>
     )
}

export default Button