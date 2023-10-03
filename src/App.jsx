import { useState } from 'react'
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

  const list_cards = [
    {
      id: 1,
      img_src: img_1,
      category: 'Ngành',
      date: '1 Mar 2023',
      title: 'TOP useful office software for programmers.'
    },
    {
      id: 2,
      img_src: img_2,
      category: 'Ngành',
      date: '1 Mar 2023',
      title: 'TOP useful office software for programmers.'
    },
    {
      id: 3,
      img_src: img_3,
      category: 'Ngành',
      date: '1 Mar 2023',
      title: 'TOP useful office software for programmers.'
    }
  ]

  const list_cards_x3 = [list_cards[2], ...list_cards, ...list_cards, ...list_cards];

  const resetPointer = () => {
    //console.log('end transition');
    if (pointer === 9) {
      //console.log('We need to restart');
      setTimeout(() => {
        //console.log('rerendering...');
        setTime(1);
        setPointer(6);
      }, 0);
      setTime(0);
      setPointer(5);
    } else if (pointer === 1) {
      //console.log('we need to restart');
      setTimeout(() => {
        //console.log('rerendering...');
        setTime(1);
        setPointer(4);
      }, 0);
      setTime(0);
      setPointer(5);
    }
  }

  const handleClickLeft = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 0);
    setPointer((pointer) => pointer - 1)
  }

  const handleClickRight = () => {
    setSt(true);
    setTimeout(() => {
      setSt(false);
    }, 0);
    setPointer((pointer) => pointer + 1)

    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 0);
    console.log(3);
  }

  return (
    <>
      <div className='background'>
      </div>
      <div className='container'>
        <Title />

        <Slide position={-516 * (pointer - 1)} cb={resetPointer()} time={time}>
          {
            list_cards_x3.map(element =>
              <div className="cards">
                {/* <img src={element.img_src} alt="" className="imgs" />
                <div className="content">
                  <div className="small-content">
                    {element.category}
                    <img src={dot} alt="" className="dots" />
                    {element.date}
                  </div>
                  <div className="big-content">
                    {element.title}
                  </div>
                </div> */}

                {element.title}
                
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
