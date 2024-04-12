import React, { useEffect, useRef, useState } from 'react';
import styles from './../../Styles/DragmeNotes.module.css';


function DragmeNotes() {

  //
  const [show, setShow] = useState(false)
  let [notesInputs, setNotesInputs] = useState([])
  //
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    }

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    }

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [])

  function changeVisibility() {
    setShow(!show)
    console.log(show)
  }

  var changeStyle;

  if (show) {
    changeStyle = {
      display: "block"
    }
  } else {
    changeStyle = {
      display: "none"
    }
  }

  function submitInputs(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target.value)
    setNotesInputs([...notesInputs, e.target[0].value])
    
  }

  function deleteNotes(i){
    console.log("ee", i)
    notesInputs.splice(i, 1)
    console.log(notesInputs)
    setNotesInputs([...notesInputs])

  }

  console.log(notesInputs)
  return (
    <main>
      <div ref={containerRef} className={styles.container}>
        <div ref={boxRef} className={styles.box}>
          <div className={styles.topdiv}><button onClick={changeVisibility}>+</button></div>
          <form onSubmit={submitInputs} >

            <input style={changeStyle} type="text" placeholder='hello'
            />
          </form>
          {
            notesInputs.map((e, i)=>(
              <div className={styles.displayNotes} key={i}>
                <p>{e}</p>
                <button onClick={()=>{deleteNotes(i)}}>-</button>
              </div>
            ))
          }

        </div>
      </div>
    </main>
  );
}

export default DragmeNotes;
