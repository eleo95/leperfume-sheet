import { Product } from "./types";
import axios from "axios";
import { parse } from "papaparse";
import { resolve } from "path";
import { rejects } from "assert";

export default {
    list: async (): Promise<Product[]> => {
        return axios.get(
            `https://docs.google.com/spreadsheets/d/e/2PACX-1vQne2qU54N2qhxaYAQNmlxjgUpYzQH0aFe2KXXN7YX0HWX_4sbj4ooxR9iKBcxOpZQaaFJ4qhdH4asx/pub?gid=0&single=true&output=csv`,
            {
                responseType: 'blob'
            }
        ).then(
            (response) => {
                return new Promise<Product[]>((resolve, reject) => {
                    parse(response.data, {
                        header: true,
                        complete: results => {
                            const products = results.data as Product[]

                            return resolve(
                                products.map((product)=>({
                                    ...product,
                                    price: Number(product.price),
                                    discount: Number(product.discount),
                                    published: Boolean(product.published)
                                }))
                            )
                        },
                        error: (error) => reject(error.message)
                        
                    })
                })
            })
    }
}