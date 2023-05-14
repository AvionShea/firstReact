import React from 'react'
import './references.css'
import avatar from '../../assets/avatar3.png'

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/navigation/navigation.min.css";

// import "swiper/swiper.scss"

// import required modules
import { Autoplay, Navigation} from "swiper";


const data = [
  
  {avatar: avatar,
  name: "Michelle C.",
  review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi repellendus, voluptates eos modi animi nulla. Magnam molestiae necessitatibus eos officia quo. Laboriosam nemo omnis iusto ullam, optio doloremque eos officia natus soluta voluptatem odit atque eveniet cupiditate!",
  },
  
  {avatar: avatar,
  name: "Mone W.",
  review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempora, ratione repellendus voluptatibus fugiat facere? Hic reprehenderit blanditiis harum aliquam molestiae optio quaerat ab maxime similique? Sint laudantium officia repudiandae, necessitatibus sed aut nulla nostrum adipisci officiis recusandae facere quas nobis numquam ullam et consequuntur nam.",
  },
  
  {avatar: avatar,
  name: "Maria S.",
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ut odio aliquid nesciunt quam dignissimos, libero, quos deleniti quia sunt nihil omnis consectetur.",
  },
  {avatar: avatar,
    name: "Josh C.",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur esse fugit quam accusantium dicta iste modi exercitationem, magnam pariatur, architecto vero est vel sapiente eligendi! Maiores ipsum expedita porro corrupti reiciendis illo quod deserunt dolorem quae cumque maxime inventore nostrum praesentium dicta rerum asperiores odio laborum voluptate, repellendus et. Asperiores eius minus nobis itaque, accusantium ducimus voluptatum quibusdam est dolorem facilis accusamus repellat aliquam sed minima possimus odit ea. Eius totam sed quisquam laborum quis libero reprehenderit debitis est ex. Laborum illum provident perspiciatis quo explicabo laudantium, praesentium debitis officiis aliquam porro sint sunt veniam, blanditiis repudiandae. In nihil omnis laborum accusamus, id animi. Temporibus numquam fugit perspiciatis, exercitationem molestias aperiam praesentium obcaecati consectetur libero optio provident reprehenderit error ipsa cupiditate eos! Vitae repellat sapiente molestias quia doloremque ratione sit ex.",
    },
    
  {avatar: avatar,
      name: "Gerald D.",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem temporibus repudiandae, officia officiis sapiente aut porro mollitia modi vel quibusdam amet, in vero molestiae magni ex? Eos expedita at beatae, labore corporis quod blanditiis ab tempore non, magni pariatur in optio similique. Voluptates, consequatur ipsa nisi facere expedita saepe nulla veritatis sunt reiciendis et quasi culpa debitis, non dolor quo modi voluptatem accusamus eum. Vel saepe ducimus labore?",
  },
  
  ]


const References = () => {
  return (
    <section id= "references">
      <h5>Former and Current Colleagues</h5>
      <h2>References</h2>

      <Swiper className="container references_container"
      modules={[Autoplay, Navigation]}
          spaceBetween={40}
          centeredSlides={true}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          >

        {
          data.map(({avatar, name, review}, index) => {
            return (
          <SwiperSlide key={index} className="references">
            <div className="client_avatar">
              <img src={avatar} alt="generic avatar"/>
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default References