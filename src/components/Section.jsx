const Section = ({ children, title, titleAlign, link}) => {

    return (
        <>
            <h2 style={{
                color:"#474747", 
                fontSize: "24px",
                textAlign: `${titleAlign}`
            }}>{title}</h2>
            <a style={{
                color:"#C92071",
                textDecoration: "none",
                fontSize: "18px"

            }}href="">{link}</a>
            {children}
        </>
    );
}
 
export default Section;