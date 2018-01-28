async function main() {
  const sport = await answer('What sport are you playing?', ['Football', 'Volleyball'])
  if (sport === 'Football') {
    const footballOption = await answer('What kind of injuries do you want to stop?', ['Teeth Being Knocked Out', 'Bruising from Collisions', 'Jewels Getting Smashed'])
    if(footballOption==='Teeth Being Knocked Out')
    {
      const mouthguardType= await answer( 'You should get a mouthgaurd. Pick an option',['Cheap','Better Fit','Expensive'])
      if(mouthguardType==='Cheap')
        suggest('Get a stock mouthguard','url for image', 'url to go to when click image')
      else if(mouthguardType==='Better Fit')
        suggest('Get a boil and bite mouthguard','url','urlforclick')
      else
        suggest('Get a custom fit mouthguard','url','urlforclick')
    }
    else if(footballOption==='Bruising from Collisions')
    {
      const position=await answer('What position do you play?', ['Quarterback','Running Back','Fullback/Linebacker','Lineman']) 
      if(position==='Quarterback') {}
    }
      
    // ... continue
  }
  else if (answer === 'yellow') {
    const typeOfYellow = await answer('What kind of yellow', ['gold', 'pee'])
    // ... continue
  }
}
main()
