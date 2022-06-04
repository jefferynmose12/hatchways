import React from 'react'

const Tag = ( { tag, id, deleteTag}) => {
  return (
    <div className='flex items-center gap-3 bg-gray-300 rounded px-2 py-1'>
        <p>{tag}</p>
        <button onClick={() => {deleteTag(id)}} className='text-lg text-blue-500 font-semibold'>
            x
        </button>
    </div>
  )
}

export default Tag