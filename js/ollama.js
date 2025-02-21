const OllamaReq = async (req) => {
    const { prompt } = req;  

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'llama3',
            prompt,
            stream: false
        })
    };

    try {
        const response = await fetch("http://localhost:11434/api/generate", options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);  
        return data;
        
    } catch (error) {
        console.error(error);  
    }
};

let input = document.getElementById("myInput");
let inputValue = input.value;



document.getElementById("myHeader").innerHTML = ``;
const updateText = async () => {
    input = document.getElementById("myInput");
    inputValue = input.value;
    const json = await OllamaReq({ prompt: inputValue });
    console.log(json.response)
    document.getElementById("myHeader").innerHTML = json.response;
    // console.log(await OllamaReq({ prompt: inputValue }).response)
    
 }
document.getElementById("ollama").addEventListener("click",updateText);
