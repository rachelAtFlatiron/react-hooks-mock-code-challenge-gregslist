import React from 'react'

function ListingForm() {
  return (
    <form>
        <input type="text" name="location" placeholder='location' />
        <input type="text" name="description" placeholder='description' />
        <input type='text' name='image' placeholder='image' />
        <input type="submit" value="submit" />
    </form>
  )
}

export default ListingForm