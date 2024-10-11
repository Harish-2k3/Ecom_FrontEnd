import React from 'react'
import useCart from '../../shared/hooks/useCart.js'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth.js';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Header() {
  const { count } = useCart();
  const navigate = useNavigate();
  const { isLogIn, userDetails, logout } = useAuth();
  console.log(isLogIn)
  console.log(userDetails())
  console.log(isLogIn)
  const handlelogout = () => {
    logout()
    navigate('/register')
  }
  return (
    <div className='max-w-[85rem] w-full mx-auto py-3 bg-rose-50 sticky top-0'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold text-rose-950'><Link to={"/"}>Bikes</Link></h1>
        <nav className='space-x-4'>
          <a href="" className='font-medium'><span className='bg-blue-800 text-white p-1 rounded-lg'>{count}</span>Cart</a>
          {isLogIn == true ?
            <Dropdown >
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                MyAccount
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Example with disabled actions">
              <DropdownItem key="new">{userDetails().name}</DropdownItem>
              <DropdownItem  key="delete" className="text-danger" color="danger" onPress={handlelogout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
            :
            <Link to="/register" className='font-medium text-md hover:text-red-600'>Signup</Link>}
        </nav>
      </div>
    </div>
  )
}
