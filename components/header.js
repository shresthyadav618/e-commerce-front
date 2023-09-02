"use client"
import Link from "next/link";
import { styled } from "styled-components";
const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 10px;
background-color: #222;
color: white;
`;
export default function header(){

    
  return(
      <header>
        <StyledHeader>
        <Link href={'/'} className="ml-[20px]">Ecommerce</Link>
        <nav className="flex gap-x-3 text-white text-lg mr-[40px]">
            <Link href={'/home'}>Home</Link>
            <Link href={'/products'}>Products</Link>
            <Link href={'/categories'}>Categories</Link>
            <Link href={'/account'}>Account</Link>
            <Link href={'/cart'}>Cart (0)</Link>
        </nav>
        </StyledHeader>
    </header>
  )

}