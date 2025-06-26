import React from 'react'

const UpdateCoffee = () => {
  


  const handleUpdateCoffee = (e) => {
    e.preventDefault()
    const form = e.target
    const fromData = new FormData(form)
    const updateedCoffee = Object.fromEntries(fromData.entries())
    console.log(updateedCoffee)

   

  }
  return (
    <div>


      <div className='p-24'>
        <div className='p-12 text-center space-y-12'>
          <h1 className='text-6xl '>Update Coffee</h1>
          <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input type="text" required name='name' defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Quantity</label>
              <input type="text" required name='quantity' defaultValue={''} className="input w-full" placeholder="Enter coffee Quantity" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input type="text" required name='supplier' defaultValue={''} className="input w-full" placeholder="Enter coffee supplier" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Taste</label>
              <input type="text" required name='taste' defaultValue={''} className="input w-full" placeholder="Enter coffee taste" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">price</label>
              <input type="text" required name='price' defaultValue={''} className="input w-full" placeholder="Enter coffee price" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Details</label>
              <input type="text" required name='details' defaultValue={''} className="input w-full" placeholder="Enter coffee details" />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
            <label className="label">Photo url</label>
            <input type="text" required name='photo' defaultValue={''} className="input w-full" placeholder="Enter photo url" />
          </fieldset>

          <input type="submit" value="update Coffee" className='btn w-full' />
        </form>
      </div>
    </div>
  )
}

export default UpdateCoffee