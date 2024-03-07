import { productModel } from "@/models/productsModel";
import { NextResponse } from "next/server";

export async function GET(){
    const allP = await productModel.find({});
    return NextResponse.json({
        status: 200,
        products: allP
    })
}