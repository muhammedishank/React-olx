import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { firebaseContext, AuthContext } from '../../store/firebaseContext';

const Create = () => {
  const { firebase } = useContext(firebaseContext)
  const { user } = useContext(AuthContext)
  const date = new Date()
  const history = useHistory()

  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdat: date.toDateString()
        })
        history.push('/')
      })
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)}}
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" 
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }} name="Price" />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
