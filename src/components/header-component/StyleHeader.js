import background from "../../assets/images/background.png";

const styles = {
    headerStyle: {
        width: "100%",
        position:"absolute",
        height: "20%",
        justifyContent: "center",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
	    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
        boxSizing:"border-box",
        display:"flex",
        flexDirection:"column",
        order:"1",
        backgroundImage:`url(${background})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
    },
    title: {
        boxSizing: "border-box",
        width: "100%",
        height:"20%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
    }
    
};
export default styles;

