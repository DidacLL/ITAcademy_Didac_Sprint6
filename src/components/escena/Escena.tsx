export const Escena = (props: { text:string[] }) => {
    return (
        <>
            {props.text.map((line)=>(
                <p>{line}</p>
                ))
            }
        </>
    );
};