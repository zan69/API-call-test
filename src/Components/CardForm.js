import React from 'react';

const CardForm = ({formResponseHandler, result}) => {
    const submitHandler = (event) => {
        event.preventDefault();

        const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        const t = event.target[0].value;

        if (t.match(regex)) {
            formResponseHandler(event.target[0].value, event.target[1].value, event.target[2].value)
        } else {
            alert("Not a valid link");
        }
    }


    return (
        <form className="flex h-screen overflow-hidden justify-center place-items-center" onSubmit={submitHandler}>
            <div className="w-5/6 h-5/6 rounded-xl border-2 bg-gray-200 p-3 shadow-lg">
                <h1 className="text-center text-2xl">Test API</h1>
                <div className="w-full h-full flex p-7">
                    <div className="w-1/2 h-full inline-block mr-10">
                        <div className="h-5/6">
                        <label className="w-max mt-2 mb-1 font-thin block ml-2">API Endpoint</label>
                        <input type="text"
                               className="bg-gray-100 border text-gray-900 rounded-lg block w-full p-2.5"
                               id="link"/>
                        <label className="mb-1 font-thin ml-2 mr-2" htmlFor="cheese">Number of rounds:</label>
                        <select className="mt-5 w-24 text-center rounded bg-gray-100 border-gray-100" id="rounds">
                            {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((method) => {
                                return <option value={method} key={method}>{method}</option>
                            })}
                        </select>
                        <label className="w-max mt-2 mb-1 font-thin block ml-2 mt-4">Content: Key: Value</label>
                        <textarea
                               className="bg-gray-100 text-gray-900 rounded-lg block w-full p-2.5 h-40 text-start max-h-80 min-h-fit"
                               id="link"/></div>
                        <div className="block text-right">
                            <button type="submit" className="rounded-md p-2 bg-blue-300 w-44 m-2" type="submit">Send request</button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full inline-block pb-4 flex flex-col">
                        <label className="w-max mt-2 mb-1 font-thin block ml-2">Result</label>
                        <code className="rounded block language-js bg-gray-100 overflow-scroll flex-grow p-2">
                            <pre>{result}</pre>
                        </code>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CardForm;