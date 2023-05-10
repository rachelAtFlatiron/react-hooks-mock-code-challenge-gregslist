import { useState } from 'react'

/*
1. formState
2. connect values with formState
3. onChange, update state
*/

function ListingForm({ addListing }) {
  const initialForm = {
    location: '',
    description: '',
    image: ''
  }

  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      //reset form
      setForm(initialForm)
      //send new data back up to App.js to include in listings
      addListing(data)
    })
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => handleChange(e)} value={form.location} type="text" name="location" placeholder='location' />
        <input onChange={e => handleChange(e)} value={form.description} type="text" name="description" placeholder='description' />
        <input onChange={e => handleChange(e)} value={form.image} type='text' name='image' placeholder='image' />
        <input type="submit" value="submit" />
    </form>
  )
}

export default ListingForm