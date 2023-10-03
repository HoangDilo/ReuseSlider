import { useRef, useState } from 'react'
import './App.css'
import Title from './components/title'
import Slide from './components/slide'
import Button from './components/button'

import img_1 from './assets/picture_1.svg'
import img_2 from './assets/picture_2.svg'
import img_3 from './assets/picture_3.svg'
import dot from './assets/dot.svg'

function App() {
  const [pointer, setPointer] = useState(5);
  const [time, setTime] = useState(1);
  const [st, setSt] = useState(false);

  // let refs = useRef([]);

  const list_cards = [
    {
      id: 1,
      img_src: img_1,
      category: '1',
      date: '1 Mar 2023',
      title: '1 TOP useful office software for programmers.'
    },
    {
      id: 2,
      img_src: img_2,
      category: '2',
      date: '1 Mar 2023',
      title: '2 TOP useful office software for programmers.'
    },
    {
      id: 3,
      img_src: img_3,
      category: '3',
      date: '1 Mar 2023',
      title: '3 TOP useful office software for programmers.'
    },
    {
      id: 4,
      img_src: img_1,
      category: '4',
      date: '1 Mar 2023',
      title: '4 TOP useful office software for programmers.'
    },
    {
      id: 5,
      img_src: img_2,
      category: '5',
      date: '1 Mar 2023',
      title: '5 TOP useful office software for programmers.'
    },
    {
      id: 6,
      img_src: img_3,
      category: '6',
      date: '1 Mar 2023',
      title: '6 TOP useful office software for programmers.'
    },
    {
      id: 7,
      img_src: img_1,
      category: '7',
      date: '1 Mar 2023',
      title: '7 TOP useful office software for programmers.'
    },
    {
      id: 8,
      img_src: img_2,
      category: '8',
      date: '1 Mar 2023',
      title: '8 TOP useful office software for programmers.'
    },
    {
      id: 9,
      img_src: img_3,
      category: '9',
      date: '1 Mar 2023',
      title: '9 TOP useful office software for programmers.'
    },
    
    //Try changing the length of the array to see the result

    // {
    //   id: 10,
    //   img_src: img_1,
    //   category: '10',
    //   date: '1 Mar 2023',
    //   title: '10 TOP useful office software for programmers.'
    // },
    // {
    //   id: 11,
    //   img_src: img_2,
    //   category: '11',
    //   date: '1 Mar 2023',
    //   title: '11 TOP useful office software for programmers.'
    // },
    // {
    //   id: 12,
    //   img_src: img_3,
    //   category: '12',
    //   date: '1 Mar 2023',
    //   title: '12 TOP useful office software for programmers.'
    // }
  ]

  const width = 0;

  const resetPointer = () => {
    if(pointer === (list_cards.length + 8 - 3)) {
      setTimeout(() => {
        setTime(1);
      }, 10);
      setTime(0);
      setPointer(5)
    } else if(pointer === 2) {
      setTimeout(() => {
        setTime(1);
      }, 10);
      setTime(0);
      setPointer(list_cards.length + 8 - 3 - 3)
    }
    
    // console.log('end transition');
    // if (pointer === 9) {
    //   //console.log('We need to restart');
    //   setTimeout(() => {
    //     //console.log('rerendering...');
    //     setTime(1);
    //     setPointer(6);
    //   }, 10);
    //   setTime(0);
    //   setPointer(5);    
    // } else if (pointer === 1) {
    //   //console.log('we need to restart');
    //   setTimeout(() => {
    //     //console.log('rerendering...');
    //     setTime(1);
    //     setPointer(4);
    //   }, 10);
    //   setTime(0);
    //   setPointer(5); 
    // }
  }

  const handleClickLeft = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 1000);
    setPointer((pointer) => pointer - 1);
    console.log(pointer);
  }

  const handleClickRight = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 1000);
    setPointer((pointer) => pointer + 1);
    console.log(pointer);
    // console.log(1);
    // setTimeout(() => {
    //   console.log(2);
    // }, 1000);
    // console.log(3);
  }
  return (
    <>
      <div className='background'>
      </div>
      <div className='container'>
        <Title />

        <Slide position={-516 * (pointer - 1)} cb={()=>resetPointer()} time={time}>
          {/* <CardItem item={list_cards_x3[0]} w={}/>
          {list_cards_x3.slice(1).map(item => <CardItem item={item} />)} */}
          {
            list_cards.map((element, index) =>
              <div className="cards" key={index}>
                <img src={element.img_src} alt="" className="imgs" />
                <div className="content">
                  <div className="small-content">
                    {element.category}
                    <img src={dot} alt="" className="dots" />
                    {element.date}
                  </div>
                  <div className="big-content">
                    {element.title}
                  </div>
                </div>
              </div>
            )
          }
        </Slide>

        <Button callBackLeft={handleClickLeft} callBackRight={handleClickRight} buttonSt={st} />
      </div>
    </>
  )
}

export default App
