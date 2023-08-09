export interface Planet {
  id: number
  name: string
  description: string
  basicDetails: {
    volume: string
    mass: string
  }
  wikiLink: string
  imgSrc: {
    img: string
    imgDescription: string
  }
}
