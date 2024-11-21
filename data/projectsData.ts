interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [

  {
    title: 'Rinha SO: Windows vs Linux',
    description: `Descubra como Windows e Linux se comparam em diferentes contextos, como programação,
    design, produtividade e mais. Nesta série, exploramos os prós e contras de cada sistema para ajudá-lo
    a decidir qual é o melhor para suas necessidades.`,
    imgSrc: '/static/images/publicacoes/projectos/rinha-so-linux-vs-windows.jpg',
    href: '/blog/rinhas/rinha-so-linux-vs-windos/rinha-so-linux-vs-windows', 
  }

]

export default projectsData
