import React from 'react'

import { TiMediaPlayReverse, TiMediaPlay, TiDelete } from 'react-icons/ti'
const Stage = ({key , tasks , title, moveRight, moveleft, deleteTask, action}) => {
  return (
   <>
    <article key={key} className="flex flex-col items-center justify-between border-x border-black">
      <div className="group relative">
        <h3 className='text-center'>
          Stage {title}
        </h3>

        <ul className='pt-5'>
          {
          
            tasks.map(task => 
            <li key={task.id} className='py-2'>
                <div className='flex justify-between items-center'>
                   
             
                {
                    action && task.stage !== 1 && 
                    <TiMediaPlayReverse onClick={() => moveleft(task)} className='text-2xl'/>
                }
                <h3 className='px-3'>{task.task}</h3>
                {
                    action &&task.stage !== 3 &&  
                    <TiMediaPlay onClick={() => moveRight(task)} className='text-2xl'/>
                    
                 
                }
                {
                    !action && <TiDelete onClick={() => deleteTask(task.id)} className='text-2xl'/>
                   
                }

                </div>
                
                 </li>
            )
          }
        </ul>
     
      </div>
    </article>
    </>

   
  )
}

export default Stage