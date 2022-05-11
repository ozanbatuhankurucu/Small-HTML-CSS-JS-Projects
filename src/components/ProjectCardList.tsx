import React from 'react'

function ProjectCardList({ children }: { children: React.ReactNode }) {
  return <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>{children}</div>
}
export default ProjectCardList
