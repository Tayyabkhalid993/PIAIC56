/*
Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to 
print the name of each pizza.

• Modify your for loop to print a sentence using the name of the 
pizza instead of printing just the name of the pizza. For each pizza 
you should have one line of output containing a simple statement 
like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that 
states how much you like pizza. The output should consist of three or 
more lines about the kinds of pizza you like and then an additional 
sentence, such as I really love pizza!
*/

const pizza : string[] = ["Chicken Fajita","Chicken Tikka", "Bonfire Pizza"];

for (let i=0; i<pizza.length; i++ ){
   if(pizza[i]=="Chicken Fajita"){
      console.log("I used to eat Chiken Fajita with friends.");
   }
   else if(pizza[i]=="Chicken Tikka"){
      console.log("I love to eat Chicken Tikka");
   }
   else {
      console.log("I can do anything for Bonfire ;Pizza.")
   }
}

console.log("Pizza is a popular and beloved food enjoyed by many people around the world. It is known for its delicious combination of flavors, versatility in toppings and the joy it brings to those who indulge in it. I also love it");


