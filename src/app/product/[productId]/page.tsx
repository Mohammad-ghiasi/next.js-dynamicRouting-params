import { productparams } from "../../../types/productparams";
import { Metadata } from "next";

export const  generateMetadata = ({params}: productparams) => {
    return {
        title: `product ${params.productId}`
    }
}

export default function Product({ params }: productparams) {

    return (
        <>
            <h1>Product name: {params.productId}</h1>
        </>
    )
}
// that error was not important! (that was for next.js runtime)
// thanks for watching :-)