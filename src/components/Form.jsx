import { useState } from "react";
export default function Form(){
    const [id,setId]=useState();
    const [designation,setDesignation]=useState("");
    const [quantite,setQuantite]=useState(0);
    const [prix,setPrix]=useState(0);
    const [articles,setArticles]=useState([]);
    function handleSave(){

        setArticles([...articles,{id:id,
                    designation:designation,
                    quantite:quantite,
                    prix:prix
        }])
    }


    function handleUpdate(){
        let newArticles = articles.map((article)=>{
            if(article.id === id){
                article.designation=designation
                article.quantite=quantite
                article.prix=prix
            }
            return article
        })
        setArticles([...newArticles])
    }

    

    return(
        <>
        <main className="w-full max-w-lg mx-auto bg-black  p-8 rounded-lg shadow-md border border-gray-300 mt-20">
            <h2 className="text-2xl font-bold mb-6 text-white">Add a New Note</h2>
        
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                    Id
                </label>
                <input
                    id="Id"
                    type="text"
                    onChange={(e)=>setId(e.target.value)}
                    value={id}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Id"
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                Designation
                </label>
                <input
                    id="designation"
                    type="text"
                    onChange={(e)=>setDesignation(e.target.value)}
                    value={designation}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Designation"

                />
            </div>

            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                quantite
                </label>
                <input
                    id="quantite"
                    type="text"
                    onChange={(e)=>setQuantite(e.target.value)}
                    value={quantite}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter quantite"
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                prix
                </label>
                <input
                    id="prix"
                    type="text"
                    onChange={(e)=>setPrix(e.target.value)}
                    value={prix}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter prix"
                />
            </div>

            <div className="flex justify-evenly">
                <button 
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                >
                    Add
                </button>
                <button
                 onClick={handleUpdate}
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                >
                
                    update
                </button>
            </div>
        </main>
        <div className="flex w-full gap-10 flex-wrap bg-black p-10 ">
        {articles.map((article)=>{
            return(
                
                <div key={article.id} className="w-1/5 h-64 flex flex-col justify-between bg-[#FEF9D9] text-[#DEE5D4] rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                    <h4 className="text-gray-800 font-bold mb-3">{article.id}</h4>
                    <p className="text-gray-800 text-sm">{article.designation}</p>
                    <p className="text-gray-800 text-sm">{article.quantite}</p>
                    <p className="text-gray-800 text-sm">{article.prix}</p>
                </div>
                    <div className="flex flex-wrap gap-10 justify-star p-24">
                        <div className="flex items-center justify-between text-gray-800">
                            <div className="flex justify-between gap-3">
                                <button onClick={()=>{
                                    setId(article.id)
                                    setDesignation(article.designation)
                                    setQuantite(article.quantite)
                                    setPrix(article.prix)
                                }} >Editer</button>
                                <button onClick={()=>{
                                   const newArticles =  articles.filter((item)=>{
                                    return item.id !== article.id
                                   })
                                   setArticles([...newArticles])
                                }} className="text-red-600" >supprimer</button>
                                
                            </div>
                        </div>
                    </div>
                    </div>
            );
        })}
        </div>
       
        </>
    );
}
    