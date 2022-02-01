import React, {useEffect, useState} from 'react';
import '../App.css'
import { Container } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import fire from '../fire';

export const Meme=() => {
  const[memes, setMemes]=useState([]);
  const[memeIndex, setMemeIndex]=useState(0);
  const [captions, setCaptions]=useState([]);
  const navigate=useNavigate();


const shuffleMemes = (array)=> {
  for(let i=array.length-1;i>0;i--)
  {
    const j= Math.floor(Math.random()*i);
    const t=array[i];
    array[i]=array[j];
    array[j]=t;
  }
};

const updateCaptions= (e, index)=> {
  const text= e.target.value || '';
  setCaptions(
    captions.map((c,index_i) => {
      if(index===index_i) {
        return text;
      } else {
        return c;
      }
    })

  )

};
const handleLogout=() => {
  console.log('clicked');
  navigate('/');
  fire.auth().signOut();
}
const genMeme=()=> {
  const cMeme=memes[memeIndex];
  const formData= new FormData();

  formData.append('username', 'kajal_hiya');
  formData.append('password', 'kajal_hiya');
  formData.append('template_id', cMeme.id);
  captions.forEach((c, index)=> formData.append(`boxes[${index}][text]`, c) );
fetch('https://api.imgflip.com/caption_image', {
  method:'POST',
  body: formData
}).then(res=> {
  res.json().then(res => {
    navigate(`/generated?url=${res.data.url}`);
    console.log(res);
  })
});

};
  
  useEffect( ()=> {
    fetch('https://api.imgflip.com/get_memes').then(res => {
    res.json().then(res => {
    //  console.log(res);
    const l_memes = res.data.memes;
    shuffleMemes(l_memes);
    setMemes(l_memes);
    });
    });
  }, []);


  useEffect(()=> {
    if(memes.length) {
     setCaptions(Array(memes[memeIndex].box_count).fill(''));
    }

},[memeIndex, memes]);


    
  return (
  
    memes.length ? <div>
      <Container className='pt-3 d-flex align-items-center justify-content-center'>
     {
       captions.map((c, index) =>(
         <input className='captions' onChange={(e)=> updateCaptions(e, index)} key={index} placeholder='Write a caption here' />
       ))
     }
     </Container>
      <img alt='meme' className='Img' src={memes[memeIndex].url}  /><br></br>
      <Container className= 'd-flex align-items-center justify-content-center'>
      <button onClick={()=> setMemeIndex(memeIndex +1)} className='button '>Next Templete</button> <div className='padding'> </div>
      <button onClick={ genMeme} className='button2 '>Generate Meme</button>

      </Container>
      <div>
      <Container className= 'pt-4 d-flex align-items-center justify-content-center'>
   <button className='button3 'onClick={handleLogout}> Logout</button>
</Container>
      </div>
      
    </div> : <></>

  
  );
}
