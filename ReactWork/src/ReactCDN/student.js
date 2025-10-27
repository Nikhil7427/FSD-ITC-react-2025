// const parent = document.getElementById('container');
// console.log(parent);
// const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2", {style:{backgroundColor:'brown', color:'red'}}, "react dom");
// root.render(h2);


function StudentInfo() {
    const student = {
        name: "Nikhil Maurya",
        rollNo: 2300320130162,
        section: "C"
    };

    const cardStyle = {
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        margin: "40px auto",
        width: "300px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    };

    const headingStyle = {
        color: "#2563eb",
        marginBottom: "10px"
    };

    const textStyle = {
        margin: "6px 0",
        fontSize: "16px"
    };

    return (
        <div style={cardStyle}>
            <h2 style={headingStyle}>Student Information</h2>
            <p style={textStyle}><strong>Name:</strong> {student.name}</p>
            <p style={textStyle}><strong>Roll No:</strong> {student.rollNo}</p>
            <p style={textStyle}><strong>Section:</strong> {student.section}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<StudentInfo />);