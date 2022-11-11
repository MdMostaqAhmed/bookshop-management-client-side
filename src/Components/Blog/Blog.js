import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='d-flex justify-content-center my-3'>Blog Page</h2>
            <div>
                <h4>What is Difference between javascript and nodejs?</h4>
                <p>Differences Between <strong>JavaScript</strong> and <strong>NodeJs</strong> are as follows:</p>
                <span><strong>1.</strong></span> <br />
                <span>#JavaScript: JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting.</span><br />
                <span>#Node.js: Node.js is a server-side scripting language based on the Google Chrome V8 engine.</span> <br />

                <span><strong>2.</strong></span> <br />
                <span>#Javascript: Javascript is a scripting language that can only be used in browsers.</span><br />
                <span>#Node.js: We can run Javascript outside the browser with the help of NodeJS</span> <br />

                <span><strong>3.</strong></span> <br />
                <span>#Javascript: It is basically used on the client-side.</span><br />
                <span>#Node.js: It is mostly used on the server-side.</span> <br />


                <span><strong>4.</strong></span> <br />
                <span>#Javascript: It's built into both Java and HTML.</span><br />
                <span>#Node.js: Nodejs does not have capability to add HTML tags.</span> <br />

                <span><strong>5.</strong></span> <br />
                <span>#Javascript: JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine.</span><br />
                <span>#Node.js: V8 is the Javascript engine inside of node.js that parses and runs Javascript.</span> <br />

                <span><strong>6.</strong></span> <br />
                <span>#Javascript: Some of the javascript frameworks are RamdaJS, TypedJS, etc.</span><br />
                <span>#Node.js: Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</span> <br />
            </div>

            <div className='mt-5'>
                <h4>When should you use nodejs and when should you use mongodb?</h4>

                <span><strong>Node Js :</strong></span> <br />
                <span>Any project requires a programming environment and a runtime library that can build and/or understand your code and provides basic programming tools and assistance. Nodejs is a tool for programming in the Javascript language. Other languages with comparable tools include Python, Java, PHP, C#, C++, Go, and so on. So, if you want to develop a Javascript standalone program or server, you may utilize nodejs.
                </span> <br /> <br />


                <span><strong>MongoDB :</strong></span> <br />
                <span>MongoDB is a general-purpose database that is used in a variety of sectors to support applications (e.g., telecommunications, gaming, finances, healthcare, and retail). Because it tackles long-standing difficulties in data management and software development, MongoDB has found a home in a variety of enterprises and roles. MongoDB is commonly used in the following scenarios: Integrating large amounts of diverse data ,Describing complex data structures that evolve ,Delivering data in high-performance applications ,Supporting hybrid and multi-cloud applications ,Supporting agile development and collaboration</span> <br />

            </div>

            <div className='mt-5'>
                <h4>What is the Differences between SQL and NoSQL databases.?</h4>
                <span>
                    Differences Between SQL and NoSQL Database are As follows: <br />
                    <strong> SQL:</strong> <br />

                    1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                    2. These databases have fixed or static or predefined Design <br />
                    3. These databases aren't designed to store hierarchical data. <br />
                    4. These databases are best suited for complex queries <br />
                    5. Vertically Scalable <br /> <br />


                    <strong>NoSQL :</strong> <br />
                    1. Database system that is not relational or distributed. <br />
                    2. They have dynamic schema. <br />
                    3. These databases are great for storing hierarchical data. <br />
                    4. Complex queries are not well served by these databases. <br />
                    5. Horizontally scalable <br />
                </span>
            </div>

            <div className='mt-5 mb-5'>
                <h4>What is the purpose of JWT and how does it work?</h4>
                <p>
                    JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to communicate security information. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed with a cryptographic technique to ensure that the claims can't be changed after they've been distributed.
                </p>
            </div>


        </div>

    );
};

export default Blog;