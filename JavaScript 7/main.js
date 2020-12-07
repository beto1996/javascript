//  1.	ააგეთ ნებისმიერი HTML დოკუმენტის ე.წ. პარსერი. (ტექსტური მონაცემების ამომღები HTML დოკუმენტიდან).
function parser(){
    const parser = new DOMParser();
    const parsedDocument =parser.parseFromString(
        ` <html>
        <head>
            <title>someting</title>
        </head>
        <body>
            <h1>page title</h1>
            <p>how's it going</p>
        </body>
    </html>`
        ,"text/html"
    );
        console.dir(parsedDocument)
}

