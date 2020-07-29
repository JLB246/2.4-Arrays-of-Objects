var companies = [ 
  { name:  'Honda', symbol: 'H', sharePrice: 22, },
  { name:  'Toyota', symbol: 'T', sharePrice:23,},
  { name:  'BMW', symbol: 'B', sharePrice:24, },
  { name:  'Mercedes', symbol: 'M', sharePrice:25 },
  { name:  'Audi', symbol: 'A', sharePrice:26 },
];

               
   

console.log('The price of '+ companies[0].name +' is '+ companies[0].sharePrice );
console.log('The price of '+ companies[4]['name']+ ' is '+ companies[4]['sharePrice'])

for (var i=0; i<5 ; i++){
  var stockTicker = companies[i];
  console.log(companies[i].name +' shares are priced at '+ companies[i].sharePrice)
}
