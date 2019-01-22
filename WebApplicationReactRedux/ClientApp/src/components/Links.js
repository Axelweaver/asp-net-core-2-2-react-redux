import React from 'react';
import ReactMarkdown from 'react-markdown';
const markDownText =
`## Type in the left box like this
---
### You can add hashes for h1 through h6
#### Just like this
##### and this
You can add an h1 also like this
    =========================
    You can add an h2 like this also
----------------------------------------
    You can add links like http://www.example.com or like this: [Twitter](https://www.twitter.com/Al_Armz)

    You can add bold like **this** or __this__.


You can combine them like ***this*** or ___this___.

    You can draw a table to create one like this:

|  Heading 1 |  Heading 2 |
    |---------------|----------------|
    |  cell 1         |  cell 2         |
    |  cell 3         |  cell 4         |
###### ***Have fun and try out different things!***`;
const LinksPage = () => (
    <div>
        <h3>Links</h3>
        <div className="card">
            <div className="card-body">
                <h4>Link</h4>
                <br />
                <ReactMarkdown source={markDownText} />
            </div>
        </div>
    </div>  
);

export default LinksPage;