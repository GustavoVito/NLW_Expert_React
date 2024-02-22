export function NoteCard(){
    return(
    <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-amber-500 '>
        <span className='text-sm font-medium text-slate-300'>
          há 2 dias
        </span>
        <p className="text-sm leading-6 text-slate-400"> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laborum vitae saepe libero aspernatur minus deserunt ab, dolores nam recusandae. Iure quod ad repellendus facilis nostrum illum, ipsum veritatis animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nemo explicabo, sit nobis ad eos animi debitis assumenda dolorum ipsum. Velit minima fuga sapiente amet delectus quidem soluta. Dolorem, temporibus?
        </p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
      </button>
    )
}