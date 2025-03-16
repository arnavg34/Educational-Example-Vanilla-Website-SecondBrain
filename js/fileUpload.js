document.getElementById("fileInput").addEventListener("change", handleFileUpload);
document.getElementById("clearFile").addEventListener("click", clearFile);

function handleFileUpload(event) {
    const file = event.target.files[0]; 
    if (!file) return;  

    console.log("File Selected:", file.name);

    const reader = new FileReader();

    reader.onload = (e) => {
        const content = e.target.result; 

        console.log("File Content:", content);
    };

    if (file.type === "text/plain" || file.type === "text/markdown") {
        reader.readAsText(file);  
    } else if (file.type === "application/pdf") {
        console.log("PDF files require backend processing.");
    } else {
        alert("Unsupported file type. Please upload a .txt, .md, or .pdf file.");
    }
}

function clearFile() {
    document.getElementById("fileInput").value = "";  
    document.getElementById("fileContent").textContent = "";  
    console.log("File cleared.");
}
