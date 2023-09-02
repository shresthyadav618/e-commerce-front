
import { connect } from "@/dbConfig/dbConfig";
import { productModel } from "@/models/productsModel";
import Featured from "../../components/featured";
import Header from "../../components/header";
export default async function page() {
  const featuredProductId = '64f3951a6f4dc08d1aa20c3f';
  await connect();
  const featuredProduct = await productModel.findById(featuredProductId);
  console.log('THE VALUE OF PRODUCTS AREds **** ',featuredProduct);
  return (
   
    <div>
      <Header/>
      <Featured/>
    </div>
    
  )
}
