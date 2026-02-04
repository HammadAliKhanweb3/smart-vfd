import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";


const GRPAHQL_ENDPOINT =  "http://localhost:3000/graphql"

export async function fetchGraphQl<TResult,TVariables>(
document:TypedDocumentNode<TResult,TVariables>,
variables:TVariables

):Promise<TResult>{

const response = await fetch(GRPAHQL_ENDPOINT,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
   query:print(document),
   variables
  })
})



const text = await response.text();



  // 2. Check if it failed
  if (!response.ok) {
    console.error("❌ Server Error:", text); // Check your browser console!
    throw new Error(`Server error: ${response.status} ${response.statusText}`);
  }

  // 3. Try to parse JSON safely
  try {
    const json = JSON.parse(text);
    
    if (json.errors) {
      console.error("❌ GraphQL Error:", json.errors);
      throw new Error(json.errors[0].message);
    }

    return json.data;
  } catch (err) {
    console.error("❌ Failed to parse JSON. Raw response:", text);
    throw new Error("Invalid response from server");
  }
}