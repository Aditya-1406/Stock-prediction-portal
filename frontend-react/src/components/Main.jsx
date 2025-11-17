import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
  return (
    <>
        <div className="container ">
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magnam adipisci ad asperiores qui, odio, deserunt possimus perspiciatis accusamus aliquam nihil architecto doloremque vitae a perferendis. Alias inventore odit earum.</p>
                <Button text='Login Now' class= 'btn-info'/>
            </div>
        </div>
    </>
  )}

export default Main