import React from 'react'

export default function ListingForm({ formListing, handleChange, handleSubmit }) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={formListing.description} name="description" placeholder="description"/>
            <input type="text" onChange={handleChange} value={formListing.image} name="image" placeholder='image'/>
            <input type="text" onChange={handleChange} value={formListing.location} name="location" placeholder='location'/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
