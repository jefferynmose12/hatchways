import React, { useState } from 'react'
import Tag from './Tag';

function Student ({pic, firstName, lastName, email, company, skill, grades, listTags}) {

    const [more, setMore] = useState(true);
    const [tag, setTag] = useState("");

    const [list, setList] = useState(listTags)

    const totalGrade = grades.reduce((total, nums) => {
        return total + Math.round(nums)
    }, 0)

    const handleSubmit = () => {
        list.push(tag)
        setTag("");
    }

    function deleteTag(id) {
        setList(list.filter((tag, index) => index != id));
    };

  return (
    <div className='py-10 md:py-6 px-4 md:px-6 flex items-start border-b border-gray-300'>
        <div className='flex flex-col md:flex-row gap-10'>
            <div>
                <img src={pic} alt={firstName} className='items-start border border-gray-300 rounded-full w-32 md:w-28' />
            </div>
            <div>
                <h1 className='text-2xl md:text-3xl uppercase font-bold'>{firstName} {lastName}</h1>
                <div className='mt-2 md:ml-5 text-gray-500 font-light'>
                    <p className='py-1'>Email: {email}</p>
                    <p className='py-1'>Company: {company}</p>
                    <p className='py-1'>Skill: {skill}</p>
                    <p className='py-1'>Average: {totalGrade/grades.length}%</p>
                    
                    {!more &&
                        <div className='mt-5 mb-2'>
                        {
                            grades.map((grade, index) => (
                                <div key={index} id={index} className='flex gap-5 md:gap-10'>
                                    <p>{"Test " + (index + 1)  +  ": "}</p>
                                    <p>{grade}%</p>
                                </div>
                            ))
                        }
                        </div>
                    }
                    
                    
                    <div className='mt-2'>
                        {/* for each tags */}
                        {
                            list &&
                            <div className='flex gap-3 items-center'>
                                {list.map((tag, index) => (
                                    <Tag 
                                        key={index}
                                        id={index}
                                        tag={tag}
                                        deleteTag={deleteTag}
                                    />
                                ))}
                            </div>
                        }

                        {/* input for tags */}
                        <div className='mt-5'>
                            <input 
                                type='text'
                                placeholder='Add a tag'
                                className='pb-2 border-b-2 border-300 outline-none hover:border-gray-700 hover:border-b-2'
                                value = {tag} 
                                onChange = {(e) => setTag(e.target.value)} 
                                onKeyPress={(e) => (e.key === 'Enter' ? handleSubmit() : "")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className='ml-auto text-5xl font-bold text-gray-400 hover:text-red-300' onClick={()=> setMore(!more)}>
            {more ? "+" : "-"}
        </button>
    </div>
  )
}

export default Student


