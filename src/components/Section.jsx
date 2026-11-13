const Section = ({ children, title, titleAlign, link, display}) => {

    return (
        <div style={{
            display: `${display}`,
            maxWidth: "1440px",
            width: "100%",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <h2 style={{
                color:"#474747", 
                fontSize: "24px",
                textAlign: `${titleAlign}`,
                
            }}>{title}</h2>

            <a style={{
                color:"#C92071",
                textDecoration: "none",
                fontSize: "18px"

            }}href="">{link}</a>
            {children}
        </div>
    );
}
 
export default Section;