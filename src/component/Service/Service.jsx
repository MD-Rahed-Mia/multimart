import './../../Style/Service.css';
import Truck from './../../assets/images/truck.png';
import React from 'react'
import BackGurrent from './../../assets/images/back_gaurrent.png';
import Fastest from './../../assets/images/fastest.png';
import Payment from './../../assets/images/payment.png';

import { motion } from 'framer-motion';



const serviceData = [
  {
    title: 'Free Shipment',
    icon: Truck,
    sub_title: 'Lorem ipsum dolor sit elit. Nihil, vel.',
    bg: '#e8e8fa'
  },
  {
    title: 'Fastest Delivery',
    icon: Fastest,
    sub_title: 'Lorem ipsum dolor sit elit. Nihil, vel.',
    bg: '#88c0d0'
  },
  {
    title: 'Secure Payment',
    icon: Payment,
    sub_title: 'Lorem ipsum dolor sit elit. Nihil, vel.',
    bg: '#fbd4f2'
  },
  {
    title: 'Back Gaurrented',
    icon: BackGurrent,
    sub_title: 'Lorem ipsum dolor sit elit. Nihil, vel.',
    bg: '#7fdaf4'
  },
]

function Service() {
  return (<>

    {
      serviceData.map((item, index) => {
        return <motion.div whileHover={{ scale: 1.1 }} className="service-item" key={index} style={{ background: item.bg }}>
          <img src={item.icon} alt="" />
          <div className="service-info">
            <h3>{item.title}</h3>
            <p>{item.sub_title}</p>
          </div>
        </motion.div>
      })
    }

  </>
  )
}

export default Service