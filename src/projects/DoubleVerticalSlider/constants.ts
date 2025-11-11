export interface SlideData {
  id: number
  title: string
  description: string
  imageUrl: string
  backgroundColor: string
}

export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: 'Nature Flower',
    description: 'Beautiful flowers blooming in nature',
    imageUrl: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
    backgroundColor: '#FD3555'
  },
  {
    id: 2,
    title: 'Bluuue Sky',
    description: 'Endless blue skies and white clouds',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1673473619599-eb254349d809?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
    backgroundColor: '#2A86BA'
  },
  {
    id: 3,
    title: 'Lonely Castle',
    description: 'Ancient castle standing tall in the mountains',
    imageUrl:
      'https://images.unsplash.com/photo-1650909001452-15a12c1dc745?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZWx5JTIwY2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900',
    backgroundColor: '#252E33'
  },
  {
    id: 4,
    title: 'Flying Eagle',
    description: 'Majestic eagle soaring through the sky',
    imageUrl:
      'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmx5aW5nJTIwZWFnbGV8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=900',
    backgroundColor: '#FFB866'
  }
]
