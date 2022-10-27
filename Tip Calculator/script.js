 
//🌟 APP: Tip Calculator

const billinput = document.getElementById('billTotalInput')
const tipinput = document.getElementById('tipInput')

const NoOfPeoplediv = document.getElementById('numberOfPeople')
const perpeople = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(NoOfPeoplediv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billinput.value)


  // get the tip from user & convert it into a percentage (divide by 100)
  const tipper = Number(tipinput.value) / 100

  // get the total tip amount
  const tip = bill * tipper

  // calculate the total (tip amount + bill)
  const total = tip + bill

  // calculate the per person total (total divided by number of people)
  const pertotal = total / numberOfPeople

  // update the perPersonTotal on DOM & show it to user

  perpeople.innerText = `$${pertotal.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people

  numberOfPeople += 1

  // update the DOM with the new number of people

  NoOfPeoplediv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill() 

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople == 1){
    return 
  }


  // decrement the amount of people
  numberOfPeople -= 1


  // update the DOM with the new number of people
   NoOfPeoplediv.innerText = numberOfPeople


  // calculate the bill based on the new number of people
  calculateBill()

}